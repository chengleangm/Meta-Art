import Link from 'next/link'
import React from 'react'

interface SectionHeaderProps {
  label?: string
  title: React.ReactNode
  subtitle?: string
  ctaText?: string
  ctaHref?: string
  centered?: boolean
  className?: string
}

export default function SectionHeader({
  label,
  title,
  subtitle,
  ctaText,
  ctaHref,
  centered = false,
  className = '',
}: SectionHeaderProps) {
  return (
    <div
      className={`flex flex-col sm:flex-row sm:items-end sm:justify-between gap-4 mb-10 ${
        centered ? 'items-center text-center' : 'items-start'
      } ${className}`}
    >
      <div className={centered ? 'flex flex-col items-center' : ''}>
        {label && (
          <span className="inline-block bg-lime-400 text-black text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full mb-3">
            {label}
          </span>
        )}
        <h2 className="text-3xl md:text-4xl font-extrabold text-gray-900 leading-tight">
          {title}
        </h2>
        {subtitle && (
          <p className="mt-2 text-gray-500 text-base md:text-lg max-w-xl">
            {subtitle}
          </p>
        )}
      </div>
      {ctaText && ctaHref && (
        <Link
          href={ctaHref}
          className="shrink-0 text-sm font-semibold text-black border-b-2 border-lime-400 pb-0.5 hover:border-black transition-colors"
        >
          {ctaText} &rarr;
        </Link>
      )}
    </div>
  )
}
