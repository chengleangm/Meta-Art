'use client'

import { useState } from 'react'
import { Package, AlertTriangle, XCircle, Save } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import SearchInput from '@/components/admin/SearchInput'
import StatCard from '@/components/admin/StatCard'
import { adminProducts } from '@/lib/admin/products'

const categoryLabel: Record<string, string> = {
  printers: 'Imprimantes',
  filament: 'Filaments',
  resin: 'Résines',
  models: 'Modèles 3D',
  accessories: 'Accessoires',
  tools: 'Outils',
  'spare-parts': 'Pièces détachées',
}

export default function InventoryPage() {
  const [search, setSearch] = useState('')
  const [adjustments, setAdjustments] = useState<Record<string, string>>({})

  const physicalProducts = adminProducts.filter((p) => p.stock < 999)

  const lowStock = physicalProducts.filter((p) => p.stock > 0 && p.stock < 10)
  const outOfStock = physicalProducts.filter((p) => p.stock === 0)
  const totalSKUs = physicalProducts.length

  const searchLow = lowStock.filter((p) => {
    const q = search.toLowerCase()
    return !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
  })
  const searchOut = outOfStock.filter((p) => {
    const q = search.toLowerCase()
    return !q || p.name.toLowerCase().includes(q) || p.sku.toLowerCase().includes(q)
  })

  const handleUpdate = (id: string) => {
    // TODO: Update stock in Supabase
    // await supabase.from('products').update({ stock: adjustments[id] }).eq('id', id)
    console.log(`Update stock for ${id}:`, adjustments[id])
    alert(`Stock mis à jour pour l'ID ${id} (console.log — connecter à la base de données).`)
  }

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Inventaire</h1>
          <p className="text-sm text-gray-500 mt-0.5">Gérez vos niveaux de stock.</p>
        </div>

        {/* Summary */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          <StatCard title="Total SKUs" value={totalSKUs} icon={Package} color="#3b82f6" />
          <StatCard title="Stock faible" value={lowStock.length} icon={AlertTriangle} color="#f97316" />
          <StatCard title="Rupture de stock" value={outOfStock.length} icon={XCircle} color="#ef4444" />
        </div>

        <div className="flex gap-3">
          <SearchInput value={search} onChange={setSearch} placeholder="Nom, SKU…" />
        </div>

        {/* Low Stock */}
        {searchLow.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-orange-100 bg-orange-50/50 flex items-center gap-2">
              <AlertTriangle className="w-4 h-4 text-orange-500" />
              <h2 className="text-base font-semibold text-orange-700">Stock faible (&lt; 10 unités)</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Produit</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">SKU</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Catégorie</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock actuel</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Ajuster</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {searchLow.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-gray-50 hover:bg-orange-50/30 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-orange-50/10'}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{categoryLabel[p.category] ?? p.category}</td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-orange-600">{p.stock}</span>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          min="0"
                          value={adjustments[p.id] ?? p.stock}
                          onChange={(e) => setAdjustments((prev) => ({ ...prev, [p.id]: e.target.value }))}
                          className="w-20 px-2 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleUpdate(p.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-lime-400 hover:bg-lime-500 rounded-lg text-xs font-semibold text-black transition-colors"
                        >
                          <Save className="w-3.5 h-3.5" />
                          Mettre à jour
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Out of Stock */}
        {searchOut.length > 0 && (
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-red-100 bg-red-50/50 flex items-center gap-2">
              <XCircle className="w-4 h-4 text-red-500" />
              <h2 className="text-base font-semibold text-red-700">Rupture de stock</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Produit</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">SKU</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Catégorie</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Stock</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Réapprovisionner</th>
                    <th className="px-4 py-3" />
                  </tr>
                </thead>
                <tbody>
                  {searchOut.map((p, i) => (
                    <tr
                      key={p.id}
                      className={`border-b border-red-50 hover:bg-red-50/40 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-red-50/10'}`}
                    >
                      <td className="px-4 py-3 font-medium text-gray-900">{p.name}</td>
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{p.sku}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{categoryLabel[p.category] ?? p.category}</td>
                      <td className="px-4 py-3">
                        <span className="font-bold text-red-600">0</span>
                      </td>
                      <td className="px-4 py-3">
                        <input
                          type="number"
                          min="0"
                          value={adjustments[p.id] ?? ''}
                          onChange={(e) => setAdjustments((prev) => ({ ...prev, [p.id]: e.target.value }))}
                          placeholder="Quantité"
                          className="w-24 px-2 py-1 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                        />
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => handleUpdate(p.id)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-lime-400 hover:bg-lime-500 rounded-lg text-xs font-semibold text-black transition-colors"
                        >
                          <Save className="w-3.5 h-3.5" />
                          Mettre à jour
                        </button>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        {/* Inventory History Placeholder */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-[160px]">
          <Package className="w-10 h-10 text-gray-200 mb-3" />
          <p className="text-gray-500 font-medium">Historique des mouvements de stock</p>
          <p className="text-sm text-gray-400 mt-1">
            Connectez votre base de données pour afficher l&apos;historique des ajustements d&apos;inventaire.
          </p>
        </div>
      </div>
    </AdminLayout>
  )
}
