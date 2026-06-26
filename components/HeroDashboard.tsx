'use client'

import Image from 'next/image'
import Link from 'next/link'
import { ArrowRight, Star, Zap, Package, Download } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const colorSwatches = [
  { color: '#1a1a1a', label: 'Noir / Black' },
  { color: '#f5f5f5', label: 'Blanc / White' },
  { color: '#dc2626', label: 'Rouge / Red' },
  { color: '#2563eb', label: 'Bleu / Blue' },
  { color: '#a3e635', label: 'Lime' },
]

export default function HeroDashboard() {
  const { t } = useLanguage()

  const stats = [
    { icon: Package, label: t.stats.products, value: '460+' },
    { icon: Download, label: t.stats.downloads, value: '5M+' },
    { icon: Star, label: t.stats.rating, value: '4.8' },
    { icon: Zap, label: t.stats.newItems, value: t.stats.newValue },
  ]

  return (
    <section className="w-full px-4 sm:px-6 py-6 md:py-10">
      <div className="max-w-7xl mx-auto">
        <div className="relative bg-white/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-xl border border-white p-6 md:p-10 lg:p-14">
          {/* Background decorative blobs */}
          <div className="absolute -top-24 -right-24 w-96 h-96 bg-lime-400/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-96 h-96 bg-blue-400/5 rounded-full blur-3xl pointer-events-none" />

          <div className="relative grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
            {/* LEFT */}
            <div>
              {/* Badge */}
              <span className="inline-flex items-center gap-2 bg-lime-400/20 text-lime-700 text-xs font-bold uppercase tracking-widest px-3 py-1.5 rounded-full mb-6">
                <span className="w-1.5 h-1.5 bg-lime-500 rounded-full animate-pulse" />
                {t.hero.badge}
              </span>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-[1.1] mb-5">
                {t.hero.headline1}{' '}
                <span className="relative inline-block">
                  <span className="text-black">{t.hero.headline2}</span>
                  <span className="absolute -bottom-2 left-0 right-0 h-1 bg-lime-400 rounded-full" />
                </span>
                <br />
                {t.hero.headline3} <span className="text-lime-500">{t.hero.headline4}</span>
              </h1>

              <p className="text-gray-500 text-base md:text-lg leading-relaxed max-w-md mb-8">
                {t.hero.subtitle}
              </p>

              {/* CTAs */}
              <div className="flex flex-wrap items-center gap-3 mb-8">
                <Link
                  href="/shop"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-lime-400 text-black font-bold rounded-2xl hover:bg-lime-300 active:bg-lime-500 transition-all shadow-lg shadow-lime-400/30 text-base"
                >
                  {t.hero.cta1} <ArrowRight size={18} />
                </Link>
                <Link
                  href="/printers"
                  className="inline-flex items-center gap-2 px-7 py-3.5 bg-black text-white font-bold rounded-2xl hover:bg-gray-800 transition-all text-base"
                >
                  {t.hero.cta2}
                </Link>
              </div>

              {/* Social proof */}
              <div className="flex items-center gap-3">
                <div className="flex -space-x-2">
                  {['bg-pink-400', 'bg-blue-400', 'bg-amber-400', 'bg-green-400'].map((c, i) => (
                    <div
                      key={i}
                      className={`w-8 h-8 rounded-full border-2 border-white ${c} flex items-center justify-center text-white text-xs font-bold`}
                    >
                      {String.fromCharCode(65 + i)}
                    </div>
                  ))}
                </div>
                <div>
                  <p className="text-sm font-bold text-gray-900">{t.hero.socialProof}</p>
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((s) => (
                      <Star key={s} size={12} className="fill-amber-400 text-amber-400" />
                    ))}
                    <span className="text-xs text-gray-400 ml-1">{t.hero.trustpilot}</span>
                  </div>
                </div>
              </div>
            </div>

            {/* RIGHT — product image + floating cards */}
            <div className="relative flex items-center justify-center min-h-[320px] lg:min-h-[400px]">
              {/* Decorative floating circles */}
              <div className="absolute top-4 right-4 w-20 h-20 bg-lime-400/20 rounded-full blur-lg animate-pulse" />
              <div className="absolute bottom-8 left-8 w-16 h-16 bg-blue-400/10 rounded-full blur-xl" />
              <div className="absolute top-1/2 left-4 w-3 h-3 bg-lime-400 rounded-full opacity-60" />
              <div className="absolute bottom-1/4 right-8 w-4 h-4 bg-black rounded-full opacity-20" />

              {/* Main product image */}
              <div className="relative w-full max-w-sm h-72 lg:h-96">
                <div className="absolute inset-4 bg-gradient-to-br from-gray-100 to-gray-50 rounded-3xl" />
                <Image
                  src="https://picsum.photos/seed/ma-hero-printer/800/600"
                  alt="MetaPrint Pro 3D Printer"
                  fill
                  sizes="(max-width: 768px) 90vw, 420px"
                  className="object-contain drop-shadow-2xl"
                  priority
                />
              </div>

              {/* Floating card: Color swatches */}
              <div className="absolute top-0 left-0 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-3 min-w-[140px]">
                <p className="text-xs font-bold text-gray-700 mb-2">{t.hero.floatingColors}</p>
                <div className="flex gap-1.5">
                  {colorSwatches.map((sw) => (
                    <div
                      key={sw.color}
                      title={sw.label}
                      className="w-5 h-5 rounded-full border-2 border-white shadow-sm cursor-pointer hover:scale-110 transition-transform"
                      style={{ backgroundColor: sw.color }}
                    />
                  ))}
                </div>
              </div>

              {/* Floating card: Trending */}
              <div className="absolute bottom-6 right-0 bg-black text-white rounded-2xl shadow-xl p-3 min-w-[140px]">
                <div className="flex items-center gap-2 mb-1">
                  <Zap size={14} className="text-lime-400" />
                  <p className="text-xs font-bold text-lime-400">{t.hero.floatingTrend}</p>
                </div>
                <p className="text-sm font-bold">{t.hero.floatingTrendProduct}</p>
                <p className="text-xs text-gray-400">{t.hero.floatingTrendPrice}</p>
              </div>

              {/* Floating card: Shipping */}
              <div className="absolute bottom-6 left-0 bg-white/90 backdrop-blur-sm rounded-2xl shadow-lg border border-gray-100 p-3">
                <p className="text-xs font-bold text-gray-900">{t.hero.floatingShipping}</p>
                <p className="text-xs text-gray-400">{t.hero.floatingShippingDesc}</p>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div className="relative mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4">
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="flex flex-col items-center justify-center bg-gray-50 rounded-2xl py-4 px-3 border border-gray-100"
              >
                <stat.icon size={20} className="text-lime-500 mb-1.5" />
                <p className="text-2xl font-extrabold text-gray-900">{stat.value}</p>
                <p className="text-xs text-gray-400 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
