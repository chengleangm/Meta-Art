'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'

export default function NewProductPage() {
  const router = useRouter()

  const handleSubmit = (data: unknown) => {
    console.log('New product data:', data)
    // TODO: Insert into Supabase
    // const { error } = await supabase.from('products').insert(data)
    router.push('/admin/products')
  }

  return (
    <AdminLayout>
      <div className="max-w-3xl mx-auto space-y-5">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-400">
          <Link href="/admin/dashboard" className="hover:text-gray-600 transition-colors">
            Dashboard
          </Link>
          <ChevronRight className="w-4 h-4" />
          <Link href="/admin/products" className="hover:text-gray-600 transition-colors">
            Produits
          </Link>
          <ChevronRight className="w-4 h-4" />
          <span className="text-gray-900 font-medium">Nouveau produit</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900">Nouveau produit</h1>

        <ProductForm
          onSubmit={handleSubmit}
          onCancel={() => router.push('/admin/products')}
        />
      </div>
    </AdminLayout>
  )
}
