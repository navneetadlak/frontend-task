export function Features() {
    return (
        <section className="py-20 px-6 bg-white">
            <div className="max-w-7xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Stat cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* 80K+ Card */}
                        <div className="bg-white rounded-lg p-16 shadow-sm">
                            <div className="text-5xl font-bold text-[#ff9a3c] mb-3">80K+</div>
                            <p className="text-gray-600 text-sm">We have more than students</p>
                        </div>

                        {/* 150+ Card */}
                        <div className="bg-white rounded-lg p-16 shadow-sm">
                            <div className="text-5xl font-bold text-[#ff9a3c] mb-3">150+</div>
                            <p className="text-gray-600 text-sm">Free online tutorials videos available</p>
                        </div>

                        {/* 90+ Card */}
                        <div className="bg-white rounded-lg p-16 shadow-sm">
                            <div className="text-5xl font-bold text-[#e94b8b] mb-3">90+</div>
                            <p className="text-gray-600 text-sm">Daily updated blog post maintain</p>
                        </div>

                        {/* 3M Card */}
                        <div className="bg-white rounded-lg p-16 shadow-sm">
                            <div className="text-5xl font-bold text-[#a855f7] mb-3">& 3M</div>
                            <p className="text-gray-600 text-sm">Job posted everydays with qualification</p>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <div className="text-[#ff9a3c] text-sm font-semibold tracking-wider mb-4">CORE FEATURES</div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#1a1f4d] mb-6 leading-tight">
                            Smart Jackpots that you may love this anytime & anywhere
                        </h2>
                        <p className="text-gray-600 text-lg leading-relaxed mb-6">
                            Get your tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever. Get your tests delivered at let home collect sample.
                        </p>
                        <a href="#" className="text-[#ff9a3c] font-semibold hover:underline inline-flex items-center">
                            Explore details
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
