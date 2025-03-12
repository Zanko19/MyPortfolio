import getflix from "../assets/getflix.png";
import blog from "../assets/chainblog.png";
import prp from "../assets/prp.png";
import pizza from "../assets/pizza.png";
import nasa from "../assets/nasaapi.png";
import bpflow from "../assets/bpflow.png";
import capafix from "../assets/capafix.png";

export const projectsData = [
  {
    name: "Getflix",
    image: getflix,
    technologies: ["React", "Tailwind", "Node.js", "MongoDB"],
    github: "https://github.com/Zanko19/GetFlix/tree/main",
    demo: "https://a3lequenne.github.io/getflixProject/#/",
    description: "Une plateforme de streaming inspirée de Netflix",
  },
  {
    name: "Chainblog",
    image: blog,
    technologies: ["PHP", "MySQL", "jQuery", "Bootstrap"],
    github: "https://github.com/Zanko19/chainblog",
    demo: "https://eneuem.xyz/chainblog/front/index.php",
    description: "Un blog décentralisé utilisant PHP et MySQL",
  },
  {
    name: "PRP",
    image: prp,
    technologies: ["WordPress", "Elementor", "PHP"],
    github: null,
    demo: "https://cliniqueprp.be/",
    description: "Site du Dr De Backer pour sa clinique PRP",
  },
  {
    name: "1day1pic",
    image: nasa,
    technologies: ["NASA API", "CSS"],
    github: "https://github.com/Zanko19/api-nasa",
    demo: "https://zanko19.github.io/api-nasa/",
    description: "Photo quotidienne grâce à l'API de la NASA",
  },
  {
    name: "BP FLOW",
    image: bpflow,
    technologies: ["WordPress", "Elementor", "Custom JS"],
    github: null,
    demo: "https://www.bpflow.be/",
    description: "Un site WordPress optimisé pour la start-up BP FLOW",
  },
  {
    name: "Capafix",
    image: capafix,
    technologies: ["WordPress", "Elementor", "Custom JS"],
    github: null,
    demo: "https://capafix.com/",
    description: "Plateforme WordPress sur mesure pour un futur Saas",
  },
  {
    name: "PizzAventura",
    image: pizza,
    technologies: ["HTML", "CSS"],
    github: "https://github.com/Zanko19/restaurant-css-framework",
    demo: "https://zanko19.github.io/restaurant-css-framework/index.html",
    description: "Un site vitrine de restaurant avec animations CSS",
  },
  {
    name: "Loading..",
    status: "pending",
    image: null,
    technologies: [],
    github: null,
    demo: null,
    description: "Projet en cours de développement.",
  }
];
