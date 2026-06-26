import styles from './PaymentStatus.module.css';

export default function PaymentFailure() {
  return (
    <section className={styles.statusSection}>
      <div className={styles.card}>
        <div className={`${styles.icon} ${styles.failureIcon}`}>!</div>
        <h2>Оплата не пройшла</h2>
        <p>На жаль, транзакцію було скасовано або відхилено банком.</p>
        <div className={styles.instructions}>
          <p><strong>Можливі причини:</strong></p>
          <ul>
            <li>Недостатньо коштів на картці або встановлено низький ліміт для інтернет-покупок.</li>
            <li>Картка не підтримує подвійну конвертацію (якщо оплата з-за кордону).</li>
          </ul>
        </div>
        <div className={styles.actions}>
          {/* Змінюємо на явне повернення на головну до блоку пакетів */}
          <a href="/#packages" className="btn-primary">Спробувати ще раз</a>
          <a href="https://instagram.com/tonypashko" target="_blank" rel="noreferrer" className="btn-light">
            Написати в Instagram
          </a>
        </div>
      </div>
    </section>
  );
}