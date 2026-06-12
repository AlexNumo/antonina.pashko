import heroPhoto from '../../assets/antonina-city.jpg';
import styles from './Hero.module.css';
import { COURSE_CONFIG } from '../../config/courseConfig';
// 1. Імпортуємо наш компонент акції
// import DiscountBadge from '../DiscountBadge/DiscountBadge'; 

export default function Hero({ onSelectPackage }) {
  const basePkg = COURSE_CONFIG.packages.base;

  return (
    <section className={styles.hero}>
      <div className={styles.copy}>
        <span className="section-label">{COURSE_CONFIG.subtitle}</span>
        <h1>{COURSE_CONFIG.title}</h1>
        <p className={styles.lead}>
          Я чітко усвідомлюю, що готова змінити своє життя, але мені не вистачає орієнтирів, куди рухатися далі
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

        {/* 2. Додаємо inline-стиль відносної позиції для всього блоку ціни */}
        <div className={styles.price} style={{ position: 'relative', width: 'fit-content' }}>
          {/* <DiscountBadge oldPrice={basePkg.oldPrice} newPrice={basePkg.price} /> */}

          <span className={styles.current}>{basePkg.price}</span>
          <span className={styles.old}>{basePkg.oldPrice}</span>
          <span className={styles.note}>ціна першого потоку</span>
        </div>

        <div className={styles.actions}>
          <button 
            type="button"
            onClick={() => onSelectPackage(basePkg.name)} 
            className="btn-primary"
            style={{ border: 0, cursor: 'pointer' }}
          >
            Записатися на {basePkg.name.toLowerCase()} курс
          </button>
          <a href="#program" className="btn-secondary">Подивитись програму</a>
        </div>
      </div>
      <div className={styles.visual}>
        <img src={heroPhoto} alt="Антоніна Пашко" />
        <div className={styles.quote}>
          <p>Це не криза. Це точка переходу.</p>
          <span>Не більше зусиль - а зупинка і чесна розмова із собою.</span>
        </div>
      </div>
    </section>
  );
}