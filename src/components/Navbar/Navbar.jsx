export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Головна навігація">
      <a href="#" className="nav-logo" aria-label="Антоніна Пашко - на початок">
        Антоніна Пашко
      </a>
      <ul className="nav-links">
        <li><a href="#program">Програма</a></li>
        <li><a href="#about">Про Антоніну</a></li>
        <li><a href="#packages">Пакети</a></li>
        <li><a href="#contact" className="nav-cta">Записатися</a></li>
      </ul>
    </nav>
  );
}
