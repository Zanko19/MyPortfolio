import { useState, useEffect, useCallback } from 'react';
import boom from '../assets/boom.jpg';

const Layout = ({ children }) => {
  const [stars, setStars] = useState([]);

  const generateStars = useCallback(() => {
    return Array(200).fill().map(() => ({
      x: Math.random() * 2000 - 1000,
      y: Math.random() * 2000 - 1000,
      z: Math.random() * 1500,
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

          let newZ = star.z - 10;
          

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
    }, 16);

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

      <div className="fixed inset-0 pointer-events-none"
           style={{ perspective: '8000px' }}>
        {stars.map((star, index) => {
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
      
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout; 