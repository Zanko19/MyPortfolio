import { useState, useEffect } from "react";
import {
  FaBars,
  FaTimes,
  FaHome,
  FaUser,
  FaProjectDiagram,
  FaTools,
  FaFile,
  FaEnvelope,
} from "react-icons/fa";
import { motion } from "framer-motion";
import { useNavbar } from "../context/navcon";
import gLogo from "../assets/g.png";
import astronaut from "../assets/astronaut.png";

const Navbar = () => {
  const { isOpen, toggleMenu, closeMenu } = useNavbar();
  const [scrolling, setScrolling] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolling(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (e, targetId) => {
    e.preventDefault();
    const targetSection = document.querySelector(targetId);
    if (targetSection) {
      const offset = 50; // Ajustez cette valeur selon vos besoins
      const targetPosition = targetSection.getBoundingClientRect().top + window.pageYOffset - offset;
      window.scrollTo({
        top: targetPosition,
        behavior: "smooth"
      });
    }
  };

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all ${
        scrolling ? "bg-black/10 backdrop-blur-md" : "bg-transparent"
      }`}
    >
      <div className="container mx-auto flex items-center justify-between p-4">
        <a href="#hero" onClick={(e) => handleNavigation(e, "#hero")}>
          <img
            src={gLogo}
            alt="Logo"
            className="h-12 transition-all hover:scale-110"
          />
        </a>

        <div className="hidden md:flex space-x-6">
          <a
            href="#projects"
            onClick={(e) => handleNavigation(e, "#projects")}
            className="text-white/80 hover:text-white transition-all"
          >
            Projects
          </a>
          <a
            href="#devtools"
            onClick={(e) => handleNavigation(e, "#devtools")}
            className="text-white/80 hover:text-white transition-all"
          >
            DevTools
          </a>
          <a
            href="#about"
            onClick={(e) => handleNavigation(e, "#about")}
            className="text-white/80 hover:text-white transition-all"
          >
            About
          </a>
          <a
            href="#cv"
            onClick={(e) => handleNavigation(e, "#cv")}
            className="text-white/80 hover:text-white transition-all"
          >
            CV
          </a>
          <a
            href="#contact"
            onClick={(e) => handleNavigation(e, "#contact")}
            className="text-white/80 hover:text-white transition-all flex items-center"
          >
            Contact
            <img
              src={astronaut}
              alt="Astronaut"
              className="h-5 w-5 ml-2 transition-all hover:scale-125"
            />
          </a>
        </div>

        <button onClick={toggleMenu} className="md:hidden text-white text-2xl">
          {isOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
