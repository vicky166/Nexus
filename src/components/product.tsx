import React from 'react'
import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { Star, Clock, Calendar, Award, Heart } from 'lucide-react'

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white py-12 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-12 space-y-4">
          <h1 className="text-4xl font-bold text-gray-900">Sculptra® Premium Treatment</h1>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Advanced Aesthetic Solution for Natural-Looking Results
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-6">
            <Card className="overflow-hidden rounded-xl shadow-md">
              <div className="relative w-full h-[400px] bg-white">
                <Image
                  src="/img/product.png"
                  alt="Sculptra product"
                  fill
                  className="object-contain p-6"
                  priority
                />
              </div>
            </Card>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Clock className="w-6 h-6 text-green-600" />,
                  title: 'Duration',
                  desc: '45-60 minutes',
                },
                {
                  icon: <Calendar className="w-6 h-6 text-green-600" />,
                  title: 'Results Last',
                  desc: 'Up to 2 years',
                },
              ].map((item, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 bg-green-50 rounded-lg">
                  {item.icon}
                  <div>
                    <h3 className="font-semibold text-gray-800">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <span className="text-gray-600 text-sm">(128 reviews)</span>
              </div>
              <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>

            <p className="text-gray-600 leading-relaxed text-lg">
              Experience the transformative power of Sculptra®, an advanced aesthetic treatment
              that enhances facial contours naturally.
            </p>

            <div className="grid grid-cols-2 gap-4">
              {[
                {
                  icon: <Award className="w-6 h-6 text-green-600" />,
                  title: 'FDA Approved',
                  desc: 'Safe and clinically proven',
                },
                {
                  icon: <Clock className="w-6 h-6 text-green-600" />,
                  title: 'Long Lasting',
                  desc: 'Results that endure',
                },
                {
                  icon: <Star className="w-6 h-6 text-green-600" />,
                  title: 'Natural Results',
                  desc: 'Gradual enhancement',
                },
                {
                  icon: <Calendar className="w-6 h-6 text-green-600" />,
                  title: 'Quick Recovery',
                  desc: 'Minimal downtime',
                },
              ].map((benefit, index) => (
                <Card key={index} className="p-4 flex items-start gap-3 bg-gray-50 rounded-lg">
                  {benefit.icon}
                  <div>
                    <h3 className="font-semibold text-gray-800">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </Card>
              ))}
            </div>

            <div className="space-y-4 pt-6">
              <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg font-semibold rounded-xl">
                Schedule Your Consultation
              </Button>
              <Button
                variant="outline"
                className="w-full h-12 text-lg font-semibold rounded-xl border-gray-300"
              >
                Learn More About Treatment
              </Button>
              <p className="text-center text-sm text-gray-500">
                ✨ Free consultation • Flexible scheduling • Expert practitioners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Product
