import './Productos.css';

/**
 * ProductoCard — tarjeta premium para cada producto
 * @param {object} props
 * @param {string} props.imagen - ruta de imagen
 * @param {string} props.nombre - nombre del producto
 * @param {string} props.tipo - tipo (ej. "CHIPS NATURALES")
 * @param {string} props.descripcion - descripción del producto
 * @param {string[]} props.beneficios - lista de beneficios (iconos + texto)
 * @param {string} props.animClass - clase de animación
 * @param {string} props.delayClass - clase de delay
 */
function ProductoCard({ imagen, nombre, tipo, descripcion, beneficios, animClass = '', delayClass = '' }) {
  return (
    <article className={`producto-card ${animClass} ${delayClass}`}>
      {/* Imagen con zoom en hover */}
      <div className="producto-card__img-wrapper">
        <img
          src={imagen}
          alt={`${nombre} ${tipo} — Raíces Crujientes`}
          className="producto-card__img"
        />
        <div className="producto-card__badge">
          <i className="bi bi-leaf-fill" aria-hidden="true" />
          <span>100% Natural</span>
        </div>
      </div>

      {/* Contenido */}
      <div className="producto-card__body">
        <p className="producto-card__tipo">{tipo}</p>
        <h3 className="producto-card__nombre">{nombre}</h3>
        <p className="producto-card__desc">{descripcion}</p>

        {/* Beneficios */}
        <ul className="producto-card__beneficios" aria-label={`Beneficios de ${nombre}`}>
          {beneficios.map((b, i) => (
            <li key={i} className="producto-card__beneficio">
              <i className="bi bi-check-circle-fill" aria-hidden="true" />
              <span>{b}</span>
            </li>
          ))}
        </ul>

        {/* CTA */}
        <button
          className="producto-card__btn"
          aria-label={`Conocer más sobre ${nombre} ${tipo}`}
        >
          CONOCER MÁS
          <i className="bi bi-arrow-right" aria-hidden="true" />
        </button>
      </div>
    </article>
  );
}

export default ProductoCard;
