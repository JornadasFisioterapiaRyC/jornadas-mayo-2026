import { useMemo } from 'react'

export function useFilteredPosters(posters, category, tipo, query) {
  return useMemo(() => {
    let result = posters
    if (category !== 'all') {
      result = result.filter((p) => p.category === category)
    }
    if (tipo !== 'all') {
      result = result.filter((p) => p.tipo === tipo)
    }
    if (query.trim()) {
      const q = query.toLowerCase().trim()
      result = result.filter(
        (p) =>
          p.title.toLowerCase().includes(q) ||
          (p.autor && p.autor.toLowerCase().includes(q)) ||
          p.tipo_estudio.toLowerCase().includes(q) ||
          p.etiquetas.some((e) => e.toLowerCase().includes(q))
      )
    }
    return result
  }, [posters, category, tipo, query])
}
