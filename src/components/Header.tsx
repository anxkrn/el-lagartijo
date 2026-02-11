import { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
      setMenuOpen(false);
    }
  };

  return (
    <header className="header">
      <div className="header-container">
        <button
          className="menu-toggle"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-expanded={menuOpen}
          aria-label="Abrir o cerrar menú"
        >
          <span />
          <span />
          <span />
        </button>

        <div className="logo-container">
          <a href="#inicio" className="logo-link" onClick={() => scrollToSection('inicio')}>
            <img src={logo} alt="El Lagartijo" className="logo-img" />
            <span className="logo-text">El Lagartijo</span>
          </a>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`} aria-label="Principal">
          <a href="#inicio" onClick={() => scrollToSection('inicio')}>
            Inicio
          </a>
          <a href="#catalogo" onClick={() => scrollToSection('catalogo')}>
            Catálogo
          </a>
          <a href="#personaliza" onClick={() => scrollToSection('personaliza')}>
            Personaliza
          </a>
          <a href="#contacto" onClick={() => scrollToSection('contacto')}>
            Contacto
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Header;
