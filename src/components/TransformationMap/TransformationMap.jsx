import styles from './TransformationMap.module.css';

const steps = [
  {
    id: '1',
    before: 'Щось закінчилося, але ще незрозуміло що саме.',
    after: 'Зі мною все гаразд — я на порозі масштабного нового.'
  },
  {
    id: '2',
    before: 'Звичний відпочинок більше не повертає сили.',
    after: 'Я чітко бачу, куди насправді витікає моя енергія.'
  },
  {
    id: '3',
    before: 'Стало занадто складно зрозуміти, чого хочеться насправді.',
    after: 'Я знову чую свій внутрішній голос та справжні бажання.'
  },
  {
    id: '4',
    before: 'Важливі рішення роками відкладаються «на потім».',
    after: 'Я тотально довіряю собі та дію без сумнівів.'
  },
  {
    id: '5',
    before: 'Внутрішній крик: «Я більше не хочу і не буду так жити».',
    after: 'Я знаю свій наступний чесний, автономний крок.'
  },
];

export default function TransformationMap() {
  return (
    <section className={styles.map}>
      <div className={styles.container}>
        
        <div className={styles.header}>
          <span className="section-label">Трансформація</span>
          <h2>Не нове життя за тиждень.<br />Ясність для твого наступного кроку.</h2>
        </div>

        <div className={styles.track}>
          {steps.map((step) => (
            <div key={step.id} className={styles.card}>
              
              <div className={styles.stepNumber}>{step.id}</div>
              
              <div className={styles.cardContent}>
                <div className={styles.beforeState}>
                  <span className={styles.labelMuted}>Ілюзія контролю</span>
                  <p>{step.before}</p>
                </div>

                <div className={styles.transitionDivider}>
                  <div className={styles.glowLine}></div>
                </div>

                <div className={styles.afterState}>
                  <span className={styles.labelGold}>Нова опора</span>
                  <p>{step.after}</p>
                </div>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
}