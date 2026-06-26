import Link from 'next/link'
import React from 'react'

type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps {
  variant?: ButtonVariant
  size?: ButtonSize
  href?: string
  className?: string
  children: React.ReactNode
  onClick?: () => void
  disabled?: boolean
  type?: 'button' | 'submit' | 'reset'
}

const variantClasses: Record<ButtonVariant, string> = {
  primary:
    'bg-lime-400 text-black font-semibold hover:bg-lime-300 active:bg-lime-500 shadow-md shadow-lime-400/30',
  secondary:
    'bg-black text-white font-semibold hover:bg-gray-800 active:bg-gray-900',
  outline:
    'border-2 border-black text-black bg-transparent hover:bg-black hover:text-white',
  ghost:
    'bg-transparent text-black hover:bg-black/10',
}

const sizeClasses: Record<ButtonSize, string> = {
  sm: 'px-4 py-2 text-sm rounded-xl',
  md: 'px-6 py-3 text-base rounded-2xl',
  lg: 'px-8 py-4 text-lg rounded-2xl',
}

export default function Button({
  variant = 'primary',
  size = 'md',
  href,
  className = '',
  children,
  onClick,
  disabled,
  type = 'button',
}: ButtonProps) {
  const classes = `inline-flex items-center justify-center gap-2 transition-all duration-200 font-medium cursor-pointer select-none disabled:opacity-50 disabled:cursor-not-allowed ${variantClasses[variant]} ${sizeClasses[size]} ${className}`

  if (href) {
    return (
      <Link href={href} className={classes}>
        {children}
      </Link>
    )
  }

  return (
    <button type={type} onClick={onClick} disabled={disabled} className={classes}>
      {children}
    </button>
  )
}
