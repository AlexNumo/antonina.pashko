import styles from './TransformationMap.module.css';

const before = [
  'Щось закінчилось, але ще незрозуміло що саме.',
  'Відпочинок не повертає сили.',
  'Складно зрозуміти, чого хочеться насправді.',
  'Важливі рішення постійно відкладаються.',
  'Є відчуття: "я більше не хочу так жити".',
];

const after = [
  'Зі мною все гаразд - я на порозі нового.',
  'Я бачу, куди реально йде моя енергія.',
  'Я знову чую свої справжні бажання.',
  'Я більше довіряю власним рішенням.',
  'Я знаю свій наступний чесний крок.',
];

export default function TransformationMap() {
  return (
    <section className={styles.map}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Трансформаційна карта</span>
          <h2>Не нове життя за тиждень. Ясність для наступного кроку.</h2>
        </div>

        <div className={styles.columns}>
          <article className={styles.panel}>
            <span className={styles.kicker}>Точка А · зараз</span>
            <ul>
              {before.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>

          <div className={styles.bridge} aria-hidden="true">→</div>

          <article className={`${styles.panel} ${styles.after}`}>
            <span className={styles.kicker}>Точка Б · після курсу</span>
            <ul>
              {after.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
