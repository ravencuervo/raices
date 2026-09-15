import { useEffect, useRef } from 'react';

/**
 * Hook reutilizable para activar animaciones de entrada con IntersectionObserver.
 * Agrega la clase "visible" al elemento referenciado cuando entra en el viewport.
 *
 * @param {object} options - Opciones del IntersectionObserver
 * @returns {React.RefObject} ref - Ref para adjuntar al elemento raíz de la sección
 */
function useScrollAnimation(options = {}) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    const observerOptions = {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px',
      ...options,
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Activar clase visible en todos los elementos animables dentro de la sección
          const animatables = entry.target.querySelectorAll(
            '.anim-fade-up, .anim-fade-left, .anim-fade-right, .anim-fade'
          );
          animatables.forEach((el) => el.classList.add('visible'));
          observer.unobserve(entry.target);
        }
      });
    }, observerOptions);

    observer.observe(element);

    return () => observer.disconnect();
  }, []);

  return ref;
}

export default useScrollAnimation;
