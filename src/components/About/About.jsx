import portrait from '../../assets/antonina-portrait.jpg';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        <div className={styles.photoWrap}>
          <img src={portrait} alt="Антоніна Пашко" />
        </div>

        <div className={styles.copy}>
          <span className="section-label">Авторка процесу</span>
          <h2>Антоніна Пашко</h2>
          <p className={styles.lead}>
            Я працюю з жінками, які вже сильні, досягли результату, але більше не хочуть
            жити через контроль, напругу і постійне "треба".
          </p>
          <p>
            17 років я супроводжую жінок у внутрішніх змінах без надриву.
            Мені важливо, щоб результат відчувався вже з першої практики:
            не просто інформація, а реальний внутрішній зсув.
          </p>

          <div className={styles.stats}>
            <div><strong>17+</strong><span>років практики</span></div>
            <div><strong>1500+</strong><span>жінок у змінах</span></div>
            <div><strong>70+</strong><span>авторських програм</span></div>
          </div>

          <div className={styles.credentials}>
            <span>Кандидат психологічних наук</span>
            <span>Професор психології</span>
            <span>Енерготерапевт</span>
          </div>
        </div>
      </div>
    </section>
  );
}
