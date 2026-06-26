'use client'

import { useState } from 'react'
import { Plus, Pencil } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import ConfirmDeleteModal from '@/components/admin/ConfirmDeleteModal'
import CategoryForm from '@/components/admin/CategoryForm'
import { adminCategories, type AdminCategory } from '@/lib/admin/categories'

export default function CategoriesPage() {
  const [categories, setCategories] = useState(adminCategories)
  const [showForm, setShowForm] = useState(false)
  const [editingCategory, setEditingCategory] = useState<AdminCategory | null>(null)
  const [deleteModal, setDeleteModal] = useState<{ open: boolean; category: AdminCategory | null }>({
    open: false,
    category: null,
  })

  const handleSave = (data: { name: string; slug: string; description: string; parentCategory: string; status: 'active' | 'inactive' }) => {
    if (editingCategory) {
      setCategories((prev) =>
        prev.map((c) =>
          c.id === editingCategory.id
            ? { ...c, ...data, parentCategory: data.parentCategory || null }
            : c
        )
      )
    } else {
      const newCat: AdminCategory = {
        id: `CAT-${Date.now()}`,
        name: data.name,
        slug: data.slug,
        description: data.description,
        parentCategory: data.parentCategory || null,
        status: data.status,
        productCount: 0,
        createdAt: new Date().toISOString(),
      }
      setCategories((prev) => [...prev, newCat])
    }
    setShowForm(false)
    setEditingCategory(null)
  }

  const handleDelete = (id: string) => {
    // TODO: Delete from Supabase
    setCategories((prev) => prev.filter((c) => c.id !== id))
  }

  const parentOptions = categories.map((c) => ({ value: c.slug, label: c.name }))

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Catégories</h1>
            <p className="text-sm text-gray-500 mt-0.5">{categories.length} catégorie(s)</p>
          </div>
          <button
            onClick={() => { setEditingCategory(null); setShowForm(true) }}
            className="flex items-center gap-2 px-4 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors"
          >
            <Plus className="w-4 h-4" />
            Ajouter une catégorie
          </button>
        </div>

        {/* Inline form modal */}
        {showForm && (
          <div className="fixed inset-0 z-50 flex items-center justify-center px-4">
            <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={() => setShowForm(false)} />
            <div className="relative bg-white rounded-2xl p-6 w-full max-w-lg shadow-xl">
              <h2 className="text-lg font-semibold text-gray-900 mb-4">
                {editingCategory ? 'Modifier la catégorie' : 'Nouvelle catégorie'}
              </h2>
              <CategoryForm
                initialData={editingCategory ?? undefined}
                onSubmit={handleSave}
                onCancel={() => { setShowForm(false); setEditingCategory(null) }}
                parentOptions={parentOptions}
              />
            </div>
          </div>
        )}

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nom</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Slug</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Description</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Produits</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Actions</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((cat, i) => (
                  <tr
                    key={cat.id}
                    className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}
                  >
                    <td className="px-4 py-3 font-medium text-gray-900">{cat.name}</td>
                    <td className="px-4 py-3 font-mono text-xs text-gray-500">{cat.slug}</td>
                    <td className="px-4 py-3 text-gray-500 max-w-xs">
                      <p className="truncate">{cat.description}</p>
                    </td>
                    <td className="px-4 py-3">
                      <span className="font-semibold text-gray-900">{cat.productCount}</span>
                    </td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                          cat.status === 'active'
                            ? 'bg-green-100 text-green-700'
                            : 'bg-gray-100 text-gray-500'
                        }`}
                      >
                        {cat.status === 'active' ? 'Actif' : 'Inactif'}
                      </span>
                    </td>
                    <td className="px-4 py-3">
                      <div className="flex items-center gap-1">
                        <button
                          onClick={() => { setEditingCategory(cat); setShowForm(true) }}
                          className="p-1.5 text-gray-400 hover:text-lime-600 hover:bg-lime-50 rounded-lg transition-colors"
                          title="Modifier"
                        >
                          <Pencil className="w-4 h-4" />
                        </button>
                        <button
                          onClick={() => setDeleteModal({ open: true, category: cat })}
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
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      <ConfirmDeleteModal
        isOpen={deleteModal.open}
        onClose={() => setDeleteModal({ open: false, category: null })}
        onConfirm={() => deleteModal.category && handleDelete(deleteModal.category.id)}
        itemName={deleteModal.category?.name ?? ''}
      />
    </AdminLayout>
  )
}
