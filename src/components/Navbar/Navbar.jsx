import Logo from '../../assets/antonina-room.jpg'

export default function Navbar() {
  return (
    <nav className="site-nav" aria-label="Головна навігація">
      <a href="#" className="nav-logo" aria-label="Антоніна Пашко - на початок">
        {/* Замість <img> використовуємо <div> з фоном */}
        <div 
          className="logo-image-bg" 
          style={{ backgroundImage: `url(${Logo})` }}
          aria-hidden="true"
        ></div>
        Антоніна Пашко
      </a>
      <ul className="nav-links">
        <li><a href="#program">Програма</a></li>
        <li><a href="#about">Спікер</a></li>
        <li><a href="#packages" className="nav-cta">Записатися</a></li>
      </ul>
    </nav>
  );
}