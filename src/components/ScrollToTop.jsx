import { useState, useEffect } from 'react';
import rocket from '../assets/rocket.png';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [isLaunching, setIsLaunching] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.pageYOffset > 300) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    setIsLaunching(true);
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
    
    // Désactive l'effet de lancement après l'animation
    setTimeout(() => setIsLaunching(false), 1000);
  };

  return (
    <button
      onClick={scrollToTop}
      className={`fixed bottom-8 right-8 z-50 transition-all duration-300
        ${isVisible ? 'translate-y-0 opacity-100' : 'translate-y-20 opacity-0'}
        hover:-translate-y-2 group`}
    >
      <img 
        src={rocket} 
        alt="Scroll to top" 
        className={`w-16 h-16 transition-transform duration-300
          ${isLaunching ? 'scale-110' : ''}`}
      />
      
      {/* Flammes principales */}
      <div className={`
        absolute bottom-0 left-1/2 -translate-x-1/4
        w-6 h-8 opacity-80
        ${isLaunching ? 'animate-thrust' : 'animate-flame'}
      `}>
        <div className="w-full h-full bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent
          rounded-b-full blur-sm"></div>
      </div>

      {/* Petites flammes latérales (visibles uniquement pendant le lancement) */}
      {isLaunching && (
        <>
          <div className="absolute bottom-1 left-[40%] w-3 h-8
            bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent
            rounded-b-full blur-sm animate-sideThrust"></div>
          <div className="absolute bottom-1 right-[40%] w-3 h-8
            bg-gradient-to-t from-orange-500 via-yellow-400 to-transparent
            rounded-b-full blur-sm animate-sideThrust"></div>
        </>
      )}
    </button>
  );
};

export default ScrollToTop; 