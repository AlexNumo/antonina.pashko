import styles from './Problem.module.css';

const signs = [
  'Спокій з\'являється тільки тоді, коли "все встигла".',
  'Відпочинок треба заслужити або пояснити собі, чому зараз можна.',
  'Автоматично береш на себе більше, ніж повинна.',
  'Легше дати, ніж попросити чи прийняти підтримку.',
  'Боляче, коли твої зусилля не помітили або не оцінили.',
  'Страшно розслабитись, ніби тоді все почне сипатися.',
  'Після досягнень швидко стає мало: треба більше, краще, ще один рівень.',
];

export default function Problem() {
  return (
    <section className={styles.problem}>
      <div className={styles.header}>
        <span className="section-label">Це про тебе?</span>
        <h2>7 ознак, що ти досі заслуговуєш свою цінність</h2>
        <p>
          Якщо відгукуються хоча б 3-4 пункти, це сигнал: твоя цінність ще прив'язана
          до корисності, сили, результату або схвалення.
        </p>
      </div>

      <div className={styles.grid}>
        {signs.map((sign, index) => (
          <article className={styles.sign} key={sign}>
            <span>{String(index + 1).padStart(2, '0')}</span>
            <p>{sign}</p>
          </article>
        ))}
      </div>

      <div className={styles.insight}>
        <strong>Важливо:</strong>
        <p>
          З тобою не "щось не так". Колись сила, правильність і вміння витримувати
          допомогли вижити. Але сьогодні вони можуть забирати живість.
        </p>
      </div>
    </section>
  );
}
