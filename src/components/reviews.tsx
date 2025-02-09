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
    <section className="py-12 px-4 md:px-6 bg-background">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          Our Client&apos;s Reviews
        </h2>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((review) => (
            <Card key={review.id} className="h-full">
              <CardContent className="p-6">
                <div className="space-y-4">
                  <div className="flex items-center space-x-0.5">
                    {[...Array(review.rating)].map((_, i) => (
                      <Star
                        key={i}
                        className="w-5 h-5 fill-primary text-primary"
                        aria-hidden="true"
                      />
                    ))}
                  </div>

                  <blockquote className="text-lg text-muted-foreground">
                    {review.content}
                  </blockquote>

                  <footer className="font-semibold text-green-600">{review.name}</footer>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 text-center"></div>
      </div>
    </section>
  )
}
