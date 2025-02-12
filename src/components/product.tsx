import React from 'react';
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Star, Clock, Calendar, Award, Heart } from "lucide-react";

const Product = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="text-center mb-8 space-y-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-gray-800">
            Sculptra® Premium Treatment
          </h1>
          <p className="text-base sm:text-lg md:text-xl text-gray-600 max-w-2xl mx-auto">
            Advanced Aesthetic Solution for Natural-Looking Results
          </p>
        </div>

        {/* Main Content */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Left Column - Image and Quick Info */}
          <div className="space-y-6">
            <Card className="overflow-hidden">
              <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] bg-white">
                <Image
                  src="/img/product.png"
                  alt="Sculptra product"
                  fill
                  className="object-contain p-4 sm:p-8"
                  priority
                />
              </div>
            </Card>

            {/* Quick Info Cards */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Clock className="w-5 h-5 text-green-600" />, title: "Duration", desc: "45-60 minutes" },
                { icon: <Calendar className="w-5 h-5 text-green-600" />, title: "Results Last", desc: "Up to 2 years" },
              ].map((item, index) => (
                <Card key={index} className="p-4 bg-green-50 flex items-start gap-3">
                  {item.icon}
                  <div>
                    <h3 className="font-medium">{item.title}</h3>
                    <p className="text-sm text-gray-600">{item.desc}</p>
                  </div>
                </Card>
              ))}
            </div>
          </div>

          {/* Right Column - Product Details */}
          <div className="space-y-6">
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="flex text-yellow-400">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} fill="currentColor" size={20} />
                  ))}
                </div>
                <span className="text-gray-600">(128 reviews)</span>
              </div>
              <Heart className="w-6 h-6 text-gray-400 hover:text-red-500 cursor-pointer" />
            </div>

            <div className="flex items-baseline gap-4">
              <span className="text-3xl sm:text-4xl font-bold text-green-600">$699</span>
              <span className="text-lg sm:text-xl text-gray-500 line-through">$899</span>
              <span className="bg-green-100 text-green-600 px-3 py-1 rounded-full text-sm">Limited Time Offer</span>
            </div>

            <p className="text-gray-600 leading-relaxed">
              Experience the transformative power of Sculptra®, an advanced aesthetic treatment that enhances facial contours naturally.
            </p>

            {/* Benefits Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { icon: <Award className="w-5 h-5 text-green-600" />, title: "FDA Approved", desc: "Safe and clinically proven" },
                { icon: <Clock className="w-5 h-5 text-green-600" />, title: "Long Lasting", desc: "Results that endure" },
                { icon: <Star className="w-5 h-5 text-green-600" />, title: "Natural Results", desc: "Gradual enhancement" },
                { icon: <Calendar className="w-5 h-5 text-green-600" />, title: "Quick Recovery", desc: "Minimal downtime" },
              ].map((benefit, index) => (
                <Card key={index} className="p-4 flex gap-3">
                  {benefit.icon}
                  <div>
                    <h3 className="font-medium">{benefit.title}</h3>
                    <p className="text-sm text-gray-600">{benefit.desc}</p>
                  </div>
                </Card>
              ))}
            </div>

            {/* Action Buttons */}
            <div className="space-y-4 pt-6">
              <Button className="w-full bg-green-600 hover:bg-green-700 h-12 text-lg">
                Schedule Your Consultation
              </Button>
              <Button variant="outline" className="w-full h-12 text-lg">
                Learn More About Treatment
              </Button>
              <p className="text-center text-sm text-gray-500">
                ✨ Free consultation • Flexible scheduling • Expert practitioners
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Product;