'use client'

import { Menu, Search, Bell } from 'lucide-react'

interface AdminTopbarProps {
  onMenuToggle: () => void
}

export default function AdminTopbar({ onMenuToggle }: AdminTopbarProps) {
  return (
    <header className="bg-white border-b border-gray-100 h-16 flex items-center px-4 gap-4 sticky top-0 z-10">
      {/* Hamburger — mobile only */}
      <button
        onClick={onMenuToggle}
        className="lg:hidden p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors"
      >
        <Menu className="w-5 h-5" />
      </button>

      {/* Search */}
      <div className="flex-1 max-w-md relative">
        <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
        <input
          type="text"
          placeholder="Rechercher…"
          className="w-full pl-10 pr-4 py-2 text-sm bg-gray-50 border border-gray-100 rounded-xl focus:outline-none focus:ring-2 focus:ring-lime-400 focus:border-transparent"
        />
      </div>

      {/* Right actions */}
      <div className="flex items-center gap-3 ml-auto">
        {/* Notification bell */}
        <button className="relative p-2 rounded-xl text-gray-500 hover:bg-gray-100 transition-colors">
          <Bell className="w-5 h-5" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 bg-red-500 rounded-full" />
        </button>

        {/* Avatar */}
        <button className="flex items-center gap-2 px-3 py-1.5 rounded-xl hover:bg-gray-100 transition-colors">
          <div className="w-8 h-8 rounded-full bg-[#0f172a] flex items-center justify-center text-white text-xs font-semibold">
            AD
          </div>
          <span className="text-sm font-medium text-gray-700 hidden sm:block">Admin</span>
        </button>
      </div>
    </header>
  )
}
