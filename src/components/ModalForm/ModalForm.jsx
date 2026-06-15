import { useState, useEffect, useRef } from 'react';
import styles from './ModalForm.module.css';
import { COURSE_CONFIG } from '../../config/courseConfig';

export default function ModalForm({ isOpen, onClose, selectedPackage, style }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', contact: '', message: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  const [showTermsError, setShowTermsError] = useState(false);

  // Реф для автоматичного фокусу на перше поле
  const nameInputRef = useRef(null);
  
  const handleCloseWithReset = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setLoading(false);
      setAcceptedTerms(false);
      setShowTermsError(false);
      setFormValues({ name: '', contact: '', message: '' });
    }, 300);
  };

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseWithReset();
      }
    };

    if (isOpen) {
      const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
      
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
      document.body.style.paddingRight = `${scrollbarWidth}px`;

      // Робимо мікро-таймаут, щоб фокус спрацював після того, як відпрацює CSS-анімація появи модалки
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

  // Функція для красивого форматування контактів (прибирання лінків та знаків @)
  const cleanContactInput = (input) => {
    let clean = input.trim();
    
    // Якщо це email — повертаємо як є, тільки в нижньому регістрі
    if (clean.includes('@') && clean.includes('.')) {
      return clean.toLowerCase();
    }
    
    // Якщо користувач вставив повне посилання на соцмережі, витягуємо тільки нік
    clean = clean.replace(/^(https?:\/\/)?(www\.)?(instagram\.com|instagr\.am|t\.me)\//i, '');
    
    // Видаляємо знак @ з початку нікнейму для однорідності бази
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
    
    const matchedPackage = Object.values(COURSE_CONFIG.packages).find(
      (pkg) => pkg.name === selectedPackage
    );
    const currentPrice = matchedPackage ? matchedPackage.price : 'Уточнюється особисто';

    const now = new Date();
    const formattedDate = now.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const fullDateTime = `${formattedDate} ${formattedTime}`;

    // Очищаємо та валідуємо фінальні дані перед відправкою
    const finalData = {
      dateTime: fullDateTime,
      packageName: selectedPackage || 'Зворотній звʼязок (загальний)',
      price: currentPrice,
      name: formValues.name.trim(),
      contact: cleanContactInput(formValues.contact),
      message: formValues.message.trim()
    };

    // Додаткова міні-перевірка: якщо після очищення поля виявилися порожніми
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
        setTimeout(() => { handleCloseWithReset(); }, 4000);
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
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={handleCloseWithReset} style={style}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleCloseWithReset}>×</button>

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
              <h3>Форма запису</h3>
              <p>Заявка на формат: <strong>{selectedPackage || 'Обрати особисто з Антоніною'}</strong></p>
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
                maxLength={60} // 👈 Звичайна людина не має імені довше 60 символів
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
                maxLength={100} // 👈 Для нікнейму чи пошти цього з головою
              />
            </label>

            <label className={styles.fieldLabel}>
              Що важливо передати Антоніні?
              <textarea 
                rows="4" 
                placeholder="Коротко про твій запит або життєву ситуацію..." 
                value={formValues.message} 
                onChange={(e) => setFormValues({...formValues, message: e.target.value})} 
                required 
                disabled={loading} 
                maxLength={800} // 👈 Оптимальний ліміт для опису ситуації (близько 2 абзаців)
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
              {loading ? 'Надсилаю...' : `Записатися ${selectedPackage ? `на "${selectedPackage}"` : ''}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}