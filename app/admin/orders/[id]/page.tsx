'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ArrowLeft, Save } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import OrderStatusBadge from '@/components/admin/OrderStatusBadge'
import { adminOrders, type OrderStatus, type PaymentStatus } from '@/lib/admin/orders'

interface PageProps {
  params: { id: string }
}

const orderStatusOptions: OrderStatus[] = [
  'pending', 'confirmed', 'processing', 'packed', 'shipped', 'delivered', 'cancelled',
]
const paymentStatusOptions: PaymentStatus[] = [
  'paid', 'unpaid', 'pending', 'failed', 'refunded',
]

export default function OrderDetailPage({ params }: PageProps) {
  const router = useRouter()
  const order = adminOrders.find((o) => o.id === params.id)

  const [orderStatus, setOrderStatus] = useState<OrderStatus>(order?.orderStatus ?? 'pending')
  const [paymentStatus, setPaymentStatus] = useState<PaymentStatus>(order?.paymentStatus ?? 'pending')
  const [notes, setNotes] = useState(order?.notes ?? '')

  if (!order) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-xl font-semibold text-gray-900 mb-2">Commande introuvable</p>
          <p className="text-gray-400 mb-6">ID : &ldquo;{params.id}&rdquo;</p>
          <button
            onClick={() => router.push('/admin/orders')}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux commandes
          </button>
        </div>
      </AdminLayout>
    )
  }

  const handleUpdateStatus = () => {
    // TODO: Update order status in Supabase
    // await supabase.from('orders').update({ orderStatus, paymentStatus, notes }).eq('id', params.id)
    console.log('Updated:', { orderStatus, paymentStatus, notes })
    alert('Statut mis à jour (console.log — connecter à la base de données).')
  }

  const subtotal = order.items.reduce((acc, item) => acc + item.price * item.qty, 0)

  return (
    <AdminLayout>
      <div className="max-w-4xl mx-auto space-y-5">
        {/* Header */}
        <div className="flex items-center gap-4 flex-wrap">
          <button
            onClick={() => router.push('/admin/orders')}
            className="p-2 rounded-xl border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
          </button>
          <div>
            <h1 className="text-2xl font-bold text-gray-900">Commande {order.id}</h1>
            <p className="text-sm text-gray-500">
              {new Date(order.createdAt).toLocaleDateString('fr-FR', {
                day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit',
              })}
            </p>
          </div>
          <div className="ml-auto flex gap-2">
            <OrderStatusBadge status={order.paymentStatus} type="payment" />
            <OrderStatusBadge status={order.orderStatus} />
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-5">
          {/* Left column */}
          <div className="lg:col-span-2 space-y-5">
            {/* Items table */}
            <div className="bg-white rounded-2xl shadow-sm overflow-hidden">
              <div className="px-6 py-4 border-b border-gray-100">
                <h2 className="text-base font-semibold text-gray-900">Articles commandés</h2>
              </div>
              <table className="w-full text-sm">
                <thead>
                  <tr className="bg-gray-50 border-b border-gray-100">
                    <th className="text-left px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Produit</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Qté</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Prix unit.</th>
                    <th className="text-right px-4 py-3 text-xs font-semibold text-gray-500 uppercase tracking-wide">Total</th>
                  </tr>
                </thead>
                <tbody>
                  {order.items.map((item, i) => (
                    <tr key={i} className="border-b border-gray-50">
                      <td className="px-4 py-3 font-medium text-gray-900">{item.name}</td>
                      <td className="px-4 py-3 text-right text-gray-600">{item.qty}</td>
                      <td className="px-4 py-3 text-right text-gray-600">€{item.price.toFixed(2)}</td>
                      <td className="px-4 py-3 text-right font-semibold text-gray-900">€{(item.price * item.qty).toFixed(2)}</td>
                    </tr>
                  ))}
                </tbody>
                <tfoot>
                  <tr className="border-t border-gray-200">
                    <td colSpan={3} className="px-4 py-3 text-right font-semibold text-gray-700">Sous-total</td>
                    <td className="px-4 py-3 text-right font-bold text-gray-900">€{subtotal.toFixed(2)}</td>
                  </tr>
                  <tr>
                    <td colSpan={3} className="px-4 py-2 text-right text-gray-500 text-xs">Livraison</td>
                    <td className="px-4 py-2 text-right text-gray-500 text-xs">€{(order.total - subtotal).toFixed(2)}</td>
                  </tr>
                  <tr className="bg-gray-50">
                    <td colSpan={3} className="px-4 py-3 text-right font-bold text-gray-900">Total</td>
                    <td className="px-4 py-3 text-right font-bold text-lg text-gray-900">€{order.total.toFixed(2)}</td>
                  </tr>
                </tfoot>
              </table>
            </div>

            {/* Status update */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Modifier le statut</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Statut commande</label>
                  <select
                    value={orderStatus}
                    onChange={(e) => setOrderStatus(e.target.value as OrderStatus)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  >
                    {orderStatusOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1.5">Statut paiement</label>
                  <select
                    value={paymentStatus}
                    onChange={(e) => setPaymentStatus(e.target.value as PaymentStatus)}
                    className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400"
                  >
                    {paymentStatusOptions.map((s) => (
                      <option key={s} value={s}>{s}</option>
                    ))}
                  </select>
                </div>
              </div>
              <div className="mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-1.5">Notes admin</label>
                <textarea
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  rows={3}
                  className="w-full px-3 py-2 border border-gray-200 rounded-xl text-sm focus:outline-none focus:ring-2 focus:ring-lime-400 resize-none"
                  placeholder="Notes internes…"
                />
              </div>
              <button
                onClick={handleUpdateStatus}
                className="flex items-center gap-2 px-5 py-2.5 bg-lime-400 hover:bg-lime-500 rounded-xl text-sm font-semibold text-black transition-colors"
              >
                <Save className="w-4 h-4" />
                Mettre à jour
              </button>
            </div>
          </div>

          {/* Right column */}
          <div className="space-y-5">
            {/* Customer info */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Client</h2>
              <div className="space-y-2 text-sm">
                <p className="font-medium text-gray-900">{order.customerName}</p>
                <p className="text-gray-500">{order.email}</p>
                <p className="text-gray-500">{order.phone}</p>
              </div>
            </div>

            {/* Shipping address */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-4">Adresse de livraison</h2>
              <div className="text-sm text-gray-600 space-y-1">
                <p>{order.shippingAddress.street}</p>
                <p>{order.shippingAddress.zip} {order.shippingAddress.city}</p>
                <p>{order.shippingAddress.country}</p>
              </div>
            </div>

            {/* Delivery status */}
            <div className="bg-white rounded-2xl shadow-sm p-6">
              <h2 className="text-base font-semibold text-gray-900 mb-2">Suivi</h2>
              <p className="text-sm text-gray-600">{order.deliveryStatus}</p>
            </div>
          </div>
        </div>
      </div>
    </AdminLayout>
  )
}
