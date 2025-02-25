import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Calendar, Clock, User, Coffee, Star, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

export default function Treatment() {
  return (
    <div className="">
      <div className="container mx-auto px-6 py-12 md:py-20 max-w-6xl">
        <section className="text-center mb-16">
          <div className="inline-block bg-green-300 text-green-900 px-4 py-1 rounded-full text-sm font-semibold mb-4 shadow-md">
            Advanced Skincare
          </div>
          <h1 className="text-5xl md:text-6xl font-extrabold text-green-900 mb-6 leading-tight">
            CO<sub>2</sub> Laser Skin Resurfacing
          </h1>
          <p className="text-lg text-green-800 max-w-2xl mx-auto leading-relaxed">
            Reveal smoother, younger-looking skin with our clinically proven advanced laser treatment technology.
          </p>
        </section>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {[
            { icon: <User />, title: 'Targeted Areas', description: 'Precise treatment for facial acne scars and texture improvement.' },
            { icon: <Clock />, title: 'Quick Sessions', description: 'Typically completed in under an hour with minimal discomfort.' },
            { icon: <Calendar />, title: 'Treatment Plan', description: 'Optimal results with personalized treatment schedule.' },
            { icon: <Coffee />, title: 'Fast Recovery', description: 'Resume your normal activities with minimal downtime.' },
          ].map((item, index) => (
            <Card key={index} className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 rounded-xl bg-green-100">
              <CardContent className="flex flex-col items-center p-6 space-y-4">
                <div className="bg-green-300 p-4 rounded-full transition-colors duration-300 shadow-lg">
                  {item.icon}
                </div>
                <h3 className="font-bold text-xl text-black">{item.title}</h3>
                <p className="text-black text-center">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>

        <section className="border border-black rounded-2xl shadow-xl p-10 md:p-12 mb-16 max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-black mb-6 text-center">How It Works</h2>
          <p className="text-black text-lg leading-relaxed text-center">
            Laser treatment for acne scars stimulates your body's natural healing process, promoting new, healthy skin tissue.
          </p>
          <div className="mt-6 border-t border-green-400 pt-6">
            <h3 className="text-xl font-semibold text-black mb-4 text-center">Key Benefits</h3>
            <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-black">
              {['Reduced acne scarring', 'Improved skin texture', 'Diminished fine lines', 'Even skin tone', 'Stimulated collagen production', 'Long-lasting results'].map((benefit, index) => (
                <li key={index} className="flex items-center space-x-2">
                  <Star className="w-5 h-5 text-black" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        </section>

        <section className="bg-green-700 text-white rounded-2xl shadow-lg p-10 md:p-12 text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Your Skin?</h2>
          <p className="text-lg mb-6 max-w-2xl mx-auto">
            Our expert dermatologists are ready to create a personalized treatment plan just for you.
          </p>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Button size="lg" className="bg-white text-green-700 hover:bg-green-200 px-6 py-3 rounded-lg transition-all font-medium">
              View Pricing Options
            </Button>
            <Button variant="outline" size="lg" className="border-white text-green-700 hover:bg-green-600 px-6 py-3 rounded-lg transition-all font-medium">
              Schedule a Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </div>
        </section>

        <section className="max-w-4xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-green-900 mb-8 text-center">Patient Success Stories</h2>
          <div className="bg-green-100 rounded-xl shadow-md p-6 border-l-4 border-green-600 italic text-green-800">
            <p className="text-lg mb-4">
              "After just three treatments, the improvement in my acne scars was remarkable. The staff was professional and caring throughout the entire process. I couldn't be happier with my results!"
            </p>
            <div className="font-medium not-italic text-green-900">— Sarah T., Actual Patient</div>
          </div>
        </section>
      </div>
    </div>
  );
}
