import './PosterCard.css'

const categoryLabels = {
  musculoesqueletica: 'Traumatología',
  geriatria: 'Geriatría',
  neurologia: 'Neurología',
  hospitalaria: 'Fisioterapia Hospitalaria',
  cardiorespiratoria: 'Cardiorrespiratorio',
  transversal: 'Humanización',
  suelo_pelvico: 'Uroginecología',
}

function PosterCard({ poster, index }) {
  return (
    <article
      className="card"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* 1 · Badges */}
      <div className="card__header">
        <span className={`card__tag card__tag--${poster.category}`}>
          {categoryLabels[poster.category]}
        </span>
        <span className={`card__tipo card__tipo--${poster.tipo}`}>
          {poster.tipo === 'poster' ? 'Póster' : 'Comunicación'}
        </span>
      </div>

      {/* 2 · Título */}
      <h3 className="card__title">{poster.title}</h3>

      {/* 3 · Tipo de estudio */}
      <p className="card__meta">{poster.tipo_estudio}</p>

      {/* 4 · Autor */}
      <p className="card__autor">{poster.autor ?? ''}</p>

      {/* 5 · Enlace a la imagen */}
      {poster.file ? (
        <a
          href={poster.file}
          target="_blank"
          rel="noopener noreferrer"
          className="card__link"
        >
          Ver póster &rarr;
        </a>
      ) : (
        <span className="card__link card__link--disabled">Próximamente</span>
      )}

      {/* 6 · Tags */}
      <ul className="card__etiquetas">
        {poster.etiquetas.map((e) => (
          <li key={e} className="card__chip">{e}</li>
        ))}
      </ul>
    </article>
  )
}

export default PosterCard
