import { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence, useAnimation } from 'framer-motion';
import styles from './Testimonials.module.css';
import { REVIEWS } from '../../config/courseReviews';

export default function Testimonials() {
  const duplicatedReviews = [...REVIEWS, ...REVIEWS];
  const [activeReview, setActiveReview] = useState(null);
  const [activeIndex, setActiveIndex] = useState(null);
  const [isDragging, setIsDragging] = useState(false);

  const containerRef = useRef(null);
  const trackRef = useRef(null);
  const controls = useAnimation();

  const startScrolling = async () => {
    if (!trackRef.current) return;

    const trackWidth = trackRef.current.scrollWidth;
    const halfWidth = trackWidth / 2;

    await controls.start({
      x: -halfWidth,
      transition: {
        duration: 45,
        ease: 'linear',
        repeat: Infinity,
        repeatType: 'loop',
      },
    });
  };

  useEffect(() => {
    startScrolling();
  }, [controls]);

  useEffect(() => {
    if (activeReview !== null) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => { document.body.style.overflow = 'unset'; };
  }, [activeReview]);

  const handleCardClick = (review, index) => {
    if (!isDragging) {
      setActiveReview(review);
      setActiveIndex(index);
    }
  };

  return (
    <section className={styles.testimonials}>
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Відгуки</span>
          <h2>Жінки та чоловіки, які повернули собі власну силу</h2>
        </div>
      </div>

      <div className={styles.marqueeContainer} ref={containerRef}>
        <motion.div 
          ref={trackRef}
          className={styles.marqueeTrack}
          animate={controls} 
          drag="x"
          dragConstraints={containerRef}
          dragElastic={0.05}
          dragMomentum={false}
          
          onDragStart={() => {
            setIsDragging(true);
            controls.stop();
          }}
          
          onDragEnd={() => {
            setTimeout(() => setIsDragging(false), 50);
            startScrolling();
          }}

          onHoverStart={() => !isDragging && controls.stop()}
          onHoverEnd={() => !isDragging && startScrolling()}
        >
          {duplicatedReviews.map((review, index) => {
            const uniqueId = `review-${review.name}-${index}`;
            return (
              <motion.article 
                layoutId={uniqueId}
                className={styles.card} 
                key={uniqueId}
                onClick={() => handleCardClick(review, index)}
                whileHover={{ y: -6, scale: 1.01 }}
                transition={{ type: "spring", stiffness: 300, damping: 30 }}
              >
                <div className={styles.cardHeader}>
                  <div className={styles.verifiedIcon}>
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                    </svg>
                  </div>
                  <span className={styles.verifiedLabel}>Прожитий досвід</span>
                </div>

                <p className={styles.reviewText}>“{review.text}”</p>
                <span className={styles.readMoreBtn}>Читати повністю ✨</span>

                <div className={styles.authorInfo}>
                  <div className={styles.avatarPlaceholder}>{review.name.charAt(0)}</div>
                  <div className={styles.authorMeta}>
                    <span className={styles.authorName}>{review.name}</span>
                    <span className={styles.authorRole}>{review.role}</span>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </motion.div>
      </div>

      <AnimatePresence>
        {activeReview && (
          <motion.div 
            className={styles.modalOverlay} 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.25 }}
            onClick={() => { setActiveReview(null); setActiveIndex(null); }}
          >
            <motion.div 
              layoutId={`review-${activeReview.name}-${activeIndex}`}
              className={styles.modalContent} 
              onClick={(e) => e.stopPropagation()}
              transition={{ type: "spring", stiffness: 220, damping: 28 }}
            >
              <button className={styles.closeButton} onClick={() => { setActiveReview(null); setActiveIndex(null); }}>
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M18 6L6 18M6 6l12 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </button>

              <div className={styles.modalHeader}>
                <div className={styles.verifiedIcon}>
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="currentColor"/>
                  </svg>
                </div>
                <span className={styles.verifiedLabel}>Повна історія трансформації</span>
              </div>

              <motion.p 
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.15, duration: 0.3 }}
                className={styles.modalReviewText}
              >
                “{activeReview.text}”
              </motion.p>

              <div className={styles.modalAuthorInfo}>
                <div className={styles.avatarPlaceholder}>{activeReview.name.charAt(0)}</div>
                <div className={styles.authorMeta}>
                  <span className={styles.modalAuthorName}>{activeReview.name}</span>
                  <span className={styles.authorRole}>{activeReview.role}</span>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}