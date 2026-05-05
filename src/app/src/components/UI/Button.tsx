import React from ‘react’
interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
variant?: ‘primary’ | ‘secondary’ | ‘outline’
size?: ‘sm’ | ‘md’ | ‘lg’
loading?: boolean
children: React.ReactNode
}
export const Button: React.FC<ButtonProps> = ({
variant = ‘primary’,
size = ‘md’,
loading = false,
children,
disabled,
className,
…props
}) => {
const baseStyles = ‘font-bold rounded-lg transition-all duration-300’
const sizeStyles = {
sm: ‘px-4 py-2 text-sm’,
md: ‘px-6 py-3 text-base’,
lg: ‘px-8 py-4 text-lg’,
}
const variantStyles = {
primary: ‘bg-[#d4af37] text-[#0f0f1e] hover:opacity-80 disabled:opacity-50’,
secondary: ‘bg-transparent border-2 border-[#d4af37] text-[#d4af37] hover:bg-[#d4af37] hover:text-[#0f0f1e] disabled:opacity-50’,
outline: ‘border-2 border-[#5a2e9f] text-white hover:bg-[#5a2e9f] disabled:opacity-50’,
}
const combinedClassName = ${baseStyles} ${sizeStyles[size]} ${variantStyles[variant]} ${disabled || loading ? 'cursor-not-allowed' : 'cursor-pointer'} ${className || ''}.trim()
return (
<button
disabled={disabled || loading}
className={combinedClassName}
{…props}
>
{loading ? ‘Загрузка…’ : children}
</button>
)
}
