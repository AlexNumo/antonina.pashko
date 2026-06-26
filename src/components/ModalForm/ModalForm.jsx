import { useState, useEffect, useRef } from 'react';
import styles from './ModalForm.module.css';

export default function ModalForm({ isOpen, onClose, style }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', contact: '', message: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);

  const nameInputRef = useRef(null);
  
  const resetFormState = () => {
    setSent(false);
    setLoading(false);
    setAcceptedTerms(false);
    setShowTermsError(false);
    setFormValues({ name: '', contact: '', message: '' });
  };

  const handleSimpleClose = () => {
    onClose();
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleSimpleClose();
      }
    };

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      setTimeout(() => {
        nameInputRef.current?.focus();
      }, 100);
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
      document.body.style.paddingRight = '';
    };
  }, [isOpen]);

  const cleanContactInput = (input) => {
    let clean = input.trim();
    
    if (clean.includes('@') && clean.includes('.')) {
      return clean.toLowerCase();
    }
    
    clean = clean.replace(/^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am|t\.me)\//i, '');
    clean = clean.replace(/^@/, '');
    
    return clean;
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    if (!acceptedTerms) {
      setShowTermsError(true);
      return;
    }
    
    setShowTermsError(false);
    setLoading(true);

    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    const now = new Date();
    const formattedDate = now.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const fullDateTime = `${formattedDate} ${formattedTime}`;

    const finalData = {
      dateTime: fullDateTime,
      packageName: 'Зворотній звʼязок (загальний)',
      name: formValues.name.trim(),
      contact: cleanContactInput(formValues.contact),
      message: formValues.message.trim()
    };

    if (!finalData.name || !finalData.contact) {
      alert('Будь ласка, заповніть поля коректно.');
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(GOOGLE_SCRIPT_URL, {
        method: 'POST',
        mode: 'cors',
        headers: { 'Content-Type': 'text/plain' }, 
        body: JSON.stringify(finalData),
      });

      if (response.ok) {
        setSent(true);
        setLoading(false);
        setTimeout(() => { 
          onClose();
          setTimeout(() => {
            resetFormState();
          }, 300);
        }, 4000);
      } else {
        throw new Error('Сервер повернув помилку');
      }

    } catch (error) {
      console.error('Помилка відправки форми:', error);
      alert('Помилка з\'єднання. Спробуйте ще раз.');
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={handleSimpleClose} style={style}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleSimpleClose}>×</button>

        {sent ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <h3>Запит успішно надіслано!</h3>
            <p>Антоніна вже отримала твої дані у Telegram і зв'яжеться з тобою найближчим часом.</p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.formHeader}>
              <h3>Зворотній зв'язок</h3>
              <p>Задай своє питання спікеру</p>
            </div>

            <label className={styles.fieldLabel}>
              Ім'я
              <input 
                ref={nameInputRef}
                type="text" 
                placeholder="Як до тебе звертатись" 
                value={formValues.name} 
                onChange={(e) => setFormValues({...formValues, name: e.target.value})} 
                required 
                disabled={loading} 
                maxLength={60}
              />
            </label>

            <label className={styles.fieldLabel}>
              Контакт для зв'язку
              <input 
                type="text" 
                placeholder="Твій Instagram нік, Telegram або email" 
                value={formValues.contact} 
                onChange={(e) => setFormValues({...formValues, contact: e.target.value})} 
                required 
                disabled={loading} 
                maxLength={100}
              />
            </label>

            <label className={styles.fieldLabel}>
              Твоє запитання
              <textarea 
                rows="4" 
                placeholder="Коротко про твій запит або життєву ситуацію..." 
                value={formValues.message} 
                onChange={(e) => setFormValues({...formValues, message: e.target.value})} 
                required 
                disabled={loading} 
                maxLength={800}
              />
            </label>
            
            <div className={styles.termsWrapper}>
              <div className={styles.termsCheckbox}>
                <input 
                  type="checkbox" 
                  id="terms" 
                  checked={acceptedTerms}
                  onChange={(e) => {
                    setAcceptedTerms(e.target.checked);
                    if(e.target.checked) setShowTermsError(false);
                  }}
                  disabled={loading}
                />
                <label htmlFor="terms" className={styles.termsLabel}>
                  Я згоден(а) з <a href="/terms.html" target="_blank" rel="noreferrer">Публічною офертою</a> та <a href="/privacy.html" target="_blank" rel="noreferrer">Політикою конфіденційності</a>
                </label>
              </div>
              
              {showTermsError && (
                <span className={styles.errorMessage}>
                  ⚠️ Будь ласка, ознайомтеся та підтвердьте згоду з умовами.
                </span>
              )}
            </div>
            
            <button 
              type="submit" 
              className={styles.submitBtn} 
              disabled={loading}
            >
              {loading ? 'Надсилаю...' : 'Надіслати запитання'}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}