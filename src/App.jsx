import Layout from './components/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { Analytics } from "@vercel/analytics/react"

function App() {
  return (
    <Layout>
      <Navbar />
      <Home />
      <ScrollToTop />
      <Footer />
      <Analytics />
    </Layout>
  );
}

export default App;
