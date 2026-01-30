interface FilterButtonProps {
  label: string;
  active?: boolean;
  onClick?: () => void;
}

export default function FilterButton({ label, active = false, onClick }: FilterButtonProps) {
  return (
    <button
      onClick={onClick}
      className={`px-4 py-2 text-sm font-bold transition-all duration-300 whitespace-nowrap flex items-center gap-2 ${active
        ? 'bg-[#a4a4a4] text-black shadow-inner'
        : 'bg-white text-gray-600 hover:bg-gray-50'
        }`}
      style={{
        border: '1px solid #a4a4a4',
        borderRadius: '15px'
      }}
    >
      {label === 'Filters' && (
        <span className="text-xs">⚙️</span>
      )}
      {label}
      {label === 'Filters' && (
        <span className="text-xs ml-1">▼</span>
      )}
    </button>
  );
}
