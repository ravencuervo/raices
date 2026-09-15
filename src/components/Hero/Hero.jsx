import { useEffect, useRef } from 'react';
import './Hero.css';

function Hero() {
  const contentRef = useRef(null);

  useEffect(() => {
    // Animación de entrada al cargar la página
    const el = contentRef.current;
    if (!el) return;
    const items = el.querySelectorAll('.hero__anim');
    items.forEach((item, i) => {
      setTimeout(() => item.classList.add('hero__anim--visible'), 200 + i * 160);
    });
  }, []);

  const scrollTo = (href) => {
    const target = document.querySelector(href);
    if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section id="inicio" className="hero" aria-label="Hero principal">
      {/* Imagen de fondo con overlay oscuro sólido */}
      <div className="hero__bg">
        <img
          src="/images/portada1.png"
          alt="Paisaje andino peruano con cultivos de papa nativa — Raíces Crujientes"
          className="hero__bg-img"
        />
        <div className="hero__overlay" aria-hidden="true" />
      </div>

      {/* Contenido */}
      <div className="hero__container" ref={contentRef}>
        {/* Badge */}
        <div className="hero__badge hero__anim">
          <i className="bi bi-geo-alt-fill" aria-hidden="true" />
          <span>Del corazón de los Andes · Perú</span>
        </div>

        {/* Título */}
        <h1 className="hero__title hero__anim">
          RAÍCES<br />CRUJIENTES
        </h1>

        {/* Subtítulo */}
        <p className="hero__subtitle hero__anim">
          El Fruto de los Andes
        </p>

        {/* Frase */}
        <p className="hero__tagline hero__anim">
          "Pequeñas papas, grandes historias."
        </p>

        {/* Descripción */}
        <p className="hero__desc hero__anim">
          Sabores de nuestra tierra
        </p>

        {/* CTAs */}
        <div className="hero__ctas hero__anim">
          <button
            className="hero__btn hero__btn--primary"
            onClick={() => scrollTo('#productos')}
            aria-label="Descubre nuestros sabores"
          >
            DESCUBRE NUESTROS SABORES
          </button>
          <button
            className="hero__btn hero__btn--secondary"
            onClick={() => scrollTo('#historia')}
            aria-label="Conoce nuestra historia"
          >
            CONOCE NUESTRA HISTORIA
          </button>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="hero__scroll-indicator" aria-hidden="true">
        <i className="bi bi-chevron-down" />
      </div>
    </section>
  );
}

export default Hero;
