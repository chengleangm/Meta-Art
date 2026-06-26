import { LucideIcon } from 'lucide-react'

interface FeatureCardProps {
  icon: LucideIcon
  title: string
  description: string
  className?: string
}

export default function FeatureCard({ icon: Icon, title, description, className = '' }: FeatureCardProps) {
  return (
    <div
      className={`group relative bg-white/80 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white hover:shadow-md hover:border-lime-200 transition-all duration-300 ${className}`}
    >
      <div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-lime-400/10 text-lime-600 mb-4 group-hover:bg-lime-400 group-hover:text-black transition-all duration-300">
        <Icon size={24} />
      </div>
      <h3 className="text-lg font-bold text-gray-900 mb-2">{title}</h3>
      <p className="text-sm text-gray-500 leading-relaxed">{description}</p>
    </div>
  )
}
