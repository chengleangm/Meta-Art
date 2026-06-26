'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { usePathname } from 'next/navigation'
import { ShoppingCart, Heart, User, Search, Menu, X } from 'lucide-react'
import { useCart } from '@/context/CartContext'
import { useLanguage } from '@/context/LanguageContext'
import SearchBar from './SearchBar'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const [searchOpen, setSearchOpen] = useState(false)
  const { itemCount } = useCart()
  const { language, setLanguage, t } = useLanguage()
  const pathname = usePathname()

  const navLinks = [
    { href: '/shop', label: t.nav.shop },
    { href: '/printers', label: t.nav.printers },
    { href: '/filament', label: t.nav.filament },
    { href: '/models', label: t.nav.models },
    { href: '/accessories', label: t.nav.accessories },
  ]

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    setMenuOpen(false)
    setSearchOpen(false)
  }, [pathname])

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? 'bg-white/90 backdrop-blur-xl shadow-sm border-b border-gray-100'
            : 'bg-white/70 backdrop-blur-md'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 h-16 flex items-center gap-3">

          {/* Logo */}
          <Link href="/" className="flex items-center shrink-0">
            <Image
              src="/images/logo/metaart.png"
              alt="Meta Art"
              width={160}
              height={52}
              className="w-auto object-contain"
              style={{ width: 'auto', height: '52px' }}
              priority
            />
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1 flex-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-3 py-2 rounded-xl text-sm font-medium transition-all duration-200 ${
                  pathname === link.href || pathname.startsWith(link.href + '/')
                    ? 'bg-lime-400/20 text-black font-semibold'
                    : 'text-gray-600 hover:text-gray-900 hover:bg-gray-100'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Right icons */}
          <div className="flex items-center gap-1 ml-auto">

            {/* Language Toggle — right side */}
            <div className="flex items-center gap-0.5 bg-gray-100 rounded-xl p-0.5 shrink-0 mr-1">
              <button
                onClick={() => setLanguage('fr')}
                className={`px-2.5 py-1.5 rounded-[10px] text-xs font-bold transition-all duration-200 ${
                  language === 'fr'
                    ? 'bg-lime-400 text-black shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                aria-label="Français"
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-2.5 py-1.5 rounded-[10px] text-xs font-bold transition-all duration-200 ${
                  language === 'en'
                    ? 'bg-lime-400 text-black shadow-sm'
                    : 'text-gray-500 hover:text-gray-800'
                }`}
                aria-label="English"
              >
                EN
              </button>
            </div>

            <button
              onClick={() => setSearchOpen((v) => !v)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label={t.nav.search}
            >
              <Search size={18} />
            </button>
            <Link
              href="/wishlist"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors hidden sm:flex"
              aria-label={t.nav.wishlist}
            >
              <Heart size={18} />
            </Link>
            <Link
              href="/account"
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors hidden sm:flex"
              aria-label={t.nav.account}
            >
              <User size={18} />
            </Link>
            <Link
              href="/cart"
              className="relative w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 hover:text-gray-900 transition-colors"
              aria-label={t.nav.cart}
            >
              <ShoppingCart size={18} />
              {itemCount > 0 && (
                <span className="absolute -top-0.5 -right-0.5 w-4 h-4 bg-lime-400 text-black text-[10px] font-bold rounded-full flex items-center justify-center">
                  {itemCount > 9 ? '9+' : itemCount}
                </span>
              )}
            </Link>

            {/* Mobile hamburger */}
            <button
              onClick={() => setMenuOpen((v) => !v)}
              className="w-9 h-9 rounded-xl flex items-center justify-center text-gray-600 hover:bg-gray-100 transition-colors md:hidden ml-1"
              aria-label="Menu"
            >
              {menuOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>

        {/* Search overlay */}
        {searchOpen && (
          <div className="border-t border-gray-100 px-4 py-3 bg-white/95 backdrop-blur-xl">
            <div className="max-w-2xl mx-auto">
              <SearchBar onClose={() => setSearchOpen(false)} />
            </div>
          </div>
        )}

        {/* Mobile menu */}
        {menuOpen && (
          <div className="md:hidden border-t border-gray-100 bg-white/95 backdrop-blur-xl px-4 py-4">
            {/* Mobile language toggle */}
            <div className="flex items-center gap-1 mb-3 pb-3 border-b border-gray-100">
              <span className="text-xs text-gray-400 mr-1">Langue / Language:</span>
              <button
                onClick={() => setLanguage('fr')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  language === 'fr' ? 'bg-lime-400 text-black' : 'bg-gray-100 text-gray-500'
                }`}
              >
                FR
              </button>
              <button
                onClick={() => setLanguage('en')}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold transition-all ${
                  language === 'en' ? 'bg-lime-400 text-black' : 'bg-gray-100 text-gray-500'
                }`}
              >
                EN
              </button>
            </div>
            <nav className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-4 py-3 rounded-xl text-sm font-medium transition-all ${
                    pathname === link.href
                      ? 'bg-lime-400/20 text-black font-semibold'
                      : 'text-gray-700 hover:bg-gray-50'
                  }`}
                >
                  {link.label}
                </Link>
              ))}
              <div className="border-t border-gray-100 mt-2 pt-2 flex gap-2">
                <Link
                  href="/cart"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <ShoppingCart size={16} />
                  {t.nav.mobileMenu.cartLabel}
                  {itemCount > 0 && ` (${itemCount})`}
                </Link>
                <Link
                  href="/wishlist"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <Heart size={16} />
                  {t.nav.wishlist}
                </Link>
                <Link
                  href="/account"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  <User size={16} />
                  {t.nav.account}
                </Link>
                <Link
                  href="/about"
                  className="flex items-center gap-2 px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-50"
                >
                  {t.nav.mobileMenu.aboutLabel}
                </Link>
              </div>
            </nav>
          </div>
        )}
      </header>
      {/* Spacer */}
      <div className="h-16" />
    </>
  )
}
