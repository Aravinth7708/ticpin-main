import { Filter } from 'lucide-react'

interface FilterPillProps {
  label: string
  icon?: boolean
  isActive?: boolean
}

export default function FilterPill({
  label,
  icon = false,
  isActive = false,
}: FilterPillProps) {
  return (
    <button
      className={`flex items-center gap-2 px-4 py-2 rounded-full border text-sm font-medium ${isActive
          ? 'bg-primary text-primary-foreground border-primary'
          : 'bg-card text-foreground border-border'
        }`}
    >
      {icon && <Filter size={16} />}
      {label}
    </button>
  )
}
