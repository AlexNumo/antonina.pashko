export default function Navbar() {
  return (
    <nav>
      <a href="#" className="nav-logo">Антоніна Пашко</a>
      <ul className="nav-links">
        <li><a href="#program">Програма</a></li>
        <li><a href="#about">Про мене</a></li>
        <li><a href="#packages">Пакети</a></li>
        <li><a href="#packages" className="nav-cta">Записатися</a></li>
      </ul>
    </nav>
  );
}