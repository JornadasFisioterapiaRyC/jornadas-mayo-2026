import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './WelcomeSection.css'

function WelcomeSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`welcome fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <h2 className="welcome__title">Bienvenidos</h2>
      <p className="welcome__text">
        Repositorio oficial de los posters presentados en las{' '}
        <strong>Jornadas de Fisioterapia 2026</strong>.
        Explora los trabajos organizados por tematica utilizando los filtros
        o la barra de busqueda.
      </p>
    </section>
  )
}

export default WelcomeSection
