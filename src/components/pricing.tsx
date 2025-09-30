import { Check, X } from "lucide-react"
import { useState } from "react"

export function Pricing() {
    const [selectedPlan, setSelectedPlan] = useState<"monthly" | "annual">("monthly")

    const features = [
        "Ultimate access to all course, exercises and assessments",
        "Free access for all kind of exercise corrections with downloads.",
        "Total assessment corrections with free download access system",
        "Unlimited download of courses on the mobile app contents",
        "Download and print courses and exercises in PDF",
    ]

    return (
        <section className="py-20 px-4 bg-white">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-12">
                    <p className="text-[#EF9E48] text-sm font-bold tracking-wider uppercase mb-3">PRICING PLAN</p>
                    <h2 className="text-3xl md:text-4xl font-bold text-[#0F2137] mb-8 leading-14">Choose your pricing policy</h2>

                    {/* Plan Toggle */}
                    <div className="inline-flex bg-white rounded-lg p-1 shadow-sm">
                        <button
                            onClick={() => setSelectedPlan("monthly")}
                            className={`px-8 py-3 rounded-lg font-medium transition-colors ${selectedPlan === "monthly" ? "bg-white text-[#1a1f4d] shadow-sm" : "text-gray-600 hover:text-[#1a1f4d]"
                                }`}
                        >
                            Monthly Plan
                        </button>
                        <button
                            onClick={() => setSelectedPlan("annual")}
                            className={`px-8 py-3 rounded-lg font-medium transition-colors ${selectedPlan === "annual" ? "bg-white text-[#1a1f4d] shadow-sm" : "text-gray-600 hover:text-[#1a1f4d]"
                                }`}
                        >
                            Annual Plan
                        </button>
                    </div>
                </div>

                {/* Pricing Cards */}
                <div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {/* Free Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-200">
                        <div className="mb-8">
                            <h3 className="text-2xl font-bold text-[#0F2137] mb-2">Free Plan</h3>
                            <p className="text-gray-600">For Small teams or office</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    {index < 3 ? (
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                                            <Check className="w-4 h-4 text-white" />
                                        </div>
                                    ) : (
                                        <div className="flex-shrink-0 w-6 h-6 rounded-full bg-gray-300 flex items-center justify-center mt-0.5">
                                            <X className="w-4 h-4 text-gray-500" />
                                        </div>
                                    )}
                                    <span className={`text-sm ${index < 3 ? "text-gray-700" : "text-gray-400"}`}>{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 px-6 bg-orange-50 text-[#EF9E48] font-semibold rounded-lg hover:bg-orange-100 transition-colors">
                            Start free trail
                        </button>
                    </div>

                    {/* Premium Plan */}
                    <div className="bg-white rounded-2xl p-8 shadow-sm border-2 border-teal-500 relative">
                        {/* Recommended Badge */}
                        <div className="absolute -top-4 left-8">
                            <span className="bg-[#EF9E48] text-white px-4 py-1.5 rounded-full text-sm font-semibold">
                                Recommended
                            </span>
                        </div>

                        <div className="mb-8">
                            <div className="flex items-start justify-between mb-2">
                                <h3 className="text-2xl font-bold text-[#1a1f4d]">Premium</h3>
                                <div className="text-right">
                                    <p className="text-sm text-gray-600">Starting from</p>
                                    <p className="text-3xl font-bold text-teal-500">49.99/mo</p>
                                </div>
                            </div>
                            <p className="text-gray-600">For startup enterprise</p>
                        </div>

                        <ul className="space-y-4 mb-8">
                            {features.map((feature, index) => (
                                <li key={index} className="flex items-start gap-3">
                                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-teal-500 flex items-center justify-center mt-0.5">
                                        <Check className="w-4 h-4 text-white" />
                                    </div>
                                    <span className="text-sm text-gray-700">{feature}</span>
                                </li>
                            ))}
                        </ul>

                        <button className="w-full py-4 px-6 bg-orange-50 text-[#EF9E48] font-semibold rounded-lg hover:bg-orange-100 transition-colors">
                            Subscribe Now
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
