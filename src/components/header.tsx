'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function Header() {
  return (
    <section className="relative w-full py-16 bg-gray-50">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 items-center">
        <div className="relative h-[450px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-2xl">
          <Image
            src="/img/laser.webp"
            alt="Fractional CO2 Laser Treatment"
            fill
            className="object-cover rounded-3xl transition-all duration-500 hover:scale-105"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/20 to-transparent"></div>
        </div>

        <div className="flex flex-col space-y-6">
          <h2 className="text-4xl lg:text-5xl font-extrabold text-gray-900 leading-tight">
            Fractional CO2 <span className="text-green-600">Laser Treatment</span>
          </h2>

          <p className="text-lg text-gray-800 leading-relaxed">
            Experience the power of advanced <span className="font-semibold text-green-700">Fractional CO2 laser treatment</span>, designed to rejuvenate and restore your skin by reducing scars, wrinkles, and fine lines.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-3 text-gray-800 text-lg">
              <Check className="w-6 h-6 text-green-600" />
              Immediate results with long-term benefits.
            </li>
            <li className="flex items-center gap-3 text-gray-800 text-lg">
              <Check className="w-6 h-6 text-green-600" />
              Non-surgical solution to reduce wrinkles.
            </li>
            <li className="flex items-center gap-3 text-gray-800 text-lg">
              <Check className="w-6 h-6 text-green-600" />
              Boosts collagen production & skin elasticity.
            </li>
            <li className="flex items-center gap-3 text-gray-800 text-lg">
              <Check className="w-6 h-6 text-green-600" />
              Effectively treats acne scars & sun damage.
            </li>
          </ul>

          <Button className="mt-6 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full px-8 py-3 shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-green-500/50">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}
