import portrait from '../../assets/antonina-portrait.jpeg';
import styles from './About.module.css';

export default function About() {
  return (
    <section className={styles.about} id="about">
      <div className={styles.inner}>
        
        <div className={styles.photoWrap}>
          <img src={portrait} alt="Антоніна Пашко" />
          <div className={styles.photoGlow}></div>
        </div>

        <div className={styles.copy}>
          <span className="section-label">Авторка практикуму</span>
          <h2>Антоніна Пашко</h2>
          
          <div className={styles.leadBlock}>
            <p className={styles.lead}>
              Я працюю з жінками, які стоять на межі змін. Старе життя вже стало тісним, але поки немає ясності, як саме хочеться жити далі.
            </p>
            <p className={styles.subLead}>
              У цей момент важливо не тиснути на себе ще сильніше, а почути, чого ти насправді прагнеш. 17 років я супроводжую людей у внутрішніх транзитах без надриву та напруги. Мені важливо, щоб реальний внутрішній зсув ви відчули вже з першої практики.
            </p>
          </div>

          <div className={styles.stats}>
            <div className={styles.statBox}>
              <strong>17+</strong>
              <span>років практики</span>
            </div>
            <div className={styles.statBox}>
              <strong>1350+</strong>
              <span>жінок у змінах</span>
            </div>
            <div className={styles.statBox}>
              <strong>70+</strong>
              <span>авторських програм</span>
            </div>
          </div>

          <div className={styles.premiumList}>
            <h3>Професійний бекграунд та регалії</h3>
            <ul>
              <li>Практикуючий психолог, коуч та енергопрактик</li>
              <li>Доктор філософії у сфері психології Кембриджської академії</li>
              <li>Гранд-доктор філософії в галузі інформаційних технологій (психологія)</li>
              <li>Професорка психології та спікерка європейського рівня</li>
              <li>Авторка понад 70 проєктів, присвячених розвитку особистості</li>
            </ul>
          </div>
          
        </div>
      </div>
    </section>
  );
}