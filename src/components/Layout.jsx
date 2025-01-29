import boom from '../assets/boom.jpg';

const Layout = ({ children }) => {
  return (
    <div 
      className="min-h-screen relative bg-black"
      style={{
        backgroundImage: `url(${boom})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundAttachment: 'fixed',
        backgroundBlendMode: 'soft-light',
        backgroundColor: 'rgba(0, 0, 0, 0.9)'
      }}
    >
      {/* Couches d'étoiles fixes pour tout le site */}
      <div className="stars fixed top-0 left-0 w-full h-full"></div>
      <div className="stars2 fixed top-0 left-0 w-full h-full"></div>
      <div className="stars3 fixed top-0 left-0 w-full h-full"></div>
      
      {/* Contenu de l'application */}
      <div className="relative z-10">
        {children}
      </div>
    </div>
  );
};

export default Layout; 