import React from 'react'
import { Check, X } from 'lucide-react'
import { Card, CardContent } from '@/components/ui/card'

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
    <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-green-50 to-white">
      <Card className="mb-16 border-none shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-1">
          <CardContent className="p-8 md:p-12 bg-white rounded-lg">
            <h1 className="text-4xl md:text-5xl font-bold text-gray-800 mb-6 leading-tight">
              Sculptra®: Your Skin&apos;s <span className="text-green-600">Personal Trainer</span>
            </h1>
            <p className="text-xl text-gray-700 max-w-3xl mb-8 leading-relaxed">
              Sculptra® uses poly-L-lactic acid (PLLA), a biocompatible ingredient that acts like a
              personal trainer for your skin, gradually restoring youthful volume and radiance.
            </p>
            <a
              href="#consultation"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              Schedule Your Consultation →
            </a>
          </CardContent>
        </div>
      </Card>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          The Transformation Journey
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {timeline.map((item, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-8">
                <h3 className="font-bold text-xl text-gray-800 mb-3">{item.month}</h3>
                <p className="text-gray-700 leading-relaxed">{item.desc}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="mb-16 border-none shadow-xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-1">
          <CardContent className="p-8 md:p-12 bg-white rounded-lg text-center">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Real Results, Real People</h2>
            <p className="text-lg text-gray-700 mb-8 max-w-3xl mx-auto">
              See how Sculptra® has transformed our patients&apos; appearance with natural-looking
              results that improve over time.
            </p>
            <a
              href="#testimonials"
              className="inline-block px-8 py-4 bg-green-600 text-white rounded-full shadow-lg hover:bg-green-700 transition-all transform hover:scale-105 font-semibold text-lg"
            >
              See Patient&apos;s 9-Month Transformation →
            </a>
          </CardContent>
        </div>
      </Card>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Sculptra® vs. Other Treatments
        </h2>
        <Card className="border-none shadow-xl overflow-hidden">
          <CardContent className="p-0">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-green-50">
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b border-green-100">
                      Treatment
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b border-green-100">
                      Results Last
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b border-green-100">
                      Natural Look?
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b border-green-100">
                      Collagen Boost?
                    </th>
                    <th className="px-6 py-4 text-left text-sm font-bold text-gray-700 border-b border-green-100">
                      Best For
                    </th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-green-50">
                  {treatments.map((treatment, index) => (
                    <tr
                      key={index}
                      className={index === 0 ? 'bg-green-50 bg-opacity-30' : 'hover:bg-gray-50'}
                    >
                      <td className="px-6 py-5 whitespace-nowrap text-sm font-semibold text-gray-800">
                        {treatment.name}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700">
                        {treatment.duration}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm">
                        {treatment.natural ? (
                          <span className="text-green-600 flex items-center">
                            <Check className="w-5 h-5 mr-1" />
                            Yes
                          </span>
                        ) : (
                          <span className="text-red-500 flex items-center">
                            <X className="w-5 h-5 mr-1" />
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm">
                        {treatment.collagen ? (
                          <span className="text-green-600 flex items-center">
                            <Check className="w-5 h-5 mr-1" />
                            <span>
                              68% increase<sup>*</sup>
                            </span>
                          </span>
                        ) : (
                          <span className="text-red-500 flex items-center">
                            <X className="w-5 h-5 mr-1" />
                            No
                          </span>
                        )}
                      </td>
                      <td className="px-6 py-5 whitespace-nowrap text-sm text-gray-700">
                        {treatment.bestFor}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-sm text-gray-500 p-4 italic">
              <sup>*</sup>Source: Journal of Cosmetic Dermatology, 2022
            </p>
          </CardContent>
        </Card>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          The Sculptra® Experience
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-shadow overflow-hidden"
            >
              <div className="h-2 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-8">
                <h3 className="text-xl font-bold text-gray-800 mb-4">{step.title}</h3>
                <p className="text-gray-700 leading-relaxed">{step.content}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Your Burning Questions
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-none shadow-md hover:shadow-lg transition-shadow h-full"
            >
              <CardContent className="p-6">
                <h4 className="font-bold text-gray-800 mb-3 text-lg">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      <Card className="border-none shadow-2xl overflow-hidden">
        <div className="bg-gradient-to-r from-green-600 to-green-400 p-1">
          <CardContent className="text-center bg-white rounded-lg py-16 px-8">
            <h2 className="text-3xl font-bold text-gray-800 mb-6">Special Offer Ending Soon</h2>
            <p className="text-xl text-gray-700 mb-2">Only 4 Discounted Vials Left</p>
            <p className="text-lg text-gray-600 mb-8">Limited time pricing for new clients</p>
            <a
              href="#claim"
              className="inline-block px-10 py-5 bg-green-600 text-white rounded-full shadow-xl hover:bg-green-700 transition-all transform hover:scale-105 font-semibold text-xl"
            >
              Claim Your Trial Price →
            </a>
            <p className="text-gray-600 mt-10 max-w-2xl mx-auto italic">
              P.S. The women who look 10 years younger didn&apos;t find a magic cream – they started
              collagen treatments early. Where will your skin be in 6 months?
            </p>
          </CardContent>
        </div>
      </Card>
    </div>
  )
}

export default SculptraComponent
