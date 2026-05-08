import './PosterCard.css'

const categoryLabels = {
  musculoesqueletica: 'Musculoesquelética',
  geriatria: 'Geriatría',
  neurologia: 'Neurología',
  hospitalaria: 'Hospitalaria',
  cardiorespiratoria: 'Cardiorrespiratorio',
  transversal: 'Otros',
}

const PLACEHOLDER_PDF = `${import.meta.env.BASE_URL}posters/001_mecanosensibilidad.pdf`

function PosterCard({ poster, index }) {
  const pdfHref = poster.file ?? PLACEHOLDER_PDF

  return (
    <article
      className="card"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      {/* 1 · Badges */}
      <div className="card__header">
        <span className={`card__tipo card__tipo--${poster.tipo}`}>
          {poster.tipo === 'poster' ? 'Póster' : 'Comunicación'}
        </span>
        <span className={`card__tag card__tag--${poster.category}`}>
          {categoryLabels[poster.category]}
        </span>
      </div>

      {/* 2 · Título — flex:1, absorbe la variación de altura */}
      <h3 className="card__title">{poster.title}</h3>

      {/* 3 · Descripción (tipo de estudio) */}
      <p className="card__meta">{poster.tipo_estudio}</p>

      {/* 4 · Autor — siempre ocupa la misma altura aunque esté vacío */}
      <p className="card__autor">{poster.autor ?? ''}</p>

      {/* 5 · Enlace al PDF */}
      <a
        href={pdfHref}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        Ver póster &rarr;
      </a>

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
