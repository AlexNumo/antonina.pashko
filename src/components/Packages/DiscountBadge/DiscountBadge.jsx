import { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import styles from './DiscountBadge.module.css';

export default function DiscountBadge({ oldPrice, newPrice, variant = 'circle', style }) {
  const badgeRef = useRef(null);

  const oldNum = parseInt(oldPrice, 10);
  const newNum = parseInt(newPrice, 10);

  const discountPercent = !isNaN(oldNum) && !isNaN(newNum) && oldNum > newNum
    ? Math.round(((oldNum - newNum) / oldNum) * 100)
    : 0;

  const primaryCount = Math.min(Math.max(discountPercent * 3, 40), 180); 
  const secondaryCount = Math.round(primaryCount * 0.4);
  const velocityBonus = Math.min(Math.max(discountPercent * 0.7, 22), 42);

  const fireDynamicConfetti = () => {
    if (!badgeRef.current || discountPercent <= 0) return;
    
    const rect = badgeRef.current.getBoundingClientRect();
    const x = (rect.left + rect.width / 2) / window.innerWidth;
    const y = (rect.top + rect.height / 2) / window.innerHeight;

    confetti({
      particleCount: primaryCount,
      spread: 75 + discountPercent * 0.3,
      origin: { x, y },
      colors: ['#e7c6a5', '#d4a373', '#b58255', '#ffffff', '#fff5ea'],
      startVelocity: velocityBonus,
      gravity: 0.65,
      scalar: 0.7,
      ticks: 80 + discountPercent * 0.4,
    });

    setTimeout(() => {
      if (!badgeRef.current) return;
      confetti({
        particleCount: secondaryCount,
        spread: 50,
        origin: { x, y },
        colors: ['#ffffff', '#d4a373', '#b58255'],
        startVelocity: velocityBonus * 0.7,
        gravity: 0.75,
        scalar: 0.45,
        ticks: 50,
      });
    }, 180);
  };

  useEffect(() => {
    if (discountPercent <= 0) return;
    const initialTimeout = setTimeout(fireDynamicConfetti, 1200);
    const intervalTime = discountPercent >= 35 ? 3000 : 4000;
    const interval = setInterval(fireDynamicConfetti, intervalTime);
    return () => {
      clearTimeout(initialTimeout);
      clearInterval(interval);
    };
  }, [discountPercent]);

  if (discountPercent <= 0) return null;

  return (
    <div className={styles.badgeWrapper} style={style} ref={badgeRef}>
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
        onMouseEnter={fireDynamicConfetti}
        onClick={fireDynamicConfetti}
      >
        <div className={styles.shimmerEffect} />
        <span className={styles.text}>-{discountPercent}%</span>
      </motion.div>
    </div>
  );
}