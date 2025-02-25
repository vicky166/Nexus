import { Card, CardContent } from '@/components/ui/card'
import { Star } from 'lucide-react'

interface Review {
  id: number
  name: string
  content: string
  rating: number
}

const reviews: Review[] = [
  {
    id: 1,
    name: 'Kumar Raj',
    content:
      'I had CO2 laser resurfacing for acne scars. It was effective, and the laser treatment cost was also very affordable.',
    rating: 5,
  },
  {
    id: 2,
    name: 'Mai Lin',
    content:
      "I can't even tell you the fractional laser benefits, as this was my second session, and I already loved my skin.",
    rating: 5,
  },
  {
    id: 3,
    name: 'Linh Nguyen',
    content:
      'The CO2 laser resurfacing treatment I received at a Nexus clinic was highly effective. It significantly reduced my acne scars, and my skin felt rejuvenated.',
    rating: 5,
  },
]

export default function Review() {
  return (
    <section className="py-16 px-6 md:px-8 text-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-center mb-12 text-black drop-shadow-lg">
          Our Client&apos;s Reviews
        </h2>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((review) => (
            <Card
              key={review.id}
              className="h-full bg-white/10 backdrop-blur-md shadow-xl border border-black rounded-xl overflow-hidden transition-all duration-300 hover:scale-105 hover:shadow-green-400/50 hover:border-green-400"
            >
              <CardContent className="p-8">
                <div className="space-y-5">
                  <div className="flex items-center space-x-1">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-6 h-6 fill-green-400 text-green-400 drop-shadow-md"
                        aria-hidden="true"
                      />
                    ))}
                  </div>
                  <blockquote className="text-lg text-black italic">
                    "{review.content}"
                  </blockquote>
                  <footer className="font-semibold text-green-400 text-lg">
                    — {review.name}
                  </footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  )
}
