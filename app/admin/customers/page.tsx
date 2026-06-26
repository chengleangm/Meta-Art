'use client'

import { useState, useMemo } from 'react'
import { Download } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import SearchInput from '@/components/admin/SearchInput'
import { adminCustomers } from '@/lib/admin/customers'

export default function CustomersPage() {
  const [search, setSearch] = useState('')

  const filtered = useMemo(() => {
    const q = search.toLowerCase()
    if (!q) return adminCustomers
    return adminCustomers.filter(
      (c) =>
        c.name.toLowerCase().includes(q) ||
        c.email.toLowerCase().includes(q) ||
        c.phone.includes(q)
    )
  }, [search])

  const handleExportCSV = () => {
    // TODO: Export real customer data to CSV
    const header = 'ID,Nom,Email,Téléphone,Commandes,Dépenses,Dernier achat,Statut\n'
    const rows = adminCustomers
      .map(
        (c) =>
          `${c.id},"${c.name}","${c.email}","${c.phone}",${c.totalOrders},${c.totalSpent},"${c.lastOrderDate}","${c.status}"`
      )
      .join('\n')
    const blob = new Blob([header + rows], { type: 'text/csv;charset=utf-8;' })
    const url = URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url
    a.download = 'clients-meta-art.csv'
    a.click()
    URL.revokeObjectURL(url)
  }

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div className="flex items-center justify-between gap-4 flex-wrap">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Clients</h1>
            <p className="text-sm text-gray-500 mt-0.5">{filtered.length} client(s) trouvé(s)</p>
          </div>
          <button
            onClick={handleExportCSV}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 bg-white hover:bg-gray-50 rounded-xl text-sm font-medium text-gray-700 transition-colors"
          >
            <Download className="w-4 h-4" />
            Exporter CSV
          </button>
        </div>

        <div className="flex gap-3">
          <SearchInput value={search} onChange={setSearch} placeholder="Nom, email, téléphone…" />
        </div>

        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Nom</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Téléphone</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Commandes</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Dépenses</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Dernier achat</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={7} className="text-center py-12 text-gray-400">Aucun client trouvé</td>
                  </tr>
                ) : (
                  filtered.map((c, i) => (
                    <tr
                      key={c.id}
                      className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}
                    >
                      <td className="px-4 py-3">
                        <div className="flex items-center gap-3">
                          <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-semibold flex-shrink-0">
                            {c.name.split(' ').map((n) => n[0]).slice(0, 2).join('')}
                          </div>
                          <span className="font-medium text-gray-900">{c.name}</span>
                        </div>
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{c.email}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">{c.phone}</td>
                      <td className="px-4 py-3 text-center font-semibold text-gray-900">{c.totalOrders}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">€{c.totalSpent.toFixed(2)}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                        {new Date(c.lastOrderDate).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2.5 py-0.5 rounded-full text-xs font-medium ${
                            c.status === 'active'
                              ? 'bg-green-100 text-green-700'
                              : 'bg-red-100 text-red-700'
                          }`}
                        >
                          {c.status === 'active' ? 'Actif' : 'Bloqué'}
                        </span>
                      </td>
                    </tr>
                  ))
                )}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
