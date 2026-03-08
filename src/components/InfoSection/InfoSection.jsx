import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './InfoSection.css'

function InfoSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`info fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="info__icon" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <circle cx="12" cy="12" r="10" />
          <line x1="12" y1="16" x2="12" y2="12" />
          <line x1="12" y1="8" x2="12.01" y2="8" />
        </svg>
      </div>
      <h2 className="info__title">Informacion Adicional</h2>
      <p className="info__text">
        Para mas informacion sobre las jornadas, contacta con los organizadores.
      </p>
    </section>
  )
}

export default InfoSection
