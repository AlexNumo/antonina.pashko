export default function TransformationMap() {
  return (
    <section style={{ backgroundColor: "var(--sand)", padding: "7rem 6rem" }}>
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        <span className="section-label">Трансформаційна карта</span>
        <h2 className="section-heading">З якої точки А<br />в яку точку Б</h2>

        <div style={{ display: "grid", gridTemplateColumns: "1fr 60px 1fr", gap: 0, marginTop: "3rem", alignItems: "center" }}>
          {/* Point A */}
          <div style={{ backgroundColor: "var(--white)", padding: "3rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--ink-light)", marginBottom: "1.5rem" }}>Точка А · зараз</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {["Щось закінчилося, але не зрозуміло що", "Відпочинок не повертає сили", "Складно зрозуміти чого хочеться", "Постійно відкладаю важливі рішення", "«Я більше не хочу так жити»"].map((text, idx) => (
                <li key={idx} style={{ fontSize: "0.9rem", color: "var(--ink-mid)", display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--clay)", fontSize: "1rem" }}>·</span> {text}
                </li>
              ))}
            </ul>
          </div>

          {/* Arrow */}
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", padding: "1rem 0" }}>
            <svg width="40" height="40" viewBox="0 0 40 40" fill="none">
              <path d="M8 20 H32 M24 12 L32 20 L24 28" stroke="#C4A882" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
            </svg>
          </div>

          {/* Point B */}
          <div style={{ backgroundColor: "var(--ink)", padding: "3rem" }}>
            <div style={{ fontSize: "0.7rem", fontWeight: 500, letterSpacing: "0.15em", textTransform: "uppercase", color: "var(--clay)", marginBottom: "1.5rem" }}>Точка Б · після курсу</div>
            <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "0.8rem" }}>
              {["Зі мною все нормально — я на порозі нового", "Я бачу що мене справді виснажує", "Я починаю чути свої справжні бажання", "Я більше довіряю своїм рішенням", "Я бачу напрямок свого наступного кроку"].map((text, idx) => (
                <li key={idx} style={{ fontSize: "0.9rem", color: "rgba(255,255,255,0.75)", display: "flex", gap: "0.6rem", alignItems: "flex-start" }}>
                  <span style={{ color: "var(--clay)", fontSize: "1rem" }}>✓</span> {text}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}