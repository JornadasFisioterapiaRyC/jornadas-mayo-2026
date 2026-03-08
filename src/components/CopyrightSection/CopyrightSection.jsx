import { useScrollAnimation } from '../../hooks/useScrollAnimation'
import './CopyrightSection.css'

function CopyrightSection() {
  const [ref, isVisible] = useScrollAnimation()

  return (
    <section
      ref={ref}
      className={`copyright fade-in-section ${isVisible ? 'is-visible' : ''}`}
    >
      <div className="copyright__icon" aria-hidden="true">
        <svg
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2 2 6.477 2 12s4.477 10 10 10z" />
          <path d="M14.5 9a3.5 3.5 0 1 0 0 6" />
        </svg>
      </div>
      <h2 className="copyright__title">Derechos de Autor y Propiedad Intelectual</h2>
      <p className="copyright__intro">
        Los posters y materiales presentados en estas jornadas son propiedad
        intelectual de sus respectivos autores. Todos los derechos estan reservados.
      </p>

      <div className="copyright__columns">
        <div className="copyright__column">
          <h3 className="copyright__column-title copyright__column-title--allowed">
            Uso permitido
          </h3>
          <ul className="copyright__list">
            <li>Visualizacion y consulta con fines educativos y de formacion profesional</li>
            <li>Citacion academica con la debida atribucion a los autores</li>
          </ul>
        </div>

        <div className="copyright__column">
          <h3 className="copyright__column-title copyright__column-title--restricted">
            Uso NO permitido sin autorizacion expresa
          </h3>
          <ul className="copyright__list">
            <li>Reproduccion total o parcial de los contenidos</li>
            <li>Distribucion comercial o fuera del ambito academico-sanitario</li>
            <li>Modificacion o alteracion de los trabajos presentados</li>
          </ul>
        </div>
      </div>

      <p className="copyright__contact">
        Para solicitar permisos de uso o reproduccion, por favor contacta
        directamente con los autores o con la organizacion de las jornadas.
      </p>

      <div className="copyright__citation">
        <strong>Cita recomendada:</strong>
        <br />
        Autor(es). (2026). <em>Titulo del poster</em>. Presentado en las
        Jornadas de Fisioterapia 2026, Hospital Universitario Ramon y Cajal,
        Madrid.
      </div>
    </section>
  )
}

export default CopyrightSection
