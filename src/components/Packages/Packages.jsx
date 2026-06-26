import styles from './Packages.module.css';
import DiscountBadge from './DiscountBadge/DiscountBadge';
import { COURSE_CONFIG } from '../../config/courseConfig';
import BackgroundBTN from '../../assets/videos/background_btn_optimized.mp4';
import BackgroundCard from '../../assets/videos/Background_Card_optimized.mp4';

export default function Packages() {
  const visiblePackages = Object.values(COURSE_CONFIG.packages).filter((pkg) => !pkg.hidden);

  // Словник посилань для кожного пакету
  const paymentLinks = {
    base: 'https://secure.wayforpay.com/button/b2860b6ba58a1',
    support: 'https://secure.wayforpay.com/button/b2a8990c0471e',
    vip: 'https://secure.wayforpay.com/button/b23ef4af753b2'
  };

  const bonuses = [
    {
      id: 'meditation',
      text: 'Авторська медитація **«Повернення до себе»** — 15 хвилин, які повертають контакт із собою для щоденних ритуалів.'
    },
    {
      id: 'force-guide',
      text: 'PDF-гайд **«Сила без напруги»** — 7 маркерів тотального контролю та 4 практики для повернення жіночого магнетизму.'
    },
    {
      id: 'value-guide',
      text: 'PDF-інтенсив **«7 ознак, що ти заслуговуєш свою цінність»** — practical розбір для виходу із пастки доведення результату.'
    }
  ];

  // Допоміжна функція для безпечного парсингу **bold** тексту без використання сторонніх бібліотек
  const renderBonusText = (text) => {
    const parts = text.split(/(\*\*.*?\*\*)/g);
    return parts.map((part, index) => {
      if (part.startsWith('**') && part.endsWith('**')) {
        return <strong key={index}>{part.slice(2, -2)}</strong>;
      }
      return part;
    });
  };

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
            const paymentUrl = paymentLinks[pkg.id] || '#';

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

                {/* ЗМІЩЕНО СЮДИ: Тепер бейдж лежить прямо в .card, де працює overflow: hidden */}
                <DiscountBadge 
                  oldPrice={pkg.oldPrice} 
                  newPrice={pkg.price} 
                  variant={isVip ? 'accent' : 'circle'} 
                />

                <div className={styles.cardContent}>
                  {/* ПУСТО: Звідси ми компонент DiscountBadge видалили */}
                  
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
                      {isSoldOut ? (
                        'Місця закінчилися'
                      ) : (
                        <>
                          Цей потік закривається після набору групи
                        </>
                      )}
                    </div>
                  )}

                  <div className={styles.bonusWrapper}>
                    <div className={styles.bonusHeader}>
                      <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path d="M20 12V22H4V12M22 7H2V12H22V7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                        <path d="M12 22V7M12 7C12 5.5 10.5 3 8.5 3C6.5 3 6 5 6 6C6 7 8 7 12 7ZM12 7C12 5.5 13.5 3 15.5 3C17.5 3 18 5 18 6C18 7 16 7 12 7Z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                      <span>Разом із курсом ти отримуєш 3 бонуси:</span>
                    </div>
                    <ul className={styles.bonusList}>
                      {bonuses.map((bonus) => (
                        <li key={bonus.id} className={styles.bonusItem}>
                          {renderBonusText(bonus.text)}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <ul>
                    {pkg.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>

                  {isSoldOut ? (
                    <span className={styles.btnDisabled}>Місць немає</span>
                  ) : (
                    <a 
                      href={paymentUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`${pkg.featured ? 'btn-light' : 'btn-primary'} ${hasVideo ? styles.videoBtn : styles.standardBtn}`}
                      style={{ textDecoration: 'none', display: 'inline-flex', alignItems: 'center', justifyContent: 'center' }}
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
                        Оплатити
                      </span>
                    </a>
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