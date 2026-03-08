import { useReveal } from '../../hooks/useReveal'
import PosterCard from '../PosterCard/PosterCard'
import './PosterGrid.css'

function PosterGrid({ posters }) {
  const [ref, visible] = useReveal(0.05)

  return (
    <section
      ref={ref}
      className={`poster-grid reveal ${visible ? 'visible' : ''}`}
      aria-label="Posters"
    >
      {posters.length === 0 ? (
        <p className="poster-grid__empty">
          No se encontraron resultados.
        </p>
      ) : (
        posters.map((poster, i) => (
          <PosterCard key={poster.id} poster={poster} index={i} />
        ))
      )}
      <p className="poster-grid__count" aria-live="polite">
        {posters.length} {posters.length === 1 ? 'poster' : 'posters'}
      </p>
    </section>
  )
}

export default PosterGrid
