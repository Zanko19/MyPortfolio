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

const projectTechnologies = {
  Getflix: ['React', 'Tailwind', 'Node.js', 'MongoDB'],
  Chainblog: ['PHP', 'MySQL', 'jQuery', 'Bootstrap'],
  PRP: ['WordPress', 'Elementor', 'PHP'],
  '1day1pic': ['NASA API', 'CSS'],
  'BP FLOW': ['WordPress', 'Elementor', 'Custom JS'],
  Capafix: ['WordPress', 'Elementor', 'Custom JS'],
  PizzAventura: ['HTML', 'CSS']
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
      <h2 className="text-center text-6xl font-mono text-white pt-32 mb-16 title-text">
        Projects
      </h2>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 sm:gap-8 max-w-5xl mx-auto subtitle-text">
          {projects.map((project, index) => {
            const isLoading = project.status === 'pending';
            const projectImage = projectImages[project.name];
            const technologies = projectTechnologies[project.name] || [];

            return (
              <div 
                key={index}
                className={`glass-container rounded-3xl p-6 border border-white/10
                  hover:border-white/30 transition-all duration-300
                  min-h-[200px] flex items-center justify-center
                  cursor-pointer group relative overflow-hidden 
                  ${isLoading ? 'loading-card' : ''}`} 
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
                    {projectImage && (
                      <div className="absolute inset-0 bg-black/40 transition-opacity duration-300 group-hover:opacity-0"></div>
                    )}

                    {/* Affichage du nom du projet */}
                    <span className="text-white font-mono text-xl sm:text-2xl text-center title-text
                      transition-all duration-300 relative z-10
                      group-hover:opacity-0 group-hover:scale-90">
                      {project.name}
                    </span>

                    {/* Liste des technos affichée en dessous du titre, visible sur mobile uniquement */}
                    <div className="absolute inset-0 flex flex-col items-center justify-center opacity-0
                      group-hover:opacity-100 transition-opacity duration-300 sm:opacity-100 sm:mt-2 md:opacity-0 md:mt-0">
                      <div className="bg-black/70 text-white px-4 py-2 rounded-lg text-center text-sm sm:text-lg font-mono">
                        {technologies.join(' • ')}
                      </div>
                    </div>
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
