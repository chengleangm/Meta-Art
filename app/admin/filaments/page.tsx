'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { Plus, Pencil } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import StockBadge from '@/components/admin/StockBadge'
import FilterDropdown from '@/components/admin/FilterDropdown'
import ConfirmDeleteModal from '@/components/admin/ConfirmDeleteModal'
import { adminProducts, type AdminProduct } from '@/lib/admin/products'

const materialOptions = [
  { value: 'PLA+', label: 'PLA+' },
  { value: 'PETG', label: 'PETG' },
  { value: 'ABS', label: 'ABS' },
  { value: 'TPU', label: 'TPU' },
  { value: 'ASA', label: 'ASA' },
  { value: 'Nylon', label: 'Nylon' },
]

export default function FilamentsPage() {
  const [materialFilter, setMaterialFilter] = useState('')
  const [filaments, setFilaments] = useState(
    adminProducts.filter((p) => p.category === 'filament')
  )
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; product: AdminProduct | null }>({
    open: false,
    product: null,
  })
  const router = useRouter()

  const filtered = useMemo(() => {
    if (!materialFilter) return filaments
    return filaments.filter((p) => p.material === materialFilter)
  }, [filaments, materialFilter])

  const handleDelete = (id: string) => {
    // TODO: Delete from Supabase
    setFilaments((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Filaments</h1>
            <p className="text-sm text-gray-500 mt-0.5">{filtered.length} filament(s)</p>
          </div>
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter un filament
          </Link>
        </div>

        <div className="flex gap-3">
          <FilterDropdown
            options={materialOptions}
            value={materialFilter}
            onChange={setMaterialFilter}
            placeholder="Tous matériaux"
          />
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Couleur</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nom</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Matériau</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Diamètre</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Poids</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Prix</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-12 text-gray-400">Aucun filament trouvé</td>
                  </tr>
                ) : (
                  filtered.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}
                    >
                      <td className="px-4 py-3">
                        <div
                          className="w-6 h-6 rounded-full border border-gray-200 flex-shrink-0"
                          style={{ backgroundColor: p.colorHex ?? '#ccc' }}
                          title={p.color}
                        />
                      </td>
                      <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                      <td className="px-4 py-3">
                        <span className="px-2 py-0.5 bg-blue-100 text-blue-700 rounded-md text-xs font-medium">
                          {p.material ?? '—'}
                        </span>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{p.diameter ?? '—'}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{p.weight ?? '—'}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">€{p.price.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <StockBadge stock={p.stock} />
                      </td>
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-1">
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
