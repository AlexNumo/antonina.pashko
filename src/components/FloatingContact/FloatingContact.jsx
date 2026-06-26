import { useState } from 'react';
import styles from './FloatingContact.module.css';

export default function FloatingContact({ onOpenFeedback }) {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className={styles.wrapper}>
      {/* Маленькі кнопки, які вилітають вгору при відкритті */}
      <div className={`${styles.popups} ${isOpen ? styles.popupsOpen : ''}`}>
        
        {/* Кнопка 1: Telegram Бот */}
        <div className={styles.btnContainer}>
          <span className={styles.tooltip}>Telegram Бот</span>
          <a 
            href="https://t.me/tochka_perehodu_bot"
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.subBtn} ${styles.tgBtn}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm4.64 6.8c-.12.89-.53 3.32-.74 4.46-.09.48-.27.64-.44.66-.37.03-.65-.25-.93-.43-.44-.29-.69-.47-1.12-.75-.5-.32-.18-.5.11-.8.08-.07 1.41-1.29 1.43-1.38.01-.01.01-.04-.01-.06-.02-.02-.05-.01-.07 0-.03.01-2.1 1.42-5.94 4.01-.56.39-1.07.58-1.52.56-.5-.01-1.46-.28-2.17-.51-.87-.29-1.56-.44-1.5-.94.03-.26.39-.53 1.07-.81 4.19-1.82 6.99-3.02 8.4-3.6 4.01-1.65 4.84-1.94 5.38-1.95.12 0 .38.03.55.17.14.11.18.27.2.42-.02.06-.01.21-.03.38z"/>
            </svg>
          </a>
        </div>

        {/* Кнопка 2: Instagram */}
        <div className={styles.btnContainer}>
          <span className={styles.tooltip}>Instagram спікера</span>
          <a 
            href="https://instagram.com/tonypashko"
            target="_blank" 
            rel="noopener noreferrer" 
            className={`${styles.subBtn} ${styles.instaBtn}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
              <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
              <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
            </svg>
          </a>
        </div>

        {/* Кнопка 3: Модалка з запитанням */}
        <div className={styles.btnContainer}>
          <span className={styles.tooltip}>Задати питання</span>
          <button 
            onClick={() => {
              onOpenFeedback('Запитання щодо курсу');
              setIsOpen(false);
            }}
            className={`${styles.subBtn} ${styles.questionBtn}`}
          >
            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2zM12 7v4M12 14h.01"/>
            </svg>
          </button>
        </div>
      </div>

      {/* Головна кнопка-тригер */}
      <div className={styles.btnContainer}>
        {!isOpen && <span className={styles.tooltip}>Зв'язок / Питання</span>}
        <button 
          className={`${styles.mainBtn} ${isOpen ? styles.mainBtnActive : ''}`} 
          onClick={toggleMenu}
          aria-label="Зв'язатися з нами"
        >
          <span className={styles.iconContainer}>
            {isOpen ? '×' : '?'}
          </span>
        </button>
      </div>
    </div>
  );
}