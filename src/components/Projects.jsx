import rocket from '../assets/rocket.png';
import earth from '../assets/earth.png';

const Projects = () => {
  const projects = [
    { name: 'Getflix', status: 'completed' },
    { name: 'Blogchain', status: 'completed' },
    { name: 'PRP', status: 'completed' },
    { name: 'One day One pic', status: 'completed' },
    { name: 'BP FLOW', status: 'completed' },
    { name: 'Capafix', status: 'completed' },
    { name: 'Loading..', status: 'pending' },
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
        <img 
          src={rocket} 
          alt="Rocket" 
          className="w-48 h-48 animate-pulse"
        />
      </div>

      {/* Grille de projets */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-5xl mx-auto">
          {projects.map((project, index) => (
            <div 
              key={index}
              className="glass-container rounded-3xl p-6 border border-white/10
                hover:border-white/30 transition-all duration-300
                min-h-[200px] flex items-center justify-center
                cursor-pointer group"
            >
              <span className="text-white/80 font-mono text-xl
                group-hover:text-white group-hover:scale-105
                transition-all duration-300">
                {project.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects; 