import { products, getProductBySlug, getProductsByCategory } from '@/lib/products'
import { notFound } from 'next/navigation'
import ProductDetail from './ProductDetail'
import type { Metadata } from 'next'

interface PageProps {
  params: { slug: string }
}

export async function generateStaticParams() {
  return products.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const product = getProductBySlug(params.slug)
  if (!product) return {}
  return {
    title: product.name,
    description: product.shortDescription,
    openGraph: {
      title: product.name,
      description: product.shortDescription,
      images: [{ url: product.imageUrl }],
    },
  }
}

export default function ProductPage({ params }: PageProps) {
  const product = getProductBySlug(params.slug)
  if (!product) notFound()

  const related = getProductsByCategory(product.category)
    .filter((p) => p.id !== product.id)
    .slice(0, 4)

  return <ProductDetail product={product} related={related} />
}
