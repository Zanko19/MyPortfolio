import { useState } from "react";

const CV = () => {
  const [showModal, setShowModal] = useState(false);
  const [selectedCV, setSelectedCV] = useState(null);

  const cvOptions = [
    {
      id: "cv-fr-canva",
      name: "CV Canva (FR)",
      file: "cv-fr-canva.pdf",
      image: "preview-cv-fr-canva.png",
    },
    {
      id: "cv-fr",
      name: "CV Basique (FR)",
      file: "cv-fr.pdf",
      image: "preview-cv-fr.png",
    },
    {
      id: "cv-eng",
      name: "CV Basique (ENG)",
      file: "cv-eng.pdf",
      image: "preview-cv-eng.png",
    },
  ];

  const handleDownload = () => {
    if (!selectedCV) return;

    const link = document.createElement("a");
    link.href = `/${selectedCV.file}`;
    link.download = selectedCV.file;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    setShowModal(false); // Fermer le modal après le téléchargement
  };

  return (
    <section id="cv" className="min-h-screen relative">
      <div className="container mx-auto px-4 pt-32">
        <h2 className="text-center text-6xl font-mono text-white mb-16 title-text">
          Curriculum Vitae
        </h2>

        <div className="max-w-4xl mx-auto">
          <div className="glass-container rounded-3xl p-8 border border-white/10">
            {/* Expérience Professionnelle */}
            <div className="mb-12">
              <h3 className="text-white text-2xl font-mono mb-6">Professional Experience</h3>
              <div className="space-y-8">
                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">BP FLOW — Front-end Web Developer</h4>
                  <p className="text-white/60 font-mono">APR24 - NOV24</p>
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

                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">BeCode — Web Developer training</h4>
                  <p className="text-white/60 font-mono">SEP23 - APR24</p>
                  <ul className="text-white/80 mt-2 space-y-2 list-disc pl-4">
                    <li>Frontend development for multiple complex projects, focusing on clean, efficient code and optimal user experience</li>
                    <li>Use of several development frameworks, including React, Tailwind, Bootstrap, Next.js, and TypeScript, for a versatile skill set in frontend technologies</li>
                    <li>API integration across various websites, with an emphasis on data security and performance optimization</li>
                    <li>Getflix Project: Developed a fully responsive streaming platform using React, Tailwind CSS, and TypeScript, incorporating advanced search functionality and a user-friendly interface. Integrated multiple APIs to enable seamless content delivery across services</li>
                    <li>Experience with micro frontends to separate different parts of the application for easier maintenance and scalability</li>
                    <li>Applied CI/CD practices to streamline deployments and maintain high code quality</li>
                    <li>Strengthened problem-solving and debugging skills, particularly in handling asynchronous data and API issues</li>
                  </ul>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">ASBL RYD — Communication Officer and Assistant Project Manager</h4>
                  <p className="text-white/60 font-mono">FEB23 - MAY23</p>
                  <ul className="text-white/80 mt-2 space-y-2 list-disc pl-4">
                    <li>Design for communication with Adobe suite (Photoshop, InDesign, Illustrator, Premiere Pro) and Canva</li>
                    <li>Creation of visually appealing content for marketing department</li>
                    <li>Community management on social media platforms</li>
                  </ul>
                </div>

                <div className="border-l-2 border-white/20 pl-6">
                  <h4 className="text-white text-xl">ASBL Tremblins (Internship) — Assistant Project Manager</h4>
                  <p className="text-white/60 font-mono">OCT19 - JAN20</p>
                  <ul className="text-white/80 mt-2 space-y-2 list-disc pl-4">
                    <li>Acquired autonomy and adherence to deadlines</li>
                    <li>Created social media posts to enhance the visibility of the non-profit organization</li>
                    <li>Participated in the organization of the Babel Festival and contributed to the development of a communication strategy to promote the event</li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Formation */}
            <div>
              <h3 className="text-white text-2xl font-mono mb-6">Education & Training</h3>
              <div className="border-l-2 border-white/20 pl-6">
                <h4 className="text-white text-xl">ISFSC — Institut Supérieur de Formation Sociale et de Communication</h4>
                <p className="text-white/60 font-mono">2019 - 2023</p>
                <ul className="text-white/80 mt-2 space-y-2 list-disc pl-4">
                  <li>Three-year communication program balancing theory and practice (last year unfinished)</li>
                  <li>Intensive hands-on experience through project-based learning, workshops, and internships, fostering concrete experience and the development of critical analysis skills</li>
                  <li>Acquisition of strong theoretical foundations for an in-depth understanding of the field, preparing for successful professional integration</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Bouton de téléchargement */}
          <div className="text-center mt-8">
            <button
              onClick={() => setShowModal(true)}
              className="px-8 py-3 rounded-full border-2 border-white/30
                hover:border-white/80 hover:shadow-[0_0_10px_rgba(255,255,255,0.6)]
                backdrop-blur-sm text-white transition-all duration-300"
            >
              Download CV
            </button>
          </div>
        </div>
      </div>

      {/* Modal de sélection du CV */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-70 z-50">
          <div className="bg-white p-6 rounded-lg shadow-lg w-96 text-center">
            <h3 className="text-lg font-bold mb-4">Choisissez un CV</h3>
            <div className="space-y-4">
              {cvOptions.map((cv) => (
                <div
                  key={cv.id}
                  className={`border p-2 rounded-lg cursor-pointer transition ${
                    selectedCV?.id === cv.id ? "border-blue-500 bg-blue-100" : "border-gray-300"
                  }`}
                  onClick={() => setSelectedCV(cv)}
                >
                  <img src={`/${cv.image}`} alt={cv.name} className="w-full h-40 object-cover rounded-md mb-2" />
                  <p className="text-sm">{cv.name}</p>
                </div>
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
                className={`px-4 py-2 rounded-lg ${selectedCV ? "bg-blue-600 text-white" : "bg-gray-400 cursor-not-allowed"}`}
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
