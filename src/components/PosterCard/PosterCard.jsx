import './PosterCard.css'

function PosterCard({ poster, index }) {
  return (
    <article
      className="card"
      style={{ transitionDelay: `${index * 60}ms` }}
    >
      <span className="card__category">{poster.category}</span>
      <h3 className="card__title">{poster.title}</h3>
      <p className="card__desc">{poster.description}</p>
      <a
        href={poster.file}
        target="_blank"
        rel="noopener noreferrer"
        className="card__link"
      >
        Ver poster &rarr;
      </a>
    </article>
  )
}

export default PosterCard
