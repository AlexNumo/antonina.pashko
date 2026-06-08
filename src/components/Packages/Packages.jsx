export default function Packages() {
  return (
    <section className="section-packages" id="packages">
      <div className="packages-container">
        <span className="section-label">Пакети участі</span>
        <h2 className="section-heading">Обери свій формат</h2>

        <div className="packages-grid">
          {/* SOLO */}
          <div className="package-card pkg-default">
            <span className="package-tag tag-default">Самостійно</span>
            <h3 className="package-name">Базовий</h3>
            <p style={{ fontSize: "0.9rem", color: "var(--ink-mid)", marginBottom: "0.5rem" }}>Повне самостійне проходження курсу у своєму темпі</p>
            <div className="package-price-block">
              <span className="pkg-price-big">€20</span>
              <span className="pkg-price-old">€100</span>
            </div>
            <ul className="pkg-features">
              <li><span className="pkg-check">✓</span> 7 відео-уроків (15–18 хв)</li>
              <li><span className="pkg-check">✓</span> 7 аудіо-практик (10–15 хв)</li>
              <li><span className="pkg-check">✓</span> Робочий зошит з практиками</li>
              <li><span className="pkg-check">✓</span> Доступ назавжди</li>
              <li><span className="pkg-check">✓</span> Старт одразу після оплати</li>
            </ul>
            <a href="https://instagram.com/tonypashko" className="btn-primary">Написати ПЕРЕХІД в директ ↗</a>
          </div>

          {/* WITH ANTONINA */}
          <div className="package-card pkg-featured package-featured">
            <span className="package-tag tag-featured">З Антоніною</span>
            <h3 className="package-name" style={{ color: "var(--white)" }}>Супровід</h3>
            <p style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.6)", marginBottom: "0.5rem" }}>Все базового + жива підтримка протягом тижня</p>
            <div className="package-price-block">
              <span className="pkg-price-big" style={{ color: "var(--clay)" }}>€20</span>
              <span className="pkg-price-old">€100</span>
            </div>
            <ul className="pkg-features">
              <li><span className="pkg-check">✓</span> Все з базового пакета</li>
              <li><span className="pkg-check">✓</span> Telegram-група з учасницями</li>
              <li><span className="pkg-check">✓</span> Відповіді голосом від Антоніни</li>
              <li><span className="pkg-check">✓</span> 1 Zoom-зустріч наприкінці</li>
              <li><span className="pkg-check">✓</span> Розбір головних запитів учасниць</li>
            </ul>
            <a href="https://instagram.com/tonypashko" className="btn-primary" style={{ backgroundColor: "var(--clay)" }}>Написати ПЕРЕХІД в директ ↗</a>
          </div>
        </div>

        <p style={{ textAlign: "center", marginTop: "2rem", fontSize: "0.85rem", color: "var(--ink-light)" }}>
          Напиши <strong style={{ color: "var(--ink)" }}>ПЕРЕХІД</strong> в директ Instagram <a href="https://instagram.com/tonypashko" style={{ color: "var(--clay-dark)", textDecoration: "none" }}>@tonypashko</a> — і я надішлю деталі особисто.
        </p>
      </div>
    </section>
  );
}