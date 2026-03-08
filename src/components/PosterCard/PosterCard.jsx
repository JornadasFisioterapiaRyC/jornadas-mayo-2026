import './PosterCard.css'

const categoryLabels = {
  research: 'Investigacion Clinica',
  pelvic: 'Fisioterapia Uroginecologica',
  advanced: 'Tecnicas Avanzadas',
}

function PosterCard({ poster, index }) {
  return (
    <article
      className="poster-card"
      style={{ transitionDelay: `${index * 50}ms` }}
    >
      <div className={`poster-card__badge poster-card__badge--${poster.category}`}>
        {categoryLabels[poster.category]}
      </div>
      <div className="poster-card__content">
        <h3 className="poster-card__title">{poster.title}</h3>
        <p className="poster-card__description">{poster.description}</p>
      </div>
      <a
        href={poster.file}
        target="_blank"
        rel="noopener noreferrer"
        className="poster-card__link"
      >
        <svg
          width="18"
          height="18"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
          <polyline points="14 2 14 8 20 8" />
          <line x1="16" y1="13" x2="8" y2="13" />
          <line x1="16" y1="17" x2="8" y2="17" />
          <polyline points="10 9 9 9 8 9" />
        </svg>
        Ver poster
      </a>
    </article>
  )
}

export default PosterCard
