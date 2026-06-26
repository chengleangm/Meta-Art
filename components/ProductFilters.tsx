'use client'

import { Star, X } from 'lucide-react'

export interface FilterState {
  search: string
  categories: string[]
  minPrice: number
  maxPrice: number
  minRating: number
  inStockOnly: boolean
  materials: string[]
}

interface ProductFiltersProps {
  filters: FilterState
  onChange: (filters: FilterState) => void
  availableCategories: { value: string; label: string }[]
  availableMaterials?: string[]
  className?: string
}

export const defaultFilters: FilterState = {
  search: '',
  categories: [],
  minPrice: 0,
  maxPrice: 1000,
  minRating: 0,
  inStockOnly: false,
  materials: [],
}

export default function ProductFilters({
  filters,
  onChange,
  availableCategories,
  availableMaterials = [],
  className = '',
}: ProductFiltersProps) {
  const update = (partial: Partial<FilterState>) => onChange({ ...filters, ...partial })

  const toggleCategory = (val: string) => {
    const next = filters.categories.includes(val)
      ? filters.categories.filter((c) => c !== val)
      : [...filters.categories, val]
    update({ categories: next })
  }

  const toggleMaterial = (val: string) => {
    const next = filters.materials.includes(val)
      ? filters.materials.filter((m) => m !== val)
      : [...filters.materials, val]
    update({ materials: next })
  }

  const clearFilters = () => onChange(defaultFilters)

  const hasActiveFilters =
    filters.search ||
    filters.categories.length > 0 ||
    filters.minPrice > 0 ||
    filters.maxPrice < 1000 ||
    filters.minRating > 0 ||
    filters.inStockOnly ||
    filters.materials.length > 0

  return (
    <aside className={`bg-white rounded-2xl p-5 shadow-sm border border-gray-100 ${className}`}>
      <div className="flex items-center justify-between mb-5">
        <h2 className="font-bold text-gray-900 text-lg">Filtres</h2>
        {hasActiveFilters && (
          <button
            onClick={clearFilters}
            className="text-xs text-rose-500 font-semibold flex items-center gap-1 hover:text-rose-700"
          >
            <X size={14} /> Effacer
          </button>
        )}
      </div>

      {/* Search */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">Rechercher</label>
        <input
          type="text"
          value={filters.search}
          onChange={(e) => update({ search: e.target.value })}
          placeholder="Nom du produit..."
          className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
        />
      </div>

      {/* Categories */}
      {availableCategories.length > 0 && (
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Catégories
          </label>
          <div className="space-y-2">
            {availableCategories.map((cat) => (
              <label key={cat.value} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.categories.includes(cat.value)}
                  onChange={() => toggleCategory(cat.value)}
                  className="w-4 h-4 rounded border-gray-300 text-lime-500 accent-lime-500"
                />
                <span className="text-sm text-gray-700">{cat.label}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* Price range */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Prix (€)
        </label>
        <div className="flex items-center gap-2">
          <input
            type="number"
            min={0}
            max={filters.maxPrice}
            value={filters.minPrice}
            onChange={(e) => update({ minPrice: Number(e.target.value) })}
            className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Min"
          />
          <span className="text-gray-400">–</span>
          <input
            type="number"
            min={filters.minPrice}
            max={1000}
            value={filters.maxPrice}
            onChange={(e) => update({ maxPrice: Number(e.target.value) })}
            className="w-full text-sm border border-gray-200 rounded-xl px-3 py-2 outline-none focus:ring-2 focus:ring-lime-400"
            placeholder="Max"
          />
        </div>
      </div>

      {/* Rating */}
      <div className="mb-5">
        <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
          Note minimale
        </label>
        <div className="flex gap-2">
          {[0, 3, 4, 4.5].map((r) => (
            <button
              key={r}
              onClick={() => update({ minRating: r })}
              className={`flex items-center gap-1 text-xs px-2.5 py-1.5 rounded-xl border transition-all ${
                filters.minRating === r
                  ? 'bg-lime-400 border-lime-400 text-black font-semibold'
                  : 'border-gray-200 text-gray-600 hover:border-lime-400'
              }`}
            >
              {r === 0 ? (
                'Toutes'
              ) : (
                <>
                  <Star size={11} className="fill-current" />
                  {r}+
                </>
              )}
            </button>
          ))}
        </div>
      </div>

      {/* Materials */}
      {availableMaterials.length > 0 && (
        <div className="mb-5">
          <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wider mb-2">
            Matériau
          </label>
          <div className="space-y-2">
            {availableMaterials.map((mat) => (
              <label key={mat} className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={filters.materials.includes(mat)}
                  onChange={() => toggleMaterial(mat)}
                  className="w-4 h-4 rounded border-gray-300 accent-lime-500"
                />
                <span className="text-sm text-gray-700">{mat}</span>
              </label>
            ))}
          </div>
        </div>
      )}

      {/* In stock only */}
      <div className="mb-5">
        <label className="flex items-center gap-3 cursor-pointer">
          <div
            onClick={() => update({ inStockOnly: !filters.inStockOnly })}
            className={`w-10 h-6 rounded-full transition-colors duration-200 flex items-center ${
              filters.inStockOnly ? 'bg-lime-400' : 'bg-gray-200'
            }`}
          >
            <div
              className={`w-4 h-4 bg-white rounded-full shadow-sm transform transition-transform duration-200 ${
                filters.inStockOnly ? 'translate-x-5' : 'translate-x-1'
              }`}
            />
          </div>
          <span className="text-sm text-gray-700 font-medium">En stock uniquement</span>
        </label>
      </div>
    </aside>
  )
}
