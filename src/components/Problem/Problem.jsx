export default function Problem() {
  const points = [
    { num: 1, title: "Відпочинок тільки «по заслузі»", text: "Ти можеш дозволити собі паузу — лише якщо все вже зробила або дуже втомилась." },
    { num: 2, title: "Автоматично береш на себе більше", text: "Підстрахуєш. Дотягнеш. Промовчиш. Витягнеш — і все сама." },
    { num: 3, title: "Важко просити і приймати", text: "Простіше дати, ніж взяти. Простіше витримати, ніж визнати вразливість." },
    { num: 4, title: "Болісно реагуєш, коли тебе не помітили", text: "Якщо вкладалась, а цього не оцінили — всередині піднімається образа або порожнеча." },
    { num: 5, title: "Після досягнень швидко стає «мало»", text: "«Ще недостатньо», «треба більше», «ще не той рівень» — знову і знову." }
  ];

  return (
    <section className="section-problem">
      <span className="section-label">Це про тебе?</span>
      <h2 className="section-heading">7 ознак, що ти заслуговуєш свою цінність</h2>
      <div className="two-col">
        <ul className="recognition-list">
          {points.map((item) => (
            <li className="recognition-item" key={item.num}>
              <span className="recognition-num">{item.num}</span>
              <div className="recognition-text">
                <strong>{item.title}</strong>
                {item.text}
              </div>
            </li>
          ))}
        </ul>
        <div className="insight-box">
          <p>«Ти відчуваєш себе спокійніше тільки тоді, коли "все встигла". Якщо день був продуктивним — ти ніби молодець. А якщо ні — всередині з'являється вина.»</p>
          <p>Якщо хоча б 3–4 пункти відгукнулись — це сигнал. Ти досі несвідомо намагаєшся підтвердити свою цінність, замість того щоб просто жити її.</p>
          <span className="attribution">— З практики 17 років роботи з жінками</span>
        </div>
      </div>
    </section>
  );
}