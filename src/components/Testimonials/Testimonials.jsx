import styles from './Testimonials.module.css';

const reviews = [
  {
    name: 'Марія, 34 роки',
    role: 'Підприємиця, Львів',
    text: 'Вже після першої практики відчула, що моя сила більше не виснажує, а працює на мене. Знайшла опору в собі та легкість, про яку давно мріяла.',
  },
  {
    name: 'Олена, 29 років',
    role: 'IT-спеціалістка, Дніпро',
    text: 'Те, що колись було внутрішнім тягарем, тепер працює на мене. Моя сила притягує, а не виснажує. Контроль відпустив.',
  },
  {
    name: 'Катерина, 41 рік',
    role: 'Топ-менеджерка, Харків',
    text: 'Змінився не лише мій день, а й світогляд: я тепер бачу можливості там, де раніше були лише обмеження і втома.',
  },
  {
    name: 'Анна, 32 роки',
    role: 'Дизайнерка, Київ',
    text: 'Я нарешті відчула різницю між "досягати з напруги" та "створювати з ресурсу". Це зовсім інша якість життя, яка вартує кожної хвилини на курсі.',
  },
  {
    name: 'Наталія, 37 років',
    role: 'Психологиня, Одеса',
    text: 'Цей процес повернув мені контакт із власною тишею та бажаннями. Більше немає потреби комусь щось доводити. Просто живу.',
  }
];

export default function Testimonials() {
  // Подвоюємо масив для створення ілюзії безкінечного циклу анімації
  const duplicatedReviews = [...reviews, ...reviews];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Відгуки</span>
          <h2>Жінки, які повернули собі опору</h2>
        </div>
      </div>

      {/* Контейнер каруселі, що ховає все за межами екрана */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedReviews.map((review, index) => (
            <article className={styles.card} key={`${review.name}-${index}`}>
              
              {/* Верхня панель картки з іконкою верифікації */}
              <div className={styles.cardHeader}>
                <div className={styles.verifiedIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                  </svg>
                </div>
                <span className={styles.verifiedLabel}>Прожитий досвід</span>
              </div>

              <p className={styles.reviewText}>“{review.text}”</p>

              {/* Дані про авторку відгуку */}
              <div className={styles.authorInfo}>
                <div className={styles.avatarPlaceholder}>
                  {review.name.charAt(0)}
                </div>
                <div className={styles.authorMeta}>
                  <span className={styles.authorName}>{review.name}</span>
                  <span className={styles.authorRole}>{review.role}</span>
                </div>
              </div>

            </article>
          ))}
        </div>
      </div>
    </section>
  );
}