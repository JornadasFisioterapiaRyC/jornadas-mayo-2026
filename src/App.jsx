import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import Hero from './components/Hero/Hero'
import SearchBar from './components/SearchBar/SearchBar'
import CategoryNav from './components/CategoryNav/CategoryNav'
import PosterGrid from './components/PosterGrid/PosterGrid'
import Copyright from './components/Copyright/Copyright'
import Footer from './components/Footer/Footer'
import { posters } from './data/posters'
import { categories } from './data/categories'
import { useFilteredPosters } from './hooks/useFilteredPosters'

function App() {
  const [category, setCategory] = useState('all')
  const [query, setQuery] = useState('')
  const filtered = useFilteredPosters(posters, category, query)

  return (
    <div className="app">
      <Header />
      <main>
        <Hero />
        <section className="posters-section">
          <SearchBar value={query} onChange={setQuery} />
          <CategoryNav
            categories={categories}
            selected={category}
            onSelect={setCategory}
          />
          <PosterGrid posters={filtered} />
        </section>
      </main>
      <Copyright />
      <Footer />
    </div>
  )
}

export default App
