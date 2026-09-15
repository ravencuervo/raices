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
function ProductoCard({
  imagen,
  nombre,
  tipo,
  descripcion,
  beneficios,
  animClass = '',
  delayClass = '',
  onVerMas,
}) {
  return (
    <article className={`producto-card ${animClass} ${delayClass}`}>
      {/* Imagen con zoom en hover y clic para ver presentación */}
      <div
        className="producto-card__img-wrapper"
        onClick={onVerMas}
        style={{ cursor: 'pointer' }}
        title={`Ver presentación servida de ${nombre}`}
      >
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

        {/* Presentaciones y Precios */}
        <div className="producto-card__precios">
          <span className="producto-card__precio-item">
            <strong>100g</strong> (Pequeña): S/ 2.50
          </span>
          <span className="producto-card__precio-item">
            <strong>300g</strong> (Grande): S/ 7.00
          </span>
        </div>

        {/* Acciones */}
        <div className="producto-card__actions">
          <button
            type="button"
            className="producto-card__btn"
            onClick={onVerMas}
            aria-label={`Conocer más sobre ${nombre} ${tipo}`}
          >
            CONOCER MÁS
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </button>
          <a
            href="#comprar"
            className="producto-card__btn-comprar"
            aria-label={`Comprar ${nombre}`}
          >
            COMPRAR PRODUCTO
            <i className="bi bi-arrow-right" aria-hidden="true" />
          </a>
        </div>
      </div>
    </article>
  );
}

export default ProductoCard;
