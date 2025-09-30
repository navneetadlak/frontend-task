import { Star, Eye, Play, Check, ChevronDown } from "lucide-react"
import { useState } from "react"

interface CourseFeature {
    text: string
}

interface Course {
    id: number
    title: string
    description: string
    rating: number
    reviewCount: number
    studentsWatched: number
    videoCount: number
    duration: string
    features?: CourseFeature[]
}

const courses: Course[] = [
    {
        id: 1,
        title: "Professional graphic design tutorial full course with exercise file",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: 5.0,
        reviewCount: 392,
        studentsWatched: 2538,
        videoCount: 7,
        duration: "4 hrs",
    },
    {
        id: 2,
        title: "Become ultimate photoshop expert within 30 days",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: 5.0,
        reviewCount: 392,
        studentsWatched: 2538,
        videoCount: 7,
        duration: "4 hrs",
        features: [
            { text: "How to reduce file pixel dimentions without loosing quality" },
            { text: "How to make logo pixel perfects with different extension" },
            { text: "Create vector file from restarize layer styles" },
            { text: "Make color gradient with photoshop build-in tools" },
        ],
    },
    {
        id: 3,
        title: "After effects animation tutorial with photoshop documents",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: 5.0,
        reviewCount: 392,
        studentsWatched: 2538,
        videoCount: 7,
        duration: "4 hrs",
    },
    {
        id: 4,
        title: "Adobe illustrator vector art design mockup",
        description: "Get your tutorials delivered at let home collect sample from the victory of the managments.",
        rating: 5.0,
        reviewCount: 392,
        studentsWatched: 2538,
        videoCount: 7,
        duration: "4 hrs",
    },
]

export function Popular() {
    const [expandedCourse, setExpandedCourse] = useState<number | null>(2)

    const toggleCourse = (courseId: number) => {
        setExpandedCourse(expandedCourse === courseId ? null : courseId)
    }

    const renderStars = (rating: number) => {
        const fullStars = Math.floor(rating)
        const stars = []

        for (let i = 0; i < 5; i++) {
            stars.push(
                <Star
                    key={i}
                    className={`w-5 h-5 ${i < fullStars ? "fill-yellow-400 text-yellow-400" : "fill-gray-200 text-gray-200"}`}
                />,
            )
        }

        return stars
    }

    return (
        <section className="py-8 px-20 bg-[#ffffff]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-[#EF9E48] text-sm font-bold tracking-wider uppercase mb-4">QUALITY FEATURES</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2137]">Popular Designing Course</h2>
                </div>

                {/* Course List */}
                <div className="space-y-6">
                    {courses.map((course) => (
                        <div
                            key={course.id}
                            className="bg-white rounded-lg border border-[#F3F4F5] p-8 hover:shadow-lg transition-shadow"
                        >
                            <div className="flex items-start gap-6">
                                {/* Play Button */}
                                <div className="flex-shrink-0">
                                    <div className="w-16 h-16 rounded-full bg-orange-50 flex items-center justify-center">
                                        <Play className="w-8 h-8 text-[#EF9E48] fill-[#ed973c]" />
                                    </div>
                                </div>

                                {/* Course Content */}
                                <div className="flex-1">
                                    {/* Rating and Stats */}
                                    <div className="flex items-center gap-4 mb-3">
                                        <div className="flex items-center gap-1">{renderStars(course.rating)}</div>
                                        <span className="text-gray-700 text-sm">
                                            {course.rating} ({course.reviewCount} reviews)
                                        </span>
                                        <div className="flex items-center gap-2 text-gray-500 text-sm">
                                            <Eye className="w-4 h-4" />
                                            <span>{course.studentsWatched.toLocaleString()} students watched</span>
                                        </div>
                                    </div>

                                    {/* Course Title */}
                                    <h3 className="text-xl font-bold text-[#0F2137] leading-8 mb-3">{course.title}</h3>

                                    {/* Course Description */}
                                    <p className="text-[#5D646D] font-normal text-sm mb-4">{course.description}</p>

                                    {/* Course Features (if expanded) */}
                                    {course.features && expandedCourse === course.id && (
                                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
                                            {course.features.map((feature, index) => (
                                                <div key={index} className="flex items-start gap-3">
                                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center mt-0.5">
                                                        <Check className="w-4 h-4 text-gray-500" />
                                                    </div>
                                                    <span className="text-gray-700 text-sm">{feature.text}</span>
                                                </div>
                                            ))}
                                        </div>
                                    )}
                                </div>

                                {/* Course Info Button */}
                                <div className="flex-shrink-0">
                                    <button
                                        onClick={() => course.features && toggleCourse(course.id)}
                                        className="flex items-center gap-3 bg-emerald-400 hover:bg-emerald-500 text-white px-6 py-3 rounded-lg transition-colors"
                                    >
                                        <span className="font-medium">{course.videoCount} Video Classes</span>
                                        <span className="text-white/80">|</span>
                                        <span className="font-medium">{course.duration}</span>
                                        {course.features && (
                                            <ChevronDown
                                                className={`w-5 h-5 transition-transform ${expandedCourse === course.id ? "rotate-180" : ""}`}
                                            />
                                        )}
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
