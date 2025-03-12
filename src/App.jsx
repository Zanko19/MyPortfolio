import Layout from './components/Layout';
import Home from './pages/Home';
import ScrollToTop from './components/ScrollToTop';
import Navbar from './components/Navbar';
import Footer from './components/Footer';
import { NavbarProvider } from "./context/navcon";
import MobileMenu from "./components/MobileMenu";
import { Analytics } from "@vercel/analytics/react";

function App() {
  return (
    <NavbarProvider>
      <Layout>
        <Navbar />
        <MobileMenu />
        <Home />
        <ScrollToTop />
        <Footer />
        <Analytics />
      </Layout>
    </NavbarProvider>
  );
}

export default App;
