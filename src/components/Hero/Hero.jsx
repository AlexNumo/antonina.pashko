import heroPhoto from '../../assets/antonina-city.jpg';
import styles from './Hero.module.css';

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span className="section-label">7-денний онлайн-процес</span>
        <h1>Точка переходу</h1>
        <p className={styles.lead}>
          Я більше не хочу так жити. Але поки не бачу як по-іншому.
        </p>
        <p className={styles.body}>
          Для жінок, у яких зовні все ніби добре, але всередині все частіше з'являється чесне відчуття:
          так більше не хочу.
        </p>

        <div className={styles.facts} aria-label="Ключові параметри курсу">
          <span>7 днів</span>
          <span>15-30 хв/день</span>
          <span>доступ назавжди</span>
        </div>

        <div className={styles.price}>
          <span className={styles.current}>€20</span>
          <span className={styles.old}>€100</span>
          <span className={styles.note}>ціна першого потоку</span>
        </div>

        <div className={styles.actions}>
          <a href="https://instagram.com/tonypashko" className="btn-primary">Написати ПЕРЕХІД</a>
          <a href="#program" className="btn-secondary">Подивитись програму</a>
        </div>
      </div>

      <div className={styles.visual}>
        <img src={heroPhoto} alt="Антоніна Пашко" />
        <div className={styles.quote}>
          <p>Це не криза. Це точка переходу.</p>
          <span>Не більше зусиль - а зупинка і чесна розмова з собою.</span>
        </div>
      </div>
    </section>
  );
}
