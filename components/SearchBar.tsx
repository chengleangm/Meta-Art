'use client'

import { useState, useRef, useEffect, useCallback } from 'react'
import { Search, X } from 'lucide-react'
import Link from 'next/link'
import Image from 'next/image'
import { searchProducts, Product } from '@/lib/products'

interface SearchBarProps {
  onClose?: () => void
  className?: string
}

export default function SearchBar({ onClose, className = '' }: SearchBarProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<Product[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [activeIndex, setActiveIndex] = useState(-1)
  const inputRef = useRef<HTMLInputElement>(null)
  const containerRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    inputRef.current?.focus()
  }, [])

  useEffect(() => {
    if (query.trim().length >= 2) {
      const found = searchProducts(query).slice(0, 6)
      setResults(found)
      setIsOpen(true)
      setActiveIndex(-1)
    } else {
      setResults([])
      setIsOpen(false)
    }
  }, [query])

  const handleClickOutside = useCallback((e: MouseEvent) => {
    if (containerRef.current && !containerRef.current.contains(e.target as Node)) {
      setIsOpen(false)
      onClose?.()
    }
  }, [onClose])

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside)
    return () => document.removeEventListener('mousedown', handleClickOutside)
  }, [handleClickOutside])

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (!isOpen) return
    if (e.key === 'ArrowDown') {
      e.preventDefault()
      setActiveIndex((i) => (i + 1) % results.length)
    } else if (e.key === 'ArrowUp') {
      e.preventDefault()
      setActiveIndex((i) => (i - 1 + results.length) % results.length)
    } else if (e.key === 'Escape') {
      setIsOpen(false)
      onClose?.()
    }
  }

  return (
    <div ref={containerRef} className={`relative ${className}`}>
      <div className="flex items-center gap-3 bg-white rounded-2xl px-4 py-3 shadow-lg border border-gray-200">
        <Search size={18} className="text-gray-400 shrink-0" />
        <input
          ref={inputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Rechercher imprimantes, filaments, modèles..."
          className="flex-1 text-sm text-gray-900 placeholder-gray-400 outline-none bg-transparent min-w-0"
        />
        {query && (
          <button onClick={() => { setQuery(''); setResults([]); setIsOpen(false) }} className="text-gray-400 hover:text-gray-600">
            <X size={16} />
          </button>
        )}
      </div>

      {/* Dropdown */}
      {isOpen && results.length > 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden z-50">
          {results.map((product, idx) => (
            <Link
              key={product.id}
              href={`/shop/${product.slug}`}
              onClick={() => { setIsOpen(false); onClose?.() }}
              className={`flex items-center gap-3 px-4 py-3 hover:bg-gray-50 transition-colors ${
                activeIndex === idx ? 'bg-gray-50' : ''
              }`}
            >
              <div className="relative w-10 h-10 rounded-lg overflow-hidden bg-gray-100 shrink-0">
                <Image
                  src={product.imageUrl}
                  alt={product.name}
                  fill
                  sizes="40px"
                  className="object-cover"
                />
              </div>
              <div className="min-w-0">
                <p className="text-sm font-semibold text-gray-900 truncate">{product.name}</p>
                <p className="text-xs text-gray-400">{product.price.toFixed(2)} €</p>
              </div>
            </Link>
          ))}
          <Link
            href={`/shop?q=${encodeURIComponent(query)}`}
            onClick={() => { setIsOpen(false); onClose?.() }}
            className="flex items-center justify-center gap-2 px-4 py-3 bg-gray-50 text-sm font-semibold text-gray-600 hover:bg-gray-100 transition-colors border-t border-gray-100"
          >
            <Search size={14} />
            Voir tous les résultats pour &quot;{query}&quot;
          </Link>
        </div>
      )}

      {isOpen && query.trim().length >= 2 && results.length === 0 && (
        <div className="absolute top-full mt-2 left-0 right-0 bg-white rounded-2xl shadow-xl border border-gray-100 px-4 py-6 text-center z-50">
          <p className="text-sm text-gray-400">Aucun résultat pour &quot;{query}&quot;</p>
        </div>
      )}
    </div>
  )
}
