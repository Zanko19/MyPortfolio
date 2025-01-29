import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";
import earth from '../assets/earth.png';

const Footer = () => {
  return (
    <footer className="relative w-full">
      {/* Contenu du footer */}
      <div className="container mx-auto px-4 py-8 relative z-10">
        <div className="text-center text-white/60 font-mono">
          © 2025 - Designed & Developed with 
          <FaHeart className="inline-block text-red-500 ml-1" />
        </div>
        
       
      </div>

      {/* Image de la Terre avec le même style que dans Projects */}
      <div className="absolute left-0 right-0 bottom-[-20px]">
        <img 
          src={earth} 
          alt="Earth" 
          className="w-full h-24"
          style={{
            maskImage: 'linear-gradient(to top, rgba(0,0,0,1) 90%, transparent 100%)',
            WebkitMaskImage: 'linear-gradient(to top, rgba(0,0,0,1) 50%, transparent 100%)'
          }}
        />
      </div>
    </footer>
  );
};

export default Footer;
