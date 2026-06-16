import { useState } from 'react';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Problem from './components/Problem/Problem';
import Transformation from './components/Transformation/Transformation';
import Includes from './components/Includes/Includes';
import TransformationMap from './components/TransformationMap/TransformationMap';
import About from './components/About/About';
import Testimonials from './components/Testimonials/Testimonials';
import Packages from './components/Packages/Packages';
import CTA from './components/CTA/CTA';
import Footer from './components/Footer/Footer';

import ModalForm from './components/ModalForm/ModalForm';

import './index.css';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState('');

  const openModalWithPackage = (packageName) => {
    setSelectedPackage(packageName);
    setModalOpen(true);
  };

  return (
    <>
      <Navbar />
      <Hero onSelectPackage={openModalWithPackage} />
      <Problem />
      <Transformation />
      <Includes />
      <TransformationMap />
      <About />
      <Testimonials />
      <Packages onSelectPackage={openModalWithPackage} />
      <CTA />
      <Footer />
      <ModalForm 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
        selectedPackage={selectedPackage} 
      />
    </>
  );
}

export default App;