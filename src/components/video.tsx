"use client"
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { useState, useEffect } from 'react'

export default function Video({
  title = "Reawaken Your Skin's Youth with Sculptra®",
  subtitle = "Because Aging is Inevitable, Looking Tired Doesn't Have to Be",
}) {
  const [isClient, setIsClient] = useState(false)

  useEffect(() => {
    setIsClient(true) 
  }, [])

  return (
    <Card className="w-full max-w-4xl mt-16 mb-16 mx-auto overflow-hidden">
      <CardHeader className="space-y-2 px-6 py-4">
        <h2 className="text-2xl md:text-3xl font-semibold tracking-tight">{title}</h2>
        <p className="text-lg text-muted-foreground italic">{subtitle}</p>
      </CardHeader>
      <CardContent className="p-0">
        <div className="relative w-full aspect-video">
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
            <div className="w-full h-64 bg-gray-800 flex items-center justify-center text-white">
              Loading Video...
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  )
}
