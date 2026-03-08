import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <span className="hero__eyebrow">Mayo 2026 — Madrid</span>
      <h1 className="hero__title">
        Jornadas de
        <br />
        Fisioterapia
      </h1>
      <p className="hero__subtitle">
        Hospital Universitario Ramon y Cajal
      </p>
      <div className="hero__divider" />
      <p className="hero__description">
        Repositorio oficial de los posters presentados en las jornadas.
        Explora los trabajos organizados por tematica.
      </p>
    </section>
  )
}

export default Hero
