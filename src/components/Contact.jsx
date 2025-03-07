import { useState } from 'react';
import emailjs from '@emailjs/browser';
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });

  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    // Validation de l'email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("Veuillez entrer une adresse email valide.");
      setSuccessMessage("");
      return;
    }

    // Envoi de l'email via EmailJS
    emailjs.send(
      'service_15hmfvf', // Service ID
      'template_1allu01', // Template ID
      {
        user_name: formData.name,
        user_email: formData.email,
        message: formData.message
      },
      { publicKey: 'K8zs9zeyeOsAmEtok' } // Public Key
    ).then(
      (response) => {
        console.log('Email envoyé avec succès', response.status, response.text);
        setSuccessMessage("Message envoyé avec succès !");
        setErrorMessage("");
        setFormData({ name: '', email: '', message: '' }); // Réinitialisation du formulaire
      },
      (error) => {
        console.error('Erreur lors de l’envoi de l’email', error);
        setErrorMessage("Erreur lors de l’envoi du message.");
        setSuccessMessage("");
      }
    );
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
        <h2 className="text-center text-6xl font-mono text-white mb-16 title-text">
          Contact me
        </h2>

        <div className="max-w-2xl mx-auto">
          <div className="glass-container rounded-3xl p-8 border border-white/10">
            <form onSubmit={handleSubmit} className="space-y-6">
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
                  required
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
                  required
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
                  required
                ></textarea>
              </div>

              {/* Affichage des messages de succès ou d'erreur */}
              {successMessage && (
                <p className="text-green-500 text-center">{successMessage}</p>
              )}
              {errorMessage && (
                <p className="text-red-500 text-center">{errorMessage}</p>
              )}

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
          <div className="mt-4 flex justify-center space-x-6">
            <a href="https://github.com/Zanko19" target="_blank" rel="noopener noreferrer">
              <FaGithub className="text-white/60 hover:text-white transition-colors" size={24} />
            </a>
            <a href="https://www.linkedin.com/in/guillaume-dedeurwaerder-322103177/" target="_blank" rel="noopener noreferrer">
              <FaLinkedin className="text-white/60 hover:text-white transition-colors" size={24} />
            </a>
            <a href="mailto:guillaumeddw@hotmail.com">
              <FaEnvelope className="text-white/60 hover:text-white transition-colors" size={24} />
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;