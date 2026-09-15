import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Origen.css';

function Origen() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="origen" ref={sectionRef} aria-labelledby="origen-title">
      {/* Imagen de fondo con overlay sólido */}
      <div className="origen__bg">
        <img
          src="/images/portada1.png"
          alt="Paisaje andino de Huanimpampa, Paruro, Cusco, Perú"
          className="origen__bg-img"
        />
        <div className="origen__overlay" aria-hidden="true" />
      </div>

      <div className="origen__container">
        {/* Bloque de ubicación */}
        <div className="origen__ubicacion anim-fade-up delay-1">
          <i className="bi bi-geo-alt-fill origen__ubicacion-icon" aria-hidden="true" />
          <div className="origen__lugar">
            <span className="origen__lugar-linea origen__lugar-linea--grande">HUANIMPAMPA</span>
            <span className="origen__lugar-linea">PARURO</span>
            <span className="origen__lugar-linea origen__lugar-linea--pais">
              <i className="bi bi-flag-fill" aria-hidden="true" /> PERÚ
            </span>
          </div>
        </div>

        {/* Texto */}
        <div className="origen__texto">
          <h2 className="origen__title anim-fade-up delay-2" id="origen-title">
            EL CORAZÓN<br />DE LOS ANDES
          </h2>
          <p className="origen__desc anim-fade-up delay-3">
            Nuestros productos nacen en las alturas de Huanimpampa, en la provincia
            de Paruro, donde las condiciones únicas de los Andes peruanos dan vida
            a papas nativas y tubérculos de excepcional calidad.
          </p>
          <p className="origen__desc anim-fade-up delay-4">
            De nuestra tierra directamente a tu mesa, trayendo consigo siglos
            de tradición agrícola andina y el sabor auténtico del Perú.
          </p>
        </div>

        {/* Stats de origen */}
        <div className="origen__stats anim-fade-up delay-5">
          <div className="origen__stat">
            <i className="bi bi-mountains-fill" aria-hidden="true" />
            <span className="origen__stat-label">Andes Peruanos</span>
          </div>
          <div className="origen__stat-divider" aria-hidden="true" />
          <div className="origen__stat">
            <i className="bi bi-sun-fill" aria-hidden="true" />
            <span className="origen__stat-label">Cultivo Natural</span>
          </div>
          <div className="origen__stat-divider" aria-hidden="true" />
          <div className="origen__stat">
            <i className="bi bi-people-fill" aria-hidden="true" />
            <span className="origen__stat-label">Comunidades Locales</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Origen;
