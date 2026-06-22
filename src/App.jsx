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

// Фото для твітер і телеграм (обрізка)
// return (
//   <div style={{
//     position: 'fixed',
//     top: 0,
//     left: 0,
//     width: '1200px',
//     height: '630px',
//     background: '#0E0D0C',
//     display: 'flex',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     padding: '0 80px',
//     boxSizing: 'border-box',
//     overflow: 'hidden',
//     zIndex: 999999
//   }}>
    
//     {/* Текст ліворуч */}
//     <div style={{ maxWidth: '500px', zIndex: 2, textAlign: 'left' }}>
//       <h1 style={{ color: '#e7bc91', fontSize: '74px', margin: '0 0 20px 0', letterSpacing: '0.02em', fontWeight: '600', fontFamily: 'Playfair Display, serif', lineHeight: '1.2' }}>
//         Точка переходу
//       </h1>
//       <p style={{ color: '#c2b9a4', fontSize: '44px', fontFamily: 'Manrope, sans-serif', margin: 0, lineHeight: '1.4', opacity: 0.9 }}>
//         7-денний онлайн-практикум Антоніни Пашко для жінок
//       </p>
//     </div>

//     {/* Фото праворуч із плавним затіненням */}
//     <div style={{ 
//       position: 'absolute', 
//       right: 0, 
//       top: 0, 
//       bottom: 0, 
//       width: '650px', 
//       backgroundImage: "url('/src/assets/antonina-city.jpg')", 
//       backgroundPosition: 'center 25%', 
//       backgroundSize: 'cover', 
//       backgroundRepeat: 'no-repeat' 
//     }}>
//       <div style={{ position: 'absolute', top: 0, bottom: 0, left: 0, right: 0, background: 'linear-gradient(to right, #0E0D0C 0%, #0E0D0C 15%, transparent 65%)' }}></div>
//     </div>

//   </div>
// );
// }