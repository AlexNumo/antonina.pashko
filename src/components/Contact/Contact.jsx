import styles from './Contact.module.css';

export default function Contact({ onOpenModal }) {
  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className="section-label">Заявка</span>
          <h2>Залишити запит Антоніні особисто</h2>
          <p>
            Найшвидший шлях — написати слово <strong>ПЕРЕХІД</strong> у директ Instagram. 
            Також ти можеш відкрити форму запису, щоб детально сформулювати свій внутрішній запит або вибрати формат навчання.
          </p>
          <div className={styles.actions}>
            <button className="btn-primary" onClick={onOpenModal}>
              Відкрити форму запису
            </button>
            <a href="https://instagram.com/tonypashko" className={styles.linkInstagram} target="_blank" rel="noreferrer">
              або написати в Instagram
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}