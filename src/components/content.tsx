'use client'

import { useState, useEffect, useRef } from 'react'
import Image from 'next/image'
import { ArrowLeft, ArrowRight, Heart, Share2 } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { Alert, AlertDescription } from '@/components/ui/alert'

interface DetailImage {
  src: string
  description: string
  area: string
}

interface Transformation {
  id: number
  beforeImage: string
  afterImage: string
  title: string
  description: string
  detailImages: DetailImage[]
}

export default function MedicalInfo() {
  const [currentSlide, setCurrentSlide] = useState(0)
  const [splitPosition, setSplitPosition] = useState(50)
  const [likes, setLikes] = useState<Record<number, boolean>>({})
  const [showShareAlert, setShowShareAlert] = useState(false)
  const [selectedDetailImage, setSelectedDetailImage] = useState<DetailImage | null>(null)
  const sliderRef = useRef<HTMLDivElement>(null)

  const transformations: Transformation[] = [
    {
      id: 1,
      beforeImage: '/img/brfore4.jpg',
      afterImage: '/img/before3.jpg',
      title: 'Skin Restoration',
      description: 'Complete transformation with our innovative laser technology',
      detailImages: [
        {
          src: '/img/brfore4.jpg',
          description: 'Close-up of treatment area',
          area: 'Upper facial region',
        },
        { src: '/img/before3.jpg', description: 'Side view of results', area: 'Profile view' },
        { src: '/img/before3.jpg', description: 'Detailed texture view', area: 'Skin texture' },
      ],
    },
  ]

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

  const toggleLike = (id: number) => {
    setLikes((prev) => ({ ...prev, [id]: !prev[id] }))
  }

  const handleShare = () => {
    setShowShareAlert(true)
    setTimeout(() => setShowShareAlert(false), 3000)
  }

  const DetailImage = ({ detail, onClick }: { detail: DetailImage; onClick: () => void }) => (
    <div className="relative group cursor-pointer overflow-hidden rounded-lg" onClick={onClick}>
      <Image
        src={detail.src || '/placeholder.svg'}
        alt={detail.description}
        width={300}
        height={200}
        className="object-cover w-full h-32 sm:h-48 transition-transform group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
        <div className="text-white text-center p-2 sm:p-4">
          <p className="text-xs sm:text-sm font-medium">{detail.area}</p>
          <p className="text-xs mt-1 hidden sm:block">{detail.description}</p>
        </div>
      </div>
    </div>
  )

  return (
    <section className="w-full bg-gradient-to-br from-green-50 to-white py-8 lg:py-16">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 max-w-6xl">
        {showShareAlert && (
          <Alert className="fixed top-4 right-4 z-50 bg-green-100 border-green-200">
            <AlertDescription>Share link copied to clipboard!</AlertDescription>
          </Alert>
        )}

        <div className="text-center max-w-4xl mx-auto mb-8 lg:mb-12 space-y-4">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-bold text-gray-900">
            Real Results
            <span className="block text-green-600 mt-2">Before & After</span>
          </h2>
          <p className="text-base lg:text-lg text-gray-600">
            See the transformative power of our advanced skincare treatments through real client
            results.
          </p>
        </div>

        <div className="w-full mx-auto max-w-5xl">
          <div className="relative bg-white rounded-3xl shadow-2xl overflow-hidden p-2 sm:p-4 mb-4 sm:mb-6">
            <div
              ref={sliderRef}
              className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[600px] cursor-ew-resize rounded-xl sm:rounded-2xl overflow-hidden"
            >
              <Image
                src={transformations[currentSlide].beforeImage || '/placeholder.svg'}
                alt="Before treatment"
                fill
                className="object-cover"
                priority
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
              />
              <div
                className="absolute inset-0 will-change-transform"
                style={{
                  clipPath: `polygon(${splitPosition}% 0, 100% 0, 100% 100%, ${splitPosition}% 100%)`,
                }}
              >
                <Image
                  src={transformations[currentSlide].afterImage || '/placeholder.svg'}
                  alt="After treatment"
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 80vw, 1200px"
                />
              </div>
              <div
                className="absolute top-0 bottom-0 w-0.5 bg-white cursor-ew-resize transform will-change-transform"
                style={{ left: `${splitPosition}%`, transform: `translateX(-50%)` }}
              >
                <div className="absolute top-1/2 -translate-y-1/2 w-8 h-8 bg-white rounded-full shadow-lg flex items-center justify-center border-2 border-green-500">
                  <div className="w-6 h-6 flex items-center justify-center text-green-600">⋮</div>
                </div>
              </div>
              <span className="absolute top-4 left-4 bg-white/90 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-gray-700 shadow-md">
                Before
              </span>
              <span className="absolute top-4 right-4 bg-green-600 px-3 sm:px-4 py-1 sm:py-2 rounded-full text-xs sm:text-sm font-medium text-white shadow-md">
                After
              </span>
            </div>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 mb-4 sm:mb-6">
            {transformations[currentSlide].detailImages.map((detail, index) => (
              <DetailImage
                key={index}
                detail={detail}
                onClick={() => setSelectedDetailImage(detail)}
              />
            ))}
          </div>
          <div className="bg-white/95 backdrop-blur-sm p-4 sm:p-6 md:p-8 rounded-2xl sm:rounded-3xl shadow-md">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
              <div className="space-y-2 text-center md:text-left">
                <h3 className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-900">
                  {transformations[currentSlide].title}
                </h3>
                <p className="text-sm sm:text-base text-gray-600">
                  {transformations[currentSlide].description}
                </p>
              </div>
              <div className="flex items-center justify-center md:justify-end gap-2 sm:gap-4">
                <Button
                  onClick={() => toggleLike(transformations[currentSlide].id)}
                  variant="ghost"
                  className="rounded-full hover:bg-pink-50"
                >
                  <Heart
                    className={`w-5 h-5 sm:w-6 sm:h-6 ${likes[transformations[currentSlide].id] ? 'fill-pink-500 text-pink-500' : 'text-gray-400'}`}
                  />
                </Button>
                <Button
                  onClick={handleShare}
                  variant="ghost"
                  className="rounded-full hover:bg-green-50"
                >
                  <Share2 className="w-5 h-5 sm:w-6 sm:h-6 text-gray-400" />
                </Button>
                <div className="h-8 w-px bg-gray-200" />
                <div className="flex gap-2 sm:gap-3">
                  <Button
                    onClick={() =>
                      setCurrentSlide(
                        (prev) => (prev - 1 + transformations.length) % transformations.length,
                      )
                    }
                    variant="outline"
                    className="p-2 sm:p-3 rounded-full hover:bg-green-50 transition-all"
                  >
                    <ArrowLeft className="w-4 h-4 sm:w-6 sm:h-6" />
                  </Button>
                  <Button
                    onClick={() => setCurrentSlide((prev) => (prev + 1) % transformations.length)}
                    variant="outline"
                    className="p-2 sm:p-3 rounded-full hover:bg-green-50 transition-all"
                  >
                    <ArrowRight className="w-4 h-4 sm:w-6 sm:h-6" />
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="text-center mt-8 lg:mt-12">
          <Button className="bg-green-600 hover:bg-green-700 text-white px-6 sm:px-8 py-4 sm:py-6 rounded-full text-base sm:text-lg font-semibold shadow-lg hover:shadow-xl transition-all duration-300 group">
            Book Your Transformation
            <ArrowRight className="w-4 h-4 sm:w-5 sm:h-5 ml-2 group-hover:translate-x-1 transition-transform" />
          </Button>
        </div>
      </div>
      {selectedDetailImage && (
        <div
          className="fixed inset-0 bg-black/80 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedDetailImage(null)}
        >
          <div className="relative max-w-4xl w-full bg-white rounded-2xl overflow-hidden">
            <Image
              src={selectedDetailImage.src || '/placeholder.svg'}
              alt={selectedDetailImage.description}
              width={800}
              height={600}
              className="w-full h-auto"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-white/90 p-4">
              <h4 className="font-semibold text-lg">{selectedDetailImage.area}</h4>
              <p className="text-gray-600">{selectedDetailImage.description}</p>
            </div>
          </div>
        </div>
      )}
    </section>
  )
}
