import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DevToolbox from './components/DevToolbox';
import CV from './components/CV';
import Contact from './components/Contact';
import Layout from './components/Layout';

function App() {
  return (
    <Layout>
      <Navbar />
      <Hero />
      <About />
      <Projects />
      <DevToolbox />
      <CV />
      <Contact />
    </Layout>
  );
}

export default App;
