import { useState, useEffect } from 'react';
import styles from './ModalForm.module.css';
import { COURSE_CONFIG } from '../../config/courseConfig';

export default function ModalForm({ isOpen, onClose, selectedPackage, style }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);
  const [formValues, setFormValues] = useState({ name: '', contact: '', message: '' });
  const [acceptedTerms, setAcceptedTerms] = useState(false);
  
  // Стейт для відображення помилки валідації чекбокса
  const [showTermsError, setShowTermsError] = useState(false);

  useEffect(() => {
  const handleKeyDown = (e) => {
    if (e.key === 'Escape' && isOpen) {
      handleCloseWithReset();
    }
  };

  if (isOpen) {
    // Обчислюємо реальну ширину скролбару користувача
    const scrollbarWidth = window.innerWidth - document.documentElement.clientWidth;
    
    document.addEventListener('keydown', handleKeyDown);
    document.body.style.overflow = 'hidden';
    // Додаємо компенсацію відступу, щоб сайт не смикався
    document.body.style.paddingRight = `${scrollbarWidth}px`;
  }

  return () => {
    document.removeEventListener('keydown', handleKeyDown);
    document.body.style.overflow = '';
    // Повертаємо як було
    document.body.style.paddingRight = '';
  };
  }, [isOpen]);

  const handleCloseWithReset = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setLoading(false);
      setAcceptedTerms(false);
      setShowTermsError(false); // Скидаємо помилку
      setFormValues({ name: '', contact: '', message: '' });
    }, 300);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    
    // Перевірка чекбокса: якщо не відмічено, показуємо помилку та зупиняємо відправку
    if (!acceptedTerms) {
      setShowTermsError(true);
      return;
    }
    
    setShowTermsError(false);
    setLoading(true);

    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    const matchedPackage = Object.values(COURSE_CONFIG.packages).find(
      (pkg) => pkg.name === selectedPackage
    );
    const currentPrice = matchedPackage ? matchedPackage.price : 'Уточнюється особисто';

    const now = new Date();
    const formattedDate = now.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const fullDateTime = `${formattedDate} ${formattedTime}`;

    if (GOOGLE_SCRIPT_URL) {
      const googleSheetData = {
        dateTime: fullDateTime,
        packageName: selectedPackage || 'Зворотній звʼязок (загальний)',
        price: currentPrice,
        name: formValues.name,
        contact: formValues.contact,
        message: formValues.message
      };
      try {
        fetch(GOOGLE_SCRIPT_URL, {
          method: 'POST',
          mode: 'no-cors',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(googleSheetData),
        });
      } catch (err) {
        console.error('Помилка Google Таблиць:', err);
      }
    }

    const telegramMessage = `
🔔 *Нова заявка із сайту!*
----------------------------------
📌 *Параметри замовлення:*
• *Курс:* ${COURSE_CONFIG.title}
• *Дата:* ${formattedDate}
• *Час:* ${formattedTime}
• *Обраний тариф:* ${selectedPackage || 'Зворотній звʼязок (загальний)'}
• *Вартість:* ${currentPrice}

👤 *Дані клієнта:*
• *Ім'я:* ${formValues.name}
• *Контакт для зв'язку:* ${formValues.contact}

💬 *Запит користувача:*
"${formValues.message}"
----------------------------------
    `.trim();

    try {
      const response = await fetch(`https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text: telegramMessage, parse_mode: 'Markdown' }),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => { handleCloseWithReset(); }, 4000);
      } else {
        alert('Помилка відправки. Спробуйте ще раз.');
        setLoading(false);
      }
    } catch (error) {
      console.error(error);
      setLoading(false);
    }
  };

  return (
    <div className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`} onClick={handleCloseWithReset} style={style}>
      <div className={styles.modal} onClick={(e) => e.stopPropagation()}>
        <button className={styles.closeBtn} onClick={handleCloseWithReset}>×</button>

        {sent ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
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
              <input type="text" placeholder="Як до тебе звертатись" value={formValues.name} onChange={(e) => setFormValues({...formValues, name: e.target.value})} required disabled={loading} />
            </label>
            
            <label className={styles.fieldLabel}>
              Контакт для зв'язку
              <input type="text" placeholder="Твій Instagram нік, Telegram або email" value={formValues.contact} onChange={(e) => setFormValues({...formValues, contact: e.target.value})} required disabled={loading} />
            </label>
            
            <label className={styles.fieldLabel}>
              Що важливо передати Антоніні?
              <textarea rows="4" placeholder="Коротко про твій запит або життєву ситуацію..." value={formValues.message} onChange={(e) => setFormValues({...formValues, message: e.target.value})} required disabled={loading} />
            </label>
            
            {/* Блок чекбокса */}
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
              
              {/* Візуальне повідомлення про помилку */}
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