import { motion } from 'framer-motion';
import styles from './Transformation.module.css';

const days = [
  {
    id: '1',
    title: 'Я не втратила мотивацію. Я переросла.',
    result: 'Побачити, що ти не в тупику, а на порозі нового етапу.',
  },
  {
    id: '2',
    title: 'Що насправді забирає мою енергію.',
    result: 'Знайти реальні джерела ресурсу в своєму дні, а не абстрактну втому.',
  },
  {
    id: '3',
    title: 'Що я тримаю — і боюсь відпустити.',
    result: 'Побачити ціну утримання старого і чесно назвати страх змін.',
  },
  {
    id: '4',
    title: 'Зустріч із собою справжньою.',
    result: 'Почути себе за межами ролей, очікувань і постійного "треба".',
  },
  {
    id: '5',
    title: 'Точка відчаю. (новий урок)',
    result: 'Як не загубити себе в лімінальному просторі «між» старим і новим.',
  },
  {
    id: '6',
    title: 'Чому я не дозволяю собі більшого.',
    result: 'Розпізнати внутрішню стелю, core beliefs та переконання, які обмежують наступний рівень.',
  },
  {
    id: '7',
    title: 'Рішення вже є. Я просто боюсь його почути.',
    result: 'Як розрізнити страх і справжнє «ні», увімкнути тілесний відгук і довіритись собі.',
  },
  {
    id: '8',
    title: 'Що змінюється, коли змінюєшся ти.',
    result: 'Інтеграція всього тижня, захист від нейросаботажу та твій перший чесний крок.',
    isBonus: true // Виділяємо фінальний день як день інтеграції (концепція 7+1)
  },
];

export default function Transformation() {
  return (
    <section className={styles.journey} id="program">
      <div className={styles.container}>
        <div className={styles.header}>
          <div>
            <span className="section-label">Програма</span>
            <h2>7+1 днів, які повертають контакт із собою</h2>
          </div>
          <p>
            Кожен день має відео, аудіо-практику і запитання в робочому зошиті.
            Не для ривка. Для чесного внутрішнього зсуву.
          </p>
        </div>

        <div className={styles.timeline}>
          {days.map((day) => {
            const isBonusDay = day.isBonus;
            
            return (
              <motion.article 
                className={`
                  ${styles.day} 
                  ${isBonusDay ? styles.bonusDay : ''}
                `} 
                key={day.id}
                whileHover={{ 
                  y: -4, 
                  borderColor: isBonusDay ? 'rgba(226, 187, 253, 0.4)' : 'rgba(212, 163, 115, 0.25)',
                  backgroundColor: isBonusDay ? 'rgba(38, 30, 45, 0.8)' : 'rgba(28, 26, 24, 0.7)' 
                }}
                transition={{ type: "spring", stiffness: 300, damping: 25 }}
              >
                <div className={styles.dayTop}>
                  <span className={styles.dayId}>День {day.id}</span>
                  <div className={`
                    ${styles.formatBadge} 
                    ${isBonusDay ? styles.bonusBadge : ''}
                  `}>
                    {isBonusDay ? 'Інтеграція та фінал' : 'Практика'}
                  </div>
                </div>
                
                <h3>{day.title}</h3>
                <p>{day.result}</p>
                
                <div className={styles.meta}>
                  {isBonusDay ? (
                    <>
                      <span>Аналіз та збірка</span>
                      <span className={styles.dot}>·</span>
                      <span>Практика «Лист собі»</span>
                    </>
                  ) : (
                    <>
                      <span>Відео 15-20 хв</span>
                      <span className={styles.dot}>·</span>
                      <span>Аудіо-практика</span>
                      <span className={styles.dot}>·</span>
                      <span>Робочий зошит</span>
                    </>
                  )}
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}