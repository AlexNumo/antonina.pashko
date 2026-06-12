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
          <span className="section-label">Авторка практикуму</span>
          <h2>Антоніна Пашко</h2>
          <p className={styles.lead}>
            Я допомагаю жінкам, які вже побудували успішне життя, змінити його внутрішню ціну.
            Якщо ваші досягнення досі тримаються на тотальному контролі та надзусиллях — час трансформувати "треба" у свідоме й вільне "я хочу".
          </p>
          <p>
            17 років я супроводжую жінок у внутрішніх змінах без надриву.
            Мені важливо, щоб результат відчувався вже з першої практики:
            не просто інформація, а реальний внутрішній зсув.
          </p>

          <div className={styles.stats}>
            <div><strong>17+</strong><span>років практики</span></div>
            <div><strong>1350+</strong><span>жінок у змінах</span></div>
            <div><strong>70+</strong><span>авторських програм</span></div>
          </div>

          <div className={styles.premiumList}>
            <h3>Професійний бекграунд та регалії</h3>
            <ul>
              <li>Практикуючий психолог, коуч та енергопрактик</li>
              <li>Доктор філософії в сфері психологии Кембриджської академії</li>
              <li>Гранд-доктор філософії в області інформаційних технологій (психологія)</li>
              <li>Професорка психології та спікер європейського рівня</li>
              <li>Авторка більше 70 проектів присвячених розвитку особистості</li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}