import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Transformation from './components/Transformation/Transformation';
import Includes from './components/Includes/Includes';
import TransformationMap from './components/TransformationMap/TransformationMap';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Packages from './components/Packages/Packages';
import Contact from './components/Contact/Contact';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';
import './index.css';
import './App.css';

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <Problem />
      <Transformation />
      <Includes />
      <TransformationMap />
      <About />
      <Testimonials />
      <Packages />
      <Contact />
      <CTA />
      <Footer />
    </>
  );
}

export default App;
