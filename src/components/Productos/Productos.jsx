import { useState } from 'react';
import useScrollAnimation from '../../hooks/useScrollAnimation';
import ProductoCard from './ProductoCard';
import ProductoModal from './ProductoModal';
import './Productos.css';

const productos = [
  {
    id: 'papa',
    imagen: '/images/portada1.png',
    imagenPlato: '/images/plato_chips_papa.jpg',
    nombre: 'PAPA',
    tipo: 'CHIPS NATURALES',
    descripcion:
      'Chips de papa nativa, crujientes y deliciosos, elaborados para conservar el sabor y la esencia de nuestros Andes.',
    beneficios: [
      'Sin preservantes artificiales',
      'Fuente natural de fibra',
      'Papa nativa andina',
      'Producción artesanal',
    ],
  },
  {
    id: 'oca',
    imagen: '/images/portada3.png',
    imagenPlato: '/images/plato_chips_oca.jpg',
    nombre: 'OCA',
    tipo: 'CHIPS NATURALES',
    descripcion:
      'Chips de oca, una alternativa andina con un sabor único, natural y auténtico, directo de nuestros campos.',
    beneficios: [
      'Sin preservantes artificiales',
      'Sabor andino único',
      'Oca 100% natural',
      'Producto de temporada',
    ],
  },
];

function Productos() {
  const sectionRef = useScrollAnimation();
  const [modalOpen, setModalOpen] = useState(false);
  const [activePlato, setActivePlato] = useState('papa');

  const handleOpenPlato = (id) => {
    setActivePlato(id);
    setModalOpen(true);
  };

  return (
    <section id="productos" className="productos" ref={sectionRef} aria-labelledby="productos-title">
      <div className="productos__container">
        {/* Header */}
        <div className="productos__header">
          <p className="productos__eyebrow anim-fade-up delay-1">Del campo a tu mesa</p>
          <h2 className="productos__title anim-fade-up delay-2" id="productos-title">
            NUESTROS<br />PRODUCTOS
          </h2>
          <p className="productos__subtitle anim-fade-up delay-3">
            Snacks elaborados con ingredientes andinos auténticos, respetando
            el sabor y la tradición de nuestra tierra.
          </p>
        </div>

        {/* Grid de productos */}
        <div className="productos__grid">
          {productos.map((producto, i) => (
            <ProductoCard
              key={producto.nombre}
              {...producto}
              animClass="anim-fade-up"
              delayClass={`delay-${i + 3}`}
              onVerMas={() => handleOpenPlato(producto.id)}
            />
          ))}
        </div>

        {/* Atributo badge debajo */}
        <div className="productos__sellos anim-fade-up delay-5">
          <span className="productos__sello">
            <i className="bi bi-shield-check" aria-hidden="true" />
            Sin Preservantes
          </span>
          <span className="productos__sello">
            <i className="bi bi-heart-pulse" aria-hidden="true" />
            Fuente de Fibra
          </span>
          <span className="productos__sello">
            <i className="bi bi-geo-fill" aria-hidden="true" />
            Producto Andino
          </span>
        </div>
      </div>

      {/* Modal interactivo de presentación servida (plato_chips_papa y plato_chips_oca) */}
      <ProductoModal
        isOpen={modalOpen}
        activeId={activePlato}
        onClose={() => setModalOpen(false)}
        onSelect={(id) => setActivePlato(id)}
      />
    </section>
  );
}

export default Productos;
