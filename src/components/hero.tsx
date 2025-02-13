'use client'

import { Button } from '@/components/ui/button'
import { ShoppingCart, Phone, ArrowRight, Star } from 'lucide-react'
import { Input } from '@/components/ui/input'

export default function Hero() {
  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-50 to-white overflow-hidden">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-30" />

      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-8 md:px-16 py-16 min-h-screen items-center">
        <div className="space-y-10 max-w-2xl mx-auto lg:mx-0 text-center lg:text-left">
          <div className="space-y-6">
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-green-100 text-green-800 px-2 py-2 rounded-full text-sm font-medium shadow-md hover:shadow-lg transition-all duration-300 cursor-pointer">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-5 h-5 text-yellow-500" />
              ))}
              <span>Read 1,368 Reviews | 2 Questions, 32 Answers or Write A Review</span>
            </div>
            <h2 className="text-xl md:text-2xl text-green-800 font-medium leading-relaxed">
              Reawaken Your Skin’s Youth with <span className="font-bold">Sculptra®</span>
            </h2>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-extrabold text-gray-900 leading-tight tracking-tight">
              Advanced Skincare
              <span className="block text-green-600 mt-2">Laser Treatment</span>
            </h1>
          </div>

          <div className="bg-white/50 backdrop-blur-lg p-8 md:p-12 rounded-3xl shadow-2xl space-y-6 border border-gray-300">
            <h3 className="text-2xl font-semibold text-gray-900 text-center">
              Book a Private Consultation
            </h3>
            <p className="text-green-600 font-medium text-center">
              🔥 300 viewing now + Only <span className="font-bold">3 slots left</span> this week!
            </p>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Full Name</label>
                <Input
                  type="text"
                  placeholder="John Doe"
                  className="w-full px-4 py-3 rounded-xl border-gray-300 shadow-md focus:ring-2 focus:ring-green-500 transition-all bg-white/60 backdrop-blur-md"
                />
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium text-gray-700 block">Email Address</label>
                <Input
                  type="email"
                  placeholder="john@example.com"
                  className="w-full px-4 py-3 rounded-xl border-gray-300 shadow-md focus:ring-2 focus:ring-green-500 transition-all bg-white/60 backdrop-blur-md"
                />
              </div>
              <div className="space-y-2 sm:col-span-2">
                <label className="text-sm font-medium text-gray-700 block">Phone Number</label>
                <Input
                  type="tel"
                  placeholder="+1 (555) 000-0000"
                  className="w-full px-4 py-3 rounded-xl border-gray-300 shadow-md focus:ring-2 focus:ring-green-500 transition-all bg-white/60 backdrop-blur-md"
                />
              </div>
            </div>

            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-xl py-4 md:py-5 font-semibold text-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2">
              Schedule Your Free Session
              <ArrowRight className="w-5 h-5" />
            </Button>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button className="flex-1 flex items-center justify-center gap-3 bg-gray-900 hover:bg-gray-800 text-white rounded-full px-6 sm:px-10 py-4 sm:py-5 text-lg font-semibold shadow-lg hover:shadow-xl transition-all">
              <ShoppingCart className="w-5 h-5" />
              Shop Products
            </Button>
            <Button
              variant="outline"
              className="flex-1 flex items-center justify-center gap-3 border-2 border-gray-300 hover:bg-gray-50 text-gray-900 rounded-full px-6 sm:px-10 py-4 sm:py-5 text-lg font-semibold shadow-md hover:shadow-lg transition-all"
            >
              <Phone className="w-5 h-5" />
              Contact Support
            </Button>
          </div>
        </div>

        <div className="relative w-full h-[400px] sm:h-[500px] md:h-[600px] lg:h-[700px] flex justify-center items-center order-first lg:order-last">
          <div className="relative w-full max-w-xs sm:max-w-md md:max-w-lg lg:max-w-none h-full">
            <div className="absolute -top-4 -left-4 w-36 sm:w-48 h-36 sm:h-48 bg-green-200 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob" />
            <div className="absolute -bottom-8 -right-4 w-36 sm:w-48 h-36 sm:h-48 bg-green-300 rounded-full mix-blend-multiply filter blur-2xl opacity-70 animate-blob animation-delay-2000" />

            <div className="relative h-full w-full">
              <img
                src="/img/girl.jpg"
                alt="Laser treatment result showing clear, radiant skin"
                className="object-cover w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}