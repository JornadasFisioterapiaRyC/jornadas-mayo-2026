import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__inner">
        <div className="header__logos">
          <img
            src={`${import.meta.env.BASE_URL}img/logo_huryc.jpg`}
            alt="Hospital Universitario Ramon y Cajal"
            className="header__logo"
          />
          <img
            src={`${import.meta.env.BASE_URL}img/logo_jornadas.png`}
            alt="Jornadas de Fisioterapia 2026"
            className="header__logo header__logo--main"
          />
          <img
            src={`${import.meta.env.BASE_URL}img/logo_fibiohrc.jpg`}
            alt="FIBioHRC"
            className="header__logo"
          />
        </div>
        <h1 className="header__title">Jornadas de Fisioterapia 2026</h1>
        <p className="header__subtitle">
          Hospital Universitario Ramon y Cajal, Madrid
        </p>
      </div>
    </header>
  )
}

export default Header
