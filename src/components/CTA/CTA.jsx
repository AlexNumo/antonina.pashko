import styles from './CTA.module.css';

export default function CTA() {
  return (
    <section className={styles.cta}>
      <span className="section-label">Перший крок</span>
      <h2>Ти вже знаєш, що хочеш по-іншому</h2>
      <p>
        7 днів. 15-30 хвилин на день. Без надриву і без обіцянки, що все зміниться
        за тиждень. З першим чесним кроком до себе справжньої.
      </p>
      <div className={styles.actions}>
        <a href="https://instagram.com/tonypashko" className="btn-primary">Написати ПЕРЕХІД</a>
        <a href="#packages" className="btn-secondary">Повернутись до пакетів</a>
      </div>
    </section>
  );
}
