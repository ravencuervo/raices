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
            <span>Huanimpampa, Paruro — Perú</span>
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
              /* TODO: href="https://instagram.com/raicescrujientes" */
            >
              <i className="bi bi-instagram" aria-hidden="true" />
              <span>Instagram</span>
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="Facebook de Raíces Crujientes"
              /* TODO: href="https://facebook.com/raicescrujientes" */
            >
              <i className="bi bi-facebook" aria-hidden="true" />
              <span>Facebook</span>
            </a>
            <a
              href="#"
              className="footer__social-link"
              aria-label="WhatsApp de Raíces Crujientes"
              /* TODO: href="https://wa.me/51XXXXXXXXX" */
            >
              <i className="bi bi-whatsapp" aria-hidden="true" />
              <span>WhatsApp</span>
            </a>
          </div>
          <p className="footer__contacto-desc">
            {/* TODO: Agregar email real */}
            {/* contacto@raicescrujientes.pe */}
            Contáctanos para más información sobre nuestros productos andinos.
          </p>
        </div>
      </div>

      {/* Copyright */}
      <div className="footer__bottom">
        <p className="footer__copy">
          © {currentYear} Raíces Crujientes — El Fruto de los Andes. Todos los derechos reservados.
        </p>
        <p className="footer__made">
          Huanimpampa, Paruro, Perú 🇵🇪
        </p>
      </div>
    </footer>
  );
}

export default Footer;
