'use client'

import Image from 'next/image'
import { Button } from '@/components/ui/button'
import { ShoppingCart, Phone, ArrowRight, Star } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function Hero({ }) {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-40" />

      <div className="container mx-auto grid lg:grid-cols-2 gap-8 lg:gap-16 px-4 sm:px-6 lg:px-8 py-12 min-h-screen items-center">
        <div className="space-y-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="space-y-6">
            <div className="inline-flex items-center space-x-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:shadow-md transition-all duration-300 cursor-pointer">
              <Star className="w-4 h-4" />
              <span>4.9/5 Rating from 740+ Happy Clients</span>
            </div>

            <h2 className="text-lg sm:text-xl md:text-2xl text-green-800 font-medium leading-relaxed">
            Reawaken Your Skin’s Youth with Sculptra®            </h2>
            <p className="text-base sm:text-lg md:text-xl text-green-700/80 font-light italic">
            Because Aging is Inevitable, Looking Tired Doesn’t Have to Be 
            </p>

            <h1 className="text-3xl sm:text-4xl md:text-5xl xl:text-6xl font-bold text-gray-900 leading-tight tracking-tight">
              Advanced Skincare
              <span className="block text-green-600 mt-2">Laser Treatment</span>
            </h1>
          </div>

          <div className="bg-white/90 backdrop-blur-md p-6 sm:p-8 rounded-3xl shadow-xl space-y-6 sm:space-y-8 border border-gray-100">
            <h3 className="text-xl sm:text-2xl font-semibold text-gray-900">
              Book a Free Consultation
            </h3>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border-gray-200 focus:ring-2 focus:ring-green-500 focus:border-transparent transition-all"
                />
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-5 sm:py-6 font-semibold text-lg shadow-lg hover:shadow-xl transition-all">
              Schedule Your Free Session
              <ArrowRight className="w-5 h-5 ml-2" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 sm:px-8 py-5 sm:py-6 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              <ShoppingCart className="w-5 h-5" />
              Shop Products
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-3 border-2 border-gray-300 hover:bg-gray-50 text-gray-900 rounded-full px-6 sm:px-8 py-5 sm:py-6 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Support
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[400px] md:h-[500px] lg:h-[700px] flex justify-center items-center order-first lg:order-last">
          <div className="relative w-full max-w-md sm:max-w-lg md:max-w-xl lg:max-w-none h-full">
            <div className="absolute -top-4 -left-4 w-48 sm:w-64 h-48 sm:h-64 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 -right-4 w-48 sm:w-64 h-48 sm:h-64 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />

            <div className="relative w-full h-full rounded-3xl overflow-hidden shadow-2xl">
              <Image
                src="/img/girl.jpg"
                alt="Skincare Treatment"
                fill
                className="object-cover"
                style={{ objectPosition: 'center' }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
