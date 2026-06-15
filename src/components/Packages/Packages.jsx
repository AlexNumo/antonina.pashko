import styles from './Packages.module.css';
import DiscountBadge from './DiscountBadge/DiscountBadge';
import { COURSE_CONFIG } from '../../config/courseConfig';
// import BackgroundBTN from '../../assets/videos/background_btn.mp4';
// import BackgroundCard from '../../assets/videos/Background_Card.mp4';
import BackgroundBTN from '../../assets/videos/background_btn_optimized.mp4';
import BackgroundCard from '../../assets/videos/Background_Card_optimized.mp4';

export default function Packages({ onSelectPackage }) {
  const visiblePackages = Object.values(COURSE_CONFIG.packages).filter((pkg) => !pkg.hidden);

  return (
    <section className={styles.packages} id="packages">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Пакети участі</span>
          <h2>Обери формат, у якому тобі буде безпечно рухатися</h2>
        </div>

        <div className={styles.grid}>
          {visiblePackages.map((pkg) => {
            const hasPlacesLimit = pkg.availablePlaces !== undefined;
            const isSoldOut = hasPlacesLimit && pkg.availablePlaces <= 0;
            
            // Чітка та надійна фільтрація за системним ID з конфігу
            const isBase = pkg.id === 'base';
            const isSupport = pkg.id === 'support';
            const isVip = pkg.id === 'vip';
            
            // Відеофон додаємо тільки на преміум-пакети
            const hasVideo = isSupport || isVip; 

            return (
              <article 
                className={`
                  ${styles.card} 
                  ${isBase ? styles.baseCard : ''}
                  ${isSupport ? styles.flameCard : ''} 
                  ${isVip ? styles.vipCard : ''}
                  ${pkg.featured ? styles.featured : ''} 
                  ${isSoldOut ? styles.soldOutCard : ''}
                `} 
                key={pkg.id || pkg.name}
              >
                {hasVideo && (
                  <video 
                    src={BackgroundCard}
                    autoPlay 
                    loop 
                    muted 
                    playsInline 
                    className={styles.cardVideoBackground}
                  />
                )}

                <div className={styles.cardContent}>
                  {/* VIP отримує інверсійний неон-варіант бейджа для різноманітності */}
                  <DiscountBadge 
                    oldPrice={pkg.oldPrice} 
                    newPrice={pkg.price} 
                    variant={isVip ? 'accent' : 'circle'} 
                  />
                  
                  <span className={styles.tag}>{pkg.tag}</span>
                  <h3>{pkg.name}</h3>
                  <p>{pkg.desc}</p>
                  
                  <div className={styles.price}>
                    <strong>{pkg.price}</strong>
                    <span>{pkg.oldPrice}</span>
                    <small>ціна першого потоку</small>
                  </div>

                  {hasPlacesLimit && (
                    <div className={`${styles.placesBadge} ${isSoldOut ? styles.placesOut : styles.placesLeft}`}>
                      {isSoldOut ? 'Місця закінчилися' : <>Залишилось місць: <strong>{pkg.availablePlaces}</strong></>}
                    </div>
                  )}

                  <ul>
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  {isSoldOut ? (
                    <span className={styles.btnDisabled}>Місць немає</span>
                  ) : (
                    <button 
                      onClick={() => onSelectPackage(pkg.name)}
                      className={`${pkg.featured ? 'btn-light' : 'btn-primary'} ${hasVideo ? styles.videoBtn : styles.standardBtn}`}
                    >
                      {hasVideo && (
                        <video 
                          src={BackgroundBTN}
                          autoPlay 
                          loop 
                          muted 
                          playsInline 
                          className={styles.btnVideoBackground}
                        />
                      )}
                      <span className={hasVideo ? styles.videoBtnText : styles.btnText}>
                        Обрати {pkg.name}
                      </span>
                    </button>
                  )}
                </div>
              </article>
            );
          })}
        </div>

        <p className={styles.note}>
          Залишилися питання щодо тарифів? Запитай у <a href="https://instagram.com/tonypashko" target="_blank" rel="noreferrer"> @tonypashko </a>в Instagram.
        </p>
      </div>
    </section>
  );
}