import { Check } from "lucide-react"
import { Button } from "@/components/ui/button"

export default function Top1() {
  return (
    <div className="container mx-auto px-4 py-12">
      <div className="grid lg:grid-cols-2 gap-8 items-center">
        <div className="space-y-8">
          <div className="space-y-6">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif tracking-tight text-slate-900">
              Melasma Hybrid <span className="block">Laser Treatment</span>
              <span className="block text-slate-600">@SGD 88 Nett</span>
            </h1>
            <p className="text-xl text-slate-600">Gentle and precise care for a clearer, more even complexion.</p>
          </div>
          <p className="text-slate-600 leading-relaxed">
            This multi-functional laser treatment targets pigmentation, reduces melasma, and supports skin rejuvenation
            while being suitable for various skin concerns.
          </p>

          <ul className="space-y-4">
            {[
              "Reduces Pigmentation & Melasma",
              "Refines Skin Texture & Tone",
              "Supports Skin Renewal",
              "Addresses Acne Scars & Fine Lines",
            ].map((benefit) => (
              <li key={benefit} className="flex items-center gap-3">
                <Check className="w-5 h-5 text-emerald-600" />
                <span className="text-slate-600">{benefit}</span>
              </li>
            ))}
          </ul>

          <Button className="bg-[#BBA17A] hover:bg-[#A68B68] text-white px-8 py-6 text-lg rounded-md">
            Book Appointment
          </Button>
        </div>

        <div className="relative h-[600px] w-full">
          <img
            src="/img/girl2.png"
            alt="Laser treatment result showing clear, radiant skin"
            className="object-cover w-full h-full rounded-lg"
          />
        </div>
      </div>
    </div>
  )
}

