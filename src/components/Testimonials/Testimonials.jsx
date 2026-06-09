import styles from './Testimonials.module.css';

const reviews = [
  {
    from: 'Львів',
    text: 'Вже після першої практики відчула, що моя сила більше не виснажує, а працює на мене. Знайшла опору в собі і легкість, про яку давно мріяла.',
  },
  {
    from: 'Дніпро',
    text: 'Те, що колись було внутрішнім тягарем, тепер працює на мене. Моя сила притягує, а не виснажує.',
  },
  {
    from: 'Харків',
    text: 'Змінився не лише мій день, а й світогляд: я тепер бачу можливості там, де раніше були обмеження.',
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Відгуки</span>
          <h2>Жінки, які повернули собі опору</h2>
        </div>

        <div className={styles.grid}>
          {reviews.map((review) => (
            <article className={styles.card} key={review.from}>
              <p>“{review.text}”</p>
              <span>{review.from}</span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
