export default function About() {
  return (
    <section className="section-about" id="about">
      <div className="about-inner">
        <div>
          <div className="about-portrait">
            <div className="about-portrait-visual">
              <span className="portrait-initials">АП</span>
            </div>
          </div>
          <div className="about-credentials">
            <span className="credential">Кандидат психологічних наук</span>
            <span className="credential">Доктор психології Кембриджської академії</span>
            <span className="credential">Професор психології</span>
            <span className="credential">Енерготерапевт</span>
            <span className="credential">@tonypashko</span>
          </div>
        </div>
        <div className="about-text">
          <span className="section-label">Про мене</span>
          <h2 className="section-heading">Антоніна Пашко</h2>
          <div className="about-body">
            <p>Я не вірю в трансформацію через тиск. Вірю в глибину, яка повертає жінку до себе.</p>
            <p>17 років я супроводжую жінок у внутрішніх змінах — без надриву, без втрати себе, без боротьби з природою. За цей час понад 1500 жінок повернули внутрішню опору, інтуїцію, легкість та вийшли на новий рівень себе й достатку.</p>
            <p>Моя робота — не переробити жінку, а допомогти їй повернути її справжню силу та глибину її унікальність.</p>
          </div>
          <div className="stats-row">
            <div className="stat-item">
              <span className="stat-num">17+</span>
              <div className="stat-label">років практики</div>
            </div>
            <div className="stat-item">
              <span className="stat-num">1500+</span>
              <div className="stat-label">жінок у змінах</div>
            </div>
            <div className="stat-item">
              <span className="stat-num">70+</span>
              <div className="stat-label">авторських програм</div>
            </div>
          </div>
          <p style={{ fontSize: "0.85rem", color: "var(--ink-light)" }}>Клієнти з України, Казахстану, Німеччини, Канади та інших країн</p>
        </div>
      </div>
    </section>
  );
}