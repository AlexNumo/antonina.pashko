export default function Includes() {
  return (
    <section id="includes" style={{ padding: "7rem 6rem", backgroundColor: "var(--white)", maxWidth: "100%" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span className="section-label">Що включено</span>
        <h2 className="section-heading">Кожен день — три шари роботи</h2>

        <div className="includes-grid">
          <div className="include-card">
            <svg className="include-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="20" cy="20" r="18" stroke="currentColor" strokeWidth="1.5"/>
              <polygon points="16,13 30,20 16,27" fill="currentColor" opacity="0.6"/>
            </svg>
            <div className="include-title">7 відео-уроків</div>
            <div className="include-desc">15–18 хвилин кожен. Пояснення, інсайти та конкретний інструмент на день. Ведуть від точки А до точки Б — крок за кроком.</div>
          </div>

          <div className="include-card">
            <svg className="include-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <path d="M8 20 Q20 8 32 20 Q20 32 8 20Z" stroke="currentColor" stroke-width="1.5" fill="none"/>
              <circle cx="20" cy="20" r="4" fill="currentColor" opacity="0.6"/>
            </svg>
            <div className="include-title">7 аудіо-практик</div>
            <div className="include-desc">10–15 хвилин тілесної роботи. Медитації, візуалізації, внутрішні діалоги — для змін на глибинному рівні.</div>
          </div>

          <div className="include-card">
            <svg className="include-icon" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
              <rect x="8" y="6" width="24" height="28" rx="2" stroke="currentColor" stroke-width="1.5"/>
              <line x1="13" y1="14" x2="27" y2="14" stroke="currentColor" stroke-width="1.5"/>
              <line x1="13" y1="20" x2="27" y2="20" stroke="currentColor" stroke-width="1.5"/>
              <line x1="13" y1="26" x2="22" y2="26" stroke="currentColor" stroke-width="1.5"/>
            </svg>
            <div className="include-title">Робочий зошит</div>
            <div className="include-desc">Структуровані запитання для кожного дня. Фіксує внутрішні зсуви і дає конкретні відповіді — не абстрактно, а в реальних ситуаціях твого життя.</div>
          </div>
        </div>

        <div style={{ marginTop: "1.5rem", padding: "2rem", backgroundColor: "var(--sand)", borderLeft: "3px solid var(--clay)", fontSize: "0.9rem", color: "var(--ink-mid)", lineHeight: "1.7" }}>
          <strong style={{ color: "var(--ink)", fontWeight: 500 }}>20–30 хвилин на день.</strong> Проходиш у своєму темпі. Доступ назавжди після оплати. Старт одразу після отримання посилання.
        </div>
      </div>
    </section>
  );
}