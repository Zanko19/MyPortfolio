import { useState, useEffect } from 'react';
import { FaBars } from 'react-icons/fa';
import gLogo from '../assets/g.png'; // Assure-toi que le chemin d'accès à l'image est correct
import astronaut from '../assets/astronaut.png'; // Assure-toi que le chemin d'accès à l'image est correct

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false); // Contrôle l'état d'ouverture du menu mobile
  const [scrolling, setScrolling] = useState(false); // Contrôle l'état du scroll

  // Fonction pour basculer l'état du menu mobile
  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Utilisation de useEffect pour écouter l'événement de scroll
  useEffect(() => {
    let ticking = false;

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          setScrolling(window.scrollY > 50); // Change l'état de scrolling si on a scrollé de plus de 50px
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
          {/* Menu gauche visible uniquement en desktop */}
          <div className={`hidden lg:flex space-x-8 transition-opacity duration-300 ${scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
            <a href="#hero" className="text-white/80 hover:text-white transition-all px-2">Home</a>
            <a href="#about" className="text-white/80 hover:text-white transition-all px-2">About</a>
            <a href="#projects" className="text-white/80 hover:text-white transition-all px-2">Projects</a>
          </div>

          {/* Logo central avec transformation au scrolffl */}
          <div className={`flex justify-center items-center w-full transition-all ${scrolling ? 'fixed right-0 top-0 logo-shift-right' : ''}`}>
  <img
    src={gLogo}
    alt="G Logo"
    className={`h-12 w-12 md:h-24 md:w-24 opacity-90 hover:opacity-100 transition-all cursor-pointer`}
    onClick={toggleMenu}
  />
</div>

          {/* Menu droit visible uniquement en desktop */}
          <div className={`hidden lg:flex space-x-8 transition-opacity duration-300 ${scrolling ? 'opacity-0 pointer-events-none' : 'opacity-100'}`}>
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

          {/* Icône mobile pour ouvrir/fermer le menu */}
          <div className="lg:hidden flex items-center">
            <button onClick={toggleMenu}>
              <FaBars className="text-white" size={24} />
            </button>
          </div>
        </div>

        {/* Overlay pour le menu mobile */}
        {isOpen && <div className="fixed inset-0 bg-black/50 z-40" onClick={toggleMenu}></div>}

        {/* Menu mobile déroulant avec largeur et hauteur adaptées */}
        <div
          className={`fixed top-0 left-0 w-full md:w-2/3 h-auto max-h-[90vh] bg-black/90 p-6 z-50 transform transition-transform duration-300 ${isOpen ? 'translate-x-0' : '-translate-x-full'}`}
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