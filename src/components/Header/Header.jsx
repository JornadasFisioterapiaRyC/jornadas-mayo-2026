import logoHuryc from '../../assets/img/logo_huryc.jpg'
import logoJornadas from '../../assets/img/logo_jornadas.png'
import logoFibiohrc from '../../assets/img/logo_fibiohrc.jpg'
import './Header.css'

function Header() {
  return (
    <header className="header">
      <div className="header__logos">
        <img
          src={logoHuryc}
          alt="Hospital Universitario Ramon y Cajal"
          className="header__logo"
        />
        <img
          src={logoJornadas}
          alt="Jornadas de Fisioterapia"
          className="header__logo header__logo--center"
        />
        <img
          src={logoFibiohrc}
          alt="FIBioHRC"
          className="header__logo"
        />
      </div>
    </header>
  )
}

export default Header
