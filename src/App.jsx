import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Projects from './components/Projects';
import DevToolbox from './components/DevToolbox';
import CV from './components/CV';
import Contact from './components/Contact';
import Layout from './components/Layout';
import ScrollToTop from './components/ScrollToTop';
import Footer from './components/Footer';

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
      <ScrollToTop />
      <Footer />
    </Layout>
  );
}

export default App;
