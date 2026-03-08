import { useMemo } from 'react'

export function useFilteredPosters(posters, category, searchQuery) {
  return useMemo(() => {
    let result = posters

    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }

    if (searchQuery.trim()) {
      const query = searchQuery.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(query) ||
          p.description.toLowerCase().includes(query)
      )
    }

    return result
  }, [posters, category, searchQuery])
}
