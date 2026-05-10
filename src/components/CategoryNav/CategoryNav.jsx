import './CategoryNav.css'

function CategoryNav({ categories, selected, onSelect, className = '', label }) {
  return (
    <div className={`cat-nav-wrapper ${className ? className + '-wrapper' : ''}`.trim()}>
      {label && <span className="cat-nav__label">{label}</span>}
      <nav className={`cat-nav ${className}`.trim()} aria-label={label ?? 'Filtrar'}>
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
    </div>
  )
}

export default CategoryNav
