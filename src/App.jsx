import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import Countdown from './components/Countdown/Countdown'
import SearchBar from './components/SearchBar/SearchBar'
import CategoryNav from './components/CategoryNav/CategoryNav'
import PosterGrid from './components/PosterGrid/PosterGrid'
import Speakers from './components/Speakers/Speakers'
import Copyright from './components/Copyright/Copyright'
import Footer from './components/Footer/Footer'
import { posters } from './data/posters'
import { categories } from './data/categories'
import { speakers } from './data/speakers'
import { eventDate } from './data/event'
import { useFilteredPosters } from './hooks/useFilteredPosters'

const tipos = [
  { id: 'all', name: 'Todo' },
  { id: 'poster', name: 'Póster' },
  { id: 'comunicacion', name: 'Comunicación' },
]

function App() {
  const [category, setCategory] = useState('all')
  const [tipo, setTipo] = useState('all')
  const [query, setQuery] = useState('')
  const filtered = useFilteredPosters(posters, category, tipo, query)

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <Countdown targetDate={eventDate} />
        <section className="posters-section">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryNav
            categories={categories}
            selected={category}
            onSelect={setCategory}
          />
          <CategoryNav
            categories={tipos}
            selected={tipo}
            onSelect={setTipo}
            className="cat-nav--secondary"
          />
          <PosterGrid posters={filtered} />
        </section>
        <Speakers speakers={speakers} />
      </main>
      <Copyright />
      <Footer />
    </div>
  )
}

export default App
