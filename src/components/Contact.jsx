import { useState } from 'react';
import earth from '../assets/earth.png';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Ajoutez ici la logique d'envoi du formulaire
    console.log(formData);
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section id="contact" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-32">
        <h2 className="text-center text-6xl font-mono text-white mb-16">
          Contact me
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-container rounded-3xl p-8 border border-white/10">
            <form className="space-y-6">
              <div>
                <label className="text-white font-mono mb-2 block">Name</label>
                <input 
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-lg
                    px-4 py-3 text-white font-mono focus:border-white/30
                    focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-white font-mono mb-2 block">Email</label>
                <input 
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full bg-black/20 border border-white/10 rounded-lg
                    px-4 py-3 text-white font-mono focus:border-white/30
                    focus:outline-none transition-all duration-300"
                />
              </div>

              <div>
                <label className="text-white font-mono mb-2 block">Message</label>
                <textarea 
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="5"
                  className="w-full bg-black/20 border border-white/10 rounded-lg
                    px-4 py-3 text-white font-mono focus:border-white/30
                    focus:outline-none transition-all duration-300"
                ></textarea>
              </div>

              <button 
                type="submit"
                className="w-full px-8 py-3 rounded-full border-2 border-white/30
                  hover:border-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
                  backdrop-blur-sm text-white transition-all duration-300"
              >
                Send Message
              </button>
            </form>
          </div>

          {/* Liens sociaux */}
           {/* Icônes de réseaux sociaux */}
        <div className="mt-4 flex justify-center space-x-6">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <FaGithub className="text-white/60 hover:text-white transition-colors" size={24} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <FaLinkedin className="text-white/60 hover:text-white transition-colors" size={24} />
          </a>
          <a href="mailto:example@example.com">
            <FaEnvelope className="text-white/60 hover:text-white transition-colors" size={24} />
          </a>
        </div>
        </div>
      </div>
    </section>
  );
};

export default Contact; 