import { motion, AnimatePresence } from "framer-motion";
import { FaHome, FaUser, FaProjectDiagram, FaTools, FaFile, FaEnvelope, FaTimes } from "react-icons/fa";
import { useNavbar } from "../context/navcon";
import astronaut from "../assets/astronaut.png";

const MobileMenu = () => {
  const { isOpen, closeMenu } = useNavbar();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          <motion.div
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeMenu}
          />

          <motion.div
            className="fixed top-0 right-0 w-[80%] sm:w-[60%] md:w-[40%] h-full 
                     bg-black/90 backdrop-blur-lg shadow-2xl p-6 
                     flex flex-col items-start space-y-8 z-50"
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 20, stiffness: 100 }}
          >
            <button 
              onClick={closeMenu} 
              className="text-white/80 hover:text-white text-3xl absolute top-6 right-6 
                       transition-all duration-300 hover:rotate-90"
            >
              <FaTimes />
            </button>

            <div className="w-full pt-16 space-y-6">
              <a href="#hero" 
                className="flex items-center space-x-4 text-white/80 hover:text-white 
                         transition-all duration-300 text-xl" 
                onClick={closeMenu}
              >
                <FaHome size={24} /> <span>Home</span>
              </a>
              <a href="#about" 
                className="flex items-center space-x-4 text-white/80 hover:text-white 
                         transition-all duration-300 text-xl" 
                onClick={closeMenu}
              >
                <FaUser size={24} /> <span>About</span>
              </a>
              <a href="#projects" 
                className="flex items-center space-x-4 text-white/80 hover:text-white 
                         transition-all duration-300 text-xl" 
                onClick={closeMenu}
              >
                <FaProjectDiagram size={24} /> <span>Projects</span>
              </a>
              <a href="#devtools" 
                className="flex items-center space-x-4 text-white/80 hover:text-white 
                         transition-all duration-300 text-xl" 
                onClick={closeMenu}
              >
                <FaTools size={24} /> <span>DevTools</span>
              </a>
              <a href="#cv" 
                className="flex items-center space-x-4 text-white/80 hover:text-white 
                         transition-all duration-300 text-xl" 
                onClick={closeMenu}
              >
                <FaFile size={24} /> <span>CV</span>
              </a>
              <a href="#contact" 
                className="flex items-center space-x-4 text-white/80 hover:text-white 
                         transition-all duration-300 text-xl" 
                onClick={closeMenu}
              >
                <FaEnvelope size={24} /> <span>Contact</span>
                <img 
                  src={astronaut} 
                  alt="Astronaut" 
                  className="h-6 w-6 transition-all duration-300 hover:scale-125" 
                />
              </a>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default MobileMenu;
