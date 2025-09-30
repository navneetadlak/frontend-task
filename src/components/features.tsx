export function Features() {
    return (
        <section className="py-16 px-6 bg-white">
            <div className="max-w-6xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Stat cards */}
                    <div className="grid grid-cols-2 gap-6">
                        {/* 80K+ Card */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <div className="text-7xl font-bold text-[#EF9E48] mb-3">80K+</div>
                            <p className="text-[#0F2137] font-normal text-lg leading-6 space-x-0.5">We have more than students</p>
                        </div>

                        {/* 150+ Card */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <div className="text-7xl font-bold text-[#FF753A] mb-3">150+</div>
                            <p className="text-[#0F2137] font-normal text-lg leading-6 space-x-0.5">Free online tutorials videos available</p>
                        </div>

                        {/* 90+ Card */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <div className="text-7xl font-bold text-[#FA578E] mb-3">90+</div>
                            <p className="text-[#0F2137] font-normal text-lg leading-6 space-x-0.5">Daily updated blog post maintain</p>
                        </div>

                        {/* 3M Card */}
                        <div className="bg-white rounded-lg p-8 shadow-sm">
                            <div className="text-7xl font-bold text-[#E682FF] mb-3">& 3M</div>
                            <p className="text-[#0F2137] font-normal text-lg leading-6 space-x-0.5">Job posted everydays with qualification</p>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <div className="text-[#EF9E48] text-sm font-semibold tracking-wider mb-4">CORE FEATURES</div>
                        <h2 className="text-4xl lg:text-5xl font-bold text-[#0F2137] mb-6 leading-tight">
                            Smart Jackpots that you may love this anytime & anywhere
                        </h2>
                        <p className="text-gray-600 text-lg font-normal leading-10 mb-6">
                            Get your tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever. Get your tests delivered at let home collect sample.
                        </p>
                        <a href="#" className="text-[#EF9E48] font-semibold hover:underline inline-flex items-center">
                            Explore details
                        </a>
                    </div>
                </div>
            </div>
        </section>
    )
}
