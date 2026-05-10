import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Countdown from './components/Countdown/Countdown'
import Finalists from './components/Finalists/Finalists'
import Winner from './components/Winner/Winner'
import SearchBar from './components/SearchBar/SearchBar'
import CategoryNav from './components/CategoryNav/CategoryNav'
import PosterGrid from './components/PosterGrid/PosterGrid'
import Copyright from './components/Copyright/Copyright'
import Footer from './components/Footer/Footer'
import { posters } from './data/posters'
import { categories } from './data/categories'
import { config } from './data/config'
import { countdownDate, countdownHideAt } from './data/event'
import { useCountdown } from './hooks/useCountdown'
import { useFilteredPosters } from './hooks/useFilteredPosters'

const tipos = [
  { id: 'all', name: 'Todo' },
  { id: 'poster', name: 'Póster' },
  { id: 'comunicacion', name: 'Comunicación' },
]

function App() {
  const { isPast: hideCountdown } = useCountdown(countdownHideAt)
  const [category, setCategory] = useState('all')
  const [tipo, setTipo] = useState('all')
  const [query, setQuery] = useState('')
  const filtered = useFilteredPosters(posters, category, tipo, query)

  const finalistPosters = config.finalists.ids
    .map(id => posters.find(p => p.id === id))
    .filter(Boolean)

  const winnerPoster = posters.find(p => p.id === config.winners.poster) ?? null
  const winnerComunicacion = posters.find(p => p.id === config.winners.comunicacion) ?? null

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        {!hideCountdown && <Countdown targetDate={countdownDate} />}
        {config.winners.visible && <Winner poster={winnerPoster} comunicacion={winnerComunicacion} />}
        {config.finalists.visible && <Finalists posters={finalistPosters} />}
        <section className="posters-section">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryNav
            categories={categories}
            selected={category}
            onSelect={setCategory}
            label="Área"
          />
          <CategoryNav
            categories={tipos}
            selected={tipo}
            onSelect={setTipo}
            className="cat-nav--secondary"
            label="Tipo"
          />
          <PosterGrid posters={filtered} />
        </section>
        {/* <Speakers speakers={speakers} /> */}
      </main>
      <Copyright />
      <Footer />
    </div>
  )
}

export default App
