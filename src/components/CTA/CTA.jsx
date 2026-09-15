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
          {/* WhatsApp — TODO: reemplazar href con número real */}
          <a
            href="#"
            className="cta__btn cta__btn--primary"
            aria-label="Contáctanos por WhatsApp"
            /* TODO: reemplazar con -> href="https://wa.me/51XXXXXXXXX?text=Hola%2C+me+interesa+conocer+m%C3%A1s+sobre+Ra%C3%ADces+Crujientes" */
          >
            <i className="bi bi-whatsapp" aria-hidden="true" />
            CONTÁCTANOS
          </a>

          {/* Instagram — TODO: reemplazar href con usuario real */}
          <a
            href="#"
            className="cta__btn cta__btn--secondary"
            aria-label="Síguenos en Instagram"
            /* TODO: reemplazar con -> href="https://instagram.com/raicescrujientes" */
          >
            <i className="bi bi-instagram" aria-hidden="true" />
            SÍGUENOS
          </a>
        </div>

        {/* Íconos de redes sociales */}
        <div className="cta__social anim-fade-up delay-5" aria-label="Redes sociales">
          {/* TODO: Agregar href reales de redes sociales */}
          <a href="#" className="cta__social-icon" aria-label="Instagram de Raíces Crujientes">
            <i className="bi bi-instagram" />
          </a>
          <a href="#" className="cta__social-icon" aria-label="Facebook de Raíces Crujientes">
            <i className="bi bi-facebook" />
          </a>
          <a href="#" className="cta__social-icon" aria-label="WhatsApp de Raíces Crujientes">
            <i className="bi bi-whatsapp" />
          </a>
        </div>
      </div>
    </section>
  );
}

export default CTA;
