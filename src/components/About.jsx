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
    
      <img
        src={saturn}
        alt="Planet"
        className="absolute left-20 top-2 w-54 h-48 animate-float"
      />

      <div className="container mx-auto px-4 pt-6 relative z-10">
        <div className="text-center mb-6">
          <h2 className="text-6xl font-mono text-white title-text">
            About me
          </h2>
        </div>

        {/* BENTO GRID */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 max-w-6xl mx-auto grid-rows-[auto_auto] md:grid-rows-[auto_auto]">
 {/* ABOUT ME */}
          <div className="glass-container p-6 border border-white/10 rounded-xl md:col-span-2">
            <div className="flex items-start">
              <img
                src={me}
                alt="Me"
                className="w-24 h-24 rounded-full border-2 border-[rgb(199,50,49)]"
              />
              <p className="text-white/80 font-mono text-sm leading-relaxed ml-4 mb-2 text-justify ">
                Passionate about web development and space exploration, I see
                every project as a mission to accomplish with precision,
                creativity, and curiosity.
              </p>
            </div>
            <p className="text-white/80 font-mono text-sm leading-relaxed text-justify ">
              Front-end is my playground, React, Tailwind CSS, and TypeScript
              are where I feel most comfortable working with.
              I build modern, high-performance interfaces with a strong focus on user experience and optimization.
              Curious and ambitious, I’m expanding my skills into back-end development with Node.js, Express, and databases 
              to become a full-stack developer.
              Every project is an opportunity to learn, improve, and push my limits, always driven by the same passion for innovation.
              Front-end today, full-stack tomorrow. Always ready for new challenges! 
              I hope a company will hear me out and give a junior developer the chance to be part of their team.
            </p>
          </div>
          {/* JOURNEY */}
          <div className="glass-container p-6 border border-white/10 rounded-xl md:col-span-2 ">
            <h3 className="text-white text-2xl font-mono mb-2 text-left subtitle-text">Journey</h3>
            <ul className="text-white/80 font-mono text-sm space-y-2 leading-relaxed text-justify ">
              <li>
                I studied Communication until my final year at<br></br>  
                <a href="https://isfsc.be/communication/" target="_blank" rel="noopener noreferrer" 
                  className="text-grey-300 underline hover:text-blue-300">
                    ISFSC
                </a>, but when it came time to work on my thesis, I questioned whether this was truly the path I wanted to follow.
                That’s when I decided to pursue my passion for tech and joined BeCode’s Junior Web Developer program.
                Selected among 25 out of 200+ candidates, I embarked on an intense and rewarding journey, mastering new technologies and building projects from scratch.
              </li>
              <li>
                To obtain my Junior Developer certification, I had to complete an internship, which I did at BpFlow as a Junior Web Developer.
                I completed a 3-month internship, followed by a 4-month contract as a front-end developer.
                Over 8 months, I contributed to various projects, helped build an emerging SaaS, gained hands-on experience, 
                and worked in a fast-paced startup environment before my contract ended due to budget constraints.
              </li>
            </ul>
          </div>

         

          {/* WHAT I LIKE */}
          <div className="glass-container p-6 border border-white/10 rounded-xl md:col-span-4">
            <h3 className="text-white text-2xl font-mono mb-6 text-center subtitle-text">What I like</h3>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
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
