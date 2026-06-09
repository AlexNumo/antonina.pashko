import styles from './Transformation.module.css';

const days = [
  {
    id: '01',
    title: 'Я не втратила мотивацію. Я переросла.',
    result: 'Побачити, що ти не в тупику, а на порозі нового етапу.',
  },
  {
    id: '02',
    title: 'Що насправді забирає мою енергію.',
    result: 'Знайти реальні витоки ресурсу в своєму дні, а не абстрактну втому.',
  },
  {
    id: '03',
    title: 'Що я тримаю - і боюсь відпустити.',
    result: 'Побачити ціну утримання старого і чесно назвати страх змін.',
  },
  {
    id: '04',
    title: 'Зустріч із собою справжньою.',
    result: 'Почути себе за межами ролей, очікувань і постійного "треба".',
  },
  {
    id: '05',
    title: 'Чому не дозволяю собі більшого.',
    result: 'Розпізнати внутрішню стелю і переконання, які обмежують наступний рівень.',
  },
  {
    id: '06',
    title: 'Рішення вже є. Я боюсь його почути.',
    result: 'Повернути довіру до власного рішення, яке давно відкладалось.',
  },
  {
    id: '07',
    title: 'Що змінюється - і який мій наступний крок.',
    result: 'Завершити тиждень із ясністю і маленьким, але справжнім кроком.',
  },
];

export default function Transformation() {
  return (
    <section className={styles.journey} id="program">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Програма</span>
          <h2>7 днів, які повертають контакт із собою</h2>
          <p>
            Кожен день має відео, аудіо-практику і запитання в робочому зошиті.
            Не для ривка. Для чесного внутрішнього зсуву.
          </p>
        </div>

        <div className={styles.timeline}>
          {days.map((day) => (
            <article className={styles.day} key={day.id}>
              <span className={styles.dayId}>День {day.id}</span>
              <h3>{day.title}</h3>
              <p>{day.result}</p>
              <small>Відео 15-20 хв · аудіо 10-15 хв · зошит</small>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
