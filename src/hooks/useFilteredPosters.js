import { useMemo } from 'react'

export function useFilteredPosters(posters, category, query) {
  return useMemo(() => {
    let result = posters
    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }
    if (query.trim()) {
      const q = query.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          p.description.toLowerCase().includes(q)
      )
    }
    return result
  }, [posters, category, query])
}
