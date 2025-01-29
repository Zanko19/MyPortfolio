import avatar from '../assets/avatar.png';
import planet from '../assets/planet.png';
import code from '../assets/code.gif';
import sport from '../assets/water-polo.gif';
import cake from '../assets/cake.gif';
import space from '../assets/uranus.gif';
import swim from '../assets/nageur.gif';
import argile from '../assets/argile.gif';

const About = () => {
  return (
    <section id="about" className="min-h-screen relative">
      {/* Planète décorative */}
      <img 
        src={planet} 
        alt="Planet" 
        className="absolute left-20 top-32 w-48 h-48 animate-float"
      />

      <div className="container mx-auto px-4 pt-32 relative z-10">
        <h2 className="text-center text-6xl font-mono text-white mb-16">
          About me
        </h2>

       {/* Grille 3 colonnes */}
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
  {/* Parcours */}
  <div className="glass-container rounded-3xl p-6 border border-white/10">
    <h3 className="text-white text-2xl font-mono mb-4">Parcours</h3>
  </div>

  {/* Description */}
  <div className="glass-container rounded-3xl p-6 border border-white/10">
    <p className="text-white/80 font-mono text-sm leading-relaxed">
      Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam dapibus consectetur magna, at pulvinar ante. Sed eget elit vehicula, congue dolor in, sodales arcu. In quam risus, convallis convallis massa sed, ut dignissim nulla nibh. Suspendisse enim sem, porta eget urna a, facilisis torwest lorem. Aliquam quis nunc ut ex maximus malesuada interdum a neque. Sed at nibh eu purus ultricies tempor. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae. Pellentesque imperdiet finibus purus eget ultrices.
    </p>
  </div>

  {/* Hobbies */}
  <div className="glass-container rounded-3xl p-6 border border-white/10">
    <h3 className="text-white text-2xl font-mono mb-6 justify-center items-center flex">Qui suis-je?/hobby</h3>
    <div className="grid grid-cols-2 gap-6">
      {/* Conteneur pour chaque image */}
      <div className="hover-card flex justify-center items-center">
        <img src={code} alt="Code" className="w-20 h-20" />
      </div>
      <div className="hover-card flex justify-center items-center">
        <img src={sport} alt="Sport" className="w-20 h-20" />
      </div>
      <div className="hover-card flex justify-center items-center">
        <img src={cake} alt="Cake" className="w-20 h-20" />
      </div>
      <div className="hover-card flex justify-center items-center">
        <img src={space} alt="Space" className="w-20 h-20" />
      </div>
      <div className="hover-card flex justify-center items-center">
        <img src={swim} alt="Swim" className="w-20 h-20" />
      </div>
      <div className="hover-card flex justify-center items-center">
        <img src={argile} alt="argile" className="w-20 h-20" />
      </div>
    </div>
  </div>
</div>
      </div>
    </section>
  );
};

export default About; 