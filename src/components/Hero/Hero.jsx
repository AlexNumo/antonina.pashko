export default function Hero() {
  return (
    <section className="hero">
      <div className="hero-left">
        <span className="hero-eyebrow">7-денний онлайн-процес</span>
        <h1 className="hero-title">Точка<br /><em>переходу</em></h1>
        <p className="hero-subtitle">Я більше не хочу так жити.<br />Але поки не бачу як по-іншому.</p>
        <p className="hero-body">Для жінок, у яких зовні все ніби добре — але всередині все частіше виникає відчуття, що щось стало тісним.</p>
        <div className="hero-price">
          <span className="price-current">€20</span>
          <span className="price-old">€100</span>
          <span className="price-note">Ціна першого потоку</span>
        </div>
        <div className="hero-actions">
          <a href="https://instagram.com/tonypashko" className="btn-primary">Написати ПЕРЕХІД в директ</a>
          <a href="#program" className="btn-secondary">Дізнатися більше</a>
        </div>
      </div>
      <div className="hero-right">
        <div className="hero-visual">
          <div className="quote-card">
            <div className="decorative-line"></div>
            <blockquote>
              «Ти не загубила себе. Ти просто виросла зі старого життя.»
            </blockquote>
            <span className="quote-author">— Антоніна Пашко</span>
          </div>
        </div>
      </div>
    </section>
  );
}