'use client'

import { useState } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function MedicalInfo() {
  const [currentSlide, setCurrentSlide] = useState(0)

  const transformations = [
    {
      id: 1,
      beforeImage: '/img/brfore4.jpg',
      afterImage: '/img/before3.jpg',
      title: 'Skin Restoration',
      description: 'Complete transformation with our innovative laser technology',
    },
    {
      id: 2,
      beforeImage: '/img/before2.webp',
      afterImage: '/img/before1.jpg',
      title: 'Facial Rejuvenation',
      description: 'Advanced treatment for fine lines and wrinkles',
    },
    {
      id: 3,
      beforeImage: '/img/before5.jpg',
      afterImage: '/img/before6.jpg',
      title: 'Acne Scar Reduction',
      description: 'Dramatic improvements in acne scars with advanced treatments',
    },
  ]

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % transformations.length)
  }

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + transformations.length) % transformations.length)
  }

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white py-16 lg:py-24">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        <div className="text-center max-w-4xl mx-auto mb-12 space-y-4">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            Real Results
            <span className="block text-green-600 mt-2">Before & After</span>
          </h2>
          <p className="text-lg text-gray-600">
            See the transformative power of our advanced skincare treatments through real client
            results.
          </p>
        </div>

        <div className="w-full mx-auto max-w-5xl">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-4">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full">
              <div className="flex items-center justify-center bg-gray-100 p-4 min-h-[300px]">
                <Image
                  src={transformations[currentSlide].beforeImage}
                  alt="Before treatment"
                  width={600}
                  height={800}
                  className="object-cover rounded-lg w-full h-full max-h-[400px]"
                  priority
                />
                <span className="absolute top-4 left-4 bg-white/90 px-4 py-2 rounded-full text-sm font-medium text-gray-700 shadow-md">
                  Before
                </span>
              </div>

              <div className="flex items-center justify-center bg-gray-100 p-4 min-h-[300px]">
                <Image
                  src={transformations[currentSlide].afterImage}
                  alt="After treatment"
                  width={600}
                  height={800}
                  className="object-cover rounded-lg w-full h-full max-h-[400px]"
                  priority
                />
                <span className="absolute top-4 right-4 bg-green-600 px-4 py-2 rounded-full text-sm font-medium text-white shadow-md">
                  After
                </span>
              </div>
            </div>

            <div className="bg-white/95 backdrop-blur-sm p-6 md:p-8 rounded-b-3xl shadow-md mt-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="space-y-2 text-center md:text-left">
                  <h3 className="text-xl md:text-2xl font-semibold text-gray-900">
                    {transformations[currentSlide].title}
                  </h3>
                  <p className="text-gray-600">{transformations[currentSlide].description}</p>
                </div>
                <div className="flex gap-3 justify-center">
                  <Button
                    onClick={prevSlide}
                    variant="outline"
                    className="p-3 rounded-full hover:bg-green-50 transition-all"
                  >
                    <ArrowLeft className="w-6 h-6" />
                  </Button>
                  <Button
                    onClick={nextSlide}
                    variant="outline"
                    className="p-3 rounded-full hover:bg-green-50 transition-all"
                  >
                    <ArrowRight className="w-6 h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>

          <div className="flex justify-center mt-6 gap-2">
            {transformations.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                className={`w-3 h-3 rounded-full transition-all duration-300 ${currentSlide === index ? 'bg-green-600 w-10' : 'bg-gray-300'}`}
              />
            ))}
          </div>
        </div>

        <div className="text-center mt-12">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-8 py-6 rounded-full text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
            Book Your Transformation
            <ArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
    </section>
  )
}
