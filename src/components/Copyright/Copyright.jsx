import { useReveal } from '../../hooks/useReveal'
import './Copyright.css'

function Copyright() {
  const [ref, visible] = useReveal()

  return (
    <section ref={ref} className={`copyright reveal ${visible ? 'visible' : ''}`}>
      <div className="copyright__inner">
        <h2 className="copyright__title">Propiedad Intelectual</h2>

        <p className="copyright__text">
          Los posters y materiales presentados son propiedad intelectual de
          sus respectivos autores. Todos los derechos reservados.
        </p>

        <div className="copyright__cols">
          <div>
            <h3 className="copyright__col-title">Uso permitido</h3>
            <ul className="copyright__list">
              <li>Consulta con fines educativos y de formacion profesional</li>
              <li>Citacion academica con atribucion a los autores</li>
            </ul>
          </div>
          <div>
            <h3 className="copyright__col-title">Requiere autorizacion</h3>
            <ul className="copyright__list">
              <li>Reproduccion total o parcial de los contenidos</li>
              <li>Distribucion comercial o fuera del ambito academico-sanitario</li>
              <li>Modificacion de los trabajos presentados</li>
            </ul>
          </div>
        </div>

        <div className="copyright__citation">
          <span className="copyright__citation-label">Cita recomendada</span>
          Autor(es). (2026). <em>Titulo del poster</em>. Jornadas de
          Fisioterapia 2026, Hospital Universitario Ramon y Cajal, Madrid.
        </div>
      </div>
    </section>
  )
}

export default Copyright
