import { useState } from "react"
import { Plus, Minus } from "lucide-react"

const faqData = [
  {
    id: 1,
    question: "How to contact with riders emergency ?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    id: 2,
    question: "App installation failed, how to update system information?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    id: 3,
    question: "Website reponse taking time, how to improve?",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
  {
    id: 4,
    question: "New update fixed all bug and issues",
    answer:
      "An FAQ is a list of frequently asked questions (FAQs) and answers on a particular topic (also known as Questions and Answers [Q&A] or Frequently Asked Questions). The format is often used in articles, websites, email lists, and online forums where common questions tend to recur, for example through posts or queries by new users related to common knowledge gaps. The purpose of an FAQ is generally provide information.",
  },
]

export function FAQ() {
  const [expandedId, setExpandedId] = useState<number | null>(3)

  const toggleFaq = (id: number) => {
    setExpandedId(expandedId === id ? null : id)
  }

  return (
    <section className="py-16 px-4 bg-gray-50">
      <div className="max-w-4xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-12">
          <p className="text-orange-500 text-sm font-semibold tracking-wider uppercase mb-3">FREQUENT QUESTION</p>
          <h2 className="text-4xl md:text-5xl font-bold text-[#1a1f4d]">Do you have any question</h2>
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {faqData.map((faq) => (
            <div key={faq.id} className="bg-white border border-gray-200 rounded-lg overflow-hidden">
              {/* Question */}
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full flex items-center justify-between p-6 text-left hover:bg-gray-50 transition-colors"
              >
                <div className="flex items-center gap-4">
                  <div className="flex-shrink-0">
                    {expandedId === faq.id ? (
                      <Minus className="w-6 h-6 text-teal-500" />
                    ) : (
                      <Plus className="w-6 h-6 text-teal-500" />
                    )}
                  </div>
                  <h3 className="text-lg font-medium text-[#1a1f4d]">{faq.question}</h3>
                </div>
              </button>

              {/* Answer */}
              {expandedId === faq.id && (
                <div className="px-6 pb-6 pl-16">
                  <p className="text-gray-600 leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
