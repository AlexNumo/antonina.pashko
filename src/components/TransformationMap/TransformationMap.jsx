import styles from './TransformationMap.module.css';

// Об'єднуємо дані попарно, щоб вони строго відповідали один одному
const steps = [
  {
    id: 1,
    before: 'Щось закінчилося, але ще незрозуміло що саме.',
    after: 'Зі мною все гаразд — я на порозі нового.'
  },
  {
    id: 2,
    before: 'Відпочинок не повертає сили.',
    after: 'Я бачу, куди реально йде моя енергія.'
  },
  {
    id: 3,
    before: 'Складно зрозуміти, чого хочеться насправді.',
    after: 'Я знову чую свої справжні бажання.'
  },
  {
    id: 4,
    before: 'Важливі рішення постійно відкладаються.',
    after: 'Я більше довіряю своїм рішенням.'
  },
  {
    id: 5,
    before: 'Є відчуття: "я більше не хочу так жити".',
    after: 'Я знаю свій наступний чесний крок.'
  },
];

export default function TransformationMap() {
  return (
    <section className={styles.map}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Трансформаційна карта</span>
          <h2>Не нове життя за тиждень. Ясність для наступного кроку.</h2>
        </div>

        {/* Заголовки стовпчиків, які видно на десктопі */}
        <div className={styles.tableHeaders}>
          <div className={styles.columnTitle}>ЗАРАЗ</div>
          <div className={styles.columnTitleSpacer}></div>
          <div className={styles.columnTitle}>ПІСЛЯ КУРСУ</div>
        </div>

        <div className={styles.rowsList}>
          {steps.map((step) => (
            <div key={step.id} className={styles.transformationRow}>
              
              {/* Блок ДО */}
              <div className={styles.beforeCell}>
                <span className={styles.mobileBadgeBefore}>Зараз:</span>
                <p>{step.before}</p>
              </div>

              {/* Стрілочка-міст між ними */}
              <div className={styles.bridgeCell} aria-hidden="true">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M5 12H19M19 12L13 6M19 12L13 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>

              {/* Блок ПІСЛЯ */}
              <div className={styles.afterCell}>
                <span className={styles.mobileBadgeAfter}>Після курсу:</span>
                <p>{step.after}</p>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}