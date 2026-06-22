import { motion } from 'framer-motion';
import styles from './DiscountBadge.module.css';

export default function DiscountBadge({ oldPrice, newPrice, variant = 'circle', style }) {
  const oldNum = parseInt(oldPrice, 10);
  const newNum = parseInt(newPrice, 10);

  const discountPercent = !isNaN(oldNum) && !isNaN(newNum) && oldNum > newNum
    ? Math.round(((oldNum - newNum) / oldNum) * 100)
    : 0;

  if (discountPercent <= 0) return null;

  return (
    <div className={styles.badgeWrapper} style={style}>
      <motion.div 
        className={styles.neonGlow}
        animate={{
          scale: [1, 1.4, 1], 
          opacity: [0.3, 0.7, 0.3]
        }}
        transition={{ duration: 2.2, repeat: Infinity, ease: "easeInOut" }}
      />

      <motion.div 
        className={`${styles.badge} ${variant === 'accent' ? styles.accentVariant : ''}`}
        animate={{
          scale: [1, 1.1, 1], 
          rotate: [5, 7, 5]   
        }}
        whileHover={{ scale: 1.2, rotate: 10, transition: { duration: 0.2 } }}
        whileTap={{ scale: 0.9 }}
        transition={{ 
          duration: 2.2, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        <div className={styles.shimmerEffect} />
        <span className={styles.text}>-{discountPercent}%</span>
      </motion.div>
    </div>
  );
}