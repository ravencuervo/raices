import useScrollAnimation from '../../hooks/useScrollAnimation';
import ProductoCard from './ProductoCard';
import './Productos.css';

const productos = [
  {
    imagen: '/images/portada1.png',
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
    imagen: '/images/portada2.jpg',
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
    </section>
  );
}

export default Productos;
