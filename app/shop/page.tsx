'use client'

import { useState, useMemo } from 'react'
import { SlidersHorizontal, X, ChevronDown } from 'lucide-react'
import ProductGrid from '@/components/ProductGrid'
import ProductFilters, { FilterState, defaultFilters } from '@/components/ProductFilters'
import { products } from '@/lib/products'
import Link from 'next/link'

const sortOptions = [
  { value: 'featured', label: 'Mis en avant' },
  { value: 'price-asc', label: 'Prix croissant' },
  { value: 'price-desc', label: 'Prix décroissant' },
  { value: 'rating', label: 'Meilleures notes' },
  { value: 'newest', label: 'Plus récents' },
]

const allCategories = [
  { value: 'printers', label: 'Imprimantes' },
  { value: 'filament', label: 'Filament' },
  { value: 'resin', label: 'Résine' },
  { value: 'models', label: 'Modèles 3D' },
  { value: 'accessories', label: 'Accessoires' },
  { value: 'tools', label: 'Outils' },
  { value: 'spare-parts', label: 'Pièces détachées' },
]

export default function ShopPage() {
  const [filters, setFilters] = useState<FilterState>(defaultFilters)
  const [sort, setSort] = useState('featured')
  const [filtersOpen, setFiltersOpen] = useState(false)

  const filteredProducts = useMemo(() => {
    let result = [...products]

    if (filters.search) {
      const q = filters.search.toLowerCase()
      result = result.filter(
        (p) =>
          p.name.toLowerCase().includes(q) ||
          p.shortDescription.toLowerCase().includes(q) ||
          p.tags.some((t) => t.toLowerCase().includes(q))
      )
    }

    if (filters.categories.length > 0) {
      result = result.filter((p) => filters.categories.includes(p.category))
    }

    result = result.filter(
      (p) => p.price >= filters.minPrice && p.price <= filters.maxPrice
    )

    if (filters.minRating > 0) {
      result = result.filter((p) => p.rating >= filters.minRating)
    }

    if (filters.inStockOnly) {
      result = result.filter((p) => p.inStock)
    }

    switch (sort) {
      case 'price-asc':
        result.sort((a, b) => a.price - b.price)
        break
      case 'price-desc':
        result.sort((a, b) => b.price - a.price)
        break
      case 'rating':
        result.sort((a, b) => b.rating - a.rating)
        break
      case 'featured':
        result.sort((a, b) => (b.featured ? 1 : 0) - (a.featured ? 1 : 0))
        break
    }

    return result
  }, [filters, sort])

  const activeFiltersCount =
    filters.categories.length +
    (filters.minPrice > 0 ? 1 : 0) +
    (filters.maxPrice < 1000 ? 1 : 0) +
    (filters.minRating > 0 ? 1 : 0) +
    (filters.inStockOnly ? 1 : 0)

  return (
    <div className="min-h-screen">
      {/* Breadcrumb */}
      <div className="bg-white/60 border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
          <nav className="flex items-center gap-2 text-sm text-gray-400">
            <Link href="/" className="hover:text-gray-700">Accueil</Link>
            <span>/</span>
            <span className="text-gray-900 font-medium">Boutique</span>
          </nav>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-8">
        {/* Header */}
        <div className="flex flex-wrap items-center justify-between gap-4 mb-6">
          <div>
            <h1 className="text-3xl font-extrabold text-gray-900">Notre Boutique</h1>
            <p className="text-gray-400 text-sm mt-1">{filteredProducts.length} produit{filteredProducts.length !== 1 ? 's' : ''} trouvé{filteredProducts.length !== 1 ? 's' : ''}</p>
          </div>

          <div className="flex items-center gap-3">
            {/* Mobile filter toggle */}
            <button
              onClick={() => setFiltersOpen((v) => !v)}
              className="lg:hidden flex items-center gap-2 px-4 py-2.5 bg-white rounded-xl border border-gray-200 text-sm font-medium hover:bg-gray-50 shadow-sm"
            >
              <SlidersHorizontal size={16} />
              Filtres
              {activeFiltersCount > 0 && (
                <span className="w-5 h-5 bg-lime-400 text-black text-xs font-bold rounded-full flex items-center justify-center">
                  {activeFiltersCount}
                </span>
              )}
            </button>

            {/* Sort */}
            <div className="relative">
              <select
                value={sort}
                onChange={(e) => setSort(e.target.value)}
                className="appearance-none pl-4 pr-10 py-2.5 bg-white rounded-xl border border-gray-200 text-sm font-medium text-gray-700 outline-none focus:ring-2 focus:ring-lime-400 shadow-sm cursor-pointer"
              >
                {sortOptions.map((opt) => (
                  <option key={opt.value} value={opt.value}>
                    {opt.label}
                  </option>
                ))}
              </select>
              <ChevronDown size={16} className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-400 pointer-events-none" />
            </div>
          </div>
        </div>

        {/* Active filter pills */}
        {filters.categories.length > 0 && (
          <div className="flex flex-wrap gap-2 mb-4">
            {filters.categories.map((cat) => {
              const label = allCategories.find((c) => c.value === cat)?.label ?? cat
              return (
                <span
                  key={cat}
                  className="flex items-center gap-1.5 text-xs font-medium bg-lime-100 text-lime-800 px-3 py-1 rounded-full"
                >
                  {label}
                  <button
                    onClick={() =>
                      setFilters((f) => ({ ...f, categories: f.categories.filter((c) => c !== cat) }))
                    }
                    className="text-lime-600 hover:text-lime-900"
                  >
                    <X size={12} />
                  </button>
                </span>
              )
            })}
          </div>
        )}

        <div className="flex gap-6">
          {/* Sidebar filters (desktop) */}
          <div className="hidden lg:block w-64 shrink-0">
            <ProductFilters
              filters={filters}
              onChange={setFilters}
              availableCategories={allCategories}
              className="sticky top-20"
            />
          </div>

          {/* Mobile filters overlay */}
          {filtersOpen && (
            <div className="lg:hidden fixed inset-0 z-40 flex">
              <div className="flex-1 bg-black/40 backdrop-blur-sm" onClick={() => setFiltersOpen(false)} />
              <div className="w-80 max-w-full bg-white h-full overflow-y-auto p-4 shadow-xl">
                <div className="flex items-center justify-between mb-4">
                  <h2 className="font-bold text-gray-900">Filtres</h2>
                  <button onClick={() => setFiltersOpen(false)}>
                    <X size={20} className="text-gray-400" />
                  </button>
                </div>
                <ProductFilters
                  filters={filters}
                  onChange={setFilters}
                  availableCategories={allCategories}
                />
              </div>
            </div>
          )}

          {/* Products */}
          <div className="flex-1 min-w-0">
            <ProductGrid products={filteredProducts} />
          </div>
        </div>
      </div>
    </div>
  )
}
