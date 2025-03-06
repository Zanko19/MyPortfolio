import { FaHtml5, FaCss3Alt, FaReact, FaVuejs, FaJs, FaNodeJs, FaDocker, FaGitAlt, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiTypescript, SiPhp, SiLaravel, SiMongodb, SiFigma, SiNextdotjs, SiPython, SiPostgresql } from "react-icons/si";

const techIcons = {
  "HTML": <FaHtml5 className="text-orange-500 text-3xl" />,
  "CSS": <FaCss3Alt className="text-blue-500 text-3xl" />,
  "JavaScript": <FaJs className="text-yellow-400 text-3xl" />,
  "TypeScript": <SiTypescript className="text-blue-500 text-3xl" />,
  "React.js": <FaReact className="text-blue-400 text-3xl" />,"Tailwind": <SiTailwindcss classname="text-green-400 text-3xl" />,
  "Vue.js": <FaVuejs className="text-green-400 text-3xl" />,
  
  
  "Node.js": <FaNodeJs className="text-green-500 text-3xl" />,
  "PHP": <SiPhp className="text-indigo-500 text-3xl" />,
  "Laravel": <SiLaravel className="text-red-500 text-3xl" />,
  "MongoDB": <SiMongodb className="text-green-600 text-3xl" />,
  
  "Git": <FaGitAlt className="text-orange-500 text-3xl" />,
  "GitHub": <FaGithub className="text-white text-3xl" />,
  "Docker": <FaDocker className="text-blue-400 text-3xl" />,
  "Figma": <SiFigma className="text-pink-500 text-3xl" />,
  
  "Next.js": <SiNextdotjs className="text-white text-3xl" />,
  "Python": <SiPython className="text-yellow-500 text-3xl" />,
  "SQL": <SiPostgresql className="text-blue-500 text-3xl" />
};

const categories = [
  { 
    category: "Front-end", 
    items: ["HTML", "CSS", "JavaScript", "TypeScript", "React.js", "Vue.js"] 
  },
  { 
    category: "Back-end", 
    items: ["Node.js", "PHP", "Laravel", "MongoDB"] 
  },
  { 
    category: "Outils et Environnements", 
    items: ["Git", "GitHub", "Docker", "Figma"] 
  },
  { 
    category: "Learning", 
    items: ["Next.js", "Python", "SQL"] 
  }
];

const DevToolbox = () => {
  return (
    <section id="devtools" className="min-h-screen py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-center text-5xl font-mono text-white mb-12">
          Dev Toolbox
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 max-w-6xl mx-auto">
          {categories.map((category, index) => (
            <div 
              key={index}
              className="rounded-3xl p-6 border border-white/10 bg-black/20 backdrop-blur-lg"
            >
              <h3 className="text-white text-2xl font-mono mb-6">{category.category}</h3>
              <ul className="space-y-4">
                {category.items.map((item, idx) => (
                  <li key={idx} className="flex items-center space-x-3 text-white/80 font-mono">
                    {techIcons[item]}
                    <span>{item}</span>
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
