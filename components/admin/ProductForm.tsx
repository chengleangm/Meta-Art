'use client'

import { useState, useEffect, type FormEvent } from 'react'
import UploadBox from './UploadBox'
import type { AdminProduct } from '@/lib/admin/products'

type ProductType = 'printer' | 'filament' | 'resin' | 'model' | 'other'

interface ProductFormData {
  name: string
  slug: string
  sku: string
  category: string
  productType: ProductType
  price: string
  comparePrice: string
  stock: string
  shortDescription: string
  description: string
  status: 'active' | 'draft' | 'archived'
  featured: boolean
  bestSeller: boolean
  // Printer fields
  buildVolume: string
  printSpeed: string
  nozzleDiameter: string
  supportedMaterials: string
  connectivity: string
  warranty: string
  // Filament fields
  material: string
  diameter: string
  weight: string
  color: string
  printTemp: string
  bedTemp: string
  // Resin fields
  resinType: string
  bottleSize: string
  compatiblePrinters: string
  exposureTime: string
  // Model fields
  fileFormat: string[]
  licenseType: string
  compatibleSoftware: string
  polyCount: string
  isDigitalDownload: boolean
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

interface ProductFormProps {
  initialData?: Partial<AdminProduct>
  onSubmit: (data: ProductFormData) => void
  onCancel: () => void
  isLoading?: boolean
}

const emptyForm: ProductFormData = {
  name: '',
  slug: '',
  sku: '',
  category: '',
  productType: 'other',
  price: '',
  comparePrice: '',
  stock: '',
  shortDescription: '',
  description: '',
  status: 'draft',
  featured: false,
  bestSeller: false,
  buildVolume: '',
  printSpeed: '',
  nozzleDiameter: '',
  supportedMaterials: '',
  connectivity: '',
  warranty: '',
  material: '',
  diameter: '',
  weight: '',
  color: '',
  printTemp: '',
  bedTemp: '',
  resinType: '',
  bottleSize: '',
  compatiblePrinters: '',
  exposureTime: '',
  fileFormat: [],
  licenseType: '',
  compatibleSoftware: '',
  polyCount: '',
  isDigitalDownload: false,
}

const inputClass =
  'w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent'
const labelClass = 'block text-sm font-medium text-gray-700 mb-1.5'

export default function ProductForm({ initialData, onSubmit, onCancel, isLoading }: ProductFormProps) {
  const [form, setForm] = useState<ProductFormData>(() => {
    if (!initialData) return emptyForm
    return {
      ...emptyForm,
      name: initialData.name ?? '',
      slug: initialData.slug ?? '',
      sku: initialData.sku ?? '',
      category: initialData.category ?? '',
      productType: (initialData.category as ProductType) ?? 'other',
      price: initialData.price?.toString() ?? '',
      comparePrice: initialData.comparePrice?.toString() ?? '',
      stock: initialData.stock?.toString() ?? '',
      shortDescription: initialData.shortDescription ?? '',
      status: initialData.status ?? 'draft',
      featured: initialData.featured ?? false,
      bestSeller: initialData.bestSeller ?? false,
      buildVolume: initialData.buildVolume ?? '',
      printSpeed: initialData.printSpeed ?? '',
      nozzleDiameter: initialData.nozzleDiameter ?? '',
      supportedMaterials: initialData.supportedMaterials ?? '',
      connectivity: initialData.connectivity ?? '',
      warranty: initialData.warranty ?? '',
      material: initialData.material ?? '',
      diameter: initialData.diameter ?? '',
      weight: initialData.weight ?? '',
      color: initialData.color ?? '',
      printTemp: initialData.printTemp ?? '',
      bedTemp: initialData.bedTemp ?? '',
      resinType: initialData.resinType ?? '',
      bottleSize: initialData.bottleSize ?? '',
      compatiblePrinters: initialData.compatiblePrinters ?? '',
      exposureTime: initialData.exposureTime ?? '',
      fileFormat: initialData.fileFormat ?? [],
      licenseType: initialData.licenseType ?? '',
      polyCount: initialData.polyCount ?? '',
      isDigitalDownload: initialData.isDigitalDownload ?? false,
    }
  })

  // Auto-slug
  useEffect(() => {
    if (!initialData?.slug) {
      setForm((prev) => ({ ...prev, slug: slugify(prev.name) }))
    }
  }, [form.name, initialData?.slug])

  const set = (field: keyof ProductFormData, value: unknown) => {
    setForm((prev) => ({ ...prev, [field]: value }))
  }

  const toggleFormat = (fmt: string) => {
    setForm((prev) => ({
      ...prev,
      fileFormat: prev.fileFormat.includes(fmt)
        ? prev.fileFormat.filter((f) => f !== fmt)
        : [...prev.fileFormat, fmt],
    }))
  }

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault()
    onSubmit(form)
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      {/* Base info */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Informations générales</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="md:col-span-2">
            <label className={labelClass}>Nom du produit</label>
            <input
              className={inputClass}
              value={form.name}
              onChange={(e) => set('name', e.target.value)}
              placeholder="Ex : Bambu Lab X1 Carbon"
              required
            />
          </div>
          <div>
            <label className={labelClass}>Slug (URL)</label>
            <input
              className={inputClass}
              value={form.slug}
              onChange={(e) => set('slug', e.target.value)}
              placeholder="ex : bambu-lab-x1-carbon"
            />
          </div>
          <div>
            <label className={labelClass}>SKU</label>
            <input
              className={inputClass}
              value={form.sku}
              onChange={(e) => set('sku', e.target.value)}
              placeholder="Ex : PRNT-001"
            />
          </div>
          <div>
            <label className={labelClass}>Catégorie</label>
            <select
              className={inputClass}
              value={form.category}
              onChange={(e) => set('category', e.target.value)}
            >
              <option value="">Choisir une catégorie</option>
              <option value="printers">Imprimantes 3D</option>
              <option value="filament">Filaments</option>
              <option value="resin">Résines</option>
              <option value="models">Modèles 3D</option>
              <option value="accessories">Accessoires</option>
              <option value="tools">Outils</option>
              <option value="spare-parts">Pièces détachées</option>
            </select>
          </div>
          <div>
            <label className={labelClass}>Type de produit</label>
            <select
              className={inputClass}
              value={form.productType}
              onChange={(e) => set('productType', e.target.value as ProductType)}
            >
              <option value="other">Autre</option>
              <option value="printer">Imprimante</option>
              <option value="filament">Filament</option>
              <option value="resin">Résine</option>
              <option value="model">Modèle 3D</option>
            </select>
          </div>
        </div>
      </div>

      {/* Pricing & Stock */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Prix & Stock</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div>
            <label className={labelClass}>Prix (€)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              className={inputClass}
              value={form.price}
              onChange={(e) => set('price', e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div>
            <label className={labelClass}>Prix barré (€)</label>
            <input
              type="number"
              step="0.01"
              min="0"
              className={inputClass}
              value={form.comparePrice}
              onChange={(e) => set('comparePrice', e.target.value)}
              placeholder="0.00"
            />
          </div>
          <div>
            <label className={labelClass}>Stock</label>
            <input
              type="number"
              min="0"
              className={inputClass}
              value={form.stock}
              onChange={(e) => set('stock', e.target.value)}
              placeholder="0"
            />
          </div>
        </div>
      </div>

      {/* Description */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Description</h3>
        <div className="space-y-4">
          <div>
            <label className={labelClass}>Description courte</label>
            <input
              className={inputClass}
              value={form.shortDescription}
              onChange={(e) => set('shortDescription', e.target.value)}
              placeholder="Résumé en une phrase"
            />
          </div>
          <div>
            <label className={labelClass}>Description complète</label>
            <textarea
              className={`${inputClass} h-32 resize-none`}
              value={form.description}
              onChange={(e) => set('description', e.target.value)}
              placeholder="Description détaillée du produit…"
            />
          </div>
        </div>
      </div>

      {/* Type-specific fields */}
      {form.productType === 'printer' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Spécifications imprimante</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: 'buildVolume', label: 'Volume d\'impression', placeholder: '256 x 256 x 256 mm' },
              { key: 'printSpeed', label: 'Vitesse d\'impression', placeholder: '500 mm/s' },
              { key: 'nozzleDiameter', label: 'Diamètre buse', placeholder: '0.4 mm' },
              { key: 'supportedMaterials', label: 'Matériaux compatibles', placeholder: 'PLA, PETG, ABS' },
              { key: 'connectivity', label: 'Connectivité', placeholder: 'Wi-Fi, USB' },
              { key: 'warranty', label: 'Garantie', placeholder: '1 an' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input
                  className={inputClass}
                  value={form[key as keyof ProductFormData] as string}
                  onChange={(e) => set(key as keyof ProductFormData, e.target.value)}
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {form.productType === 'filament' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Spécifications filament</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: 'material', label: 'Matériau', placeholder: 'PLA, PETG, ABS…' },
              { key: 'diameter', label: 'Diamètre', placeholder: '1.75 mm' },
              { key: 'weight', label: 'Poids', placeholder: '1 kg' },
              { key: 'color', label: 'Couleur', placeholder: 'Rouge Carmin' },
              { key: 'printTemp', label: 'Température d\'impression', placeholder: '200-220°C' },
              { key: 'bedTemp', label: 'Température plateau', placeholder: '55-65°C' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input
                  className={inputClass}
                  value={form[key as keyof ProductFormData] as string}
                  onChange={(e) => set(key as keyof ProductFormData, e.target.value)}
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {form.productType === 'resin' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Spécifications résine</h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              { key: 'resinType', label: 'Type de résine', placeholder: 'Standard, ABS-Like…' },
              { key: 'bottleSize', label: 'Contenance', placeholder: '1 L' },
              { key: 'color', label: 'Couleur', placeholder: 'Gris' },
              { key: 'compatiblePrinters', label: 'Imprimantes compatibles', placeholder: 'Elegoo Saturn…' },
              { key: 'exposureTime', label: 'Temps d\'exposition', placeholder: '2-3 secondes' },
            ].map(({ key, label, placeholder }) => (
              <div key={key}>
                <label className={labelClass}>{label}</label>
                <input
                  className={inputClass}
                  value={form[key as keyof ProductFormData] as string}
                  onChange={(e) => set(key as keyof ProductFormData, e.target.value)}
                  placeholder={placeholder}
                />
              </div>
            ))}
          </div>
        </div>
      )}

      {form.productType === 'model' && (
        <div className="bg-white rounded-2xl p-6 shadow-sm">
          <h3 className="text-base font-semibold text-gray-900 mb-4">Spécifications modèle 3D</h3>
          <div className="space-y-4">
            <div>
              <label className={labelClass}>Formats de fichier</label>
              <div className="flex gap-3 mt-1">
                {['STL', 'OBJ', '3MF'].map((fmt) => (
                  <label key={fmt} className="flex items-center gap-2 cursor-pointer">
                    <input
                      type="checkbox"
                      checked={form.fileFormat.includes(fmt)}
                      onChange={() => toggleFormat(fmt)}
                      className="rounded border-gray-300 text-lime-500 focus:ring-lime-400"
                    />
                    <span className="text-sm text-gray-700">{fmt}</span>
                  </label>
                ))}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {[
                { key: 'licenseType', label: 'Licence', placeholder: 'Personnel, Commercial' },
                { key: 'compatibleSoftware', label: 'Logiciels compatibles', placeholder: 'Blender, Chitubox' },
                { key: 'polyCount', label: 'Nombre de polygones', placeholder: '2.5M' },
              ].map(({ key, label, placeholder }) => (
                <div key={key}>
                  <label className={labelClass}>{label}</label>
                  <input
                    className={inputClass}
                    value={form[key as keyof ProductFormData] as string}
                    onChange={(e) => set(key as keyof ProductFormData, e.target.value)}
                    placeholder={placeholder}
                  />
                </div>
              ))}
            </div>
            <label className="flex items-center gap-2 cursor-pointer">
              <input
                type="checkbox"
                checked={form.isDigitalDownload}
                onChange={(e) => set('isDigitalDownload', e.target.checked)}
                className="rounded border-gray-300 text-lime-500 focus:ring-lime-400"
              />
              <span className="text-sm font-medium text-gray-700">Téléchargement numérique</span>
            </label>
          </div>
        </div>
      )}

      {/* Status & Flags */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Statut & Options</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className={labelClass}>Statut</label>
            <select
              className={inputClass}
              value={form.status}
              onChange={(e) => set('status', e.target.value)}
            >
              <option value="active">Actif</option>
              <option value="draft">Brouillon</option>
              <option value="archived">Archivé</option>
            </select>
          </div>
          <div className="flex flex-col gap-3 pt-1">
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => set('featured', !form.featured)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                  form.featured ? 'bg-lime-400' : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    form.featured ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Produit mis en avant</span>
            </label>
            <label className="flex items-center gap-3 cursor-pointer">
              <div
                onClick={() => set('bestSeller', !form.bestSeller)}
                className={`relative w-11 h-6 rounded-full transition-colors cursor-pointer ${
                  form.bestSeller ? 'bg-lime-400' : 'bg-gray-200'
                }`}
              >
                <div
                  className={`absolute top-0.5 left-0.5 w-5 h-5 bg-white rounded-full shadow transition-transform ${
                    form.bestSeller ? 'translate-x-5' : 'translate-x-0'
                  }`}
                />
              </div>
              <span className="text-sm font-medium text-gray-700">Meilleure vente</span>
            </label>
          </div>
        </div>
      </div>

      {/* Image */}
      <div className="bg-white rounded-2xl p-6 shadow-sm">
        <h3 className="text-base font-semibold text-gray-900 mb-4">Image produit</h3>
        <UploadBox label="Photo principale" accept="image/jpeg, image/png, image/webp" />
      </div>

      {/* Actions */}
      <div className="flex gap-3 justify-end">
        <button
          type="button"
          onClick={onCancel}
          className="px-6 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
        >
          Annuler
        </button>
        <button
          type="submit"
          disabled={isLoading}
          className="px-6 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors disabled:opacity-50"
        >
          {isLoading ? 'Enregistrement…' : 'Enregistrer'}
        </button>
      </div>
    </form>
  )
}
