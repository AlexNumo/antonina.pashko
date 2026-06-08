export default function Testimonials() {
  const reviews = [
    { from: "Алмати", text: "Я змінила підхід до керівництва: більше не контролюю кожну деталь, а бізнес росте швидше. Відкрила внутрішню силу та стратегічну ясність." },
    { from: "Лвів", text: "Вже після першої практики відчула, що моя сила більше не виснажує, а працює на мене. Знайшла опору в собі і легкість, про яку давно мріяла." },
    { from: "Дніпро", text: "Те, що колись було внутрішнім тягарем, тепер працює на мене. Моя сила притягує, а не виснажує, і це змінює все моє життя." },
    { from: "Дніпро", text: "Легкість у рішенні складних завдань і внутрішня опора дозволили мені закрити великий проект із прибутком, який раніше здавався неможливим." },
    { from: "Харків", text: "Змінився не лише мій день, а й світогляд: я тепер бачу можливості там, де раніше були обмеження." },
    { from: "Ванкувер", text: "Однієї консультації було достатньо, щоб я відпустила внутрішній тягар. Тепер моя енергія працює на мене. Дякую." }
  ];

  return (
    <section className="section-testimonials">
      <div className="testimonials-container">
        <span className="section-label">Відгуки</span>
        <h2 className="section-heading">Жінки, які пішли глибше</h2>
        <div className="testimonials-grid">
          {reviews.map((rev, idx) => (
            <div className="testimonial-card" key={idx}>
              <span className="quote-mark">"</span>
              <p className="testimonial-text">{rev.text}</p>
              <span className="testimonial-from">— {rev.from}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}