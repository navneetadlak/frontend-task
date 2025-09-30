import { Crown, ChevronDown } from "lucide-react"

export function Header() {
  return (
    <header className="w-full bg-transparent">
      <div className="container mx-auto flex h-16 items-center justify-between px-4 lg:px-8">
        <div className="flex items-center gap-2 cursor-pointer">
          <Crown className="h-6 w-6 fill-[#1a1f4d] text-[#1a1f4d]" />
          <span className="text-xl font-bold text-[#1a1f4d]">Landguru</span>
        </div>

        <nav className="hidden items-center gap-8 md:flex">
          <span className="text-sm font-medium text-[#1a1f4d] hover:text-[#ff9a3c] transition-colors cursor-pointer">
            Home
          </span>
          <button className="flex items-center gap-1 text-sm font-medium text-[#1a1f4d] hover:text-[#ff9a3c] transition-colors">
            Adversite
            <ChevronDown className="h-4 w-4" />
          </button>
          <button className="flex items-center gap-1 text-sm font-medium text-[#1a1f4d] hover:text-[#ff9a3c] transition-colors">
            Supports
            <ChevronDown className="h-4 w-4" />
          </button>
          <span className="text-sm font-medium text-[#1a1f4d] hover:text-[#ff9a3c] transition-colors cursor-pointer">
            Contact
          </span>
        </nav>

        <button className="text-sm font-medium text-[#ff9a3c] hover:text-[#ff7a1c] transition-colors">
          Try for Free
        </button>
      </div>
    </header>
  )
}
