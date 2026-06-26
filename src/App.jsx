import { useState, useEffect } from 'react';
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
import FloatingContact from './components/FloatingContact/FloatingContact';
import ModalForm from './components/ModalForm/ModalForm';

// Імпортуємо компоненти для статусів оплати
import PaymentSuccess from './components/PaymentStatus/PaymentSuccess';
import PaymentFailure from './components/PaymentStatus/PaymentFailure';

import './index.css';
import './App.css';

function App() {
  const [modalOpen, setModalOpen] = useState(false);

  // Отримуємо поточний шлях з адресного рядка браузера
  const currentPath = window.location.pathname;

  // Автоматичний скрол до якоря після зміни сторінки
  useEffect(() => {
    if (window.location.hash) {
      const timer = setTimeout(() => {
        const id = window.location.hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      }, 100);

      return () => clearTimeout(timer);
    }
  }, [currentPath]);

  // Функція для відкриття модального вікна зворотного зв'язку
  const openFeedbackModal = () => {
    setModalOpen(true);
  };

  // 1. Роутинг для успішної оплати
  if (currentPath === '/success') {
    return (
      <>
        <Navbar />
        <PaymentSuccess />
        <Footer />
      </>
    );
  }

  // 2. Роутинг для помилки при оплаті
  if (currentPath === '/failure') {
    return (
      <>
        <Navbar />
        <PaymentFailure />
        <Footer />
      </>
    );
  }

  // 3. Головна сторінка (якщо немає збігів вище)
  return (
    <>
      <Navbar />
      <Hero onSelectPackage={() => {
        const element = document.getElementById('packages');
        if (element) element.scrollIntoView({ behavior: 'smooth' });
      }} />
      <Problem />
      <Transformation />
      <Includes />
      <TransformationMap />
      <About />
      <Testimonials />
      <Packages onOpenFeedback={openFeedbackModal} />
      <CTA />
      <Footer />
      {currentPath !== '/success' && currentPath !== '/failure' && (
        <FloatingContact onOpenFeedback={openFeedbackModal} />
      )}
      <ModalForm 
        isOpen={modalOpen} 
        onClose={() => setModalOpen(false)} 
      />
    </>
  );
}

export default App;