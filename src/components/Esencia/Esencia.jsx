import useScrollAnimation from '../../hooks/useScrollAnimation';
import './Esencia.css';

const conceptos = [
  { icono: 'bi-flower2',       label: 'Biodiversidad' },
  { icono: 'bi-tree',          label: 'Agricultura Andina' },
  { icono: 'bi-basket2-fill',  label: 'Productos Nativos' },
  { icono: 'bi-stars',         label: 'Tradición' },
  { icono: 'bi-recycle',       label: 'Sostenibilidad' },
  { icono: 'bi-lightbulb',     label: 'Innovación' },
];

function Esencia() {
  const sectionRef = useScrollAnimation();

  return (
    <section id="esencia" className="esencia" ref={sectionRef} aria-labelledby="esencia-title">
      <div className="esencia__container">
        {/* Columna texto */}
        <div className="esencia__texto">
          <p className="esencia__eyebrow anim-fade-up delay-1">Nuestra esencia</p>
          <h2 className="esencia__title anim-fade-up delay-2" id="esencia-title">
            CULTIVANDO<br />LO NUESTRO
          </h2>
          <p className="esencia__parrafo anim-fade-up delay-3">
            Rescatamos el valor de nuestros productos andinos y los transformamos
            en experiencias de sabor que conectan nuestras raíces con el presente.
          </p>
          <p className="esencia__parrafo anim-fade-up delay-3">
            Cada chip que produces es el resultado de un proceso que respeta
            la tierra, honra a las comunidades y celebra la riqueza natural
            de los Andes peruanos.
          </p>
          <blockquote className="esencia__cita anim-fade-up delay-4">
            "Del corazón de los Andes hacia tu mesa."
          </blockquote>
        </div>

        {/* Columna conceptos */}
        <div className="esencia__conceptos">
          {conceptos.map((c, i) => (
            <div
              key={c.label}
              className={`esencia__concepto anim-fade-up delay-${Math.min(i + 2, 5)}`}
            >
              <i className={`bi ${c.icono} esencia__concepto-icon`} aria-hidden="true" />
              <span className="esencia__concepto-label">{c.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Esencia;
