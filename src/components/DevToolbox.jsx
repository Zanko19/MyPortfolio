const DevToolbox = () => {
  const tools = [
    { category: "Front-end", items: ["React", "Vue.js", "TailwindCSS", "JavaScript"] },
    { category: "Back-end", items: ["Node.js", "Express", "MongoDB", "PostgreSQL"] },
    { category: "Tools", items: ["Git", "Docker", "VS Code", "Figma"] },
    { category: "Learning", items: ["TypeScript", "Next.js", "AWS", "Python"] }
  ];

  return (
    <section id="devtools" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-32">
        <h2 className="text-center text-6xl font-mono text-white mb-16">
          Dev Toolbox
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {tools.map((category, index) => (
            <div 
              key={index}
              className="glass-container rounded-3xl p-6 border border-white/10"
            >
              <h3 className="text-white text-2xl font-mono mb-6">
                {category.category}
              </h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li 
                    key={idx}
                    className="text-white/80 font-mono hover:text-white
                      transition-all duration-300 flex items-center"
                  >
                    <span className="mr-2">⚡</span>
                    {item}
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