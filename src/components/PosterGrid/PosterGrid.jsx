import { useReveal } from '../../hooks/useReveal'
import PosterCard from '../PosterCard/PosterCard'
import './PosterGrid.css'

function PosterGrid({ posters }) {
  const [ref, visible] = useReveal(0.05)

  return (
    <section
      ref={ref}
      className={`reveal ${visible ? 'visible' : ''}`}
      aria-label="Posters"
    >
      <div className="poster-grid__list">
        {posters.length === 0 ? (
          <p className="poster-grid__empty">
            No se encontraron resultados.
          </p>
        ) : (
          posters.map((poster, i) => (
            <PosterCard key={poster.id} poster={poster} index={i} />
          ))
        )}
      </div>
      <p className="poster-grid__count" aria-live="polite">
        {posters.length} {posters.length === 1 ? 'trabajo' : 'trabajos'}
      </p>
    </section>
  )
}

export default PosterGrid
