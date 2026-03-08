import './CategoryNav.css'

function CategoryNav({ categories, selected, onSelect }) {
  return (
    <nav className="cat-nav" aria-label="Filtrar por categoria">
      {categories.map((cat) => (
        <button
          key={cat.id}
          className={`cat-nav__btn ${selected === cat.id ? 'cat-nav__btn--active' : ''}`}
          onClick={() => onSelect(cat.id)}
          aria-pressed={selected === cat.id}
        >
          {cat.name}
        </button>
      ))}
    </nav>
  )
}

export default CategoryNav
