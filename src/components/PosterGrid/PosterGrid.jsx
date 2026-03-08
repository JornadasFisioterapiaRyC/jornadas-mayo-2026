import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import PosterCard from '../PosterCard/PosterCard'
import './PosterGrid.css'

function PosterGrid({ posters }) {
  const [ref, isVisible] = useScrollAnimation(0.1)

  return (
    <section
      ref={ref}
      className={`poster-grid fade-in-section ${isVisible ? 'is-visible' : ''}`}
      aria-label="Posters"
    >
      {posters.length === 0 ? (
        <p className="poster-grid__empty">
          No se encontraron posters con los filtros seleccionados.
        </p>
      ) : (
        <div className="poster-grid__list">
          {posters.map((poster, index) => (
            <PosterCard key={poster.id} poster={poster} index={index} />
          ))}
        </div>
      )}
      <p className="poster-grid__count" aria-live="polite">
        {posters.length} {posters.length === 1 ? 'poster encontrado' : 'posters encontrados'}
      </p>
    </section>
  )
}

export default PosterGrid
