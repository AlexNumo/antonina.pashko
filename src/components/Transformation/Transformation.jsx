export default function Transformation() {
  return (
    <section className="section-journey" id="program">
      <div style={{ maxWidth: "1200px", margin: "0 auto" }}>
        <span className="section-label">Програма</span>
        <h2 className="section-heading" style={{ color: "var(--white)" }}>Твій внутрішній маршрут<br />на 7 днів</h2>
        <div className="days-grid">
          {[
            { id: "01", title: "Що зі мною відбувається?", desc: "Чому успішні жінки думають, що втратили мотивацію — хоча насправді завершився старий етап." },
            { id: "02", title: "Чому я так втомилася?", desc: "Виснажують не справи, а внутрішній спосіб жити. Повернення тиші." },
            { id: "03", title: "Що я тримаю?", desc: "Ми тримаємо не те що любимо. Ми тримаємо те чого боїмось втратити." },
            { id: "04", title: "А чого хочу я?", desc: "Хто ти — коли нікому не треба справлятись? Зустріч зі справжніми бажаннями." },
            { id: "05", title: "Якою я стаю?", desc: "Мої нові можливості. Твоя внутрішня стеля — це чужі переконання, а не твоя правда." },
            { id: "06", title: "Відповідь вже є", desc: "Ти вже знаєш відповідь. Просто боїшся її почути. Повернення довіри до себе." },
            { id: "07", title: "Моя нова точка опори", desc: "Зміна не починається з великого рішення. Вона починається зі чесного погляду на себе." }
          ].map((day) => (
            <div className="day-card" key={day.id}>
              <span className="day-num">{day.id}</span>
              <div className="day-title">{day.title}</div>
              <div className="day-desc">{day.desc}</div>
              <div className="day-meta">Відео · Практика · Зошит</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}