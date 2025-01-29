import { useState, useEffect, useCallback } from 'react';
import boom from '../assets/boom.jpg';

const Layout = ({ children }) => {
  const [stars, setStars] = useState([]);

  const generateStars = useCallback(() => {
    return Array(200).fill().map(() => ({
      x: Math.random() * 2000 - 1000, // Position X centrée autour de 0
      y: Math.random() * 2000 - 1000, // Position Y centrée autour de 0
      z: Math.random() * 1500, // Profondeur
    }));
  }, []);

  useEffect(() => {
    setStars(generateStars());

    const handleResize = () => {
      setStars(generateStars());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [generateStars]);

  useEffect(() => {
    const moveStars = setInterval(() => {
      setStars(prevStars => 
        prevStars.map(star => {
          // Déplace l'étoile vers l'avant (diminue Z)
          let newZ = star.z - 10;
          
          // Si l'étoile est trop proche, la replacer au fond
          if (newZ < 0) {
            return {
              x: Math.random() * 2000 - 1000,
              y: Math.random() * 2000 - 1000,
              z: 1500,
            };
          }

          return {
            ...star,
            z: newZ,
          };
        })
      );
    }, 16); // ~60fps

    return () => clearInterval(moveStars);
  }, []);

  return (
    <div 
      className="min-h-screen relative bg-black overflow-hidden"
      style={{
        backgroundImage: `url(${boom})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'soft-light',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }}
    >
      {/* Étoiles en perspective */}
      <div className="fixed inset-0 pointer-events-none"
           style={{ perspective: '8000px' }}>
        {stars.map((star, index) => {
          // Calcul de la position à l'écran avec effet de perspective
          const scale = 1500 / (star.z);
          const x = (star.x * scale) + window.innerWidth / 2;
          const y = (star.y * scale) + window.innerHeight / 2;
          const size = Math.max(0, 3 * scale);
          const opacity = Math.min(1, scale * 0.5);

          return (
            <div
              key={index}
              className="absolute bg-white rounded-full"
              style={{
                left: `${x}px`,
                top: `${y}px`,
                width: `${size}px`,
                height: `${size}px`,
                opacity: opacity,
                boxShadow: `0 0 ${size * 2}px rgba(255, 255, 255, ${opacity})`,
              }}
            />
          );
        })}
      </div>
      
      {/* Contenu de l'application */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout; 