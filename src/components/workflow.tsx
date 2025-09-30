export function Workflow() {
    const steps = [
        {
            number: "01",
            title: "Set disbursement Instructions",
            description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
        },
        {
            number: "02",
            title: "Assembly retrieves funds from your account",
            description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
        },
        {
            number: "03",
            title: "Assembly initiates disbursement",
            description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
        },
        {
            number: "04",
            title: "Customer receives funds payment",
            description: "Get your blood tests delivered at home collect a sample from the your blood tests.",
        },
    ]

    return (
        <section className="py-20 px-4 bg-gradient-to-b from-[#EBF9FF] to-[#F6F6FF]">
            <div className="max-w-6xl mx-auto">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <p className="text-[#EF9E48] text-sm font-bold tracking-wider uppercase mb-3">WHATS THE FUNCTION</p>
                    <h2 className="text-4xl md:text-4xl font-bold text-[#0F2137] leading-14">Let's see how it works</h2>
                </div>

                {/* Workflow Steps */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
                    {/* Connecting Lines - Hidden on mobile */}
                    <div className="hidden lg:block absolute top-8 left-0 right-0 h-0.5">
                        <svg className="w-full h-20" viewBox="0 0 1200 80" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M 100 40 Q 200 10, 300 40 T 500 40 T 700 40 T 900 40 T 1100 40"
                                stroke="#d1d5db"
                                strokeWidth="2"
                                strokeDasharray="8 8"
                                fill="none"
                            />
                        </svg>
                    </div>

                    {steps.map((step, index) => (
                        <div key={index} className="relative z-10">
                            {/* Step Number Badge */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 rounded-full bg-white shadow-md flex items-center justify-center">
                                    <span className="text-2xl font-bold text-[#0F2137]">{step.number}</span>
                                </div>
                            </div>

                            {/* Step Content */}
                            <div className="text-center">
                                <h3 className="text-xl font-medium text-[#0F2137] mb-4 leading-tight">{step.title}</h3>
                                <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
