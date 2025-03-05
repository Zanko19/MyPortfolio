const DevToolbox = () => {
  const tools = [
    { category: "Front-end", items: ["React", "Vue.js", "TailwindCSS", "JavaScript"] },
    { category: "Back-end", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
    { category: "Learning", items: ["TypeScript", "Next.js", "AWS", "Python"] }
  ];

  return (
    <section id="devtools" className="min-h-screen relative py-20 overflow-hidden">
      <div className="container mx-auto px-4 relative z-10">
        <h2 className="text-center text-6xl font-mono text-white mb-16 title-text backdrop-blur-lg">
          Dev Toolbox
        </h2>

        {/* Grille des galaxies */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((category, index) => (
            <div 
              key={index}
              className="galaxy-container rounded-3xl p-6 border border-white/10 backdrop-blur-lg relative"
            >
              {/* Nom de la galaxie */}
              <h3 className="text-white text-2xl font-mono mb-6">
                {category.category}
              </h3>

              {/* Étoiles (outils) */}
              <ul className="space-y-4 relative">
                {category.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="text-white/80 font-mono hover:text-white transition-all duration-300 flex items-center group relative"
                  >
                    {/* Étoile animée */}
                    <span className="mr-2 text-yellow-400 animate-pulse">⭐</span>
                    {item}

                    {/* Lignes de connexion (entre les étoiles) */}
                    {idx < category.items.length - 1 && (
                      <div 
                      className="absolute h-0.5 bg-white/10 w-full left-0 bottom-0 transform translate-y-4 glow-line"
                      style={{ width: "calc(100% - 2rem)" }}
                    ></div>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DevToolbox;