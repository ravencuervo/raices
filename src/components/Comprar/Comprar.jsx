import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Comprar.css';

const WHATSAPP_PHONE = '51959591453';
const PRECIO_100 = 2.50;
const PRECIO_300 = 7.00;

const createWhatsAppUrl = (text) => {
  return `https://wa.me/${WHATSAPP_PHONE}?text=${encodeURIComponent(text)}`;
};

function Comprar() {
  const sectionRef = useScrollAnimation();

  // Cantidades por producto y tamaño
  // Papa
  const [cantPapa100, setCantPapa100] = useState(1); // Pequeña 100g
  const [cantPapa300, setCantPapa300] = useState(0); // Grande 300g
  // Oca
  const [cantOca100, setCantOca100] = useState(0);   // Pequeña 100g
  const [cantOca300, setCantOca300] = useState(0);   // Grande 300g

  const [tipoCliente, setTipoCliente] = useState('personal'); // 'personal' | 'mayorista'
  const [notas, setNotas] = useState('');

  // Total en soles
  const total =
    cantPapa100 * PRECIO_100 +
    cantPapa300 * PRECIO_300 +
    cantOca100 * PRECIO_100 +
    cantOca300 * PRECIO_300;

  const totalItems = cantPapa100 + cantPapa300 + cantOca100 + cantOca300;

  // Botones de presets rápidos
  const handleCombo100 = () => {
    setCantPapa100(1);
    setCantOca100(1);
    setCantPapa300(0);
    setCantOca300(0);
  };

  const handleCombo300 = () => {
    setCantPapa100(0);
    setCantOca100(0);
    setCantPapa300(1);
    setCantOca300(1);
  };

  const handleComprar = () => {
    if (totalItems === 0) {
      alert('Por favor selecciona al menos una unidad para continuar con tu compra.');
      return;
    }

    let lineas = [];
    if (cantPapa100 > 0) {
      lineas.push(`• ${cantPapa100}x Chips de Papa Nativa (100g Pequeña - S/ ${PRECIO_100.toFixed(2)}) = S/ ${(cantPapa100 * PRECIO_100).toFixed(2)}`);
    }
    if (cantPapa300 > 0) {
      lineas.push(`• ${cantPapa300}x Chips de Papa Nativa (300g Grande - S/ ${PRECIO_300.toFixed(2)}) = S/ ${(cantPapa300 * PRECIO_300).toFixed(2)}`);
    }
    if (cantOca100 > 0) {
      lineas.push(`• ${cantOca100}x Chips de Oca Andina (100g Pequeña - S/ ${PRECIO_100.toFixed(2)}) = S/ ${(cantOca100 * PRECIO_100).toFixed(2)}`);
    }
    if (cantOca300 > 0) {
      lineas.push(`• ${cantOca300}x Chips de Oca Andina (300g Grande - S/ ${PRECIO_300.toFixed(2)}) = S/ ${(cantOca300 * PRECIO_300).toFixed(2)}`);
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
          {/* Columna Izquierda: Selección */}
          <div className="comprar-panel__selector">
            <div className="comprar-panel__header-row">
              <span className="comprar-panel__badge">
                <i className="bi bi-basket3-fill" aria-hidden="true" />
                PRESENTACIONES Y PRECIOS
              </span>
            </div>

            <div className="comprar-items">
              {/* --- Item Papa --- */}
              <div className={`comprar-item ${cantPapa100 > 0 || cantPapa300 > 0 ? 'comprar-item--selected' : ''}`}>
                <div className="comprar-item__img-box">
                  <img src="/images/portada1.png" alt="Chips de Papa Nativa" />
                </div>
                <div className="comprar-item__info">
                  <span className="comprar-item__tag">Papa Nativa</span>
                  <h3 className="comprar-item__name">Chips de Papa Nativa</h3>
                  <p className="comprar-item__desc">Crujientes, doradas y 100% naturales de Huanimpampa.</p>

                  {/* Controles de Presentaciones */}
                  <div className="comprar-item__sizes">
                    {/* Tamaño 100g */}
                    <div className="comprar-size-row">
                      <div className="comprar-size-row__label">
                        <span className="comprar-size-badge">100g</span>
                        <span className="comprar-size-price">S/ 2.50</span>
                        <small className="comprar-size-tipo">Pequeña</small>
                      </div>
                      <div className="comprar-size-counter">
                        <button
                          type="button"
                          onClick={() => setCantPapa100(Math.max(0, cantPapa100 - 1))}
                          aria-label="Restar Papa 100g"
                        >
                          -
                        </button>
                        <span className="comprar-size-count">{cantPapa100}</span>
                        <button
                          type="button"
                          onClick={() => setCantPapa100(cantPapa100 + 1)}
                          aria-label="Sumar Papa 100g"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Tamaño 300g */}
                    <div className="comprar-size-row">
                      <div className="comprar-size-row__label">
                        <span className="comprar-size-badge comprar-size-badge--grande">300g</span>
                        <span className="comprar-size-price">S/ 7.00</span>
                        <small className="comprar-size-tipo">Grande</small>
                      </div>
                      <div className="comprar-size-counter">
                        <button
                          type="button"
                          onClick={() => setCantPapa300(Math.max(0, cantPapa300 - 1))}
                          aria-label="Restar Papa 300g"
                        >
                          -
                        </button>
                        <span className="comprar-size-count">{cantPapa300}</span>
                        <button
                          type="button"
                          onClick={() => setCantPapa300(cantPapa300 + 1)}
                          aria-label="Sumar Papa 300g"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* --- Item Oca --- */}
              <div className={`comprar-item ${cantOca100 > 0 || cantOca300 > 0 ? 'comprar-item--selected' : ''}`}>
                <div className="comprar-item__img-box">
                  <img src="/images/portada3.png" alt="Chips de Oca Andina" />
                </div>
                <div className="comprar-item__info">
                  <span className="comprar-item__tag">Oca Andina</span>
                  <h3 className="comprar-item__name">Chips de Oca Andina</h3>
                  <p className="comprar-item__desc">Toque dulce natural andino, crocante y nutritivo.</p>

                  {/* Controles de Presentaciones */}
                  <div className="comprar-item__sizes">
                    {/* Tamaño 100g */}
                    <div className="comprar-size-row">
                      <div className="comprar-size-row__label">
                        <span className="comprar-size-badge">100g</span>
                        <span className="comprar-size-price">S/ 2.50</span>
                        <small className="comprar-size-tipo">Pequeña</small>
                      </div>
                      <div className="comprar-size-counter">
                        <button
                          type="button"
                          onClick={() => setCantOca100(Math.max(0, cantOca100 - 1))}
                          aria-label="Restar Oca 100g"
                        >
                          -
                        </button>
                        <span className="comprar-size-count">{cantOca100}</span>
                        <button
                          type="button"
                          onClick={() => setCantOca100(cantOca100 + 1)}
                          aria-label="Sumar Oca 100g"
                        >
                          +
                        </button>
                      </div>
                    </div>

                    {/* Tamaño 300g */}
                    <div className="comprar-size-row">
                      <div className="comprar-size-row__label">
                        <span className="comprar-size-badge comprar-size-badge--grande">300g</span>
                        <span className="comprar-size-price">S/ 7.00</span>
                        <small className="comprar-size-tipo">Grande</small>
                      </div>
                      <div className="comprar-size-counter">
                        <button
                          type="button"
                          onClick={() => setCantOca300(Math.max(0, cantOca300 - 1))}
                          aria-label="Restar Oca 300g"
                        >
                          -
                        </button>
                        <span className="comprar-size-count">{cantOca300}</span>
                        <button
                          type="button"
                          onClick={() => setCantOca300(cantOca300 + 1)}
                          aria-label="Sumar Oca 300g"
                        >
                          +
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Columna Derecha: Resumen de Pedido con Precios y Total */}
          <div className="comprar-panel__summary">
            <h3 className="comprar-summary__title">Resumen de tu Pedido</h3>

            <div className="comprar-summary__status">
              {totalItems === 0 ? (
                <p className="comprar-summary__empty">Selecciona las unidades que deseas comprar.</p>
              ) : (
                <div className="comprar-summary__list">
                  {cantPapa100 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Papa Nativa (100g) x{cantPapa100}</span>
                      <strong>S/ {(cantPapa100 * PRECIO_100).toFixed(2)}</strong>
                    </div>
                  )}
                  {cantPapa300 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Papa Nativa (300g) x{cantPapa300}</span>
                      <strong>S/ {(cantPapa300 * PRECIO_300).toFixed(2)}</strong>
                    </div>
                  )}
                  {cantOca100 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Oca Andina (100g) x{cantOca100}</span>
                      <strong>S/ {(cantOca100 * PRECIO_100).toFixed(2)}</strong>
                    </div>
                  )}
                  {cantOca300 > 0 && (
                    <div className="comprar-summary__line">
                      <span>Oca Andina (300g) x{cantOca300}</span>
                      <strong>S/ {(cantOca300 * PRECIO_300).toFixed(2)}</strong>
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
