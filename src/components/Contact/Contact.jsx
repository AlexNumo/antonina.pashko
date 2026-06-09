import { useState } from 'react';
import styles from './Contact.module.css';

export default function Contact() {
  const [sent, setSent] = useState(false);

  function handleSubmit(event) {
    event.preventDefault();
    setSent(true);
  }

  return (
    <section className={styles.contact} id="contact">
      <div className={styles.container}>
        <div className={styles.copy}>
          <span className="section-label">Заявка</span>
          <h2>Можеш залишити запит тут або написати в Instagram</h2>
          <p>
            Найшвидший шлях - написати слово ПЕРЕХІД у директ. Форма поруч допоможе
            сформулювати запит, але без підключеного backend вона не відправляє дані автоматично.
          </p>
          <a href="https://instagram.com/tonypashko" className="btn-primary">Написати в Instagram</a>
        </div>

        <form className={styles.form} onSubmit={handleSubmit}>
          <label>
            Ім'я
            <input type="text" name="name" placeholder="Як до тебе звертатись" />
          </label>
          <label>
            Контакт
            <input type="text" name="contact" placeholder="Instagram або email" />
          </label>
          <label>
            Що важливо передати Антоніні?
            <textarea name="message" rows="5" placeholder="Коротко про запит або формат, який цікавить" />
          </label>
          <button type="submit">Підготувати запит</button>
          {sent && (
            <p className={styles.status}>
              Запит сформульовано. Найшвидше зараз написати ПЕРЕХІД в Instagram @tonypashko.
            </p>
          )}
        </form>
      </div>
    </section>
  );
}
