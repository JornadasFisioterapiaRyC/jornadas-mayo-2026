import { useReveal } from '../../hooks/useReveal'
import './Speakers.css'

function getInitials(name) {
  return name
    .split(' ')
    .filter((w) => w[0] === w[0].toUpperCase() && w[0] !== w[0].toLowerCase())
    .map((w) => w[0])
    .join('')
    .slice(0, 2)
}

export default function Speakers({ speakers }) {
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`speakers reveal${visible ? ' visible' : ''}`}
    >
      <h2 className="speakers__title">Ponentes</h2>
      <div className="speakers__grid">
        {speakers.map((s) => (
          <div className="speakers__card" key={s.id}>
            <div className="speakers__avatar" aria-hidden="true">
              {getInitials(s.name)}
            </div>
            <h3 className="speakers__name">{s.name}</h3>
            <p className="speakers__role">{s.role}</p>
            <p className="speakers__institution">{s.institution}</p>
            <p className="speakers__bio">{s.bio}</p>
          </div>
        ))}
      </div>
    </section>
  )
}
