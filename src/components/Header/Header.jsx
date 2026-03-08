import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logos">
        <img
          src={`${import.meta.env.BASE_URL}img/logo_huryc.jpg`}
          alt="Hospital Universitario Ramon y Cajal"
          className="header__logo"
        />
        <img
          src={`${import.meta.env.BASE_URL}img/logo_jornadas.png`}
          alt="Jornadas de Fisioterapia"
          className="header__logo header__logo--center"
        />
        <img
          src={`${import.meta.env.BASE_URL}img/logo_fibiohrc.jpg`}
          alt="FIBioHRC"
          className="header__logo"
        />
      </div>
    </header>
  )
}

export default Header
