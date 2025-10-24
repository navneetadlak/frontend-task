import { Star, Eye, Check } from "lucide-react"

export function FreeCourse() {
    return (
        <section className="py-10 px-4 bg-white">
            <div className="max-w-4xl mx-auto">
                <div className="grid lg:grid-cols-2 gap-12 items-center">
                    {/* Left side - Image with course card */}
                    <div className="relative">
                        {/* Decorative dots */}
                        <div className="absolute -top-8 -left-8 w-32 h-32 opacity-30">
                            <div className="grid grid-cols-8 gap-2">
                                {Array.from({ length: 64 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
                                ))}
                            </div>
                        </div>
                        <div className="absolute -bottom-8 -right-8 w-32 h-32 opacity-30">
                            <div className="grid grid-cols-8 gap-2">
                                {Array.from({ length: 64 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
                                ))}
                            </div>
                        </div>
                        <div className="absolute top-1/2 right-0 w-24 h-24 opacity-30">
                            <div className="grid grid-cols-6 gap-2">
                                {Array.from({ length: 36 }).map((_, i) => (
                                    <div key={i} className="w-1 h-1 bg-gray-400 rounded-full" />
                                ))}
                            </div>
                        </div>

                        

                        {/* Main image */}
                        <div className="relative rounded-lg overflow-hidden">
                            <img
                                src="/people-working-on-laptops-from-above-view.jpg"
                                alt=""
                                className="w-full h-auto"
                            />
                        </div>

                        {/* Stacked course cards */}
                        <div className="absolute bottom-8 left-8 right-8">
                            {/* Background card (partially visible) */}
                            <div className="absolute -bottom-4 -left-4 bg-white rounded-lg shadow-lg p-6 w-full opacity-50">
                                <div className="flex items-center gap-2 text-gray-600 mb-2">
                                    <Eye className="w-4 h-4" />
                                    <span className="text-sm">3,532 students watched</span>
                                </div>
                                <h3 className="text-lg font-semibold text-[#1a1f4d]">
                                    Create multiple artboard by using figma prot...
                                </h3>
                            </div>

                            {/* Front card */}
                            <div className="relative bg-white rounded-lg shadow-xl p-6">
                                <div className="absolute -top-3 right-6">
                                    <div className="bg-[#2dd4bf] text-white px-4 py-2 rounded-md flex items-center gap-2 text-sm font-medium">
                                        <Check className="w-4 h-4" />
                                        Free tutorial
                                    </div>
                                </div>

                                <div className="flex items-center gap-1 mb-3">
                                    {[1, 2, 3, 4, 5].map((star) => (
                                        <Star key={star} className="w-5 h-5 fill-[#fbbf24] text-[#fbbf24]" />
                                    ))}
                                    <span className="ml-2 text-sm text-gray-600">5.0 (392 reviews)</span>
                                </div>

                                <h3 className="text-xl font-semibold text-[#1a1f4d] mb-3">
                                    Convert your web layout theming easily with sketch zeplin extension
                                </h3>

                                <div className="flex items-center gap-2 text-gray-600">
                                    <Eye className="w-4 h-4" />
                                    <span className="text-sm">1,037 students watched</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right side - Content */}
                    <div>
                        <div className="text-[#EF9E48] text-sm font-semibold tracking-wider uppercase mb-4">FREE TUTORIAL</div>
                        <h2 className="text-4xl md:text-5xl font-bold text-[#0F2137] mb-6 leading-tight">
                            More than thousand of free tutorial upload every weeks
                        </h2>
                        <p className="text-[#02073E] font-normal text-lg mb-8 leading-relaxed">
                            Get your tests delivered at let home collect sample from the victory of the managments that supplies best
                            design system guidelines ever. Get your tests delivered at let home collect sample.
                        </p>
                        <button className="bg-[#fff4e6] text-[#EF9E48] px-8 py-3 rounded-md font-medium hover:bg-[#ffe8cc] transition-colors">
                            Explore details
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
