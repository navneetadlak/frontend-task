import { Star, Search, Play } from "lucide-react"

export function HeroSection() {
  return (
    <section className="relative w-full overflow-hidden">
      <div className="absolute right-0 top-0 h-96 w-96 opacity-30">
        <div className="grid grid-cols-12 gap-2 p-8">
          {Array.from({ length: 144 }).map((_, i) => (
            <div
              key={i}
              className="h-1 w-1 rounded-full"
              style={{
                backgroundColor: i % 3 === 0 ? "#ff9a3c" : i % 3 === 1 ? "#4fd1c5" : "#a78bfa",
              }}
            />
          ))}
        </div>
      </div>

      <div className="container mx-auto px-4 py-12 lg:px-8 lg:py-20">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 items-center">
          {/* Left content */}
          <div className="space-y-8">
            {/* Trust indicator */}
            <div className="flex items-center gap-2">
              <div className="flex">
                {[1, 2, 3, 4].map((star) => (
                  <Star key={star} className="h-5 w-5 fill-[#1a1f4d] text-[#1a1f4d]" />
                ))}
                <Star className="h-5 w-5 text-[#1a1f4d]" />
              </div>
              <span className="text-sm text-[#1a1f4d]">Trusted by over 4,332 students</span>
            </div>

            {/* Main headline */}
            <div className="space-y-2">
              <h1 className="text-5xl font-bold leading-tight text-[#1a1f4d] lg:text-6xl xl:text-7xl">Learn Design</h1>
              <div className="relative inline-block">
                <h1 className="text-5xl font-bold leading-tight text-[#1a1f4d] lg:text-6xl xl:text-7xl">
                  with Nia Matos
                </h1>
                <div className="absolute -bottom-2 left-0 h-1.5 w-[85%] bg-[#ff9a3c] rounded-sm" />
              </div>
            </div>

            {/* Description */}
            <p className="max-w-lg text-base leading-relaxed text-[#1a1f4d]/70 lg:text-lg">
              Get your blood tests delivered at let home collect sample from the victory of the managments that supplies
              best design system guidelines ever.
            </p>

            <div className="relative max-w-md">
              <input
                type="text"
                placeholder="Search Course Name"
                className="h-14 w-full rounded-lg bg-white pl-5 pr-12 text-base shadow-sm border border-gray-200 focus:outline-none focus:ring-2 focus:ring-[#ff9a3c]/20 focus:border-[#ff9a3c]"
              />
              <button className="absolute right-2 top-1/2 -translate-y-1/2 p-2 hover:bg-gray-100 rounded-md transition-colors">
                <Search className="h-5 w-5 text-[#1a1f4d]" />
              </button>
            </div>

            {/* Sponsors */}
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <span className="text-sm text-[#1a1f4d]/50">Sponsored by:</span>
              <div className="flex flex-wrap items-center gap-6 opacity-40">
                <span className="text-sm font-semibold text-[#1a1f4d]">PayPal</span>
                <span className="text-sm font-semibold text-[#1a1f4d]">Google</span>
                <span className="text-sm font-semibold text-[#1a1f4d]">Dropbox</span>
              </div>
            </div>
          </div>

          {/* Right image */}
          <div className="relative">
            {/* Decorative frame */}
            <div className="absolute -right-4 -top-4 h-full w-full rounded-lg border-4 border-[#ff9a3c]/60 lg:-right-8 lg:-top-8" />

            {/* Main image container */}
            <div className="relative overflow-hidden rounded-lg bg-white shadow-2xl">
              <img
                src="/woman-sitting-on-bed-with-laptop-working-from-home.jpg"
                alt="Woman learning online"
                className="h-full w-full object-cover"
              />

              <button className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full bg-white shadow-xl transition-transform hover:scale-110">
                <Play className="h-8 w-8 fill-[#1a1f4d] text-[#1a1f4d] ml-1" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
