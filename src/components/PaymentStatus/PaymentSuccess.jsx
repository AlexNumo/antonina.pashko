import styles from './PaymentStatus.module.css';

export default function PaymentSuccess() {
  return (
    <section className={styles.statusSection}>
      <div className={styles.card}>
        <div className={`${styles.icon} ${styles.successIcon}`}>✓</div>
        <h2>Оплата успішна!</h2>
        <p>Дякуємо за довіру. Твій шлях у <strong>«Точку переходу»</strong> розпочався.</p>
        <div className={styles.instructions}>
          <p><strong>Що далі?</strong></p>
          <ul>
            <li>На твою пошту (вказану при оплаті) вже надіслано підтвердження та перші бонуси.</li>
            <li>Якщо лист не прийшов протягом 10 хвилин, перевір папку "Спам" або "Промоакції".</li>
          </ul>
        </div>
        <a href="/" className="btn-primary">Повернутися на головну</a>
      </div>
    </section>
  );
}