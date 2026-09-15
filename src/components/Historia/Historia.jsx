import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Historia.css';

function Historia() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="historia" className="historia" ref={sectionRef} aria-labelledby="historia-title">
      <div className="historia__container">
        {/* Imagen */}
        <div className="historia__imagen anim-fade-left">
          <img
            src="/images/portada2.jpg"
            alt="Agricultores andinos en los cultivos de papa nativa en Huanimpampa, Paruro"
            className="historia__img"
          />
          <div className="historia__img-badge">
            <i className="bi bi-heart-fill" aria-hidden="true" />
            <span>Tradición ancestral</span>
          </div>
        </div>

        {/* Texto */}
        <div className="historia__content">
          <p className="historia__eyebrow anim-fade-up delay-1">Nuestra historia</p>
          <h2 className="historia__title anim-fade-up delay-2" id="historia-title">
            RAÍCES QUE<br />INSPIRAN
          </h2>

          <p className="historia__texto anim-fade-up delay-3">
            Raíces Crujientes nace de nuestras tierras andinas, donde la tradición,
            la agricultura y el trabajo de nuestras comunidades se encuentran para
            dar vida a un producto auténticamente peruano.
          </p>

          <p className="historia__texto anim-fade-up delay-3">
            Nuestra misión es llevar los sabores de los Andes a nuevos consumidores
            mediante snacks elaborados a partir de papas nativas, rescatando el valor
            de nuestra biodiversidad y el conocimiento ancestral de quienes cultivan
            nuestra tierra.
          </p>

          {/* Pilares */}
          <ul className="historia__pilares anim-fade-up delay-4" aria-label="Valores de la marca">
            <li className="historia__pilar">
              <i className="bi bi-tree-fill" aria-hidden="true" />
              <span>Agricultura andina</span>
            </li>
            <li className="historia__pilar">
              <i className="bi bi-people-fill" aria-hidden="true" />
              <span>Comunidades</span>
            </li>
            <li className="historia__pilar">
              <i className="bi bi-award-fill" aria-hidden="true" />
              <span>Identidad peruana</span>
            </li>
            <li className="historia__pilar">
              <i className="bi bi-lightbulb-fill" aria-hidden="true" />
              <span>Innovación</span>
            </li>
          </ul>

          {/* Frase destacada */}
          <blockquote className="historia__frase anim-fade-up delay-5">
            "Raíces que inspiran bienestar."
          </blockquote>
        </div>
      </div>
    </section>
  );
}

export default Historia;
