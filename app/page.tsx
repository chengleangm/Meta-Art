'use client'

import HeroDashboard from '@/components/HeroDashboard'
import SectionHeader from '@/components/SectionHeader'
import CategoryCard from '@/components/CategoryCard'
import ProductGrid from '@/components/ProductGrid'
import ProductCard from '@/components/ProductCard'
import FeatureCard from '@/components/FeatureCard'
import { getFeaturedCategories } from '@/lib/categories'
import { getFeaturedProducts, getBestSellers, products } from '@/lib/products'
import { filaments } from '@/lib/filaments'
import { models } from '@/lib/models'
import { useLanguage } from '@/context/LanguageContext'
import Image from 'next/image'
import Link from 'next/link'
import {
  Truck,
  ShieldCheck,
  HeadphonesIcon,
  RefreshCw,
  Award,
  Zap,
  ArrowRight,
  Download,
} from 'lucide-react'

const featureIcons = [Truck, ShieldCheck, HeadphonesIcon, RefreshCw, Award, Zap]

const materialColors: Record<string, string> = {
  PLA: 'bg-blue-100 text-blue-800',
  PETG: 'bg-purple-100 text-purple-800',
  ABS: 'bg-orange-100 text-orange-800',
  TPU: 'bg-rose-100 text-rose-800',
  'Carbon Fiber': 'bg-gray-100 text-gray-800',
  'Silk PLA': 'bg-pink-100 text-pink-800',
}

const uniqueMaterials = Array.from(new Set(filaments.map((f) => f.material)))
const featuredCategories = getFeaturedCategories()
const featuredProducts = getFeaturedProducts()
const bestSellers = getBestSellers()
const featuredModels = models.slice(0, 4)
const latestProducts = products.slice(0, 4)

export default function HomePage() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen">
      {/* 1. Hero */}
      <HeroDashboard />

      {/* 2. Featured Categories */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeader
          label={t.sections.categories.label}
          title={t.sections.categories.title}
          subtitle={t.sections.categories.subtitle}
          ctaText={t.sections.categories.cta}
          ctaHref="/categories"
        />
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
          {featuredCategories.slice(0, 5).map((cat) => (
            <CategoryCard key={cat.id} category={cat} />
          ))}
        </div>
      </section>

      {/* 3. Featured Products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-12">
        <SectionHeader
          label={t.sections.featured.label}
          title={t.sections.featured.title}
          subtitle={t.sections.featured.subtitle}
          ctaText={t.sections.featured.cta}
          ctaHref="/shop"
        />
        <ProductGrid products={featuredProducts} />
      </section>

      {/* 4. Best Sellers horizontal scroll */}
      <section className="bg-white/60 backdrop-blur-sm py-12 border-y border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t.sections.bestSellers.label}
            title={t.sections.bestSellers.title}
            ctaText={t.sections.bestSellers.cta}
            ctaHref="/shop"
          />
          <div className="flex gap-4 overflow-x-auto pb-4 snap-x snap-mandatory">
            {bestSellers.map((product) => (
              <div key={product.id} className="snap-start shrink-0 w-56 sm:w-64">
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Filament Materials */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <SectionHeader
          label={t.sections.filaments.label}
          title={t.sections.filaments.title}
          subtitle={t.sections.filaments.subtitle}
          ctaText={t.sections.filaments.cta}
          ctaHref="/filament"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {uniqueMaterials.map((material) => {
            const sample = filaments.find((f) => f.material === material)!
            const matFilaments = filaments.filter((f) => f.material === material)
            return (
              <Link
                key={material}
                href="/filament"
                className="group bg-white rounded-2xl p-5 border border-gray-100 shadow-sm hover:shadow-md hover:border-lime-200 transition-all duration-300"
              >
                <div className="flex items-start gap-4">
                  <div className="relative w-16 h-16 rounded-xl overflow-hidden bg-gray-50 shrink-0">
                    <Image
                      src={sample.imageUrl}
                      alt={material}
                      fill
                      sizes="64px"
                      className="object-cover"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center gap-2 mb-1">
                      <span
                        className={`text-xs font-bold px-2 py-0.5 rounded-full ${
                          materialColors[material] ?? 'bg-gray-100 text-gray-700'
                        }`}
                      >
                        {material}
                      </span>
                    </div>
                    <p className="text-sm font-semibold text-gray-900">
                      {matFilaments.length} {t.sections.filaments.coloris}
                    </p>
                    <p className="text-xs text-gray-400 mt-1">
                      {t.sections.filaments.from} {Math.min(...matFilaments.map((f) => f.price)).toFixed(2)} €
                    </p>
                  </div>
                  <ArrowRight
                    size={18}
                    className="text-gray-300 group-hover:text-lime-500 group-hover:translate-x-1 transition-all shrink-0"
                  />
                </div>
                <div className="mt-3 flex gap-1.5">
                  {matFilaments.slice(0, 6).map((f) => (
                    <div
                      key={f.id}
                      title={f.color}
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm"
                      style={{ backgroundColor: f.colorHex }}
                    />
                  ))}
                  {matFilaments.length > 6 && (
                    <div className="w-5 h-5 rounded-full bg-gray-100 border-2 border-white shadow-sm flex items-center justify-center text-[9px] font-bold text-gray-500">
                      +{matFilaments.length - 6}
                    </div>
                  )}
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* 6. 3D Models showcase */}
      <section className="bg-gray-900 py-14">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <SectionHeader
            label={t.sections.models.label}
            title={<span className="text-white">{t.sections.models.title}</span>}
            subtitle={t.sections.models.subtitle}
            ctaText={t.sections.models.cta}
            ctaHref="/models"
          />
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featuredModels.map((model) => (
              <Link
                key={model.id}
                href="/models"
                className="group bg-white/5 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/10 hover:border-lime-400/30 hover:bg-white/10 transition-all duration-300"
              >
                <div className="relative aspect-square overflow-hidden">
                  <Image
                    src={model.imageUrl}
                    alt={model.name}
                    fill
                    sizes="(max-width: 640px) 100vw, 25vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                  <div className="absolute top-3 left-3 flex gap-1.5">
                    {model.fileFormat.map((fmt) => (
                      <span
                        key={fmt}
                        className="bg-black/70 text-lime-400 text-[10px] font-bold px-1.5 py-0.5 rounded-md backdrop-blur-sm"
                      >
                        {fmt}
                      </span>
                    ))}
                  </div>
                  {model.downloadType === 'free' && (
                    <span className="absolute top-3 right-3 bg-lime-400 text-black text-[10px] font-black px-2 py-0.5 rounded-lg">
                      {t.sections.models.free}
                    </span>
                  )}
                </div>
                <div className="p-4">
                  <p className="text-white font-semibold text-sm line-clamp-2 mb-2">{model.name}</p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center gap-1 text-amber-400">
                      {'★'.repeat(Math.round(model.rating))}
                      <span className="text-gray-400 text-xs ml-1">({model.reviewCount})</span>
                    </div>
                    <div className="flex items-center gap-1 text-lime-400 font-bold text-sm">
                      {model.downloadType === 'free' ? (
                        <span className="flex items-center gap-1">
                          <Download size={14} /> {t.sections.models.freeLabel}
                        </span>
                      ) : (
                        `${model.price.toFixed(2)} €`
                      )}
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Why Choose Meta Art */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <SectionHeader
          label={t.sections.why.label}
          title={t.sections.why.title}
          subtitle={t.sections.why.subtitle}
          centered
          className="mx-auto text-center"
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 mt-10">
          {t.features.map((feat, i) => {
            const Icon = featureIcons[i]
            return (
              <FeatureCard
                key={feat.title}
                icon={Icon}
                title={feat.title}
                description={feat.description}
              />
            )
          })}
        </div>
      </section>

      {/* 8. Newsletter */}
      <section className="bg-lime-400 py-14">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 text-center">
          <span className="inline-block bg-black/10 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-4">
            {t.sections.newsletter.label}
          </span>
          <h2 className="text-3xl md:text-4xl font-extrabold text-black mb-3">
            {t.sections.newsletter.title}
          </h2>
          <p className="text-black/70 mb-8 text-base">{t.sections.newsletter.subtitle}</p>
          <div className="flex gap-3 max-w-md mx-auto">
            <input
              type="email"
              placeholder={t.sections.newsletter.placeholder}
              className="flex-1 px-4 py-3.5 rounded-2xl bg-black/10 border border-black/20 text-black placeholder-black/50 outline-none focus:bg-black/20 transition-colors text-sm font-medium min-w-0"
            />
            <button className="px-6 py-3.5 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-colors shrink-0 text-sm">
              {t.sections.newsletter.button}
            </button>
          </div>
          <p className="text-xs text-black/50 mt-3">{t.sections.newsletter.disclaimer}</p>
        </div>
      </section>

      {/* 9. Latest products */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 py-14">
        <SectionHeader
          label={t.sections.latest.label}
          title={t.sections.latest.title}
          ctaText={t.sections.latest.cta}
          ctaHref="/shop"
        />
        <ProductGrid products={latestProducts} />
      </section>
    </div>
  )
}
