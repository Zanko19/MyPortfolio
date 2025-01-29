import { useState, useEffect } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import gLogo from '../assets/g.png';
import astronaut from '../assets/astronaut.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-20">
          {/* Menu gauche */}
          <div className="flex space-x-8">
            <a href="#home" className="text-white/80 hover:text-white transition-all">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-all">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-all">Projects</a>
          </div>

          {/* Logo central */}
          <img 
            src={gLogo} 
            alt="G Logo" 
            className="h-12 w-12 opacity-90 hover:opacity-100 transition-all"
          />

          {/* Menu droite */}
          <div className="flex space-x-8 items-center">
            <a href="#devtools" className="text-white/80 hover:text-white transition-all">DevTools</a>
            <a href="#cv" className="text-white/80 hover:text-white transition-all">CV</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-all flex items-center">
              Contact me
              <img src={astronaut} alt="Astronaut" className="h-5 w-5 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar; 