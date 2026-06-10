import { useState, useEffect } from 'react';
import styles from './ModalForm.module.css';
import { COURSE_CONFIG } from '../../config/courseConfig';

export default function ModalForm({ isOpen, onClose, selectedPackage, style }) {
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false); // Стан завантаження для інтерфейсу кнопки
  const [formValues, setFormValues] = useState({ name: '', contact: '', message: '' });

  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'Escape' && isOpen) {
        handleCloseWithReset();
      }
    };

    if (isOpen) {
      document.addEventListener('keydown', handleKeyDown);
      document.body.style.overflow = 'hidden';
    }

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
      document.body.style.overflow = '';
    };
  }, [isOpen]);

  const handleCloseWithReset = () => {
    onClose();
    setTimeout(() => {
      setSent(false);
      setLoading(false);
      setFormValues({ name: '', contact: '', message: '' });
    }, 300);
  };

  const handleFormSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Забираємо безпечні змінні з оточення Vite (.env)
    const TELEGRAM_BOT_TOKEN = import.meta.env.VITE_TELEGRAM_BOT_TOKEN;
    const TELEGRAM_CHAT_ID = import.meta.env.VITE_TELEGRAM_CHAT_ID;
    const GOOGLE_SCRIPT_URL = import.meta.env.VITE_GOOGLE_SCRIPT_URL;
    
    // Автоматично шукаємо ціну за назвою пакета з нашого єдиного конфігу
    const matchedPackage = Object.values(COURSE_CONFIG.packages).find(
      (pkg) => pkg.name === selectedPackage
    );
    const currentPrice = matchedPackage ? matchedPackage.price : 'Уточнюється особисто';

    const now = new Date();
    const formattedDate = now.toLocaleDateString('uk-UA', { day: '2-digit', month: '2-digit', year: 'numeric' });
    const formattedTime = now.toLocaleTimeString('uk-UA', { hour: '2-digit', minute: '2-digit' });
    const fullDateTime = `${formattedDate} ${formattedTime}`;

    // --- ФОНОВА ВІДПРАВКА В GOOGLE ТАБЛИЦЮ ---
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
          mode: 'no-cors', // Оминаємо політику CORS для Google Apps Script
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(googleSheetData),
        });
      } catch (err) {
        console.error('Помилка запису в Google Таблицю:', err);
      }
    }

    // --- ВІДПРАВКА В TELEGRAM ---
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
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          chat_id: TELEGRAM_CHAT_ID,
          text: telegramMessage,
          parse_mode: 'Markdown'
        }),
      });

      if (response.ok) {
        setSent(true);
        setTimeout(() => {
          handleCloseWithReset();
        }, 4000);
      } else {
        alert('Сталася помилка при відправці. Спробуйте ще раз або напишіть в Instagram.');
        setLoading(false);
      }
    } catch (error) {
      console.error('Помилка відправки в Telegram:', error);
      alert('Немає зв’язку з сервером. Перевірте інтернет.');
      setLoading(false);
    }
  };

  return (
    <div 
      className={`${styles.overlay} ${isOpen ? styles.overlayOpen : ''}`}
      onClick={handleCloseWithReset}
      style={style}
    >
      <div 
        className={styles.modal} 
        onClick={(e) => e.stopPropagation()} 
      >
        <button 
          className={styles.closeBtn} 
          onClick={handleCloseWithReset}
          aria-label="Закрити модальне вікно"
        >
          ×
        </button>

        {sent ? (
          <div className={styles.successState}>
            <div className={styles.successIcon}>✓</div>
            <h3>Запит успішно надіслано!</h3>
            <p>
              Антоніна вже отримала твої дані у Telegram і зв'яжеться з тобою найближчим часом.
            </p>
          </div>
        ) : (
          <form className={styles.form} onSubmit={handleFormSubmit}>
            <div className={styles.formHeader}>
              <h3>Форма запису</h3>
              <p>Заявка на формат: <strong>{selectedPackage || 'Обрати особисто з Антоніною'}</strong></p>
            </div>

            <label>
              Ім'я
              <input 
                type="text" 
                placeholder="Як до тебе звертатись" 
                value={formValues.name}
                onChange={(e) => setFormValues({...formValues, name: e.target.value})}
                required 
                disabled={loading}
              />
            </label>
            
            <label>
              Контакт для зв'язку
              <input 
                type="text" 
                placeholder="Твій Instagram нік, Telegram або email" 
                value={formValues.contact}
                onChange={(e) => setFormValues({...formValues, contact: e.target.value})}
                required 
                disabled={loading}
              />
            </label>
            
            <label>
              What is important to transfer to Antonina?
              <textarea 
                rows="4" 
                placeholder="Коротко про твій запит або життєву ситуацію..." 
                value={formValues.message}
                onChange={(e) => setFormValues({...formValues, message: e.target.value})}
                required 
                disabled={loading}
              />
            </label>
            
            <button type="submit" className={styles.submitBtn} disabled={loading}>
              {loading ? 'Надсилаю...' : `Записатися ${selectedPackage ? `на "${selectedPackage}"` : ''}`}
            </button>
          </form>
        )}
      </div>
    </div>
  );
}