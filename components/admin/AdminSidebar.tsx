'use client'

import type { ComponentType } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { usePathname, useRouter } from 'next/navigation'
import {
  LayoutDashboard,
  Package,
  FolderOpen,
  ShoppingBag,
  Users,
  Boxes,
  Layers,
  BarChart3,
  Upload,
  Settings,
  LogOut,
  X,
} from 'lucide-react'

interface NavItem {
  label: string
  href: string
  icon: ComponentType<{ className?: string }>
}

const navItems: NavItem[] = [
  { label: 'Dashboard', href: '/admin/dashboard', icon: LayoutDashboard },
  { label: 'Produits', href: '/admin/products', icon: Package },
  { label: 'Catégories', href: '/admin/categories', icon: FolderOpen },
  { label: 'Commandes', href: '/admin/orders', icon: ShoppingBag },
  { label: 'Clients', href: '/admin/customers', icon: Users },
  { label: 'Modèles 3D', href: '/admin/models', icon: Boxes },
  { label: 'Filaments', href: '/admin/filaments', icon: Layers },
  { label: 'Inventaire', href: '/admin/inventory', icon: BarChart3 },
  { label: 'Fichiers', href: '/admin/uploads', icon: Upload },
  { label: 'Paramètres', href: '/admin/settings', icon: Settings },
]

interface AdminSidebarProps {
  isOpen: boolean
  onClose: () => void
}

export default function AdminSidebar({ isOpen, onClose }: AdminSidebarProps) {
  const pathname = usePathname()
  const router = useRouter()

  const handleLogout = () => {
    document.cookie = 'admin-session=; path=/; expires=Thu, 01 Jan 1970 00:00:00 GMT'
    router.push('/admin/login')
  }

  const sidebarContent = (
    <div className="flex flex-col h-full bg-[#0f172a] w-64">
      {/* Logo */}
      <div className="relative px-5 pt-6 pb-5 border-b border-white/10 flex flex-col items-center">
        <button
          onClick={onClose}
          className="lg:hidden absolute right-3 top-3 w-8 h-8 flex items-center justify-center rounded-lg text-gray-400 hover:text-white hover:bg-white/10 transition-colors"
        >
          <X className="w-4 h-4" />
        </button>
        <Link href="/admin/dashboard" className="flex justify-center mb-3">
          <Image
            src="/images/logo/metaart.png"
            alt="Meta Art"
            width={220}
            height={80}
            className="object-contain"
            style={{ width: 'auto', height: '80px' }}
          />
        </Link>
        <div className="flex items-center gap-2">
          <span className="px-2 py-0.5 bg-lime-400/20 text-lime-400 text-[10px] font-bold rounded uppercase tracking-widest">
            Admin
          </span>
          <span className="text-gray-500 text-xs">Panneau de contrôle</span>
        </div>
      </div>

      {/* Nav */}
      <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
        {navItems.map((item) => {
          const isActive =
            pathname === item.href ||
            (item.href !== '/admin/dashboard' && pathname.startsWith(item.href))
          const Icon = item.icon
          return (
            <Link
              key={item.href}
              href={item.href}
              onClick={onClose}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium transition-all ${
                isActive
                  ? 'bg-lime-400/20 text-lime-400 border-r-2 border-lime-400'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              }`}
            >
              <Icon className="w-5 h-5 flex-shrink-0" />
              {item.label}
            </Link>
          )
        })}
      </nav>

      {/* Logout */}
      <div className="px-3 py-4 border-t border-white/10">
        <button
          onClick={handleLogout}
          className="flex items-center gap-3 px-3 py-2.5 rounded-xl text-sm font-medium text-gray-400 hover:text-white hover:bg-white/5 transition-all w-full"
        >
          <LogOut className="w-5 h-5 flex-shrink-0" />
          Déconnexion
        </button>
      </div>
    </div>
  )

  return (
    <>
      {/* Desktop sidebar */}
      <div className="hidden lg:flex flex-col h-screen sticky top-0 flex-shrink-0">
        {sidebarContent}
      </div>

      {/* Mobile overlay */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 z-50 flex">
          <div
            className="absolute inset-0 bg-black/50"
            onClick={onClose}
          />
          <div className="relative z-10 flex flex-col h-full">
            {sidebarContent}
          </div>
        </div>
      )}
    </>
  )
}
