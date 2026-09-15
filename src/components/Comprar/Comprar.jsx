import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Comprar.css';

const WHATSAPP_PHONE = '51959591453';
const PRECIO_40 = 2.50;
const PRECIO_200 = 7.00;

const createWhatsAppUrl = (text) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

function Comprar() {
  const sectionRef = useScrollAnimation();

  // Cantidades por producto y tamaño
  // Papa
  const [cantPapa40, setCantPapa40] = useState(1);   // Pequeña 40g
  const [cantPapa200, setCantPapa200] = useState(0); // Grande 200g
  // Oca
  const [cantOca40, setCantOca40] = useState(0);     // Pequeña 40g
  const [cantOca200, setCantOca200] = useState(0);   // Grande 200g

  const [tipoCliente, setTipoCliente] = useState('personal'); // 'personal' | 'mayorista'
  const [notas, setNotas] = useState('');

  // Total en soles
  const total =
    cantPapa40 * PRECIO_40 +
    cantPapa200 * PRECIO_200 +
    cantOca40 * PRECIO_40 +
    cantOca200 * PRECIO_200;

  const totalItems = cantPapa40 + cantPapa200 + cantOca40 + cantOca200;

  const handleComprar = () => {
    if (totalItems === 0) {
      alert('Por favor selecciona al menos una unidad para continuar con tu compra.');
      return;
    }

    let lineas = [];
    if (cantPapa40 > 0) {
      lineas.push(`• ${cantPapa40}x Chips de Papa Nativa (40g Pequeña - S/ ${PRECIO_40.toFixed(2)}) = S/ ${(cantPapa40 * PRECIO_40).toFixed(2)}`);
    }
    if (cantPapa200 > 0) {
      lineas.push(`• ${cantPapa200}x Chips de Papa Nativa (200g Grande - S/ ${PRECIO_200.toFixed(2)}) = S/ ${(cantPapa200 * PRECIO_200).toFixed(2)}`);
    }
    if (cantOca40 > 0) {
      lineas.push(`• ${cantOca40}x Chips de Oca Andina (40g Pequeña - S/ ${PRECIO_40.toFixed(2)}) = S/ ${(cantOca40 * PRECIO_40).toFixed(2)}`);
    }
    if (cantOca200 > 0) {
      lineas.push(`• ${cantOca200}x Chips de Oca Andina (200g Grande - S/ ${PRECIO_200.toFixed(2)}) = S/ ${(cantOca200 * PRECIO_200).toFixed(2)}`);
    }

    let mensaje = `¡Hola Raíces Crujientes! 👋 Deseo realizar la compra de los siguientes productos:\n\n`;
    mensaje += lineas.join('\n') + '\n\n';
    mensaje += `💰 Total estimado: S/ ${total.toFixed(2)}\n`;
    mensaje += `Modalidad: ${tipoCliente === 'mayorista' ? 'Pedido al por Mayor / Tienda' : 'Consumo Personal'}\n`;
    if (notas.trim()) {
      mensaje += `Lugar o detalle de entrega: ${notas.trim()}\n`;
    }
    mensaje += `\n¿Me podrían confirmar disponibilidad y los medios para coordinar el pago y entrega? ¡Muchas gracias!`;

    window.open(createWhatsAppUrl(mensaje), '_blank', 'noopener,noreferrer');
  };

  return (
    <section id="comprar" className="comprar" ref={sectionRef} aria-labelledby="comprar-title">
      <div className="comprar__container">
        {/* Header */}
        <div className="comprar__header">
          <p className="comprar__eyebrow anim-fade-up delay-1">Directo del campo andino</p>
          <h2 className="comprar__title anim-fade-up delay-2" id="comprar-title">
            COMPRAR PRODUCTO
          </h2>
        </div>

        {/* Panel de Selección y Compra */}
        <div className="comprar-panel anim-fade-up delay-4">
          {/* Columna Izquierda: Selección de Productos */}
          <div className="comprar-panel__selector">
            <div className="comprar-panel__header-row">
              <span className="comprar-panel__badge">
                <i className="bi bi-basket3-fill" aria-hidden="true" />
                PRESENTACIONES Y PRECIOS
              </span>
            </div>

            <div className="comprar-items">
              {/* --- Item Papa --- */}
              <div className={`comprar-item ${cantPapa40 > 0 || cantPapa200 > 0 ? 'comprar-item--selected' : ''}`}>
                <div className="comprar-item__header-mobile">
                  <div className="comprar-item__img-box">
                    <img src="/images/portada1.png" alt="Chips de Papa Nativa" loading="lazy" />
                  </div>
                  <div className="comprar-item__info">
                    <span className="comprar-item__tag">Papa Nativa</span>
                    <h3 className="comprar-item__name">Chips de Papa Nativa</h3>
                    <p className="comprar-item__desc">Crujientes, doradas y 100% naturales de Huanimpampa.</p>
                  </div>
                </div>

                {/* Controles de Presentaciones */}
                <div className="comprar-item__sizes">
                  {/* Tamaño 40g */}
                  <div className="comprar-size-row">
                    <div className="comprar-size-row__label">
                      <span className="comprar-size-badge">40g</span>
                      <span className="comprar-size-price">S/ 2.50</span>
                      <small className="comprar-size-tipo">Pequeña</small>
                    </div>
                    <div className="comprar-size-counter">
                      <button
                        type="button"
                        onClick={() => setCantPapa40(Math.max(0, cantPapa40 - 1))}
                        aria-label="Restar Papa 40g"
                      >
                        -
                      </button>
                      <span className="comprar-size-count">{cantPapa40}</span>
                      <button
                        type="button"
                        onClick={() => setCantPapa40(cantPapa40 + 1)}
                        aria-label="Sumar Papa 40g"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Tamaño 200g */}
                  <div className="comprar-size-row">
                    <div className="comprar-size-row__label">
                      <span className="comprar-size-badge comprar-size-badge--grande">200g</span>
                      <span className="comprar-size-price">S/ 7.00</span>
                      <small className="comprar-size-tipo">Grande</small>
                    </div>
                    <div className="comprar-size-counter">
                      <button
                        type="button"
                        onClick={() => setCantPapa200(Math.max(0, cantPapa200 - 1))}
                        aria-label="Restar Papa 200g"
                      >
                        -
                      </button>
                      <span className="comprar-size-count">{cantPapa200}</span>
                      <button
                        type="button"
                        onClick={() => setCantPapa200(cantPapa200 + 1)}
                        aria-label="Sumar Papa 200g"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Item Oca --- */}
              <div className={`comprar-item ${cantOca40 > 0 || cantOca200 > 0 ? 'comprar-item--selected' : ''}`}>
                <div className="comprar-item__header-mobile">
                  <div className="comprar-item__img-box">
                    <img src="/images/portada3.png" alt="Chips de Oca Andina" loading="lazy" />
                  </div>
                  <div className="comprar-item__info">
                    <span className="comprar-item__tag">Oca Andina</span>
                    <h3 className="comprar-item__name">Chips de Oca Andina</h3>
                    <p className="comprar-item__desc">Toque dulce natural andino, crocante y nutritivo.</p>
                  </div>
                </div>

                {/* Controles de Presentaciones */}
                <div className="comprar-item__sizes">
                  {/* Tamaño 40g */}
                  <div className="comprar-size-row">
                    <div className="comprar-size-row__label">
                      <span className="comprar-size-badge">40g</span>
                      <span className="comprar-size-price">S/ 2.50</span>
                      <small className="comprar-size-tipo">Pequeña</small>
                    </div>
                    <div className="comprar-size-counter">
                      <button
                        type="button"
                        onClick={() => setCantOca40(Math.max(0, cantOca40 - 1))}
                        aria-label="Restar Oca 40g"
                      >
                        -
                      </button>
                      <span className="comprar-size-count">{cantOca40}</span>
                      <button
                        type="button"
                        onClick={() => setCantOca40(cantOca40 + 1)}
                        aria-label="Sumar Oca 40g"
                      >
                        +
                      </button>
                    </div>
                  </div>

                  {/* Tamaño 200g */}
                  <div className="comprar-size-row">
                    <div className="comprar-size-row__label">
                      <span className="comprar-size-badge comprar-size-badge--grande">200g</span>
                      <span className="comprar-size-price">S/ 7.00</span>
                      <small className="comprar-size-tipo">Grande</small>
                    </div>
                    <div className="comprar-size-counter">
                      <button
                        type="button"
                        onClick={() => setCantOca200(Math.max(0, cantOca200 - 1))}
                        aria-label="Restar Oca 200g"
                      >
                        -
                      </button>
                      <span className="comprar-size-count">{cantOca200}</span>
                      <button
                        type="button"
                        onClick={() => setCantOca200(cantOca200 + 1)}
                        aria-label="Sumar Oca 200g"
                      >
                        +
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Resumen de Pedido y Botón Final */}
          <div className="comprar-panel__summary">
            <h3 className="comprar-summary__title">Resumen de tu Pedido</h3>

            <div className="comprar-summary__status">
              {totalItems === 0 ? (
                <p className="comprar-summary__empty">Selecciona las unidades que deseas comprar.</p>
              ) : (
                <div className="comprar-summary__list">
                  {cantPapa40 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Papa Nativa (40g) x{cantPapa40}</span>
                      <strong>S/ {(cantPapa40 * PRECIO_40).toFixed(2)}</strong>
                    </div>
                  )}
                  {cantPapa200 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Papa Nativa (200g) x{cantPapa200}</span>
                      <strong>S/ {(cantPapa200 * PRECIO_200).toFixed(2)}</strong>
                    </div>
                  )}
                  {cantOca40 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Oca Andina (40g) x{cantOca40}</span>
                      <strong>S/ {(cantOca40 * PRECIO_40).toFixed(2)}</strong>
                    </div>
                  )}
                  {cantOca200 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Oca Andina (200g) x{cantOca200}</span>
                      <strong>S/ {(cantOca200 * PRECIO_200).toFixed(2)}</strong>
                    </div>
                  )}

                  <div className="comprar-summary__total-box">
                    <span className="comprar-summary__total-label">Total a Pagar:</span>
                    <span className="comprar-summary__total-amount">S/ {total.toFixed(2)}</span>
                  </div>
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
