import avatar from "../assets/avatar.png";
import boom from "../assets/boom.jpg";

import me from "../assets/moi.jpg";

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-32 flex flex-col items-center">
        {/* Titre principal dans un cadre arrondi avec bordure */}
        <div className="w-full max-w-4xl mx-auto p-8 rounded-[40px] glass-container">
          <h1 className="text-center text-4xl sm:text-6xl font-bold tracking-wider uppercase mb-4 title-text">
            2025 PORTFOLIO
          </h1>

          <h2 className="text-center text-xl sm:text-2xl font-light tracking-widest mb-8 subtitle-text">
            Front-end web developer
          </h2>

          <div className="flex flex-col-reverse sm:flex-row justify-between items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-white/80 text-base sm:text-lg leading-relaxed">
                Hi, I’m Guillaume, a front-end developer passionate about
                crafting sleek and responsive interfaces with React and Tailwind
                CSS. I’m expanding my skills into back-end development to become
                full-stack. Currently seeking a junior web developer role, I’m
                eager to create, learn, and grow. Explore my work, my tools,
                and my journey! 🚀
              </p>
            </div>
            <img
              src={avatar}
              alt="Profile"
              className="w-32 h-32 sm:w-48 sm:h-48 rounded-full mt-4 sm:mt-0 sm:ml-8 mb-4 animate-fadeIn shadow-lg shadow-black/50"
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex flex-wrap justify-center gap-8 mt-8">
          {["Projects", "DevTools", "CV"].map((text) => (
            <button
              key={text}
              onClick={() => {
                const section = document.getElementById(text.toLowerCase()); // Récupère l'élément avec l'id correspondant
                if (section) {
                  section.scrollIntoView({ behavior: "smooth" }); // Scroll fluide
                }
              }}
              className="px-8 py-4 sm:px-12 sm:py-4 rounded-full 
                border-2 border-white/30
                hover:border-white/80 
                hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
                backdrop-blur-sm
                text-white text-lg sm:text-xl
                transition-all duration-300 ease-in-out"
            >
              {text}
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero;
