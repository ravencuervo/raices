import { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { label: 'Inicio',           href: '#inicio' },
  { label: 'Nuestra Historia', href: '#historia' },
  { label: 'Productos',        href: '#productos' },
  { label: 'Comprar',          href: '#comprar' },
  { label: 'Nuestra Esencia',  href: '#esencia' },
  { label: 'Contacto',         href: '#contacto' },
];

function Navbar() {
  const [scrolled, setScrolled]   = useState(false);
  const [menuOpen, setMenuOpen]   = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavClick = (href) => {
    setMenuOpen(false);
    const target = document.querySelector(href);
    if (target) {
      target.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className={`navbar${scrolled ? ' navbar--scrolled' : ''}`} role="banner">
      <div className="navbar__container">
        {/* Logo */}
        <a
          href="#inicio"
          className="navbar__logo"
          onClick={(e) => { e.preventDefault(); handleNavClick('#inicio'); }}
          aria-label="Raíces Crujientes — Inicio"
        >
          <img
            src="/images/logo_raices.png"
            alt="Logo Raíces Crujientes"
            className="navbar__logo-img"
          />
          <div className="navbar__logo-text">
            <span className="navbar__logo-main">RAÍCES CRUJIENTES</span>
            <span className="navbar__logo-sub">El Fruto de los Andes</span>
          </div>
        </a>

        {/* Nav desktop */}
        <nav className="navbar__nav" aria-label="Navegación principal">
          <ul className="navbar__links">
            {navLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* CTA desktop */}
        <a
          href="#comprar"
          className="navbar__cta"
          onClick={(e) => { e.preventDefault(); handleNavClick('#comprar'); }}
          aria-label="Comprar producto"
        >
          COMPRAR PRODUCTO
        </a>

        {/* Hamburguesa móvil */}
        <button
          className={`navbar__hamburger${menuOpen ? ' navbar__hamburger--open' : ''}`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
          aria-expanded={menuOpen}
        >
          <span />
          <span />
          <span />
        </button>
      </div>

      {/* Menú móvil */}
      <div className={`navbar__mobile${menuOpen ? ' navbar__mobile--open' : ''}`} aria-hidden={!menuOpen}>
        <ul className="navbar__mobile-links">
          {navLinks.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="navbar__mobile-link"
                onClick={(e) => { e.preventDefault(); handleNavClick(link.href); }}
                tabIndex={menuOpen ? 0 : -1}
              >
                {link.label}
              </a>
            </li>
          ))}
          <li>
            <a
              href="#comprar"
              className="navbar__mobile-cta"
              onClick={(e) => { e.preventDefault(); handleNavClick('#comprar'); }}
              tabIndex={menuOpen ? 0 : -1}
            >
              COMPRAR PRODUCTO
            </a>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default Navbar;
