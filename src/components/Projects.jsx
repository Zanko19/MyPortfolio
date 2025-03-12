import { FaGithub } from "react-icons/fa";
import { HiOutlineExternalLink } from "react-icons/hi";
import { projectsData } from "../data/projectsdata"; // Adaptez le chemin si nécessaire

const Projects = () => {
  return (
    <section id="projects" className="min-h-screen relative">
      <h2 className="text-center text-6xl font-mono text-white pt-32 mb-16 title-text">
        Projects
      </h2>

      <div className="container mx-auto px-4 relative z-10">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {projectsData.map((project, index) => {
            const isLoading = project.status === "pending";
            return (
              <div
                key={index}
                className="glass-container rounded-3xl overflow-hidden border border-white/10 
                  hover:border-white/30 transition-all duration-300 min-h-[400px] flex flex-col"
              >
                {/* Afficher l'image uniquement si le projet n'est pas pending et que l'image existe */}
                {!isLoading && project.image && (
                  <div
                    className="relative w-full h-48 bg-cover bg-center"
                    style={{ backgroundImage: `url(${project.image})` }}
                  >
                    <div className="absolute inset-0 bg-black/40"></div>
                  </div>
                )}

                {/* Contenu du projet */}
                <div
                  className={`p-2 flex-1 flex ${
                    isLoading
                      ? "items-center justify-center"
                      : "flex-col justify-between items-stretch"
                  }`}
                >
                  {isLoading ? (
                    <div className="loading-content flex flex-col items-center justify-center">
                      <div className="loading-icon text-4xl animate-spin">⏳</div>
                      <span className="neon-text text-white font-mono text-xl mt-4">
                        Coming Soon...
                      </span>
                    </div>
                  ) : (
                    <>
                      <div className="w-full text-center">
                        <h3 className="text-white text-2xl font-bold">{project.name}</h3>
                        <p className="text-white text-sm opacity-80 mt-2">
                          {project.description}
                        </p>
                      </div>

                      {/* Technologies centrées */}
                      <div className="flex justify-center flex-wrap mt-4">
                        {project.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="glass-container text-white text-xs px-3 py-1 rounded-full mr-2 mb-2"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>

                      {/* Liens */}
                      <div className="w-full flex space-x-4 mt-4">
                        {project.github && (
                          <a
                            href={project.github}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-gray-800 text-white p-3 rounded-full hover:bg-gray-600 transition-all duration-300"
                          >
                            <FaGithub size={20} />
                          </a>
                        )}
                        {project.demo && (
                          <a
                            href={project.demo}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="bg-primary-500 text-white p-3 rounded-full hover:bg-primary-400 transition-all duration-300"
                          >
                            <HiOutlineExternalLink size={20} />
                          </a>
                        )}
                      </div>
                    </>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Projects;
