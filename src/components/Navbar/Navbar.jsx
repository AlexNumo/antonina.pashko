import styles from './Navbar.module.css';

export default function Navbar() {
  return (
    <nav className={styles.siteNav} aria-label="Головна навігація">
      <a href="/#" className={styles.navLogo} aria-label="Антоніна Пашко — на початок">
        <div 
          className={styles.logoMonogram} 
          aria-hidden="true"
        >
        </div>
        <span className={styles.logoText}>Антоніна Пашко</span>
      </a>
      
      <ul className={styles.navLinks}>
        <li><a href="/#program">Програма</a></li>
        <li><a href="/#about">Спікер</a></li>
        <li>
          <a href="/#packages" className={styles.navCta}>
            ЗАПИСАТИСЯ
          </a>
        </li>
      </ul>
    </nav>
  );
}