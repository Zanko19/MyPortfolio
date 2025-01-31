import avatar from '../assets/avatar.png';
import boom from '../assets/boom.jpg';
import '../styles/main.css';
import me from '../assets/moi.jpg';

const Hero = () => {
  return (
    <section id="hero" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-32 flex flex-col items-center">
        {/* Titre principal dans un cadre arrondi avec bordure */}
        <div className="w-full max-w-4xl mx-auto p-8 rounded-[40px] glass-container">
          <h1 className="text-center text-6xl font-bold tracking-wider uppercase mb-4 title-text">
            2025 PORTFOLIO
          </h1>

          <h2 className="text-center text-2xl font-light tracking-widest mb-8 subtitle-text">
            Front-end web developer
          </h2>

          <div className="flex justify-between items-center">
            <div className="max-w-2xl">
              <p className="font-mono text-white/80 text-lg leading-relaxed">
                Hi, I'm Guillaume a passionate and devoted front-end developer. 
                I'm specializing in React and tailwind but eager to learn more 
                of the back end and im trying to lorem ipsum50.
                <br /><br />
                here its my portfolio where you can learn more about me, 
                my toolbox and my projects.
              </p>
            </div>
            <img 
              src={avatar} 
              alt="Profile" 
              className="w-48 h-48 rounded-full ml-8 mb-4 animate-fadeIn shadow-lg shadow-black/50"
            />
          </div>
        </div>

        {/* Boutons */}
        <div className="flex justify-center gap-8 mt-8">
  {["Projects", "DevTools", "CV"].map((text) => (
    <button
      key={text}
      onClick={() => {
        const section = document.getElementById(text.toLowerCase()); // Récupère l'élément avec l'id correspondant
        if (section) {
          section.scrollIntoView({ behavior: "smooth" }); // Scroll fluide
        }
      }}
      className="px-12 py-4 rounded-full 
        border-2 border-white/30
        hover:border-white/80 
        hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
        backdrop-blur-sm
        text-white text-xl
        transition-all duration-300 ease-in-out "
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