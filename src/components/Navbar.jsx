import { useState, useEffect } from 'react';
import { FaTimes } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import gLogo from '../assets/g.png';
import astronaut from '../assets/astronaut.png';
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaFile, FaEnvelope } from 'react-icons/fa';

// Composant pour le menu mobile
const MobileMenu = ({ isOpen, closeMenu }) => (
  <AnimatePresence>
    {isOpen && (
      <motion.div
        className="fixed top-0 left-0 w-[60px] bg-black/90 backdrop-blur-md shadow-2xl p-2 z-50 flex flex-col items-start space-y-6 neon-border"
        initial={{ x: '100%', opacity: 0 }}
        animate={{ x: 0, opacity: 1 }}
        exit={{ x: '100%', opacity: 0 }}
        transition={{ duration: 0.5, ease: 'easeOut' }}
      >
        <button className="absolute top-4 left-4 text-white text-2xl" onClick={closeMenu} aria-label="Close Menu">
          <FaTimes />
        </button>
        <a href="#hero" className="text-white/80 hover:text-white transition-all px-4" onClick={closeMenu} aria-label="Home">
          <FaHome size={24} />
        </a>
        <a href="#about" className="text-white/80 hover:text-white transition-all px-4" onClick={closeMenu} aria-label="About">
          <FaUser size={24} />
        </a>
        <a href="#projects" className="text-white/80 hover:text-white transition-all px-4" onClick={closeMenu} aria-label="Projects">
          <FaProjectDiagram size={24} />
        </a>
        <a href="#devtools" className="text-white/80 hover:text-white transition-all px-4" onClick={closeMenu} aria-label="DevTools">
          <FaTools size={24} />
        </a>
        <a href="#cv" className="text-white/80 hover:text-white transition-all px-4" onClick={closeMenu} aria-label="CV">
          <FaFile size={24} />
        </a>
        <a href="#contact" className="text-white/80 hover:text-white transition-all px-4 flex items-center group" onClick={closeMenu} aria-label="Contact">
          <FaEnvelope size={24} />
          <img
            src={astronaut}
            alt="Astronaut"
            className="h-5 w-5 ml-2 transition-all group-hover:scale-125 group-hover:brightness-200"
          />
        </a>
      </motion.div>
    )}
  </AnimatePresence>
);


const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolling, setScrolling] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  useEffect(() => {
    let ticking = false;
    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolling(window.scrollY > 50);
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`fixed top-2 w-full z-50 transition-all ${scrolling ? 'bg-black/10' : 'bg-transparent'}`}>
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between h-16">
          {/* Menu gauche (desktop) */}
          <div className={`hidden lg:flex space-x-8 transition-opacity duration-300 ${scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <a href="#hero" className="text-white/80 hover:text-white transition-all px-2">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-all px-2">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-all px-2">Projects</a>
          </div>

          {/* Logo central servant de bouton (mobile) */}
          <div className={`flex justify-center items-center w-full transition-all ${scrolling ? 'fixed right-0 top-0 logo-shift-right' : ''}`}>
            <button onClick={toggleMenu} aria-label="Toggle Menu">
              <img
                src={gLogo}
                alt="G Logo"
                className="h-12 w-12 md:h-24 md:w-24 opacity-90 hover:opacity-100 transition-all cursor-pointer mt-3"
              />
            </button>
          </div>

          {/* Menu droit (desktop) */}
          <div className={`hidden lg:flex space-x-4 transition-opacity duration-300 ${scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <a href="#cv" className="text-white/80 hover:text-white transition-all px-2">CV</a>
            <a href="#devtools" className="text-white/80 hover:text-white transition-all px-2">DevTools</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-all items-center px-2 flex group">
              Contact
              <img
                src={astronaut}
                alt="Astronaut"
                className="h-5 w-5 ml-2 transition-all group-hover:scale-125 group-hover:brightness-200"
              />
            </a>
          </div>
        </div>
      </div>

      {/* Menu mobile */}
      <MobileMenu isOpen={isOpen} closeMenu={closeMenu} />
    </nav>
  );
};

export default Navbar;
