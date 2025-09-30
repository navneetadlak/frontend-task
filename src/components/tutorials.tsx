import { Eye, Star, Play } from "lucide-react"

const tutorials = [
    {
        id: 1,
        image: "/person-working-on-laptop-from-above-with-notebook-.jpg",
        rating: 5.0,
        reviews: 392,
        title: "How to work with prototype design with adobe xd featuring tools",
        students: 2538,
    },
    {
        id: 2,
        image: "/person-working-on-laptop-from-above-with-notebook-.jpg",
        rating: 4.5,
        reviews: 524,
        title: "Create multiple artboard by using figma prototyping tools development",
        students: 3532,
    },
    {
        id: 3,
        image: "/hands-typing-on-laptop-keyboard-with-plants-and-gl.jpg",
        rating: 5.0,
        reviews: 392,
        title: "Convert your web layout theming easily with sketch zeplin extension",
        students: 1037,
    },
]

export function Tutorials() {
    return (
        <section className="py-20 px-6 bg-white p-52">
            <div className="max-w-7xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-[#ff9a3c] text-sm font-semibold tracking-wider uppercase mb-3">QUALITY FEATURES</p>
                    <h2 className="text-4xl md:text-5xl font-bold text-[#1a1f4d]">Tutorials that people love most</h2>
                </div>

                {/* Tutorial Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {tutorials.map((tutorial) => (
                        <div
                            key={tutorial.id}
                            className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Tutorial Image with Play Button */}
                            <div className="relative group cursor-pointer">
                                <img
                                    src={tutorial.image || "/placeholder.svg"}
                                    alt={tutorial.title}
                                    className="w-full h-64 object-cover"
                                />
                                {/* Play Button Overlay */}
                                <div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
                                    <div className="w-20 h-20 bg-white/90 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <Play className="w-8 h-8 text-[#1a1f4d] ml-1" fill="#1a1f4d" />
                                    </div>
                                </div>
                            </div>

                            {/* Card Content */}
                            <div className="p-6">
                                {/* Star Rating */}
                                <div className="flex items-center gap-2 mb-4">
                                    <div className="flex gap-1">
                                        {[1, 2, 3, 4, 5].map((star) => (
                                            <Star
                                                key={star}
                                                className={`w-5 h-5 ${star <= Math.floor(tutorial.rating)
                                                        ? "text-[#ffc107] fill-[#ffc107]"
                                                        : star - 0.5 <= tutorial.rating
                                                            ? "text-[#ffc107] fill-[#ffc107]"
                                                            : "text-gray-300 fill-gray-300"
                                                    }`}
                                            />
                                        ))}
                                    </div>
                                    <span className="text-sm text-gray-600">
                                        {tutorial.rating} ({tutorial.reviews} reviews)
                                    </span>
                                </div>

                                {/* Tutorial Title */}
                                <h3 className="text-lg font-semibold text-[#1a1f4d] mb-4 leading-snug">{tutorial.title}</h3>

                                {/* Students Watched */}
                                <div className="flex items-center gap-2 text-gray-500">
                                    <Eye className="w-5 h-5" />
                                    <span className="text-sm">{tutorial.students.toLocaleString()} students watched</span>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
