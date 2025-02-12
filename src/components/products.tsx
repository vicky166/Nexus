'use client'
import { FaDollarSign } from 'react-icons/fa';
import { IoMdCheckmarkCircle } from 'react-icons/io';
import Link from 'next/link';
import { useRef } from 'react';

const products = [
  {
    name: 'Fractional CO2 Laser Treatment',
    price: '$250 per session',
    description: 'Effective treatment for wrinkles, fine lines, and pigmentation.',
    imageUrl: '/img/laser.jpg',
    available: true,
  },
  {
    name: 'Acne Scar Removal',
    price: '$200 per session',
    description: 'Reduces acne scars, making skin smoother.',
    imageUrl: '/img/acne.jpg',
    available: true,
  },
  {
    name: 'Sun Damage Correction',
    price: '$300 per session',
    description: 'Treatment for sun damage, improving skin tone.',
    imageUrl: '/img/sun.jpg',
    available: false,
  },
  {
    name: 'Wrinkle Reduction Therapy',
    price: '$180 per session',
    description: 'Non-invasive wrinkle reduction.',
    imageUrl: '/img/wrinkle.webp',
    available: true,
  },
  {
    name: 'Hair Restoration Treatment',
    price: '$350 per session',
    description: 'Stimulates hair growth and restores thinning hair.',
    imageUrl: '/img/hair.jpg',
    available: true,
  },
  {
    name: 'Skin Tightening',
    price: '$280 per session',
    description: 'Tightens skin and reduces sagging.',
    imageUrl: '/img/tight.jpeg',
    available: true,
  },
  {
    name: 'Fractional RF Treatment',
    price: '$300 per session',
    description: 'Radiofrequency treatment for skin rejuvenation.',
    imageUrl: '/img/rf.webp',
    available: true,
  },
  {
    name: 'Pigmentation Treatment',
    price: '$220 per session',
    description: 'Targets and reduces pigmentation.',
    imageUrl: '/img/pigment.jpg',
    available: false,
  },
  {
    name: 'Laser Hair Removal',
    price: '$150 per session',
    description: 'Long-lasting hair removal treatment.',
    imageUrl: '/img/Removal.webp',
    available: true,
  },
  {
    name: 'Anti-Aging Facial',
    price: '$180 per session',
    description: 'Facial treatment to reduce signs of aging.',
    imageUrl: '/img/Anti.webp',
    available: true,
  },
  {
    name: 'Acne Treatment',
    price: '$160 per session',
    description: 'Treats active acne and reduces outbreaks.',
    imageUrl: '/img/acnet.jpg',
    available: true,
  },
  {
    name: 'Scar Treatment',
    price: '$240 per session',
    description: 'Reduces scars and smoothens skin texture.',
    imageUrl: '/img/scar.webp',
    available: true,
  },
  {
    name: 'Dark Circle Treatment',
    price: '$190 per session',
    description: 'Reduces the appearance of dark circles under the eyes.',
    imageUrl: '/img/dark.jpg',
    available: false,
  },
  {
    name: 'Pore Minimizing Treatment',
    price: '$210 per session',
    description: 'Reduces pore size and refines skin texture.',
    imageUrl: '/img/pore.jpeg',
    available: true,
  },
  {
    name: 'Chemical Peel',
    price: '$130 per session',
    description: 'Exfoliates skin for a fresh, youthful appearance.',
    imageUrl: '/img/chemical.jpg',
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
        behavior: 'smooth',
      });
    }
  };

  return (
    <section className="container mx-auto px-4 py-12">
      <h2 className="text-4xl font-bold text-center text-white mb-12">Our Treatments & Products</h2>
      
      <div className="relative flex items-center">
        <button
          onClick={() => scroll(-1)}
          className="absolute left-2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-lg"
        >
          &#8592;
        </button>
        
        <div ref={scrollRef} className="flex overflow-x-auto space-x-6 pb-4 scrollbar-hide px-12">
          {products.map((product, index) => (
            <div
              key={index}
              className="min-w-[320px] max-w-[350px] bg-white shadow-lg rounded-xl overflow-hidden transition-transform transform hover:scale-105"
            >
              <img
                src={product.imageUrl}
                alt={product.name}
                className="w-full h-[160px] object-cover"
              />
              <div className="p-6 flex flex-col">
                <h3 className="text-xl font-semibold text-gray-900">{product.name}</h3>
                <div className="flex items-center gap-2 mt-2">
                  <FaDollarSign className="text-[#F5B041] text-lg" />
                  <p className="text-gray-700 text-lg">{product.price}</p>
                </div>
                <p className="text-gray-600 mt-2 text-sm">{product.description}</p>
                <div className="mt-4 flex justify-between items-center">
                  {product.available ? (
                    <div className="flex items-center text-green-600">
                      <IoMdCheckmarkCircle className="text-lg mr-1" />
                      <span className="text-sm">Available Now</span>
                    </div>
                  ) : (
                    <div className="text-red-500 text-sm">Currently Unavailable</div>
                  )}
                  <Link href="/contact" className="text-blue-500 text-sm font-semibold">Book Now</Link>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <button
          onClick={() => scroll(1)}
          className="absolute right-2 z-10 bg-gray-800 text-white p-3 rounded-full shadow-lg"
        >
          &#8594;
        </button>
      </div>
    </section>
  );
};

export default Products;