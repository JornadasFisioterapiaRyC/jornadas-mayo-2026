import './Finalists.css'

function Finalists({ posters }) {
  if (!posters || posters.length === 0) return null

  return (
    <section className="finalists">
      <div className="finalists__inner">
        <p className="finalists__label">Finalistas 2026</p>
        <h2 className="finalists__title">Pósteres finalistas</h2>
        <div className="finalists__grid">
          {posters.map((poster) => (
            <a
              key={poster.id}
              href={poster.file}
              target="_blank"
              rel="noopener noreferrer"
              className="finalists__card"
            >
              <div className="finalists__img-wrap">
                <img
                  src={poster.file}
                  alt={poster.title}
                  className="finalists__img"
                />
              </div>
              <p className="finalists__card-title">{poster.title}</p>
              <p className="finalists__card-autor">{poster.autor}</p>
            </a>
          ))}
        </div>
      </div>
    </section>
  )
}

export default Finalists
