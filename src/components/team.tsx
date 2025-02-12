'use client'
import { Card } from '@/components/ui/card'
import { ChevronRight, Star } from 'lucide-react'

interface TeamMember {
  id: number
  name: string
  title: string
  imageUrl: string
  specialties?: string[]
  experience?: string
}

const doctors: TeamMember[] = [
  {
    id: 1,
    name: 'DR. ARIS',
    title: 'Medical Aesthetic Doctor',
    imageUrl: '/img/aris.png',
    specialties: ['Facial Contouring', 'Skin Rejuvenation'],
    experience: '15+ Years Experience',
  },
  {
    id: 2,
    name: 'DR. PREETHA',
    title: 'Medical Aesthetic Doctor',
    imageUrl: '/img/preetha.png',
    specialties: ['Anti-Aging', 'Body Sculpting'],
    experience: '12+ Years Experience',
  }, 
  {
    id: 3,
    name: 'DR. ASHVINIA',
    title: 'Medical Aesthetic Doctor',
    imageUrl: '/img/ashvini.jpg',
    specialties: ['Dermal Fillers', 'Laser Treatments'],
    experience: '10+ Years Experience',
  },
  {
    id: 4,
    name: 'DR. CHARMAINE',
    title: 'Medical Aesthetic Doctor',
    imageUrl: '/img/charmaine.png',
    specialties: ['Skin Care', 'Hair Restoration'],
    experience: '8+ Years Experience',
  },
]

export default function TeamSection() {
  return (
    <section className="py-16 bg-gradient-to-b from-white to-gray-50">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-clip-text text-transparent bg-green-600">
            Meet Our Expert Team
          </h2>
          <p className="text-gray-600 text-lg">
            Combining expertise with artistry to help you achieve your aesthetic goals
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {doctors.map((doctor) => (
            <Card
              key={doctor.id}
              className="group relative h-[450px] rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 cursor-pointer"
            >
              <div className="absolute inset-0 w-full h-full">
                <img
                  src={doctor.imageUrl}
                  alt={doctor.name}
                  className="w-full h-full object-cover object-center transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/60 to-transparent opacity-80 group-hover:opacity-90 transition-opacity duration-300" />
              </div>

              <div className="absolute inset-0 flex flex-col justify-end p-6">
                <div className="flex items-center mb-2">
                  <Star className="w-4 h-4 text-yellow-400 mr-1" />
                  <span className="text-yellow-400 text-sm">{doctor.experience}</span>
                </div>

                <h3 className="font-bold text-2xl text-white mb-2">{doctor.name}</h3>
                <p className="text-gray-300 mb-3">{doctor.title}</p>

                <div className="space-y-2 mb-4">
                  {doctor.specialties?.map((specialty, idx) => (
                    <div key={idx} className="flex items-center text-sm text-gray-200">
                      <ChevronRight className="w-4 h-4 mr-1 text-emerald-400" />
                      {specialty}
                    </div>
                  ))}
                </div>

                <button className="w-full py-2 px-4 bg-green-600 text-white rounded-lg transition-colors duration-300 opacity-0 group-hover:opacity-100 transform translate-y-2 group-hover:translate-y-0">
                  Book Consultation
                </button>
              </div>
            </Card>
          ))}
        </div>

        <div className="mt-16 text-center max-w-3xl mx-auto">
          <p className="text-black leading-relaxed">
            Our team of board-certified medical aesthetic doctors brings together decades of
            experience in advanced cosmetic procedures. We&apos;re committed to delivering
            natural-looking results with the highest standards of safety and care.
          </p>
        </div>
      </div>
    </section>
  )
}
