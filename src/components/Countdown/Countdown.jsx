import { useCountdown } from '../../hooks/useCountdown'
import { useReveal } from '../../hooks/useReveal'
import './Countdown.css'

const units = [
  { key: 'days', label: 'Días' },
  { key: 'hours', label: 'Horas' },
  { key: 'minutes', label: 'Min' },
  { key: 'seconds', label: 'Seg' },
]

export default function Countdown({ targetDate }) {
  const time = useCountdown(targetDate)
  const [ref, visible] = useReveal()

  return (
    <section
      ref={ref}
      className={`countdown reveal${visible ? ' visible' : ''}`}
    >
      {time.isPast ? (
        <p className="countdown__past">Las jornadas ya han tenido lugar</p>
      ) : (
        <div className="countdown__grid">
          {units.map(({ key, label }, i) => (
            <div className="countdown__unit" key={key}>
              {i > 0 && <span className="countdown__sep" aria-hidden="true">:</span>}
              <span className="countdown__number">
                {String(time[key]).padStart(2, '0')}
              </span>
              <span className="countdown__label">{label}</span>
            </div>
          ))}
        </div>
      )}
    </section>
  )
}
