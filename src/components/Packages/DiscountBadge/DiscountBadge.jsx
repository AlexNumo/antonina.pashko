import { motion } from 'framer-motion';
import styles from './DiscountBadge.module.css';

export default function DiscountBadge({ oldPrice, newPrice, variant = 'circle' }) {
  const oldNum = parseInt(oldPrice, 10);
  const newNum = parseInt(newPrice, 10);

  const discountPercent = !isNaN(oldNum) && !isNaN(newNum) && oldNum > newNum
    ? Math.round(((oldNum - newNum) / oldNum) * 100)
    : 0;

  if (discountPercent <= 0) return null;

  return (
    <div className={styles.ribbonContainer}>
      <motion.div 
        className={`${styles.ribbon} ${variant === 'accent' ? styles.accentVariant : ''}`}
        animate={{
          /* Легка преміальна пульсація, щоб привернути увагу, але без косоокості */
          scale: [1, 1.03, 1]
        }}
        transition={{ 
          duration: 2.5, 
          repeat: Infinity, 
          ease: "easeInOut" 
        }}
      >
        {/* Ефект блиску, що бігає по стрічці */}
        <div className={styles.shimmerEffect} />
        
        <span className={styles.text}>-{discountPercent}%</span>
      </motion.div>
    </div>
  );
}