"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useState, useEffect } from 'react'
import { Loader2 } from 'lucide-react'

export default function Video({
  title = "Reawaken Your Skin's Youth with Sculptra®",
  subtitle = "Because Aging is Inevitable, Looking Tired Doesn't Have to Be",
}) {
  const [isClient, setIsClient] = useState(false)
  useEffect(() => {
    setIsClient(true) 
  }, [])

  return (
    <Card className="w-full max-w-4xl mt-16 mb-16 mx-auto overflow-hidden shadow-lg border border-gray-700 rounded-2xl bg-gradient-to-b from-gray-900 to-black text-white">
      <CardHeader className="space-y-3 px-8 py-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-green-500">{title}</h2>
        <p className="text-lg text-gray-300 italic">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0 relative">
        <div className="relative w-full aspect-video rounded-b-2xl overflow-hidden border-t border-gray-700">
          {isClient ? (
            <iframe
              src={`https://www.youtube.com/embed/f10TT_9SCl0?rel=0&modestbranding=1`}
              title={title}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
              className="absolute top-0 left-0 w-full h-full border-0"
            /> 
          ) : (
            <div className="w-full h-64 flex items-center justify-center text-white bg-gray-800">
              <Loader2 className="w-8 h-8 animate-spin text-green-500" />
              <span className="ml-3">Loading Video...</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
