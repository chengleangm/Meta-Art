'use client'

import Link from 'next/link'
import Image from 'next/image'
import { Twitter, Instagram, Youtube, Linkedin, Mail, Phone, MapPin, ArrowRight } from 'lucide-react'
import { useLanguage } from '@/context/LanguageContext'

const socialLinks = [
  { href: 'https://twitter.com', icon: Twitter, label: 'Twitter' },
  { href: 'https://instagram.com', icon: Instagram, label: 'Instagram' },
  { href: 'https://youtube.com', icon: Youtube, label: 'YouTube' },
  { href: 'https://linkedin.com', icon: Linkedin, label: 'LinkedIn' },
]

export default function Footer() {
  const { t } = useLanguage()

  const quickLinks = [
    { href: '/shop', label: t.footer.links.shop },
    { href: '/about', label: t.footer.links.about },
    { href: '/contact', label: t.footer.links.contact },
    { href: '/faq', label: t.footer.links.faq },
    { href: '/blog', label: t.footer.links.blog },
  ]

  const categories = [
    { href: '/printers', label: t.footer.links.printers },
    { href: '/filament', label: t.footer.links.filament },
    { href: '/resin', label: t.footer.links.resin },
    { href: '/models', label: t.footer.links.models },
    { href: '/accessories', label: t.footer.links.accessories },
  ]

  const customerService = [
    { href: '/faq', label: t.footer.links.faqLong },
    { href: '/terms', label: t.footer.links.terms },
    { href: '/privacy', label: t.footer.links.privacy },
    { href: '/shipping', label: t.footer.links.shipping },
    { href: '/warranty', label: t.footer.links.warranty },
  ]

  return (
    <footer className="bg-[#111] text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 pt-16 pb-8">
        {/* Top grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand column */}
          <div className="lg:col-span-1">
            <Link href="/" className="inline-flex mb-4">
              <Image
                src="/images/logo/metaart.png"
                alt="Meta Art"
                width={120}
                height={40}
                className="h-10 w-auto object-contain brightness-0 invert"
              />
            </Link>
            <p className="text-sm leading-relaxed mb-5">{t.footer.description}</p>
            <div className="flex gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center hover:bg-lime-400 hover:text-black transition-all duration-200"
                >
                  <social.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.navTitle}
            </h3>
            <ul className="space-y-2.5">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-lime-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.categoriesTitle}
            </h3>
            <ul className="space-y-2.5">
              {categories.map((cat) => (
                <li key={cat.href}>
                  <Link
                    href={cat.href}
                    className="text-sm hover:text-lime-400 hover:translate-x-1 inline-flex items-center gap-1 transition-all duration-200"
                  >
                    {cat.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact + newsletter */}
          <div>
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-4">
              {t.footer.contactTitle}
            </h3>
            <ul className="space-y-3 mb-6">
              <li className="flex items-start gap-2.5 text-sm">
                <Mail size={15} className="text-lime-400 shrink-0 mt-0.5" />
                <a href="mailto:bonjour@meta-art.fr" className="hover:text-lime-400 transition-colors">
                  bonjour@meta-art.fr
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <Phone size={15} className="text-lime-400 shrink-0 mt-0.5" />
                <a href="tel:+33123456789" className="hover:text-lime-400 transition-colors">
                  +33 1 23 45 67 89
                </a>
              </li>
              <li className="flex items-start gap-2.5 text-sm">
                <MapPin size={15} className="text-lime-400 shrink-0 mt-0.5" />
                <span>
                  12 Rue de l&apos;Innovation
                  <br />
                  75011 Paris, France
                </span>
              </li>
            </ul>

            {/* Newsletter */}
            <h3 className="text-white font-bold text-sm uppercase tracking-wider mb-3">
              {t.footer.newsletterTitle}
            </h3>
            <div className="flex gap-2">
              <input
                type="email"
                placeholder={t.footer.newsletterPlaceholder}
                className="flex-1 bg-white/10 border border-white/10 rounded-xl px-3 py-2.5 text-sm text-white placeholder-gray-500 outline-none focus:border-lime-400 focus:ring-1 focus:ring-lime-400 transition-colors min-w-0"
              />
              <button className="w-10 h-10 rounded-xl bg-lime-400 text-black flex items-center justify-center hover:bg-lime-300 transition-colors shrink-0">
                <ArrowRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-white/10 pt-6 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            {t.footer.copyright} — {t.footer.siret}
          </p>
          <div className="flex flex-wrap gap-4">
            {customerService.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="text-xs text-gray-500 hover:text-lime-400 transition-colors"
              >
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  )
}
