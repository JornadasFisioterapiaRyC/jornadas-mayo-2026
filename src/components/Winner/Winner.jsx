import './Winner.css'

function WinnerCard({ poster, tipo }) {
  return (
    <div className="winner__card">
      <p className="winner__card-tipo">{tipo}</p>
      <a
        href={poster.file}
        target="_blank"
        rel="noopener noreferrer"
        className="winner__img-wrap"
      >
        <img
          src={poster.file}
          alt={poster.title}
          className="winner__img"
        />
      </a>
      <div className="winner__card-info">
        <h3 className="winner__card-title">{poster.title}</h3>
        <p className="winner__card-autor">{poster.autor}</p>
      </div>
    </div>
  )
}

function Winner({ poster, comunicacion }) {
  if (!poster && !comunicacion) return null

  return (
    <section className="winner">
      <div className="winner__inner">
        <p className="winner__label">Premio Jornadas 2026</p>
        <h2 className="winner__title">Trabajos galardonados</h2>
        <div className={`winner__grid winner__grid--${poster && comunicacion ? 'two' : 'one'}`}>
          {poster && <WinnerCard poster={poster} tipo="Póster ganador" />}
          {comunicacion && <WinnerCard poster={comunicacion} tipo="Comunicación ganadora" />}
        </div>
      </div>
    </section>
  )
}

export default Winner
