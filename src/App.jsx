import { useState } from 'react'
import './App.css'
import Header from './components/Header/Header'
import WelcomeSection from './components/WelcomeSection/WelcomeSection'
import SearchBar from './components/SearchBar/SearchBar'
import CategoryFilter from './components/CategoryFilter/CategoryFilter'
import PosterGrid from './components/PosterGrid/PosterGrid'
import InfoSection from './components/InfoSection/InfoSection'
import CopyrightSection from './components/CopyrightSection/CopyrightSection'
import Footer from './components/Footer/Footer'
import { posters } from './data/posters'
import { categories } from './data/categories'
import { useFilteredPosters } from './hooks/useFilteredPosters'

function App() {
  const [selectedCategory, setSelectedCategory] = useState('all')
  const [searchQuery, setSearchQuery] = useState('')

  const filteredPosters = useFilteredPosters(posters, selectedCategory, searchQuery)

  return (
    <div className="app">
      <Header />

      <main className="main">
        <div className="main__container">
          <WelcomeSection />
          <SearchBar value={searchQuery} onChange={setSearchQuery} />
          <CategoryFilter
            categories={categories}
            selected={selectedCategory}
            onSelect={setSelectedCategory}
          />
          <PosterGrid posters={filteredPosters} />
          <InfoSection />
          <CopyrightSection />
        </div>
      </main>

      <Footer />
    </div>
  )
}

export default App
