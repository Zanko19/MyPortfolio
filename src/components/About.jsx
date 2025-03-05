import avatar from "../assets/avatar.png";
import planet from "../assets/planet.png";
import code from "../assets/code.gif";
import sport from "../assets/water-polo.gif";
import cake from "../assets/cake.gif";
import space from "../assets/uranus.gif";
import swim from "../assets/nageur.gif";
import argile from "../assets/argile.gif";
import me from "../assets/moi.jpg";
import saturn from "../assets/space.png";

const About = () => {
  return (
    <section id="about" className="min-h-screen relative">
      {/* Planète décorative */}
      <img
        src={saturn}
        alt="Planet"
        className="absolute left-20 top-16 w-54 h-48 animate-float"
      />

      <div className="container mx-auto px-4 pt-32 relative z-10">
        {/* Titre avec avatar */}
        <div className="text-center mb-6">
          <h2 className="text-6xl font-mono text-white title-text ">
            About me
          </h2>
        </div>

        {/* Grille 3 colonnes */}
        <div className="grid grid-cols-1 md:grid-cols-[1fr_1.6fr_1fr] gap-8 max-w-6xl mx-auto">
          {/* Parcours */}
          <div className="glass-container p-6 border border-white/10 rounded-tl-[50px] rounded-tr-none rounded-br-[50px] rounded-bl-none">
            <h3 className="text-white text-2xl font-mono mb-4">Parcours</h3>
            <ul className="text-white/80 font-mono text-sm space-y-4">
              <li>🚀 Formation Développeur Web - BeCode</li>
              <li>🌌 Stage chez BpFlow - Développement Front-End</li>
              <li>🛰️ Projet personnel : Création d'un portfolio</li>
            </ul>
          </div>

          {/* Description */}
          <div className="glass-container p-6 border border-white/10 rounded-3xl">
            <div className="flex items-start">
              <img
                src={me}
                alt="Me"
                className="w-24 h-24 rounded-full border-2 border-[rgb(199,50,49)]"
              />
              <p className="text-white/80 font-mono text-sm leading-relaxed ml-4 mb-2">
                Passionné par le développement web et l'exploration spatiale, je
                vois chaque projet comme une mission à accomplir avec précision,
                créativité et curiosité.<br></br>
              </p>
            </div>
            <p className="text-white/80 font-mono text-sm leading-relaxed">
              Le front-end est mon terrain de jeu, et c’est avec React, Tailwind
              CSS et TypeScript que je suis le plus à l’aise et que j’ai pu
              faire mes preuves. Je conçois des interfaces modernes et
              performantes, en mettant l'accent sur l'expérience utilisateur et
              l’optimisation. Curieux et ambitieux, je me forme au back-end avec
              Node.js, Express et les bases de données afin de devenir
              full-stack. Chaque projet est une occasion d’apprendre, de
              progresser et de repousser mes limites, toujours avec la même
              passion pour l’innovation.<br></br>Front-end aujourd’hui,
              full-stack demain. Toujours prêt à relever de nouveaux défis !
            </p>
          </div>

          {/* Hobbies */}
          <div className="glass-container p-6 border border-white/10 rounded-tl-none rounded-tr-[50px] rounded-br-none rounded-bl-[50px]">
            <h3 className="text-white text-2xl font-mono mb-6 justify-center items-center flex">
              What I like
            </h3>
            <div className="grid grid-cols-2 gap-6">
              {/* Conteneur pour chaque image */}
              <div className="hover-card flex justify-center items-center relative group">
                <img src={code} alt="Code" className="w-20 h-20" />
                <div className="absolute bottom-0 bg-black/75 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Coding
                </div>
              </div>
              <div className="hover-card flex justify-center items-center relative group">
                <img src={space} alt="Space" className="w-20 h-20" />
                <div className="absolute bottom-0 bg-black/75 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Astronomy
                </div>
              </div>
              <div className="hover-card flex justify-center items-center relative group">
                <img src={cake} alt="Cake" className="w-20 h-20" />
                <div className="absolute bottom-0 bg-black/75 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Baking
                </div>
              </div>
              <div className="hover-card flex justify-center items-center relative group">
                <img src={argile} alt="Argile" className="w-20 h-20" />
                <div className="absolute bottom-0 bg-black/75 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Clay
                </div>
              </div>
              <div className="hover-card flex justify-center items-center relative group">
                <img src={sport} alt="Sport" className="w-20 h-20" />
                <div className="absolute bottom-0 bg-black/75 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Water-Polo
                </div>
              </div>
              <div className="hover-card flex justify-center items-center relative group">
                <img src={swim} alt="Swim" className="w-20 h-20" />
                <div className="absolute bottom-0 bg-black/75 text-white text-sm p-1 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                  Swimming
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
