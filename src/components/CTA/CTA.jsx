import useScrollAnimation from '../../hooks/useScrollAnimation';
import './CTA.css';

function CTA() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="contacto" className="cta" ref={sectionRef} aria-labelledby="cta-title">
      <div className="cta__container">
        <p className="cta__eyebrow anim-fade-up delay-1">¿Listo para descubrir los Andes?</p>
        <h2 className="cta__title anim-fade-up delay-2" id="cta-title">
          SABORES QUE<br />CUENTAN HISTORIAS
        </h2>
        <p className="cta__desc anim-fade-up delay-3">
          Escríbenos y descubre cómo llevar el sabor auténtico
          de los Andes a tu mesa o negocio.
        </p>

        <div className="cta__acciones anim-fade-up delay-4">
          <a
            href="https://wa.me/51959591453?text=%C2%A1Hola%20Ra%C3%ADces%20Crujientes!%20%F0%9F%91%8B%20Me%20gustar%C3%ADa%20hacerles%20una%20consulta%20o%20pedido."
            target="_blank"
            rel="noopener noreferrer"
            className="cta__btn cta__btn--primary"
            aria-label="Contáctanos por WhatsApp"
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            CONTÁCTANOS
          </a>

          {/* Instagram */}
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cta__btn cta__btn--secondary"
            aria-label="Síguenos en Instagram"
          >
            <i className="bi bi-instagram" aria-hidden="true" />
            SÍGUENOS
          </a>
        </div>

        {/* Íconos de redes sociales */}
        <div className="cta__social anim-fade-up delay-5" aria-label="Redes sociales">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="cta__social-icon" aria-label="Instagram de Raíces Crujientes">
            <i className="bi bi-instagram" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="cta__social-icon" aria-label="Facebook de Raíces Crujientes">
            <i className="bi bi-facebook" />
          </a>
          <a
            href="https://wa.me/51959591453?text=%C2%A1Hola%20Ra%C3%ADces%20Crujientes!%20%F0%9F%91%8B%20Deseo%20m%C3%A1s%20informaci%C3%B3n."
            target="_blank"
            rel="noopener noreferrer"
            className="cta__social-icon"
            aria-label="WhatsApp de Raíces Crujientes"
          >
            <i className="bi bi-whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
