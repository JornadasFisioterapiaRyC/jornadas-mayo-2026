import { useRef } from 'react'
import './SearchBar.css'

function SearchBar({ value, onChange }) {
  const inputRef = useRef(null)

  const handleClear = () => {
    onChange('')
    inputRef.current?.focus()
  }

  return (
    <div className="search">
      <input
        ref={inputRef}
        type="search"
        className="search__input"
        placeholder="Buscar..."
        value={value}
        onChange={(e) => onChange(e.target.value)}
        onKeyDown={(e) => e.key === 'Escape' && handleClear()}
        aria-label="Buscar posters"
      />
      {value && (
        <button
          className="search__clear"
          onClick={handleClear}
          aria-label="Limpiar busqueda"
          type="button"
        >
          &times;
        </button>
      )}
    </div>
  )
}

export default SearchBar
