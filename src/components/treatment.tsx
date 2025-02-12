import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, Coffee } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Treatment() {
  return (
    <div className="container mx-auto px-6 py-12 md:py-20 max-w-8xl">
      <section className="text-center mb-14">
        <h1 className="text-4xl md:text-5xl font-extrabold text-gray-900 mb-4">
          CO2 Laser Skin Resurfacing
        </h1>
        <p className="text-lg text-gray-600 max-w-3xl mx-auto leading-relaxed">
          Reveal smoother, younger-looking skin with our advanced CO2 laser treatment.
        </p>
      </section>

      <section className="space-y-8 md:text-center md:max-w-4xl mx-auto">
        <p className="text-gray-700 leading-relaxed">
          <span className="font-medium text-green-600">Laser treatment</span> for acne scars
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
          <span className="font-medium text-green-600">laser resurfacing</span> results depends on
          diligent sun protection and a healthy lifestyle. Consistent sunscreen use and protective
          clothing can help maintain the benefits for years to come.
        </p>  
      </section>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {[{
          icon: <User className="w-12 h-12 text-green-600" />, 
          title: 'Targeted Areas',
          description: 'Effective on facial areas for acne scars and overall skin texture improvement.'
        }, {
          icon: <Clock className="w-12 h-12 text-green-600" />, 
          title: 'Treatment Time',
          description: 'Quick sessions, typically completed in under an hour.'
        }, {
          icon: <Calendar className="w-12 h-12 text-green-600" />, 
          title: 'Treatment Schedule',
          description: 'Optimal results with one session per month.'
        }, {
          icon: <Coffee className="w-12 h-12 text-green-600" />, 
          title: 'Recovery',
          description: 'Expect minimal downtime, allowing you to resume your routine quickly.'
        }].map((item, index) => (
          <Card key={index} className="shadow-md hover:shadow-lg transition-shadow duration-300 p-6 text-center">
            <CardContent className="flex flex-col items-center space-y-5">
              {item.icon}
              <h3 className="font-semibold text-lg text-gray-800">{item.title}</h3>
              <p className="text-sm text-gray-500">{item.description}</p>
            </CardContent>
          </Card>
        ))}
      </div>
      
      <section className="flex flex-col items-center gap-5 mt-14">
        <Button
          size="lg"
          className="w-full md:w-auto bg-green-600 hover:bg-green-700 text-white px-6 py-3 rounded-lg transition-all"
        >
          Explore Laser Treatment Costs
        </Button>
        <Button
          variant="outline"
          size="lg"
          className="w-full md:w-auto border-gray-300 text-gray-700 hover:bg-gray-50 px-6 py-3 rounded-lg transition-all"
        >
          Schedule a Consultation
        </Button>
      </section>
    </div>
  );
}
