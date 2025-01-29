const CV = () => {
  return (
    <section id="cv" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-32">
        <h2 className="text-center text-6xl font-mono text-white mb-16">
          Curriculum Vitae
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-container rounded-3xl p-8 border border-white/10">
            {/* Expérience */}
            <div className="mb-12">
              <h3 className="text-white text-2xl font-mono mb-6">Experience</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">Senior Frontend Developer</h4>
                  <p className="text-white/60 font-mono">2022 - Present</p>
                  <p className="text-white/80 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                {/* Ajoutez d'autres expériences ici */}
              </div>
            </div>

            {/* Formation */}
            <div>
              <h3 className="text-white text-2xl font-mono mb-6">Education</h3>
              <div className="space-y-6">
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">Master en Développement Web</h4>
                  <p className="text-white/60 font-mono">2018 - 2020</p>
                  <p className="text-white/80 mt-2">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </p>
                </div>
                {/* Ajoutez d'autres formations ici */}
              </div>
            </div>
          </div>

          {/* Bouton de téléchargement */}
          <div className="text-center mt-8">
            <button className="px-8 py-3 rounded-full border-2 border-white/30
              hover:border-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
              backdrop-blur-sm text-white transition-all duration-300">
              Download CV
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CV; 