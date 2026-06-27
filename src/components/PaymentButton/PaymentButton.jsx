import styles from './PaymentButton.module.css';

export default function PaymentButton({ buttonUrl, children = 'Оплатити та почати' }) {
  
  const handlePayment = () => {
    // Перевіряємо, чи скрипт платіжки завантажився в index.html
    if (typeof window.Wayforpay !== 'undefined') {
      try {
        const wayforpay = new window.Wayforpay();
        // Запускаємо віджет, передаючи йому URL твоєї конкретної кнопки
        wayforpay.invoice(buttonUrl);
      } catch (error) {
        console.error('Помилка ініціалізації віджета WayForPay:', error);
        // Резервний варіант: якщо віджет з якихось причин заблоковано, просто відкриваємо посилання у новій вкладці
        window.open(buttonUrl, '_blank', 'noopener,noreferrer');
      }
    } else {
      // Якщо скрипт не встиг підвантажитись — плавно редиректимо на пряму сторінку оплати
      window.open(buttonUrl, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <button 
      type="button" 
      onClick={handlePayment} 
      className={styles.payButton}
    >
      <span className={styles.btnText}>{children}</span>
      <div className={styles.glowEffect} />
    </button>
  );
}