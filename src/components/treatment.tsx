import { Card, CardContent } from '@/components/ui/card'
import { Calendar, Clock, User, Coffee } from 'lucide-react'
import { Button } from '@/components/ui/button'

export default function Treatment() {
  return (
    <div className="container mx-auto px-4 py-12 md:py-20 max-w-7xl">
      <section className="text-center mb-12 md:mb-16">
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
          CO2 Laser Skin Resurfacing
        </h1>
        <p className="text-lg text-gray-600 leading-relaxed">
          Reveal smoother, younger-looking skin with our advanced CO2 laser treatment.
        </p>
      </section>

      <section className="space-y-8 mb-16">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium text-primary">Laser treatment</span> for acne scars
          stimulates your body&apos;s natural healing process, promoting the creation of healthy
          tissue in the affected areas.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Our fractional CO2 laser delivers thousands of tiny beams of light to the skin, triggering
          repair and replacement of damaged tissue with new, healthy skin. The heat from the laser
          also helps to tighten existing collagen for improved skin firmness.
        </p>

        <p className="text-gray-700 leading-relaxed">
          The longevity of your CO2{' '}
          <span className="font-medium text-primary">laser resurfacing</span> results depends on
          diligent sun protection and a healthy lifestyle. Consistent sunscreen use and protective
          clothing can help maintain the benefits for years to come.
        </p>  
      </section>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="py-6 px-4">
            <div className="flex flex-col items-center text-center space-y-5">
              <User className="w-12 h-12 text-primary" />
              <h3 className="font-semibold text-lg text-gray-800">Targeted Areas</h3>
              <p className="text-sm text-gray-500">
                Effective on facial areas for acne scars and overall skin texture improvement.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="py-6 px-4">
            <div className="flex flex-col items-center text-center space-y-5">
              <Clock className="w-12 h-12 text-primary" />
              <h3 className="font-semibold text-lg text-gray-800">Treatment Time</h3>
              <p className="text-sm text-gray-500">
                Quick sessions, typically completed in under an hour.
              </p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="py-6 px-4">
            <div className="flex flex-col items-center text-center space-y-5">
              <Calendar className="w-12 h-12 text-primary" />
              <h3 className="font-semibold text-lg text-gray-800">Treatment Schedule</h3>
              <p className="text-sm text-gray-500">Optimal results with one session per month.</p>
            </div>
          </CardContent>
        </Card>

        <Card className="shadow-md hover:shadow-lg transition-shadow duration-300">
          <CardContent className="py-6 px-4">
            <div className="flex flex-col items-center text-center space-y-5">
              <Coffee className="w-12 h-12 text-primary" />
              <h3 className="font-semibold text-lg text-gray-800">Recovery</h3>
              <p className="text-sm text-gray-500">
                Expect minimal downtime, allowing you to resume your routine quickly.
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
      
      <section className="flex flex-col items-center gap-5 md:gap-6">
        <Button
          size="lg"
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 transition-colors duration-300"
        >
          Explore Laser Treatment Costs
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 transition-colors duration-300"
        >
          Schedule a Consultation
        </Button>
      </section>
    </div>
  )
}
