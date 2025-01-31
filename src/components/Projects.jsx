import rocket from '../assets/rocket.png';
import getflix from '../assets/getflix.png';
import prp from '../assets/prp.png';
import pizza from '../assets/pizza.png';
import nasa from '../assets/nasaapi.png';
import blog from '../assets/chainblog.png';
import bpflow from '../assets/bpflow.png';
import capafix from '../assets/capafix.png';

const projectImages = {
  Getflix: getflix,
  Chainblog: blog,
  PRP: prp,
  '1day1pic': nasa,
  'BP FLOW': bpflow,
  Capafix: capafix,
  PizzAventura: pizza
};

const Projects = () => {
  const projects = [
    { name: 'Getflix', status: 'completed', link: 'https://github.com/Zanko19/GetFlix/tree/main' },
    { name: 'Chainblog', status: 'completed', link: 'https://github.com/Eneuem/chainblog' },
    { name: 'PRP', status: 'completed', link: 'https://cliniqueprp.be/' },
    { name: '1day1pic', status: 'completed', link: 'https://zanko19.github.io/api-nasa/' },
    { name: 'BP FLOW', status: 'completed', link: 'https://www.bpflow.be/' },
    { name: 'Capafix', status: 'completed', link: 'https://capafix.com/' },
    { name: 'PizzAventura', status: 'completed', link: 'https://zanko19.github.io/restaurant-css-framework/index.html' },
    { name: 'Loading..', status: 'pending' }
  ];

  return (
    <section id="projects" className="min-h-screen relative">
      {/* Titre */}
      <h2 className="text-center text-6xl font-mono text-white pt-32 mb-16 title-text">
        Projects
      </h2>

      {/* Image centrale de la fusée */}
      <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
        <img src={rocket} alt="Rocket" className="w-48 h-48 animate-pulse" />
      </div>

      {/* Grille de projets */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => {
            const isLoading = project.status === 'pending';
            const projectImage = projectImages[project.name];

            return (
              <div 
                key={index}
                className={`glass-container rounded-3xl p-6 border border-white/10
                  hover:border-white/30 transition-all duration-300
                  min-h-[200px] flex items-center justify-center
                  cursor-pointer group relative overflow-hidden 
                  ${isLoading ? 'loading-card' : ''}`} // Ajout de la classe loading-card
                style={projectImage ? { 
                  backgroundImage: `url(${projectImage})`, 
                  backgroundSize: 'cover', 
                  backgroundPosition: 'center', 
                  backgroundRepeat: 'no-repeat' 
                } : {}}
                onClick={() => project.link && window.open(project.link, '_blank')}
              >
                {isLoading ? (
                  <div className="loading-content">
                    <div className="loading-icon">⏳</div>
                    <span className="neon-text">Coming Soon...</span>
                  </div>
                ) : (
                  <>
                    {/* Overlay sombre (visible au départ) */}
                    {projectImage && (
                      <div className="absolute inset-0 bg-black/50 transition-opacity duration-300 group-hover:opacity-0"></div>
                    )}

                    {/* Texte du projet (disparaît au hover) */}
                    <span className="text-white font-mono text-3xl
                      group-hover:opacity-0 group-hover:scale-90
                      transition-all duration-300 relative z-10 text-center title-text">
                      {project.name}
                    </span>
                  </>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
