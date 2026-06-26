'use client'

import type { OrderStatus, PaymentStatus } from '@/lib/admin/orders'

const orderStatusConfig: Record<OrderStatus, { label: string; className: string }> = {
  pending: { label: 'En attente', className: 'bg-yellow-100 text-yellow-700' },
  confirmed: { label: 'Confirmée', className: 'bg-blue-100 text-blue-700' },
  processing: { label: 'Traitement', className: 'bg-purple-100 text-purple-700' },
  packed: { label: 'Emballée', className: 'bg-indigo-100 text-indigo-700' },
  shipped: { label: 'Expédiée', className: 'bg-cyan-100 text-cyan-700' },
  delivered: { label: 'Livrée', className: 'bg-green-100 text-green-700' },
  cancelled: { label: 'Annulée', className: 'bg-red-100 text-red-700' },
}

const paymentStatusConfig: Record<PaymentStatus, { label: string; className: string }> = {
  paid: { label: 'Payé', className: 'bg-green-100 text-green-700' },
  unpaid: { label: 'Non payé', className: 'bg-gray-100 text-gray-600' },
  pending: { label: 'En attente', className: 'bg-yellow-100 text-yellow-700' },
  failed: { label: 'Échoué', className: 'bg-red-100 text-red-700' },
  refunded: { label: 'Remboursé', className: 'bg-orange-100 text-orange-700' },
}

interface OrderStatusBadgeProps {
  status: OrderStatus | PaymentStatus
  type?: 'order' | 'payment'
}

export default function OrderStatusBadge({ status, type = 'order' }: OrderStatusBadgeProps) {
  const config =
    type === 'payment'
      ? paymentStatusConfig[status as PaymentStatus]
      : orderStatusConfig[status as OrderStatus]

  if (!config) return null

  return (
    <span
      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.className}`}
    >
      {config.label}
    </span>
  )
}
