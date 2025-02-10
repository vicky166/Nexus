'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Phone } from 'lucide-react'

export default function Hero({ backgroundImage = '/hero-image.jpg' }) {
  return (
    <section className="relative w-full min-h-[600px] lg:min-h-[700px] flex items-center ">
      {backgroundImage && <div className="absolute inset-0 -z-10"></div>}

      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 py-12 items-center">
        <div className="space-y-6">
          <div className="inline-block">
            <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full shadow-sm">
              New Collection
            </span>
          </div>

          <h1 className="text-4xl lg:text-5xl font-bold text-gray-900 leading-tight">
            Advanced Skincare <br />
            <span className="text-green-600">Laser Treatment</span>
          </h1>

          <p className="text-lg text-gray-700 max-w-xl">
            Discover professional skincare solutions with cutting-edge laser technology. Say goodbye
            to fine lines, wrinkles, and skin imperfections for a flawless glow.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 pt-4">
            <Button className="flex items-center justify-center gap-2 bg-green-600 hover:bg-green-700 text-white rounded-full px-8 py-3 text-lg font-semibold shadow-lg transition-all hover:scale-105">
              <ShoppingCart className="w-5 h-5" />
              Shop Now
            </Button>
            <Button
              variant="outline"
              className="flex items-center justify-center gap-2 border-2 border-gray-300 hover:bg-gray-100 text-gray-900 rounded-full px-8 py-3 text-lg font-semibold shadow-md transition-all hover:scale-105"
            >
              <Phone className="w-5 h-5" />
              Contact Us
            </Button>
          </div>

          <div className="flex items-center gap-8 pt-8">
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">740+</span>
              <span className="text-sm text-gray-600">Happy Clients</span>
            </div>
            <div className="w-px h-12 bg-gray-200"></div>
            <div className="flex flex-col">
              <span className="text-3xl font-bold text-gray-900">4.9</span>
              <span className="text-sm text-gray-600">Customer Rating</span>
            </div>
          </div>
        </div>

        <div className="relative h-[400px] lg:h-[600px] w-full flex justify-center">
          <div className="relative w-full h-full max-w-md lg:max-w-xl rounded-3xl overflow-hidden shadow-2xl">
            <Image
              src="/img/girl.jpg"
              alt="Skincare Treatment"
              fill
              className="object-cover rounded-3xl"
              style={{ objectPosition: 'center' }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
          </div>
        </div>
      </div>
    </section>
  )
}
