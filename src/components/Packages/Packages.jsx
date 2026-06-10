import styles from './Packages.module.css';
import DiscountBadge from '../DiscountBadge/DiscountBadge';
import { COURSE_CONFIG } from '../../config/courseConfig';

export default function Packages({ onSelectPackage }) {

  const visiblePackages = Object.values(COURSE_CONFIG.packages).filter((pkg) => !pkg.hidden);

  return (
    <section className={styles.packages} id="packages">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Пакети участі</span>
          <h2>Обери формат, у якому тобі буде безпечно рухатись</h2>
        </div>

        <div className={styles.grid}>
          {visiblePackages.map((pkg) => {
            const hasPlacesLimit = pkg.availablePlaces !== undefined;
            const isSoldOut = hasPlacesLimit && pkg.availablePlaces <= 0;

            return (
              <article 
                className={`${styles.card} ${pkg.featured ? styles.featured : ''} ${isSoldOut ? styles.soldOutCard : ''}`} 
                key={pkg.name}
              >
                <DiscountBadge oldPrice={pkg.oldPrice} newPrice={pkg.price} />
                
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
                    className={pkg.featured ? 'btn-light' : 'btn-primary'}
                    style={{ width: '100%', border: 0, cursor: 'pointer' }}
                  >
                    Обрати {pkg.name}
                  </button>
                )}
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