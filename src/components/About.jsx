import avatar from '../assets/avatar.png';
import planet from '../assets/planet.png';
import code from '../assets/binaire.png';
import sport from '../assets/water-polo.png';
import cake from '../assets/cupcake.png';
import space from '../assets/uranus.png';
import swim from '../assets/nageur.png';
import coffee from '../assets/coffee.gif';

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

        {/* Avatar centré */}
        <div className="flex justify-center mb-12">
          <img 
            src={avatar} 
            alt="Profile" 
            className="w-32 h-32 rounded-full border border-white/20 glow-effect"
          />
        </div>

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
            <h3 className="text-white text-2xl font-mono mb-6">Qui suis-je?/hobby</h3>
            <div className="grid grid-cols-2 gap-6">
              <div className="hover-card">
                <img src={code} alt="Code" className="w-16 h-16" />
              </div>
              <div className="hover-card">
                <img src={sport} alt="Sport" className="w-16 h-16" />
              </div>
              <div className="hover-card">
                <img src={cake} alt="Cake" className="w-16 h-16" />
              </div>
              <div className="hover-card">
                <img src={space} alt="Space" className="w-16 h-16" />
              </div>
              <div className="hover-card">
                <img src={coffee} alt="Swim" className="w-16 h-16" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About; 