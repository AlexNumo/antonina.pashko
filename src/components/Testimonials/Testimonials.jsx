import styles from './Testimonials.module.css';
import { REVIEWS } from '../../config/courseReviews';
 

export default function Testimonials() {
  // Подвоюємо масив для створення ілюзії безкінечного циклу анімації каруселі
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Відгуки</span>
          <h2>Жінки та чоловіки, які повернули собі власну силу</h2>
        </div>
      </div>

      {/* Контейнер каруселі, що ховає все за межами екрана */}
      <div className={styles.marqueeContainer}>
        <div className={styles.marqueeTrack}>
          {duplicatedReviews.map((review, index) => (
            <article className={styles.card} key={`${review.name}-${index}`}>
              
              {/* Верхня панель картки з іконкою серця (верифікація досвіду) */}
              <div className={styles.cardHeader}>
                <div className={styles.verifiedIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                  </svg>
                </div>
                <span className={styles.verifiedLabel}>Прожитий досвід</span>
              </div>

              <p className={styles.reviewText}>“{review.text}”</p>

              {/* Дані про автора відгуку */}
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