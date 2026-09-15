import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Atributos.css';

const atributos = [
  {
    icono: 'bi-shield-check',
    titulo: 'SIN PRESERVANTES',
    descripcion:
      'Elaborados sin aditivos artificiales. Solo ingredientes naturales de nuestros campos andinos.',
  },
  {
    icono: 'bi-heart-pulse-fill',
    titulo: 'FUENTE DE FIBRA',
    descripcion:
      'Las papas nativas y la oca son naturalmente ricas en fibra dietaria, esencial para tu bienestar.',
  },
  {
    icono: 'bi-geo-alt-fill',
    titulo: 'PRODUCTO ANDINO',
    descripcion:
      'Cultivados en las alturas de Huanimpampa, Paruro — el corazón de los Andes peruanos.',
  },
];

function Atributos() {
  const sectionRef = useScrollAnimation();

  return (
    <section className="atributos" ref={sectionRef} aria-labelledby="atributos-title">
      <div className="atributos__container">
        {/* Header */}
        <div className="atributos__header anim-fade-up delay-1">
          <p className="atributos__eyebrow">Lo que nos define</p>
          <h2 className="atributos__title" id="atributos-title">
            NUESTRA PROMESA
          </h2>
        </div>

        {/* Cards */}
        <div className="atributos__grid">
          {atributos.map((attr, i) => (
            <div
              key={attr.titulo}
              className={`atributos__card anim-fade-up delay-${i + 2}`}
            >
              <div className="atributos__icon-wrapper" aria-hidden="true">
                <i className={`bi ${attr.icono} atributos__icon`} />
              </div>
              <h3 className="atributos__card-title">{attr.titulo}</h3>
              <p className="atributos__card-desc">{attr.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Atributos;
