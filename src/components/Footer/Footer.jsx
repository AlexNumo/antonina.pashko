import styles from './Footer.module.css';

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.container}>
        
        <div className={styles.brand}>
          <span>Антоніна Пашко</span>
          <a href="https://instagram.com/tonypashko" target="_blank" rel="noreferrer" className={styles.instagram}>
            @tonypashko
          </a>
        </div>

        <div className={styles.legal}>
          <a href="/privacy.html" target="_blank" rel="noreferrer">
            Політика конфіденційності
          </a>
          <a href="/terms.html" target="_blank" rel="noreferrer">
            Публічна оферта
          </a>
        </div>
        
        <div className={styles.copyright}>
          <small>© 2026 · Точка переходу</small>
          <small className={styles.allRights}>Усі права захищено</small>
        </div>

      </div>
    </footer>
  );
}