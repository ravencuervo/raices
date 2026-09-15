import './Footer.css';

const footerLinks = [
  { label: 'Inicio',    href: '#inicio' },
  { label: 'Historia',  href: '#historia' },
  { label: 'Productos', href: '#productos' },
  { label: 'Esencia',   href: '#esencia' },
  { label: 'Contacto',  href: '#contacto' },
];

function Footer() {
  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer" role="contentinfo">
      <div className="footer__container">
        {/* Columna marca */}
        <div className="footer__brand">
          <img
            src="/images/logo_raices.png"
            alt="Logo Raíces Crujientes"
            className="footer__logo"
          />
          <div className="footer__brand-text">
            <p className="footer__brand-name">RAÍCES CRUJIENTES</p>
            <p className="footer__brand-sub">El Fruto de los Andes</p>
          </div>
          <p className="footer__frase">"Sabores de nuestra tierra."</p>
          <address className="footer__ubicacion" aria-label="Ubicación">
            <i className="bi bi-geo-alt-fill" aria-hidden="true" />
            <span>Huanimpampa, Paccaritambo, Paruro — Cusco, Perú</span>
          </address>
        </div>

        {/* Columna navegación */}
        <nav className="footer__nav" aria-label="Navegación del footer">
          <p className="footer__nav-title">Navegación</p>
          <ul className="footer__nav-links">
            {footerLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="footer__nav-link"
                  onClick={(e) => { e.preventDefault(); scrollTo(link.href); }}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Columna contacto / redes */}
        <div className="footer__contacto">
          <p className="footer__nav-title">Encuéntranos</p>
          <div className="footer__social" aria-label="Redes sociales">
            {/* TODO: reemplazar href="#" con enlaces reales de redes sociales */}
            <a
              href="#"
              className="footer__social-link"
              aria-label="Instagram de Raíces Crujientes"
            >
              <i className="bi bi-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Facebook de Raíces Crujientes"
            >
              <i className="bi bi-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="WhatsApp de Raíces Crujientes"
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="footer__contacto-desc">
            Contáctanos para más información sobre nuestros productos andinos.
          </p>
        </div>

        {/* Columna Mapa Google Maps */}
        <div className="footer__map-col">
          <p className="footer__nav-title">Nuestra Ubicación</p>
          <p className="footer__map-label">
            <i className="bi bi-geo-alt-fill" aria-hidden="true" />
            <span>Huanimpampa, Paccaritambo, Paruro — Cusco</span>
          </p>
          <div className="footer__map-frame">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3413.698961777084!2d-71.95589026371896!3d-13.80568700988356!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x916e83fcee7525bd%3A0x19273038acaa65c!2sHUANIMPAMPA!5e1!3m2!1ses-419!2spe!4v1789474209777!5m2!1ses-419!2spe"
              width="100%"
              height="200"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title="Ubicación de Huanimpampa, Paccaritambo, Paruro, Cusco"
            />
          </div>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {currentYear} Raíces Crujientes — El Fruto de los Andes. Todos los derechos reservados.
        </p>
        <p className="footer__made">
          Huanimpampa, Paccaritambo, Paruro, Cusco — Perú 🇵🇪
        </p>
      </div>
    </footer>
  );
}

export default Footer;
