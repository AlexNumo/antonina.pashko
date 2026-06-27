import styles from './Includes.module.css';

const items = [
  {
    title: '8 відео-уроків',
    text: 'Короткі пояснення на 15-20 хвилин: що відбувається, чому це не криза і який внутрішній механізм зараз керує вибором.',
  },
  {
    title: '8 практик аудіо та PDF',
    text: 'Медитації, тілесні практики і внутрішні діалоги на 10-15 хвилин, щоб зміни відчувалися не лише головою.',
  },
  {
    title: 'Робочий зошит',
    text: 'Запитання для кожного дня: без правильних відповідей, оцінок і красивих формулювань - тільки чесність із собою.',
  },
];

export default function Includes() {
  return (
    <section id="includes" className={styles.includes}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Що всередині</span>
          <h2>План роботи на кожен день</h2>
        </div>

        <div className={styles.grid}>
          {items.map((item) => (
            <article className={styles.card} key={item.title}>
              
              <h3>{item.title}</h3>
              <p>{item.text}</p>
            </article>
          ))}
        </div>

        <div className={styles.note}>
          <strong>15-30 хвилин на день.</strong>
          <p>Проходиш у своєму темпі. Старт одразу після оплати. Доступ залишається <span>НАЗАВЖДИ</span>.</p>
        </div>
      </div>
    </section>
  );
}
