import { useState } from 'react';
import logo from '../assets/logo.png';
import '../styles/Header.css';

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

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
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </button>

        <div className="logo-container">
          <img src={logo} alt="El Lagartijo Logo" className="logo-img" />
          <span className="logo-text">El Lagartijo</span>
        </div>

        <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
          <a href="#inicio" onClick={() => scrollToSection('inicio')}>
            Inicio
          </a>
          <a href="#catalogo" onClick={() => scrollToSection('catalogo')}>
            Catálogo
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
