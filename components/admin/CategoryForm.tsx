'use client'

import { useState, useEffect, type FormEvent } from 'react'
import UploadBox from './UploadBox'
import type { AdminCategory } from '@/lib/admin/categories'

interface CategoryFormData {
  name: string
  slug: string
  description: string
  parentCategory: string
  status: 'active' | 'inactive'
}

function slugify(str: string): string {
  return str
    .toLowerCase()
    .normalize('NFD')
    .replace(/[̀-ͯ]/g, '')
    .replace(/[^a-z0-9\s-]/g, '')
    .trim()
    .replace(/\s+/g, '-')
}

interface CategoryFormProps {
  initialData?: Partial<AdminCategory>
  onSubmit: (data: CategoryFormData) => void
  onCancel: () => void
  isLoading?: boolean
  parentOptions?: { value: string; label: string }[]
}

const inputClass =
  'w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent'
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function CategoryForm({
  initialData,
  onSubmit,
  onCancel,
  isLoading,
  parentOptions = [],
}: CategoryFormProps) {
  const [form, setForm] = useState<CategoryFormData>({
    name: initialData?.name ?? '',
    slug: initialData?.slug ?? '',
    description: initialData?.description ?? '',
    parentCategory: initialData?.parentCategory ?? '',
    status: initialData?.status ?? 'active',
  })

  // Auto-slug only when creating
  useEffect(() => {
    if (!initialData?.slug) {
      setForm((prev) => ({ ...prev, slug: slugify(prev.name) }))
    }
  }, [form.name, initialData?.slug])

  const set = (field: keyof CategoryFormData, value: string) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div>
        <label className={labelClass}>Nom</label>
        <input
          className={inputClass}
          value={form.name}
          onChange={(e) => set('name', e.target.value)}
          placeholder="Ex : Imprimantes 3D"
          required
        />
      </div>
      <div>
        <label className={labelClass}>Slug (URL)</label>
        <input
          className={inputClass}
          value={form.slug}
          onChange={(e) => set('slug', e.target.value)}
          placeholder="ex : imprimantes-3d"
        />
      </div>
      <div>
        <label className={labelClass}>Description</label>
        <textarea
          className={`${inputClass} h-24 resize-none`}
          value={form.description}
          onChange={(e) => set('description', e.target.value)}
          placeholder="Description de la catégorie…"
        />
      </div>
      <div>
        <label className={labelClass}>Catégorie parente</label>
        <select
          className={inputClass}
          value={form.parentCategory}
          onChange={(e) => set('parentCategory', e.target.value)}
        >
          <option value="">— Aucune (catégorie racine) —</option>
          {parentOptions.map((opt) => (
            <option key={opt.value} value={opt.value}>
              {opt.label}
            </option>
          ))}
        </select>
      </div>
      <div>
        <label className={labelClass}>Statut</label>
        <select
          className={inputClass}
          value={form.status}
          onChange={(e) => set('status', e.target.value as 'active' | 'inactive')}
        >
          <option value="active">Actif</option>
          <option value="inactive">Inactif</option>
        </select>
      </div>
      <div>
        <UploadBox label="Image de la catégorie" accept="image/jpeg, image/png, image/webp" />
      </div>
      <div className="flex gap-3 justify-end pt-2">
        <button
          type="button"
          onClick={onCancel}
          className="px-5 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-5 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </div>
    </form>
  )
}
