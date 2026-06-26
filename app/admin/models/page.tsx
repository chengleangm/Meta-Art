'use client'

import { useState } from 'react'
import Link from 'next/link'
import { useRouter } from 'next/navigation'
import { Plus, Pencil } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import UploadBox from '@/components/admin/UploadBox'
import ConfirmDeleteModal from '@/components/admin/ConfirmDeleteModal'
import { adminProducts, type AdminProduct } from '@/lib/admin/products'

const statusConfig: Record<string, { label: string; className: string }> = {
  active: { label: 'Actif', className: 'bg-green-100 text-green-700' },
  draft: { label: 'Brouillon', className: 'bg-yellow-100 text-yellow-700' },
  archived: { label: 'Archivé', className: 'bg-gray-100 text-gray-500' },
}

export default function ModelsPage() {
  const router = useRouter()
  const [products, setProducts] = useState(
    adminProducts.filter((p) => p.category === 'models')
  )
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; product: AdminProduct | null }>({
    open: false,
    product: null,
  })

  const handleDelete = (id: string) => {
    // TODO: Delete from Supabase
    setProducts((prev) => prev.filter((p) => p.id !== id))
  }

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Modèles 3D</h1>
            <p className="text-sm text-gray-500 mt-0.5">{products.length} modèle(s) disponible(s)</p>
          </div>
          <Link
            href="/admin/products/new"
            className="flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter un modèle
          </Link>
        </div>

        {/* Upload section */}
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h2 className="text-base font-semibold text-gray-900 mb-4">Téléverser un fichier 3D</h2>
          <UploadBox
            label="Fichier 3D"
            accept=".stl,.obj,.3mf,.zip"
            onChange={(file) => {
              if (file) console.log('File selected:', file.name)
              // TODO: Upload to Supabase Storage or AWS S3
            }}
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nom</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Prix</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Formats</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Licence</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {products.length === 0 ? (
                  <tr>
                    <td colSpan={6} className="text-center py-12 text-gray-400">Aucun modèle trouvé</td>
                  </tr>
                ) : (
                  products.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">€{p.price.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <div className="flex gap-1 flex-wrap">
                          {(p.fileFormat ?? []).map((fmt) => (
                            <span key={fmt} className="px-1.5 py-0.5 bg-indigo-100 text-indigo-700 rounded text-xs font-medium">
                              {fmt}
                            </span>
                          ))}
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{p.licenseType ?? '—'}</td>
                      <td className="px-4 py-3">
                        <span className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${statusConfig[p.status]?.className ?? 'bg-gray-100 text-gray-500'}`}>
                          {statusConfig[p.status]?.label ?? p.status}
                        </span>
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
