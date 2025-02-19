'use client'

import { Button } from '@/components/ui/button'
import { ArrowRight, Star, Check } from 'lucide-react'
import { Input } from '@/components/ui/input'
import { useEffect, useRef, useState } from 'react'
import Image from 'next/image'

export default function Hero() {
  const [splitPosition, setSplitPosition] = useState(50)
  const sliderRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      if (sliderRef.current) {
        const rect = sliderRef.current.getBoundingClientRect()
        const x = e.clientX - rect.left
        const percentage = (x / rect.width) * 100
        setSplitPosition(Math.min(Math.max(percentage, 0), 100))
      }
    }

    const slider = sliderRef.current
    if (slider) {
      slider.addEventListener('mousemove', handleMouseMove)
      return () => slider.removeEventListener('mousemove', handleMouseMove)
    }
  }, [])

  return (
    <section className="relative w-full min-h-screen bg-gradient-to-br from-green-50 to-white overflow-hidden flex items-center">
      <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
      
      <div className="container mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 px-6 sm:px-12 md:px-16 py-10 items-center">
        
        <div className="space-y-6 text-center lg:text-left">
          <h2 className="text-lg md:text-xl text-green-800 font-medium leading-relaxed">
            Reawaken Your Skin’s Youth with <span className="font-bold">Sculptra®</span>
          </h2>
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-gray-900 leading-tight">
            Advanced Skincare
            <span className="block text-green-600 mt-2">Laser Treatment</span>
          </h1>
          
          <div className="flex flex-wrap items-center justify-center lg:justify-start gap-2 bg-green-100 text-green-800 px-3 py-2 rounded-full text-sm font-medium shadow-md">
            {[...Array(5)].map((_, i) => (
              <Star key={i} className="w-4 h-4 text-yellow-500" />
            ))}
            <span>1,368 Reviews | 2 Questions, 32 Answers</span>
          </div>
          
          <ul className="space-y-2 text-gray-700 text-base">
            {[ 
              "Immediate results with multiple sessions for long-term benefits.",
              "Non-surgical procedure that reduces wrinkles and fine lines.",
              "Promotes collagen production and skin tightening.",
              "Effective for treating sun damage and acne scars."
            ].map((item, index) => (
              <li key={index} className="flex items-center gap-2">
                <Check className="w-5 h-5 text-green-600" /> {item}
              </li>
            ))}
          </ul>
          
          <div className="bg-white/70  p-6 md:p-8 rounded-xl shadow-xl space-y-4 border border-gray-300 transition-transform transform hover:scale-[1.02] duration-300 ease-in-out">
            <h3 className="text-xl font-semibold text-gray-900 text-center">
              Book a Private Consultation
            </h3>
            <p className="text-green-600 font-medium text-center">
              🔥 300 viewing now + Only <span className="font-bold">3 slots left</span> this week!
            </p> 
            <div className="grid gap-3 sm:grid-cols-2">
              {["Full Name", "Email Address", "Phone Number"].map((placeholder, index) => (
                <Input 
                  key={index}
                  type={placeholder === "Email Address" ? "email" : placeholder === "Phone Number" ? "tel" : "text"}
                  placeholder={placeholder}
                  className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm"
                />
              ))}
            </div>
            
            {/* Add the Remarks field here */}
            <div>
              <Input
                placeholder="Additional remarks (optional)"
                className="w-full px-3 py-2 rounded-lg border-gray-300 shadow-sm"
              />
            </div>
            
            <Button className="w-full bg-green-600 hover:bg-green-700 text-white rounded-lg py-3 font-semibold text-base shadow-md transition duration-200 ease-in-out transform hover:scale-[1.05]">
              Schedule Your Free Session <ArrowRight className="w-4 h-4 inline-block ml-1" />
            </Button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="relative h-[250px] sm:h-[350px] md:h-[450px] lg:h-[500px] cursor-ew-resize rounded-lg overflow-hidden shadow-lg transition-transform duration-300 ease-in-out"
        >
          <Image src="/img/before3.jpg" alt="Before treatment" fill className="object-cover transition-opacity duration-[0.5s]" priority />
          <div
            className="absolute inset-0"
            style={{
              clipPath: `polygon(${splitPosition}% 0, 100% 0, 100% 100%, ${splitPosition}% 100%)`,
            }}
          >
            <Image src="/img/brfore4.jpg" alt="After treatment" fill className="object-cover transition-opacity duration-[0.5s]" priority />
          </div>
          <div
            className="absolute top-0 bottom-0 w-px bg-white cursor-ew-resize"
            style={{ left: `${splitPosition}%`, transform: `translateX(-50%)` }}
          >
            <div className="absolute top-1/2 -translate-y-1/2 w-[24px] h-[24px] bg-white rounded-full shadow-md flex items-center justify-center border border-green-500">
              <div className="w-[16px] h-[16px] flex items-center justify-center text-green-600">⋮</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
