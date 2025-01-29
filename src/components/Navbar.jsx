import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import gLogo from '../assets/g.png';
import astronaut from '../assets/astronaut.png';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="fixed top-0 w-full z-50 bg-transparent">
      <div className="container mx-auto px-10">
        <div className="flex items-center justify-between">

          {/* Menu gauche - visible en desktop uniquement */}
          <div className="hidden lg:flex space-x-8">
            <a href="#hero" className="text-white/80 hover:text-white transition-all px-2">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-all px-2">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-all px-2">Projects</a>
          </div>

          {/* Logo central */}
          <div className="flex justify-center items-center w-full">
            <img 
              src={gLogo} 
              alt="G Logo" 
              className="h-12 w-12 md:h-24 md:w-24 opacity-90 hover:opacity-100 transition-all mx-auto"
            />
          </div>

          {/* Icône mobile - ouvrir/fermer le menu */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              {isOpen ? (
                <FaTimes className="text-white" size={24} />
              ) : (
                <FaBars className="text-white" size={24} />
              )}
            </button>
          </div>

          {/* Menu droite - visible en desktop uniquement */}
          <div className="hidden lg:flex space-x-10 items-center">
            <a href="#devtools" className="text-white/80 hover:text-white transition-all px-2">DevTools</a>
            <a href="#cv" className="text-white/80 hover:text-white transition-all px-2">CV</a>
            <a href="#contact" className="text-white/80 hover:text-white transition-all flex items-center px-2 group">
              Contact
              <img 
                src={astronaut} 
                alt="Astronaut" 
                className="h-8 w-8 ml-2 transition-all group-hover:scale-125 group-hover:brightness-150" 
              />
            </a>
          </div>
        </div>

        {/* Menu mobile déroulant */}
        <div 
          className={`lg:hidden ${isOpen ? 'block' : 'hidden'} bg-black/80 absolute top-20 left-0 right-0 p-6 z-50`}
          id="menu"
        >
          <a href="#hero" className="block text-white/80 hover:text-white transition-all py-2 px-4">Home</a>
          <a href="#about" className="block text-white/80 hover:text-white transition-all py-2 px-4">About</a>
          <a href="#projects" className="block text-white/80 hover:text-white transition-all py-2 px-4">Projects</a>
          <a href="#devtools" className="block text-white/80 hover:text-white transition-all py-2 px-4">DevTools</a>
          <a href="#cv" className="block text-white/80 hover:text-white transition-all py-2 px-4">CV</a>
          <a href="#contact" className="block text-white/80 hover:text-white transition-all items-center py-2 px-4 flex group">
            Contact
            <img 
              src={astronaut} 
              alt="Astronaut" 
              className="h-5 w-5 ml-2 transition-all group-hover:scale-125 group-hover:brightness-200" 
            />
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;