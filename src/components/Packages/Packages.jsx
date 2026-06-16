import styles from './Packages.module.css';
import DiscountBadge from './DiscountBadge/DiscountBadge';
import { COURSE_CONFIG } from '../../config/courseConfig';
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
            
            const isBase = pkg.id === 'base';
            const isSupport = pkg.id === 'support';
            const isVip = pkg.id === 'vip';
            
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

                  <div className={styles.bonusWrapper}>
                    <div className={styles.bonusHeader}>
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="1.5"/>
                        <path d="M12 6V12L16 14" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
                      </svg>
                      <span>Бонус до курсу</span>
                    </div>
                    <p className={styles.bonusText}>
                      Моя авторська медитація <strong>«Повернення до себе»</strong>. 15 хвилин, які повертають контакт із собою. Можеш слухати щоранку як ритуал — це твій інструмент назавжди.
                    </p>
                  </div>

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