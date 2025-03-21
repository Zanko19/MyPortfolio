import { useState } from "react";

const CV = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);
  const [showMore, setShowMore] = useState(false); 

  const cvOptions = [
    {
      id: "cv-eng",
      name: "CV Guillaume Dedeurwaerder",
      file: "CV_2025.pdf", 
      image: "preview-cv-eng.png",
    },
  ];

  const handleSelectCV = (cv) => {
    setSelectedCV(cv);
  };

  const handleDownload = () => {
    if (!selectedCV) return;

    const link = document.createElement("a");
    link.href = `/${selectedCV.file}`; 
    link.download = selectedCV.file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false);
  };

  return (
    <section id="cv" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-24">
        <h2 className="text-center text-6xl font-mono text-white mb-16 title-text">
          Curriculum Vitae
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-container rounded-3xl p-8 border border-white/10">

            <div className="mb-12">
              <h3 className="text-white text-2xl subtitle-text mb-6">
                Professional Experience
              </h3>
              <div className="space-y-8">
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">
                    BP FLOW — Front-end Web Developer
                  </h4>
                  <p className="text-white/60 font-mono">2024</p>
                  <ul className="text-white/80 mt-2 space-y-2 list-disc pl-4">
                    <li>Development of a SaaS application with a scalable and efficient frontend architecture using React and TypeScript</li>
                    <li>Collaboration within an Agile team, working closely with the product owner, backend developers, and designers to ensure cohesive product delivery and a streamlined user experience</li>
                    <li>Design and development of the BP Flow website, utilizing React and Tailwind CSS for a modern and responsive design optimized for mobile, desktop, and tablet</li>
                    <li>Implementation of micro frontends architecture to modularize features, allowing independent deployment and better scalability of the codebase</li>
                    <li>Extensive use of CI/CD pipelines to automate testing and deployment, ensuring consistent and rapid delivery of new features</li>
                    <li>Optimization of application performance, focusing on load time reduction and ensuring smooth interactions for the user. Debugged complex frontend issues to maintain a seamless experience</li>
                    <li>Advanced Git/GitHub versioning practices and terminal command usage, contributing to efficient team collaboration and code quality control</li>
                  </ul>
                </div>
                {showMore && (
                  <>
                    <div className="border-l-2 border-white/20 pl-6">
                      <h4 className="text-white text-xl">BeCode — Web Developer training</h4>
                      <p className="text-white/60 font-mono">2023</p>
                      <ul className="text-white/80 mt-2 space-y-2 list-disc pl-4">
                        <li>Frontend development for multiple complex projects, focusing on clean, efficient code and optimal user experience</li>
                        <li>Use of several development frameworks, including React, Tailwind, Bootstrap, Next.js, and TypeScript, for a versatile skill set in frontend technologies</li>
                        <li>API integration across various websites, with an emphasis on data security and performance optimization</li>
                      </ul>
                    </div>
                  </>
                )}
              </div>
            </div>
            <div className="text-center mt-4">
              <button
                onClick={() => setShowMore(!showMore)}
                className="px-6 py-2 rounded-full border-2 border-white/30 hover:border-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] backdrop-blur-sm text-white transition-all duration-300"
              >
                {showMore ? "Close" : "See more"}
              </button>
            </div>
          </div>
          <div className="text-center mt-8">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 rounded-full border-2 border-white/30 hover:border-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.6)] backdrop-blur-sm text-white transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>


      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="p-6 rounded-lg shadow-lg w-96 text-center border border-white/10 bg-gray-900 text-white">
            <h2 className="text-lg font-semibold">Sélectionnez un CV</h2>
            <div className="mt-4">
              {cvOptions.map((cv) => (
                <button
                  key={cv.id}
                  className={`block w-full px-4 py-2 my-2 rounded-lg ${
                    selectedCV?.id === cv.id ? "bg-blue-500 text-white" : "bg-gray-700 text-white"
                  }`}
                  onClick={() => handleSelectCV(cv)}
                >
                  {cv.name}
                </button>
              ))}
            </div>

            <div className="mt-4 flex justify-between">
              <button
                onClick={() => setShowModal(false)}
                className="px-4 py-2 bg-gray-300 rounded-lg"
              >
                Annuler
              </button>
              <button
                onClick={handleDownload}
                disabled={!selectedCV}
                className={`px-4 py-2 rounded-lg ${
                  selectedCV ? "bg-blue-600 text-white" : "bg-gray-400 cursor-not-allowed"
                }`}
              >
                Télécharger
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default CV;
