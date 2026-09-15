import { useEffect } from 'react';
import './ProductoModal.css';

const infoPlatos = {
  papa: {
    id: 'papa',
    nombre: 'Chips de Papa Nativa',
    etiqueta: 'Plato servido',
    imagen: '/images/plato_chips_papa.jpg',
    alt: 'Plato servido de chips de papa nativa — Raíces Crujientes',
    descripcion:
      'Hojuelas crujientes de papa nativa seleccionadas a mano en Huanimpampa (Cusco). Textura crocante inigualable y sabor andino 100% natural sin preservantes.',
    detalles: [
      'Papas nativas de altura',
      'Corte fino y crocante',
      '100% libre de octógonos',
      'Huanimpampa, Cusco',
    ],
  },
  oca: {
    id: 'oca',
    nombre: 'Chips de Oca Andina',
    etiqueta: 'Plato servido',
    imagen: '/images/plato_chips_oca.jpg',
    alt: 'Plato servido de chips de oca andina — Raíces Crujientes',
    descripcion:
      'Auténticos chips de oca andina con un toque suave y dulce natural. Una experiencia crujiente tradicional elaborada con respeto a nuestra tierra ancestral.',
    detalles: [
      'Oca andina seleccionada',
      'Sabor dulce natural',
      'Elaboración artesanal',
      'Huanimpampa, Cusco',
    ],
  },
};

function ProductoModal({ isOpen, activeId = 'papa', onClose, onSelect }) {
  // Manejo de tecla ESC y bloqueo de scroll
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [isOpen, onClose]);

  if (!isOpen) return null;

  const platoActual = infoPlatos[activeId] || infoPlatos.papa;

  return (
    <div
      className="producto-modal__backdrop"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="producto-modal-title"
    >
      <div
        className="producto-modal__card"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Botón cerrar */}
        <button
          type="button"
          className="producto-modal__close-btn"
          onClick={onClose}
          aria-label="Cerrar ventana de presentación"
        >
          <i className="bi bi-x-lg" aria-hidden="true" />
        </button>

        {/* Pestañas para alternar entre platos */}
        <div className="producto-modal__tabs" role="tablist">
          <button
            type="button"
            role="tab"
            aria-selected={activeId === 'papa'}
            className={`producto-modal__tab ${activeId === 'papa' ? 'is-active' : ''}`}
            onClick={() => onSelect('papa')}
          >
            <i className="bi bi-circle-fill" aria-hidden="true" />
            Chips de Papa
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={activeId === 'oca'}
            className={`producto-modal__tab ${activeId === 'oca' ? 'is-active' : ''}`}
            onClick={() => onSelect('oca')}
          >
            <i className="bi bi-circle-fill" aria-hidden="true" />
            Chips de Oca
          </button>
        </div>

        {/* Contenedor imagen + info */}
        <div className="producto-modal__content">
          <div className="producto-modal__img-wrap">
            <img
              src={platoActual.imagen}
              alt={platoActual.alt}
              className="producto-modal__img"
            />
            <span className="producto-modal__badge">
              <i className="bi bi-geo-alt-fill" aria-hidden="true" />
              Huanimpampa, Cusco
            </span>
          </div>

          <div className="producto-modal__info">
            <p className="producto-modal__eyebrow">{platoActual.etiqueta}</p>
            <h3 id="producto-modal-title" className="producto-modal__title">
              {platoActual.nombre}
            </h3>
            <p className="producto-modal__desc">{platoActual.descripcion}</p>

            <ul className="producto-modal__features">
              {platoActual.detalles.map((detalle, idx) => (
                <li key={idx} className="producto-modal__feature">
                  <i className="bi bi-check-circle-fill" aria-hidden="true" />
                  <span>{detalle}</span>
                </li>
              ))}
            </ul>

            <div className="producto-modal__actions">
              <a
                href={`https://wa.me/51959591453?text=${encodeURIComponent(`¡Hola Raíces Crujientes! 👋 Deseo comprar ${platoActual.nombre}. ¿Me brindan detalles de precios y cómo coordinar el envío?`)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="producto-modal__buy-btn"
              >
                <i className="bi bi-bag-check" aria-hidden="true" />
                COMPRAR PRODUCTO
              </a>
              <button
                type="button"
                className="producto-modal__switch-btn"
                onClick={() => onSelect(activeId === 'papa' ? 'oca' : 'papa')}
              >
                Ver {activeId === 'papa' ? 'Chips de Oca' : 'Chips de Papa'}
                <i className="bi bi-arrow-right" aria-hidden="true" />
              </button>
              <button
                type="button"
                className="producto-modal__back-btn"
                onClick={onClose}
              >
                Cerrar
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ProductoModal;
