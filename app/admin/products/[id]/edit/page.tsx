'use client'

import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { ChevronRight, ArrowLeft } from 'lucide-react'
import AdminLayout from '@/components/admin/AdminLayout'
import ProductForm from '@/components/admin/ProductForm'
import { adminProducts } from '@/lib/admin/products'

interface PageProps {
  params: { id: string }
}

export default function EditProductPage({ params }: PageProps) {
  const router = useRouter()
  const product = adminProducts.find((p) => p.id === params.id)

  if (!product) {
    return (
      <AdminLayout>
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <p className="text-xl font-semibold text-gray-900 mb-2">Produit introuvable</p>
          <p className="text-gray-400 mb-6">Aucun produit avec l&apos;ID &ldquo;{params.id}&rdquo;</p>
          <button
            onClick={() => router.push('/admin/products')}
            className="flex items-center gap-2 px-4 py-2.5 border border-gray-200 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50 transition-colors"
          >
            <ArrowLeft className="w-4 h-4" />
            Retour aux produits
          </button>
        </div>
      </AdminLayout>
    )
  }

  const handleSubmit = (data: unknown) => {
    console.log('Updated product data:', data)
    // TODO: Update in Supabase
    // const { error } = await supabase.from('products').update(data).eq('id', params.id)
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
          <span className="text-gray-900 font-medium">Modifier</span>
        </nav>

        <h1 className="text-2xl font-bold text-gray-900">Modifier : {product.name}</h1>

        <ProductForm
          initialData={product}
          onSubmit={handleSubmit}
          onCancel={() => router.push('/admin/products')}
        />
      </div>
    </AdminLayout>
  )
}
