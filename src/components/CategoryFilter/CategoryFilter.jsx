import './CategoryFilter.css'

function CategoryFilter({ categories, selected, onSelect }) {
  return (
    <nav className="category-filter" aria-label="Filtrar por categoria">
      <div className="category-filter__buttons">
        {categories.map((cat) => (
          <button
            key={cat.id}
            className={`category-filter__btn ${selected === cat.id ? 'category-filter__btn--active' : ''}`}
            onClick={() => onSelect(cat.id)}
            aria-pressed={selected === cat.id}
            style={
              cat.color && selected === cat.id
                ? { '--cat-color': cat.color }
                : cat.color
                  ? { '--cat-color': cat.color }
                  : undefined
            }
          >
            {cat.name}
          </button>
        ))}
      </div>
    </nav>
  )
}

export default CategoryFilter
