import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Comprar.css';

const WHATSAPP_PHONE = '51959591453';

const createWhatsAppUrl = (text) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

function Comprar() {
  const sectionRef = useScrollAnimation();

  // Cantidades de producto
  const [cantPapa, setCantPapa] = useState(1);
  const [cantOca, setCantOca] = useState(0);
  const [tipoCliente, setTipoCliente] = useState('personal'); // 'personal' | 'mayorista'
  const [notas, setNotas] = useState('');

  // Botón rápido para elegir ambos
  const handleSeleccionarAmbos = () => {
    setCantPapa(1);
    setCantOca(1);
  };

  const handleComprar = () => {
    const totalPapa = Math.max(0, cantPapa);
    const totalOca = Math.max(0, cantOca);

    if (totalPapa === 0 && totalOca === 0) {
      alert('Por favor selecciona al menos una unidad de Chips de Papa o Chips de Oca.');
      return;
    }

    let items = [];
    if (totalPapa > 0 && totalOca > 0) {
      items.push(`Ambos productos:`);
      items.push(`• ${totalPapa}x Chips de Papa Nativa`);
      items.push(`• ${totalOca}x Chips de Oca Andina`);
    } else if (totalPapa > 0) {
      items.push(`• ${totalPapa}x Chips de Papa Nativa`);
    } else if (totalOca > 0) {
      items.push(`• ${totalOca}x Chips de Oca Andina`);
    }

    let mensaje = `¡Hola Raíces Crujientes! 👋 Deseo comprar el siguiente producto:\n\n`;
    mensaje += items.join('\n') + `\n\n`;
    mensaje += `Modalidad: ${tipoCliente === 'mayorista' ? 'Pedido al por Mayor / Negocio' : 'Consumo Personal'}\n`;
    if (notas.trim()) {
      mensaje += `Detalles o destino: ${notas.trim()}\n`;
    }
    mensaje += `\n¿Me podrían confirmar el precio total y la coordinación de la entrega? ¡Muchas gracias!`;

    window.open(createWhatsAppUrl(mensaje), '_blank', 'noopener,noreferrer');
  };

  const tieneAmbos = cantPapa > 0 && cantOca > 0;

  return (
    <section id="comprar" className="comprar" ref={sectionRef} aria-labelledby="comprar-title">
      <div className="comprar__container">
        {/* Header de la sección */}
        <div className="comprar__header">
          <p className="comprar__eyebrow anim-fade-up delay-1">Directo del campo andino</p>
          <h2 className="comprar__title anim-fade-up delay-2" id="comprar-title">
            COMPRAR PRODUCTO
          </h2>
          <p className="comprar__subtitle anim-fade-up delay-3">
            Elige si deseas Chips de Papa Nativa, Chips de Oca Andina o ambos. Personaliza las cantidades
            de tu pedido y coordina la entrega al instante.
          </p>
        </div>

        {/* Panel de Selección y Compra */}
        <div className="comprar-panel anim-fade-up delay-4">
          {/* Columna Izquierda: Selección de Productos */}
          <div className="comprar-panel__selector">
            <div className="comprar-panel__header-row">
              <span className="comprar-panel__badge">
                <i className="bi bi-basket3-fill" aria-hidden="true" />
                SELECCIONA TUS PRODUCTOS
              </span>
              <button
                type="button"
                className={`comprar-panel__btn-quick ${tieneAmbos ? 'is-active' : ''}`}
                onClick={handleSeleccionarAmbos}
              >
                <i className="bi bi-stars" aria-hidden="true" />
                Llevar ambos (Papa + Oca)
              </button>
            </div>

            <div className="comprar-items">
              {/* Item: Chips de Papa */}
              <div className={`comprar-item ${cantPapa > 0 ? 'comprar-item--selected' : ''}`}>
                <div className="comprar-item__img-box">
                  <img src="/images/portada1.png" alt="Chips de Papa Nativa" />
                </div>
                <div className="comprar-item__info">
                  <span className="comprar-item__tag">Papa Nativa</span>
                  <h3 className="comprar-item__name">Chips de Papa Nativa</h3>
                  <p className="comprar-item__desc">Crujientes, doradas y 100% naturales de los Andes.</p>
                </div>
                <div className="comprar-item__counter">
                  <button
                    type="button"
                    onClick={() => setCantPapa(Math.max(0, cantPapa - 1))}
                    aria-label="Disminuir unidades de Chips de Papa"
                  >
                    -
                  </button>
                  <span className="comprar-item__count">{cantPapa}</span>
                  <button
                    type="button"
                    onClick={() => setCantPapa(cantPapa + 1)}
                    aria-label="Aumentar unidades de Chips de Papa"
                  >
                    +
                  </button>
                </div>
              </div>

              {/* Item: Chips de Oca */}
              <div className={`comprar-item ${cantOca > 0 ? 'comprar-item--selected' : ''}`}>
                <div className="comprar-item__img-box">
                  <img src="/images/portada3.png" alt="Chips de Oca Andina" />
                </div>
                <div className="comprar-item__info">
                  <span className="comprar-item__tag">Oca Andina</span>
                  <h3 className="comprar-item__name">Chips de Oca Andina</h3>
                  <p className="comprar-item__desc">Toque dulce natural, auténtico y nutritivo.</p>
                </div>
                <div className="comprar-item__counter">
                  <button
                    type="button"
                    onClick={() => setCantOca(Math.max(0, cantOca - 1))}
                    aria-label="Disminuir unidades de Chips de Oca"
                  >
                    -
                  </button>
                  <span className="comprar-item__count">{cantOca}</span>
                  <button
                    type="button"
                    onClick={() => setCantOca(cantOca + 1)}
                    aria-label="Aumentar unidades de Chips de Oca"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Opciones y Botón de Compra */}
          <div className="comprar-panel__summary">
            <h3 className="comprar-summary__title">Resumen de tu Pedido</h3>

            <div className="comprar-summary__status">
              {cantPapa === 0 && cantOca === 0 && (
                <p className="comprar-summary__empty">Selecciona al menos una unidad para continuar.</p>
              )}
              {cantPapa > 0 && cantOca === 0 && (
                <p className="comprar-summary__picked">
                  <strong>Chips de Papa Nativa</strong>: {cantPapa} paquete(s)
                </p>
              )}
              {cantOca > 0 && cantPapa === 0 && (
                <p className="comprar-summary__picked">
                  <strong>Chips de Oca Andina</strong>: {cantOca} paquete(s)
                </p>
              )}
              {tieneAmbos && (
                <div className="comprar-summary__picked-combo">
                  <span className="comprar-summary__combo-badge">Combo Mixto (Ambos)</span>
                  <p>• {cantPapa}x Chips de Papa Nativa</p>
                  <p>• {cantOca}x Chips de Oca Andina</p>
                </div>
              )}
            </div>

            <div className="comprar-summary__form">
              <div className="comprar-summary__field">
                <label htmlFor="tipo-cliente">Modalidad de compra:</label>
                <select
                  id="tipo-cliente"
                  value={tipoCliente}
                  onChange={(e) => setTipoCliente(e.target.value)}
                >
                  <option value="personal">Consumo Personal / Familiar</option>
                  <option value="mayorista">Para Tienda / Al por Mayor</option>
                </select>
              </div>

              <div className="comprar-summary__field">
                <label htmlFor="notas-entrega">Ciudad o lugar de entrega (opcional):</label>
                <input
                  id="notas-entrega"
                  type="text"
                  placeholder="Ej. Cusco ciudad, envíos a provincias..."
                  value={notas}
                  onChange={(e) => setNotas(e.target.value)}
                />
              </div>
            </div>

            {/* Botón Principal COMPRAR PRODUCTO */}
            <button
              type="button"
              className="comprar-btn-final"
              onClick={handleComprar}
              aria-label="Comprar producto"
            >
              <span>COMPRAR PRODUCTO</span>
              <i className="bi bi-arrow-right-circle-fill" aria-hidden="true" />
            </button>

            <p className="comprar-panel__note">
              <i className="bi bi-shield-check" aria-hidden="true" />
              Atención directa y confirmación de disponibilidad inmediata.
            </p>
          </div>
        </div>

        {/* Garantías de calidad */}
        <div className="comprar__garantias anim-fade-up delay-5">
          <div className="comprar__garantia-item">
            <i className="bi bi-award-fill" aria-hidden="true" />
            <div>
              <strong>Calidad Artesanal</strong>
              <p>Elaborados con tubérculos andinos de Huanimpampa.</p>
            </div>
          </div>
          <div className="comprar__garantia-item">
            <i className="bi bi-box-seam-fill" aria-hidden="true" />
            <div>
              <strong>Envíos Coordinados</strong>
              <p>Entregas seguras y atención dedicada a tu pedido.</p>
            </div>
          </div>
          <div className="comprar__garantia-item">
            <i className="bi bi-heart-fill" aria-hidden="true" />
            <div>
              <strong>100% Natural</strong>
              <p>Sin preservantes ni químicos añadidos.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Comprar;
