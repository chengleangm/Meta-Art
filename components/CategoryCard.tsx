import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight } from 'lucide-react'
import { Category } from '@/lib/categories'

interface CategoryCardProps {
  category: Category
  className?: string
}

export default function CategoryCard({ category, className = '' }: CategoryCardProps) {
  return (
    <Link
      href={`/${category.slug}`}
      className={`group relative block aspect-square overflow-hidden rounded-2xl cursor-pointer ${className}`}
    >
      <Image
        src={category.imageUrl}
        alt={category.name}
        fill
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
        className="object-cover transition-transform duration-500 group-hover:scale-110"
      />
      {/* Dark gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-t ${category.color} opacity-60 group-hover:opacity-75 transition-opacity duration-300`} />
      {/* Content */}
      <div className="absolute inset-0 flex flex-col justify-end p-5">
        <div className="flex items-end justify-between">
          <div>
            <p className="text-white/70 text-xs font-medium uppercase tracking-wider mb-1">
              {category.productCount}+ produits
            </p>
            <h3 className="text-white font-bold text-lg leading-tight">{category.name}</h3>
          </div>
          <div className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center text-white group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
            <ArrowRight size={16} />
          </div>
        </div>
      </div>
    </Link>
  )
}
