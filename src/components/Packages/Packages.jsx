import styles from './Packages.module.css';

const packages = [
  {
    name: 'Базовий',
    tag: 'Самостійно',
    desc: 'Повне самостійне проходження процесу у своєму темпі.',
    price: '€20',
    oldPrice: '€100',
    featured: false,
    features: [
      '7 відео-уроків',
      '7 аудіо-практик',
      'робочий зошит',
      'доступ назавжди',
      'старт одразу після оплати',
    ],
  },
  {
    name: 'Супровід',
    tag: 'З Антоніною',
    desc: 'Все з базового пакета плюс живий контакт і підтримка протягом тижня.',
    price: '€20',
    oldPrice: '€100',
    featured: true,
    features: [
      'все з базового пакета',
      'Telegram-група з учасницями',
      'голосові відповіді від Антоніни',
      'Zoom-зустріч наприкінці',
      'розбір головних запитів учасниць',
    ],
  },
];

export default function Packages() {
  return (
    <section className={styles.packages} id="packages">
      <div className={styles.container}>
        <div className={styles.header}>
          <span className="section-label">Пакети участі</span>
          <h2>Обери формат, у якому тобі буде безпечно рухатись</h2>
        </div>

        <div className={styles.grid}>
          {packages.map((pkg) => (
            <article className={`${styles.card} ${pkg.featured ? styles.featured : ''}`} key={pkg.name}>
              <span className={styles.tag}>{pkg.tag}</span>
              <h3>{pkg.name}</h3>
              <p>{pkg.desc}</p>
              <div className={styles.price}>
                <strong>{pkg.price}</strong>
                <span>{pkg.oldPrice}</span>
                <small>ціна першого потоку</small>
              </div>
              <ul>
                {pkg.features.map((feature) => <li key={feature}>{feature}</li>)}
              </ul>
              <a href="https://instagram.com/tonypashko" className={pkg.featured ? 'btn-light' : 'btn-primary'}>
                Написати ПЕРЕХІД
              </a>
            </article>
          ))}
        </div>

        <p className={styles.note}>
          Напиши <strong>ПЕРЕХІД</strong> в директ Instagram <a href="https://instagram.com/tonypashko">@tonypashko</a>,
          і Антоніна надішле деталі особисто.
        </p>
      </div>
    </section>
  );
}
