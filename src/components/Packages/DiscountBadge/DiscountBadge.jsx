import styles from './DiscountBadge.module.css';

// Додали style до списку пропсів
export default function DiscountBadge({ oldPrice, newPrice, variant = 'circle', style }) {
  const oldNum = parseInt(oldPrice, 10);
  const newNum = parseInt(newPrice, 10);

  if (isNaN(oldNum) || isNaN(newNum) || oldNum <= newNum) {
    return null;
  }

  const discountPercent = Math.round(((oldNum - newNum) / oldNum) * 100);

  return (
    <div 
      style={style} // <--- ТЕПЕР ІНЛАЙН СТИЛІ БУДУТЬ ПРАЦЮВАТИ!
      className={`${styles.badge} ${variant === 'heart' ? styles.heartVariant : ''}`}
    >
      <span className={styles.text}>-{discountPercent}%</span>
    </div>
  );
}