import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <span className="hero__eyebrow">21 de mayo 2026 — Madrid</span>
      <h1 className="hero__title">
        III Jornada Nacional De Fisioterapia
        <br />
        En Atención Hospitalaria
      </h1>
      <p className="hero__subtitle">
        Cuidar, innovar y conectar: el presente de la fisioterapia
      </p>
      <div className="hero__divider" />
      <p className="hero__description">
        Hospital Universitario Ramón y Cajal
        <br />
        Repositorio oficial de pósteres y comunicaciones.
      </p>
    </section>
  )
}

export default Hero
