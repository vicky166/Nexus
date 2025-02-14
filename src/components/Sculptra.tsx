import React from 'react'
import { Check, X } from 'lucide-react'
import { Card, CardHeader, CardContent } from '@/components/ui/card'

const SculptraComponent = () => {
  const steps = [
    {
      title: 'The  Conversation',
      content:
        "We don't just map your face - we listen to your story. Understanding your goals is as important as your skin type.",
    },
    {
      title: 'Precision Meets Comfort',
      content:
        'Numbing cream, ultra-fine needles, and post-treatment care including ice rollers and champagne make your experience comfortable and luxurious.',
    },
    {
      title: 'The Results Unfold',
      content:
        'From subtle firmness in week 1 to noticeable transformation in month 2, watch your transformation unfold naturally.',
    },
  ]

  const faqs = [
    {
      question: 'Will I look overdone?',
      answer: 'Never. We use micro-droplet technique to avoid filler-face.',
    },
    {
      question: 'What if I change my mind?',
      answer: 'Sculptra® fades naturally if untouched. No lumps, no migration.',
    },
    {
      question: 'Can I afford this?',
      answer:
        'At RM3,000/vial (vs RM2,500 for HA fillers needing 3x/year), you save RM4,500 long-term.',
    },
  ]

  const timeline = [
    { month: 'Month 1', desc: 'Tiny PLLA particles create a scaffold under your skin.' },
    {
      month: 'Month 2-3',
      desc: "Your body responds by producing new collagen - your skin's natural 'plumping agent'.",
    },
    { month: 'Month 6+', desc: 'Results peak with up to 80% thicker skin (FDA clinical study).' },
  ]

  const treatments = [
    {
      name: 'Sculptra®',
      duration: '2+ years',
      natural: true,
      collagen: true,
      bestFor: 'Gradual, full-face rejuvenation',
    },
    {
      name: 'HA Fillers',
      duration: '6-12 months',
      natural: false,
      collagen: false,
      bestFor: 'Quick volume',
    },
    {
      name: 'Collagen Creams',
      duration: '0 days',
      natural: false,
      collagen: false,
      bestFor: 'Surface hydration',
    },
  ]

  return (
    <div className="max-w-7xl mx-auto py-8 px-4 sm:px-6 bg-bg-gradient-to-br from-green-50 to-white lg:px-8">
      <Card className="mb-12 bg-[#F2FDF6]">
        <CardHeader>
          <h1 className="text-3xl md:text-4xl font-bold text-gray-800 mb-4">
            Sculptra®: Your Skin&apos;s Personal Trainer
          </h1>
          <p className="text-lg text-gray-700">
            Sculptra® uses poly-L-lactic acid (PLLA), a biocompatible ingredient that acts like a
            personal trainer for your skin.
          </p>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {timeline.map((item, index) => (
              <div key={index} className="bg-[#F2FDF6] p-6 rounded-lg">
                <h3 className="font-semibold text-gray-800 mb-2">{item.month}</h3>
                <p className="text-gray-700">{item.desc}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-[#F2FDF6]">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">Real Results Real People</h2>
        </CardHeader>
        <CardContent>
          <a
            href="#"
            className="inline-block px-6 py-3 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors"
          >
            See Patient&apos;s 9-Month Transformation →
          </a>
        </CardContent>
      </Card>

      <Card className="mb-12  bg-[#F2FDF6] overflow-hidden">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">Sculptra® vs. Other Treatments</h2>
        </CardHeader>
        <CardContent className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-[#F2FDF6]">
              <tr>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Treatment
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Results Last
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Natural Look?
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Collagen Boost?
                </th>
                <th className="px-6 py-3 text-left text-sm font-semibold text-gray-700">
                  Best For
                </th>
              </tr>
            </thead>
            <tbody className="bg-[#F2FDF6] divide-y divide-gray-200">
              {treatments.map((treatment, index) => (
                <tr key={index}>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {treatment.name}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {treatment.duration}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {treatment.natural ? (
                      <span className="text-green-600 flex items-center">
                        <Check className="w-5 h-5 mr-1" />
                        Yes
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center">
                        <X className="w-5 h-5 mr-1" />
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm">
                    {treatment.collagen ? (
                      <span className="text-green-600 flex items-center">
                        <Check className="w-5 h-5 mr-1" />
                        68% increase*
                      </span>
                    ) : (
                      <span className="text-red-600 flex items-center">
                        <X className="w-5 h-5 mr-1" />
                        No
                      </span>
                    )}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-700">
                    {treatment.bestFor}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <p className="text-sm text-gray-500 mt-4">
            Source: Journal of Cosmetic Dermatology, 2022
          </p>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-[#F2FDF6]">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">The Sculptra® Experience</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="bg-[#F2FDF6] p-6 rounded-lg">
                <h3 className="text-xl font-semibold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-700">{step.content}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card className="mb-12 bg-[#F2FDF6]">
        <CardHeader>
          <h2 className="text-2xl font-bold text-gray-800">Your Burning Questions</h2>
        </CardHeader>
        <CardContent>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {faqs.map((faq, index) => (
              <div key={index} className="bg-[#F2FDF6] p-6 rounded-lg">
                <h4 className="font-semibold text-gray-800 mb-2">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </div>
            ))}
          </div>
        </CardContent>
      </Card>

      <Card>
        <CardContent className="text-center bg-[#F2FDF6] py-12">
          <h2 className="text-2xl font-bold text-gray-800 mb-6">Special Offer Ending Soon</h2>
          <p className="text-lg text-gray-700 mb-8">Only 4 Discounted Vials Left</p>
          <a
            href="#"
            className="inline-block px-8 py-4 bg-green-600 text-white rounded-lg hover:bg-green-700 transition-colors text-lg font-semibold"
          >
            Claim Your Trial Price →
          </a>
          <p className="text-gray-500 mt-8 max-w-2xl mx-auto">
            P.S. The women who look 10 years younger didn&apos;t find a magic cream – they started
            collagen treatments early. Where will your skin be in 6 months?
          </p>
        </CardContent>
      </Card>
    </div>
  )
}

export default SculptraComponent

