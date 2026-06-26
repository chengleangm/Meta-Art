'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import Image from 'next/image'
import { Plus, Eye, Pencil, ChevronLeft, ChevronRight } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import SearchInput from '@/components/admin/SearchInput'
import FilterDropdown from '@/components/admin/FilterDropdown'
import StockBadge from '@/components/admin/StockBadge'
import ConfirmDeleteModal from '@/components/admin/ConfirmDeleteModal'
import { adminProducts, type AdminProduct } from '@/lib/admin/products'

const PAGE_SIZE = 10

const categoryOptions = [
  { value: 'printers', label: 'Imprimantes 3D' },
  { value: 'filament', label: 'Filaments' },
  { value: 'resin', label: 'Résines' },
  { value: 'models', label: 'Modèles 3D' },
  { value: 'accessories', label: 'Accessoires' },
  { value: 'tools', label: 'Outils' },
  { value: 'spare-parts', label: 'Pièces détachées' },
]

const statusOptions = [
  { value: 'active', label: 'Actif' },
  { value: 'draft', label: 'Brouillon' },
  { value: 'archived', label: 'Archivé' },
]

const statusBadge: Record<string, string> = {
  active: 'bg-green-100 text-green-700',
  draft: 'bg-yellow-100 text-yellow-700',
  archived: 'bg-gray-100 text-gray-500',
}
const statusLabel: Record<string, string> = {
  active: 'Actif',
  draft: 'Brouillon',
  archived: 'Archivé',
}
const categoryLabel: Record<string, string> = {
  printers: 'Imprimantes',
  filament: 'Filaments',
  resin: 'Résines',
  models: 'Modèles 3D',
  accessories: 'Accessoires',
  tools: 'Outils',
  'spare-parts': 'Pièces détachées',
}

export default function ProductsPage() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [categoryFilter, setCategoryFilter] = useState('')
  const [statusFilter, setStatusFilter] = useState('')
  const [page, setPage] = useState(1)
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; product: AdminProduct | null }>({
    open: false,
    product: null,
  })
  const [products, setProducts] = useState(adminProducts)

  const filtered = useMemo(() => {
    return products.filter((p) => {
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        p.name.toLowerCase().includes(q) ||
        p.sku.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      const matchCategory = !categoryFilter || p.category === categoryFilter
      const matchStatus = !statusFilter || p.status === statusFilter
      return matchSearch && matchCategory && matchStatus
    })
  }, [products, search, categoryFilter, statusFilter])

  const totalPages = Math.ceil(filtered.length / PAGE_SIZE)
  const paginated = filtered.slice((page - 1) * PAGE_SIZE, page * PAGE_SIZE)

  const handleDelete = (id: string) => {
    // TODO: Replace with Supabase delete
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Produits</h1>
            <p className="text-sm text-gray-500 mt-0.5">{filtered.length} produit(s) trouvé(s)</p>
          </div>
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter un produit
          </Link>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <SearchInput value={search} onChange={(v) => { setSearch(v); setPage(1) }} placeholder="Nom, SKU…" />
          <FilterDropdown
            options={categoryOptions}
            value={categoryFilter}
            onChange={(v) => { setCategoryFilter(v); setPage(1) }}
            placeholder="Toutes catégories"
          />
          <FilterDropdown
            options={statusOptions}
            value={statusFilter}
            onChange={(v) => { setStatusFilter(v); setPage(1) }}
            placeholder="Tous statuts"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Produit</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">SKU</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Catégorie</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Prix</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {paginated.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400">
                      Aucun produit trouvé
                    </td>
                  </tr>
                ) : (
                  paginated.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                            <Image src={p.imageUrl} alt={p.name} fill className="object-cover" />
                          </div>
                          <span className="font-medium text-gray-900 line-clamp-1">{p.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-gray-100 text-gray-600 rounded-md text-xs font-medium">
                          {categoryLabel[p.category] ?? p.category}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-semibold text-gray-900">€{p.price.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <StockBadge stock={p.stock} />
                      </td>
                      <td className="px-4 py-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusBadge[p.status]}`}>
                          {statusLabel[p.status]}
                        </span>
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
                          <a
                            href={`/shop/${p.slug}`}
                            target="_blank"
                            rel="noreferrer"
                            className="p-1.5 text-gray-400 hover:text-blue-600 hover:bg-blue-50 rounded-lg transition-colors"
                            title="Voir sur la boutique"
                          >
                            <Eye className="w-4 h-4" />
                          </a>
                          <button
                            onClick={() => router.push(`/admin/products/${p.id}/edit`)}
                            className="p-1.5 text-gray-400 hover:text-lime-600 hover:bg-lime-50 rounded-lg transition-colors"
                            title="Modifier"
                          >
                            <Pencil className="w-4 h-4" />
                          </button>
                          <button
                            onClick={() => setDeleteModal({ open: true, product: p })}
                            className="p-1.5 text-gray-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                            title="Supprimer"
                          >
                            <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}>
                              <polyline points="3 6 5 6 21 6" />
                              <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
                              <path d="M10 11v6M14 11v6" />
                              <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2" />
                            </svg>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          {totalPages > 1 && (
            <div className="flex items-center justify-between px-6 py-4 border-t border-gray-100">
              <p className="text-sm text-gray-500">
                Page {page} / {totalPages}
              </p>
              <div className="flex gap-2">
                <button
                  onClick={() => setPage((p) => Math.max(1, p - 1))}
                  disabled={page === 1}
                  className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  <ChevronLeft className="w-4 h-4" /> Précédent
                </button>
                <button
                  onClick={() => setPage((p) => Math.min(totalPages, p + 1))}
                  disabled={page === totalPages}
                  className="flex items-center gap-1 px-3 py-1.5 border border-gray-200 rounded-lg text-sm text-gray-600 hover:bg-gray-50 disabled:opacity-40 disabled:cursor-not-allowed transition-colors"
                >
                  Suivant <ChevronRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          )}
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, product: null })}
        onConfirm={() => deleteModal.product && handleDelete(deleteModal.product.id)}
        itemName={deleteModal.product?.name ?? ''}
      />
    </AdminLayout>
  )
}
