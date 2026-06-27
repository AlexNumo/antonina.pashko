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
    title: 'Що я тримаю - і боюсь відпустити.',
    result: 'Побачити ціну утримання старого і чесно назвати страх змін.',
  },
  {
    id: '4',
    title: 'Зустріч із собою справжньою.',
    result: 'Почути себе за межами ролей, очікувань і постійного "треба".',
  },
  {
    id: '5',
    title: 'Чому не дозволяю собі більшого.',
    result: 'Розпізнати внутрішню стелю і переконання, які обмежують наступний рівень.',
  },
  {
    id: '6',
    title: 'Рішення вже є. Я боюся його почути.',
    result: 'Повернути довіру до власного рішення, яке давно відкладалось.',
  },
  {
    id: '7',
    title: 'Що змінюється - і який мій наступний крок.',
    result: 'Завершити тиждень із ясністю та маленьким, але справжнім кроком.',
  },
  {
    id: '7+1',
    title: 'Інтеграція змін. Закритий VIP-день.',
    result: 'Майстер-майнд або фінальна сесія відповідей: як не повернутися у старі сценарії та зафіксувати результати.',
    isBonus: true // Флаг для кастомної стилізації
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
                  {/* Замість жорсткого напису "День" виводимо гнучкий id (День 1, День 7+1) */}
                  <span className={styles.dayId}>День {day.id}</span>
                  <div className={`
                    ${styles.formatBadge} 
                    ${isBonusDay ? styles.bonusBadge : ''}
                  `}>
                    {isBonusDay ? 'Бонусний VIP-день' : 'Практика'}
                  </div>
                </div>
                
                <h3>{day.title}</h3>
                <p>{day.result}</p>
                
                <div className={styles.meta}>
                  {isBonusDay ? (
                    <>
                      <span>Прямий ефір / Сесія</span>
                      <span className={styles.dot}>·</span>
                      <span>Запис у кабінеті</span>
                    </>
                  ) : (
                    <>
                      <span>Відео 15-20 хв</span>
                      <span className={styles.dot}>·</span>
                      <span>Аудіо 10-15 хв</span>
                      <span className={styles.dot}>·</span>
                      <span>Зошит</span>
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