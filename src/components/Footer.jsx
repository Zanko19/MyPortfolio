import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="mb-4 md:mb-0">
            <p className="text-sm">© 2024 Votre Nom. Tous droits réservés.</p>
          </div>
          <div className="flex space-x-6">
            <a 
              href="https://github.com/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaGithub size={24} />
            </a>
            <a 
              href="https://linkedin.com/in/votre-username"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaLinkedin size={24} />
            </a>
            <a 
              href="mailto:votre@email.com"
              className="hover:text-blue-400 transition duration-300"
            >
              <FaEnvelope size={24} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer; 