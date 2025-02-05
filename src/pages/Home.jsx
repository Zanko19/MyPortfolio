import Hero from '../components/Hero';
import About from '../components/About';
import Projects from '../components/Projects';
import DevToolbox from '../components/DevToolbox';
import CV from '../components/CV';
import Contact from '../components/Contact';

const Home = () => {
  return (
    <main className="scroll-smooth">
      <Hero />
      <About />
      <Projects />
      <DevToolbox />
      <CV />
      <Contact />
    </main>
  );
};

export default Home; 