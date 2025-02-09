"use client";
import { FaDollarSign } from "react-icons/fa";
import { IoMdCheckmarkCircle } from "react-icons/io";
import Link from "next/link";
import { useRef } from "react";

const products = [
  {
    name: "Fractional CO2 Laser Treatment",
    price: "$250 per session",
    description: "Effective treatment for wrinkles, fine lines, and pigmentation.",
    imageUrl: "/img/co2.jpeg",
    available: true,
  },
  {
    name: "Acne Scar Removal",
    price: "$200 per session",
    description: "Reduces acne scars, making skin smoother.",
    imageUrl: "/img/acne.jpg",
    available: true,
  },
  {
    name: "Sun Damage Correction",
    price: "$300 per session",
    description: "Treatment for sun damage, improving skin tone.",
    imageUrl: "/img/sun.jpg",
    available: false,
  },
  {
    name: "Wrinkle Reduction Therapy",
    price: "$180 per session",
    description: "Non-invasive wrinkle reduction.",
    imageUrl: "/img/wrinkle.webp",
    available: true,
  },
  {
    name: "Hair Restoration Treatment",
    price: "$350 per session",
    description: "Stimulates hair growth and restores thinning hair.",
    imageUrl: "/img/hair.jpg",
    available: true,
  },
  {
    name: "Skin Tightening",
    price: "$280 per session",
    description: "Tightens skin and reduces sagging.",
    imageUrl: "/img/tight.jpeg",
    available: true,
  },
  {
    name: "Fractional RF Treatment",
    price: "$300 per session",
    description: "Radiofrequency treatment for skin rejuvenation.",
    imageUrl: "/img/rf.webp",
    available: true,
  },
  {
    name: "Pigmentation Treatment",
    price: "$220 per session",
    description: "Targets and reduces pigmentation.",
    imageUrl: "/img/pigment.jpg",
    available: false,
  },
  {
    name: "Laser Hair Removal",
    price: "$150 per session",
    description: "Long-lasting hair removal treatment.",
    imageUrl: "/img/Removal.webp",
    available: true,
  },
  {
    name: "Anti-Aging Facial",
    price: "$180 per session",
    description: "Facial treatment to reduce signs of aging.",
    imageUrl: "/img/Anti.webp",
    available: true,
  },
  {
    name: "Acne Treatment",
    price: "$160 per session",
    description: "Treats active acne and reduces outbreaks.",
    imageUrl: "/img/acnet.jpg",
    available: true,
  },
  {
    name: "Scar Treatment",
    price: "$240 per session",
    description: "Reduces scars and smoothens skin texture.",
    imageUrl: "/img/scar.webp",
    available: true,
  },
  {
    name: "Dark Circle Treatment",
    price: "$190 per session",
    description: "Reduces the appearance of dark circles under the eyes.",
    imageUrl: "/img/dark.jpg",
    available: false,
  },
  {
    name: "Pore Minimizing Treatment",
    price: "$210 per session",
    description: "Reduces pore size and refines skin texture.",
    imageUrl: "/img/pore.jpeg",
    available: true,
  },
  {
    name: "Chemical Peel",
    price: "$130 per session",
    description: "Exfoliates skin for a fresh, youthful appearance.",
    imageUrl: "/img/chemical.jpg",
    available: true,
  },
];

export const Products = () => {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: number) => {
    const scrollAmount = 300;
    if (scrollRef.current) {
      scrollRef.current.scrollBy({
        left: direction * scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-gray-50 py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <span className="bg-green-100 text-green-800 text-sm font-medium px-4 py-1 rounded-full">
            Our Services
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mt-4">
            Our Treatments & Products
          </h2>
        </div>

        <div className="relative">
          <button
            onClick={() => scroll(-1)}
            className="absolute left-0 top-1/2 transform -translate-y-1/2 text-gray-600 bg-white/80 p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10 backdrop-blur-sm"
          >
            &#8592;
          </button>

          <div
            ref={scrollRef}
            className="flex overflow-x-auto space-x-6 pb-8 scrollbar-hide"
          >
            {products.map((product, index) => (
              <div
                key={index}
                className="min-w-[320px] max-w-[350px] bg-white rounded-2xl shadow-lg overflow-hidden flex flex-col transition-transform hover:shadow-xl"
              >
                <div className="relative h-[200px] w-full">
                  <img
                    src={product.imageUrl}
                    alt={product.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <h3 className="text-xl font-semibold text-gray-900 mb-2">
                    {product.name}
                  </h3>
                  <div className="flex items-center gap-2 mb-3">
                    <FaDollarSign className="text-green-600 text-xl" />
                    <p className="text-green-600 font-semibold">{product.price}</p>
                  </div>
                  <p className="text-gray-600 mb-4 flex-grow">
                    {product.description}
                  </p>

                  <div className="flex justify-between items-center mt-auto">
                    {product.available ? (
                      <div className="flex items-center text-green-600">
                        <IoMdCheckmarkCircle className="text-xl mr-2" />
                        <span className="font-medium">Available Now</span>
                      </div>
                    ) : (
                      <div className="text-red-500 font-medium flex items-center">
                        <span className="mr-2">⚠</span>
                        Currently Unavailable
                      </div>
                    )}
                    {product.available && (
                      <Link 
                        href="/contact" 
                        className="bg-green-600 hover:bg-green-700 text-white px-6 py-2 rounded-full text-sm font-medium transition-all hover:shadow-lg"
                      >
                        Book Now
                      </Link>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <button
            onClick={() => scroll(1)}
            className="absolute right-0 top-1/2 transform -translate-y-1/2 text-gray-600 bg-white/80 p-4 rounded-full shadow-lg hover:bg-gray-100 transition-all z-10 backdrop-blur-sm"
          >
            &#8594;
          </button>
        </div>
      </div>
    </section>
  );
};

export default Products;    