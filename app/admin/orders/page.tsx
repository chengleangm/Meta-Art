'use client'

import { useState, useMemo } from 'react'
import { useRouter } from 'next/navigation'
import { Eye } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import OrderStatusBadge from '@/components/admin/OrderStatusBadge'
import SearchInput from '@/components/admin/SearchInput'
import FilterDropdown from '@/components/admin/FilterDropdown'
import { adminOrders, type OrderStatus, type PaymentStatus } from '@/lib/admin/orders'

const tabs: { label: string; value: string }[] = [
  { label: 'Toutes', value: '' },
  { label: 'En attente', value: 'pending' },
  { label: 'Traitement', value: 'processing' },
  { label: 'Expédiées', value: 'shipped' },
  { label: 'Livrées', value: 'delivered' },
  { label: 'Annulées', value: 'cancelled' },
]

const paymentOptions: { value: PaymentStatus; label: string }[] = [
  { value: 'paid', label: 'Payé' },
  { value: 'unpaid', label: 'Non payé' },
  { value: 'pending', label: 'En attente' },
  { value: 'failed', label: 'Échoué' },
  { value: 'refunded', label: 'Remboursé' },
]

export default function OrdersPage() {
  const router = useRouter()
  const [search, setSearch] = useState('')
  const [activeTab, setActiveTab] = useState('')
  const [paymentFilter, setPaymentFilter] = useState('')

  const filtered = useMemo(() => {
    return adminOrders.filter((o) => {
      const q = search.toLowerCase()
      const matchSearch =
        !q ||
        o.id.toLowerCase().includes(q) ||
        o.customerName.toLowerCase().includes(q) ||
        o.email.toLowerCase().includes(q)
      const matchStatus = !activeTab || o.orderStatus === activeTab
      const matchPayment = !paymentFilter || o.paymentStatus === paymentFilter
      return matchSearch && matchStatus && matchPayment
    })
  }, [search, activeTab, paymentFilter])

  return (
    <AdminLayout>
      <div className="space-y-5">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Commandes</h1>
          <p className="text-sm text-gray-500 mt-0.5">{filtered.length} commande(s) trouvée(s)</p>
        </div>

        {/* Status tabs */}
        <div className="flex gap-1 overflow-x-auto pb-1">
          {tabs.map((tab) => (
            <button
              key={tab.value}
              onClick={() => setActiveTab(tab.value)}
              className={`flex-shrink-0 px-4 py-2 rounded-xl text-sm font-medium transition-colors ${
                activeTab === tab.value
                  ? 'bg-[#0f172a] text-white'
                  : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Filters */}
        <div className="flex flex-wrap gap-3">
          <SearchInput value={search} onChange={setSearch} placeholder="ID, nom, email…" />
          <FilterDropdown
            options={paymentOptions}
            value={paymentFilter}
            onChange={setPaymentFilter}
            placeholder="Paiement"
          />
        </div>

        {/* Table */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-sm">
              <thead>
                <tr className="bg-gray-50 border-b border-gray-100">
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">ID</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Client</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Email</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Paiement</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                  <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length === 0 ? (
                  <tr>
                    <td colSpan={8} className="text-center py-12 text-gray-400">Aucune commande trouvée</td>
                  </tr>
                ) : (
                  filtered.map((o, i) => (
                    <tr
                      key={o.id}
                      className={`border-b border-gray-50 hover:bg-gray-50/50 transition-colors ${i % 2 === 0 ? 'bg-white' : 'bg-gray-50/20'}`}
                    >
                      <td className="px-4 py-3 font-mono text-xs font-semibold text-gray-700">{o.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-900 whitespace-nowrap">{o.customerName}</td>
                      <td className="px-4 py-3 text-gray-500 text-xs">{o.email}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">€{o.total.toFixed(2)}</td>
                      <td className="px-4 py-3">
                        <OrderStatusBadge status={o.paymentStatus} type="payment" />
                      </td>
                      <td className="px-4 py-3">
                        <OrderStatusBadge status={o.orderStatus} />
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                        {new Date(o.createdAt).toLocaleDateString('fr-FR')}
                      </td>
                      <td className="px-4 py-3">
                        <button
                          onClick={() => router.push(`/admin/orders/${o.id}`)}
                          className="flex items-center gap-1 px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-lg text-xs font-medium text-gray-700 transition-colors"
                        >
                          <Eye className="w-3.5 h-3.5" />
                          Voir
                        </button>
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
