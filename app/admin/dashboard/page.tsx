'use client'

import AdminLayout from '@/components/admin/AdminLayout'
import StatCard from '@/components/admin/StatCard'
import OrderStatusBadge from '@/components/admin/OrderStatusBadge'
import StockBadge from '@/components/admin/StockBadge'
import { adminProducts } from '@/lib/admin/products'
import { adminOrders } from '@/lib/admin/orders'
import { adminCustomers } from '@/lib/admin/customers'
import {
  Package,
  ShoppingBag,
  TrendingUp,
  Clock,
  AlertTriangle,
  Download,
  Users,
  BarChart2,
} from 'lucide-react'
import Image from 'next/image'

export default function DashboardPage() {
  const totalProducts = adminProducts.length
  const totalOrders = adminOrders.length
  const totalRevenue = adminOrders
    .filter((o) => o.orderStatus === 'delivered')
    .reduce((acc, o) => acc + o.total, 0)
  const pendingOrders = adminOrders.filter((o) => o.orderStatus === 'pending').length
  const lowStockProducts = adminProducts.filter((p) => p.stock < 10 && p.stock > 0).length
  const digitalDownloads = adminProducts.filter((p) => p.category === 'models').length
  const newCustomers = adminCustomers.length

  const recentOrders = [...adminOrders]
    .sort((a, b) => new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime())
    .slice(0, 5)

  const bestSellers = adminProducts.filter((p) => p.bestSeller).slice(0, 4)

  const lowStockList = adminProducts
    .filter((p) => p.stock < 10)
    .sort((a, b) => a.stock - b.stock)

  return (
    <AdminLayout>
      <div className="space-y-6">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Tableau de bord</h1>
          <p className="text-sm text-gray-500 mt-1">Bienvenue dans l&apos;espace administration Meta Art.</p>
        </div>

        {/* Stat cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <StatCard
            title="Produits"
            value={totalProducts}
            icon={Package}
            color="#3b82f6"
            change="+2 ce mois"
            changeType="up"
          />
          <StatCard
            title="Commandes"
            value={totalOrders}
            icon={ShoppingBag}
            color="#8b5cf6"
            change="+5 cette semaine"
            changeType="up"
          />
          <StatCard
            title="Chiffre d'affaires"
            value={`€${totalRevenue.toLocaleString('fr-FR', { minimumFractionDigits: 2 })}`}
            icon={TrendingUp}
            color="#10b981"
            change="+12%"
            changeType="up"
          />
          <StatCard
            title="Commandes en attente"
            value={pendingOrders}
            icon={Clock}
            color="#f59e0b"
          />
          <StatCard
            title="Stock faible"
            value={lowStockProducts}
            icon={AlertTriangle}
            color="#f97316"
          />
          <StatCard
            title="Téléchargements"
            value={digitalDownloads}
            icon={Download}
            color="#06b6d4"
          />
          <StatCard
            title="Clients"
            value={newCustomers}
            icon={Users}
            color="#ec4899"
          />
          <StatCard
            title="Analyses"
            value="—"
            icon={BarChart2}
            color="#6366f1"
          />
        </div>

        <div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
          {/* Recent Orders */}
          <div className="xl:col-span-2 bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">Commandes récentes</h2>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">ID</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Client</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Statut</th>
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Date</th>
                  </tr>
                </thead>
                <tbody>
                  {recentOrders.map((order) => (
                    <tr key={order.id} className="border-b border-gray-50 hover:bg-gray-50/50">
                      <td className="px-4 py-3 font-mono text-xs text-gray-500">{order.id}</td>
                      <td className="px-4 py-3 font-medium text-gray-900">{order.customerName}</td>
                      <td className="px-4 py-3 font-semibold text-gray-900">
                        €{order.total.toFixed(2)}
                      </td>
                      <td className="px-4 py-3">
                        <OrderStatusBadge status={order.orderStatus} />
                      </td>
                      <td className="px-4 py-3 text-gray-500 text-xs whitespace-nowrap">
                        {new Date(order.createdAt).toLocaleDateString('fr-FR')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Low Stock Warning */}
          <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
            <div className="px-6 py-4 border-b border-gray-100">
              <h2 className="text-base font-semibold text-gray-900">Alertes stock</h2>
            </div>
            <div className="divide-y divide-gray-50">
              {lowStockList.length === 0 ? (
                <p className="px-6 py-8 text-sm text-gray-400 text-center">Tous les stocks sont bons.</p>
              ) : (
                lowStockList.map((p) => (
                  <div key={p.id} className="px-6 py-3 flex items-center justify-between gap-2">
                    <div className="min-w-0">
                      <p className="text-sm font-medium text-gray-900 truncate">{p.name}</p>
                      <p className="text-xs text-gray-400">{p.category}</p>
                    </div>
                    <StockBadge stock={p.stock} />
                  </div>
                ))
              )}
            </div>
          </div>
        </div>

        {/* Best Sellers */}
        <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
          <div className="px-6 py-4 border-b border-gray-100">
            <h2 className="text-base font-semibold text-gray-900">Meilleures ventes</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
            {bestSellers.map((p) => (
              <div key={p.id} className="text-center">
                <div className="relative w-full aspect-square rounded-xl overflow-hidden bg-gray-100 mb-3">
                  <Image
                    src={p.imageUrl}
                    alt={p.name}
                    fill
                    className="object-cover"
                  />
                </div>
                <p className="text-sm font-medium text-gray-900 line-clamp-2">{p.name}</p>
                <p className="text-sm font-bold text-gray-900 mt-1">€{p.price.toFixed(2)}</p>
                <div className="mt-1 flex justify-center">
                  <StockBadge stock={p.stock} />
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Chart Placeholder */}
        <div className="bg-white rounded-2xl shadow-sm p-8 flex flex-col items-center justify-center text-center min-h-[200px]">
          <BarChart2 className="w-12 h-12 text-gray-200 mb-4" />
          <p className="text-gray-500 font-medium">Graphique des ventes</p>
          <p className="text-sm text-gray-400 mt-1 max-w-md">
            Connectez votre fournisseur d&apos;analytique (Chart.js, Recharts, Google Analytics, etc.) pour afficher les données ici.
          </p>
        </div>
      </div>
    </AdminLayout>
  )
}
