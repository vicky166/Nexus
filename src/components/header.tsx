'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { Check } from 'lucide-react'

export default function Header() {
  return (
    <section className="relative w-full py-12 ">
      <div className="container mx-auto grid lg:grid-cols-2 gap-12 px-6 md:px-12 lg:px-24 items-center">
        <div className="relative h-[400px] lg:h-[500px] w-full rounded-3xl overflow-hidden shadow-xl">
          <Image
            src="/img/laser.webp"
            alt="Fractional CO2 Laser Treatment"
            fill
            className="object-cover rounded-3xl"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900/30 to-transparent"></div>
        </div>

        <div className="flex flex-col space-y-6">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 leading-tight">
            Fractional CO2 <span className="text-green-600">Laser Treatment</span>
          </h2>

          <p className="text-lg text-gray-700 leading-relaxed">
            Fractional CO2 laser treatment is an innovative method that uses laser energy microbeams
            to penetrate and break down skin tissue, eliminating scars, wrinkles, sun damage, fine
            lines, and more.
          </p>

          <ul className="space-y-3">
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              Immediate results with multiple sessions for long-term benefits.
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              Non-surgical procedure that reduces wrinkles and fine lines.
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              Promotes collagen production and skin tightening.
            </li>
            <li className="flex items-center gap-2 text-gray-700">
              <Check className="w-5 h-5 text-green-600" />
              Effective for treating sun damage and acne scars.
            </li>
          </ul>

          <Button className="mt-4 bg-green-600 hover:bg-green-700 text-white text-lg font-semibold rounded-full px-8 py-3 shadow-lg transition-all hover:scale-105">
            Book an Appointment
          </Button>
        </div>
      </div>
    </section>
  )
}
