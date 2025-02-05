import Layout from './components/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
      <ScrollToTop />
      <Footer />
    </Layout>
  );
}

export default App;
