"use client"
import React, { useState } from 'react';
import { Check, X, Calendar, Clock, Star, ChevronRight, Users, ArrowRight, Shield, Heart, Sparkles, Award } from 'lucide-react';
import { Card, CardContent } from '@/components/ui/card';

const SculptraComponent = () => {
  const [activeTab, setActiveTab] = useState(0); 

  const steps = [
    {
      icon: <Calendar className="w-10 h-10 text-green-600" />,
      title: 'The Conversation',
      content:
        "We don't just map your face - we listen to your story. Understanding your goals is as important as your skin type.",
    },
    {
      icon: <Shield className="w-10 h-10 text-green-600" />,
      title: 'Precision Meets Comfort',
      content:
        'Numbing cream, ultra-fine needles, and post-treatment care including ice rollers and champagne make your experience comfortable and luxurious.',
    },
    {
      icon: <Sparkles className="w-10 h-10 text-green-600" />,
      title: 'The Results Unfold',
      content:
        'From subtle firmness in week 1 to noticeable transformation in month 2, watch your transformation unfold naturally.',
    },
  ];

  const faqs = [
    {
      question: 'Will I look overdone?',
      answer: 'Never. We use micro-droplet technique to avoid filler-face.',
    },
    {
      question: 'What if I change my mind?',
      answer: 'Sculptra® fades naturally if untouched. No lumps, no migration.',
    },
    {
      question: 'Can I afford this?',
      answer:
        'At RM3,000/vial (vs RM2,500 for HA fillers needing 3x/year), you save RM4,500 long-term.',
    },
    {
      question: 'Is Sculptra® safe?',
      answer: 'FDA-approved since 2009, with millions of treatments worldwide and an excellent safety record.',
    },
    {
      question: 'How many sessions do I need?',
      answer: 'Most clients achieve optimal results with 2-3 sessions, spaced 4-6 weeks apart.',
    },
    {
      question: 'Who is not a candidate?',
      answer: 'Those with active skin infections or certain autoimmune conditions should consult first.',
    },
  ];

  const timeline = [
    { 
      month: 'Month 1', 
      desc: 'Tiny PLLA particles create a scaffold under your skin.',
      icon: <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-green-600">1</span>
            </div>,
    },
    {
      month: 'Month 2-3',
      desc: "Your body responds by producing new collagen - your skin's natural 'plumping agent'.",
      icon: <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-green-600">2</span>
            </div>,
    },
    { 
      month: 'Month 6+', 
      desc: 'Results peak with up to 80% thicker skin (FDA clinical study).',
      icon: <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-4">
              <span className="text-2xl font-bold text-green-600">3</span>
            </div>,
    },
  ];

  const treatments = [
    {
      name: 'Sculptra®',
      duration: '2+ years',
      natural: true,
      collagen: true,
      bestFor: 'Gradual, full-face rejuvenation',
      highlight: true
    },
    {
      name: 'HA Fillers',
      duration: '6-12 months',
      natural: false,
      collagen: false,
      bestFor: 'Quick volume',
      highlight: false
    },
    {
      name: 'Collagen Creams',
      duration: '0 days',
      natural: false,
      collagen: false,
      bestFor: 'Surface hydration',
      highlight: false
    },
  ];

  const testimonials = [
    {
      name: "Sarah J.",
      age: 42,
      quote: "I was skeptical at first, but by month 3, I stopped using foundation. My skin just glows now!",
      before: "Fine lines, volume loss",
      after: "Natural fullness, radiant skin",
      rating: 5
    },
    {
      name: "Michelle T.",
      age: 53,
      quote: "People keep asking if I went on vacation. No one suspects I had anything done!",
      before: "Sagging jawline, hollow cheeks",
      after: "Defined contours, youthful volume",
      rating: 5
    },
    {
      name: "Jennifer L.",
      age: 47,
      quote: "The gradual change means no one noticed I had work done - they just think I look well-rested and happy.",
      before: "Tired appearance, nasolabial folds",
      after: "Refreshed, youthful appearance",
      rating: 5
    },
    {
      name: "Rebecca A.",
      age: 38,
      quote: "Started as preventative care and couldn't be happier. My skin looks better than it did 5 years ago!",
      before: "Early signs of aging",
      after: "Preserved youthfulness, improved texture",
      rating: 5
    }
  ];

  const benefits = [
    { 
      title: "Long-Lasting Results", 
      description: "Enjoy facial rejuvenation that lasts over 2 years, unlike traditional fillers.", 
      icon: <Clock className="w-8 h-8" /> 
    },
    { 
      title: "Natural-Looking", 
      description: "Gradual collagen stimulation ensures subtle, natural enhancement.", 
      icon: <Heart className="w-8 h-8" /> 
    },
    { 
      title: "FDA-Approved", 
      description: "Trusted technology with a proven safety record since 2009.", 
      icon: <Shield className="w-8 h-8" /> 
    },
    { 
      title: "Cost-Effective", 
      description: "Save money long-term compared to frequent filler treatments.", 
      icon: <Award className="w-8 h-8" /> 
    }
  ];

  return (
    <div className="max-w-7xl mx-auto bg-gradient-to-br from-green-50 to-white">
      
      <div className="relative overflow-hidden rounded-3xl shadow-2xl mb-24">
        <div className="absolute inset-0 bg-gradient-to-r from-green-600 to-green-400 opacity-10"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-green-100 rounded-full opacity-60 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-green-100 rounded-full opacity-60 transform -translate-x-1/3 translate-y-1/4"></div>
        
        <div className="relative z-10 py-20 px-8 md:px-16">
          <div className="max-w-6xl mx-auto md:flex items-center">
            <div className="md:w-3/5 md:pr-12">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-800 mb-6 leading-tight">
                Sculptra®: Your Skin's <span className="text-green-600 italic">Personal Trainer</span>
              </h1>
              <p className="text-xl text-gray-700 mb-8 leading-relaxed">
                Sculptra® uses poly-L-lactic acid (PLLA), a biocompatible ingredient that gradually restores youthful volume and radiance—like a personal trainer for your skin.
              </p>
              <div className="flex flex-wrap gap-6 mb-8">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 mr-3">
                      {benefit.icon}
                    </div>
                    <span className="text-gray-700 font-medium">{benefit.title}</span>
                  </div>
                ))}
              </div>
              <a
                href="#consultation"
                className="inline-block px-10 py-5 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 font-semibold text-lg"
              >
                Schedule Your Consultation <ChevronRight className="inline w-5 h-5 ml-1" />
              </a>
            </div>
            <div className="md:w-2/5 mt-12 md:mt-0">
              <div className="relative">
                <div className="w-72 h-72 rounded-full bg-green-50 border-8 border-white shadow-2xl mx-auto relative z-10 flex items-center justify-center">
                  <div className="text-center p-6">
                    <span className="block text-5xl font-bold text-green-600 mb-2">68%</span>
                    <span className="block text-xl text-gray-700">Increased<br />Collagen Production</span>
                    <span className="block text-sm text-gray-500 mt-2 font-medium">FDA Verified Results</span>
                  </div>
                </div>
                <div className="absolute top-0 left-0 w-full h-full">
                  <div className="w-20 h-20 absolute top-0 left-1/4 rounded-full bg-green-100 opacity-60"></div>
                  <div className="w-16 h-16 absolute bottom-1/4 right-0 rounded-full bg-green-200 opacity-60"></div>
                  <div className="w-24 h-24 absolute bottom-0 left-8 rounded-full bg-green-100 opacity-60"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-gray-800 mb-4 relative">
            The Transformation Journey
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Experience the gradual evolution of your skin's natural beauty over time
          </p>
        </div>
    
        <div className="relative px-4">
          <div className="absolute top-24 left-0 right-0 h-1 bg-green-200 hidden md:block"></div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {timeline.map((item, index) => (
              <div
                key={index}
                className="relative z-10"
              >
                <Card className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden h-full">
                  <div className="h-3 bg-gradient-to-r from-green-400 to-green-600"></div>
                  <CardContent className="p-8 flex flex-col items-center text-center">
                    {item.icon}
                    <h3 className="font-bold text-2xl text-gray-800 mb-3">{item.month}</h3>
                    <p className="text-gray-700 leading-relaxed">{item.desc}</p>
                  </CardContent>
                </Card>
              </div>
            ))}
          </div>
        </div>
      </div>

            <Card className="mb-24 border-none shadow-2xl overflow-hidden rounded-3xl">
        <div className="bg-gradient-to-r from-green-100 to-green-50 p-1">
          <CardContent className="p-8 md:p-12 bg-white rounded-2xl">
            <div className="text-center mb-12">
              <h2 className="inline-block text-4xl font-bold text-gray-800 mb-4 relative">
                Why Choose Sculptra®?
                <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
                See how Sculptra® compares to other treatments for natural, long-lasting results
              </p>
            </div>
            
            <div className="overflow-hidden rounded-xl shadow-lg">
              <div className="overflow-x-auto">
                <table className="w-full">
                  <thead>
                    <tr className="bg-gradient-to-r from-green-100 to-green-50">
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-700 border-b border-green-200">
                        Treatment
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-700 border-b border-green-200">
                        Results Last
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-700 border-b border-green-200">
                        Natural Look?
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-700 border-b border-green-200">
                        Collagen Boost?
                      </th>
                      <th className="px-6 py-5 text-left text-sm font-bold text-gray-700 border-b border-green-200">
                        Best For
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-green-50">
                    {treatments.map((treatment, index) => (
                      <tr
                        key={index}
                        className={treatment.highlight 
                          ? 'bg-green-50 bg-opacity-70 hover:bg-green-100 transition-colors duration-200' 
                          : 'hover:bg-gray-50 transition-colors duration-200'}
                      >
                        <td className="px-6 py-6 whitespace-nowrap text-sm font-semibold text-gray-800">
                          {treatment.highlight ? (
                            <div className="flex items-center">
                              <div className="w-3 h-3 bg-green-500 rounded-full mr-2"></div>
                              <span>{treatment.name}</span>
                            </div>
                          ) : (
                            treatment.name
                          )}
                        </td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-700">
                          {treatment.duration}
                        </td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm">
                          {treatment.natural ? (
                            <span className="text-green-600 flex items-center">
                              <Check className="w-5 h-5 mr-1" />
                              Yes
                            </span>
                          ) : (
                            <span className="text-red-500 flex items-center">
                              <X className="w-5 h-5 mr-1" />
                              No
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm">
                          {treatment.collagen ? (
                            <span className="text-green-600 flex items-center">
                              <Check className="w-5 h-5 mr-1" />
                              <span>
                                68% increase<sup>*</sup>
                              </span>
                            </span>
                          ) : (
                            <span className="text-red-500 flex items-center">
                              <X className="w-5 h-5 mr-1" />
                              No
                            </span>
                          )}
                        </td>
                        <td className="px-6 py-6 whitespace-nowrap text-sm text-gray-700">
                          {treatment.bestFor}
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <div className="bg-gray-50 p-4">
                <p className="text-sm text-gray-500 italic">
                  <sup>*</sup>Source: Journal of Cosmetic Dermatology, 2022
                </p>
              </div>
            </div>
          </CardContent>
        </div>
      </Card> 

      
      <div className="mb-24">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-gray-800 mb-4 relative">
            The Luxury Sculptra® Experience
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Every step of your journey is designed for comfort and extraordinary results
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4">
          {steps.map((step, index) => (
            <Card
              key={index}
              className="border-none shadow-xl hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 overflow-hidden group"
            >
              <div className="h-3 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-10 relative">
                <div className="absolute top-0 right-0 w-32 h-32 bg-green-100 rounded-full opacity-30 transform translate-x-8 -translate-y-8 group-hover:scale-125 transition-transform duration-500"></div>
                <div className="relative z-10">
                  <div className="mb-6 bg-green-50 w-20 h-20 rounded-full flex items-center justify-center">
                    {step.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">{step.title}</h3>
                  <p className="text-gray-700 leading-relaxed">{step.content}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>

      
      <div className="mb-24 px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-gray-800 mb-4 relative">
            Real Results, Real People
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Our clients share their transformative journeys with Sculptra®
          </p>
        </div>

        <div className="flex mb-8 justify-center">
          <div className="inline-flex bg-green-50 rounded-full p-1">
            {testimonials.map((_, index) => (
              <button
                key={index}
                onClick={() => setActiveTab(index)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-all ${
                  activeTab === index
                    ? 'bg-green-600 text-white shadow-md'
                    : 'text-gray-700 hover:bg-green-100'
                }`}
              >
                Story {index + 1}
              </button>
            ))}
          </div>
        </div>

        <div className="max-w-4xl mx-auto">
          <Card className="border-none shadow-2xl overflow-hidden">
            <div className="bg-gradient-to-r from-green-100 to-green-50 p-1">
              <CardContent className="p-8 md:p-12 bg-white rounded-lg">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className={activeTab === index ? 'block' : 'hidden'}>
                    <div className="mb-8 text-center">
                      <div className="w-20 h-20 bg-green-100 rounded-full mx-auto flex items-center justify-center mb-4">
                        <Users className="w-10 h-10 text-green-600" />
                      </div>
                      <div className="flex justify-center mb-2">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-5 h-5 fill-current text-yellow-500" />
                        ))}
                      </div>
                      <h3 className="text-xl font-semibold text-gray-800">{testimonial.name}, {testimonial.age}</h3>
                    </div>
                    
                    <div className="text-center mb-8">
                      <p className="text-2xl italic text-gray-700 leading-relaxed">"{testimonial.quote}"</p>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8 bg-green-50 p-6 rounded-xl">
                      <div className="text-center md:text-left">
                        <h4 className="font-medium text-gray-600 mb-2">Before Sculptra®:</h4>
                        <p className="text-gray-800 font-medium">{testimonial.before}</p>
                      </div>
                      <div className="text-center md:text-left">
                        <h4 className="font-medium text-green-600 mb-2">After Sculptra®:</h4>
                        <p className="text-gray-800 font-medium">{testimonial.after}</p>
                      </div>
                    </div>
                  </div>
                ))}
                
                <div className="mt-12 text-center">
                  <a
                    href="#testimonials"
                    className="inline-block px-8 py-4 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-lg hover:shadow-xl transition-all transform hover:scale-105 font-semibold text-lg"
                  >
                    See 9-Month Transformation Photos <ChevronRight className="inline w-5 h-5 ml-1" />
                  </a>
                </div>
              </CardContent>
            </div>
          </Card>
        </div>
      </div>

      
      <div className="mb-24 px-4">
        <div className="text-center mb-16">
          <h2 className="inline-block text-4xl font-bold text-gray-800 mb-4 relative">
            Your Questions, Answered
            <div className="absolute -bottom-3 left-0 right-0 h-1 bg-gradient-to-r from-green-300 to-green-500 rounded-full"></div>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto mt-6">
            Everything you need to know about your Sculptra® journey
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {faqs.map((faq, index) => (
            <Card
              key={index}
              className="border-none shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 h-full overflow-hidden"
            >
              <div className="h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <CardContent className="p-8">
                <div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mb-4">
                  <span className="text-xl font-bold text-green-600">Q</span>
                </div>
                <h4 className="font-bold text-gray-800 mb-4 text-lg">{faq.question}</h4>
                <p className="text-gray-700">{faq.answer}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>


      <Card className="border-none shadow-2xl overflow-hidden rounded-3xl relative">
        <div className="absolute inset-0 bg-gradient-to-br from-green-600 to-green-400 opacity-90"></div>
        <div className="absolute top-0 right-0 w-96 h-96 bg-white rounded-full opacity-10 transform translate-x-1/3 -translate-y-1/4"></div>
        <div className="absolute bottom-0 left-0 w-64 h-64 bg-white rounded-full opacity-10 transform -translate-x-1/3 translate-y-1/4"></div>
        
        <CardContent className="text-center py-20 px-8 relative z-10">
          <div className="max-w-4xl mx-auto">
            <div className="bg-white rounded-2xl p-12 shadow-2xl relative overflow-hidden">
              <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-green-400 to-green-600"></div>
              <div className="absolute -top-10 -right-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-green-100 rounded-full opacity-50"></div>
              
              <div className="relative z-10">
                <h2 className="text-4xl font-bold text-gray-800 mb-6">Special Offer Ending Soon</h2>
                <div className="inline-block bg-green-50 text-green-800 rounded-full px-6 py-3 font-semibold text-lg mb-8 border border-green-200">
                  Only 4 Discounted Vials Left
                </div>
                <p className="text-xl text-gray-700 mb-10">Limited time pricing for new clients</p>
                <a
                  href="#claim"
                  className="inline-block px-12 py-6 bg-gradient-to-r from-green-600 to-green-500 text-white rounded-full shadow-xl hover:shadow-2xl transition-all transform hover:scale-105 hover:-translate-y-1 font-semibold text-xl"
                >
                  Claim Your Trial Price <ArrowRight className="inline w-5 h-5 ml-2" />
                </a>
                <div className="mt-12 max-w-2xl mx-auto">
                  <p className="text-gray-600 italic">
                    P.S. The women who look 10 years younger didn't find a magic cream – they started
                    collagen treatments early. Where will your skin be in 6 months?
                  </p>
                </div>
              </div>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  );
};

export default SculptraComponent;