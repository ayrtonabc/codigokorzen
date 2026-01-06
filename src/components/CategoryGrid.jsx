import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const categories = [
  {
    id: 'kitchen',
    name: 'Kuchnia i drewno',
    description: 'Deski do krojenia, tace i akcesoria',
    image: '/img/tablas cocina.jpg',
    path: '/category/kitchen-wood',
    size: 'col-span-1 md:col-span-2 row-span-2', // Large block
  },
  {
    id: 'kids',
    name: 'Dla dzieci',
    description: 'Skarbonki i dekoracje',
    image: '/img/repisaniños.jpg',
    path: '/category/kids',
    size: 'col-span-1 row-span-1',
  },
  {
    id: 'glass',
    name: 'Szkło i świece',
    description: 'Upcycling i natura',
    image: '/img/velas.jpg',
    path: '/category/candles',
    size: 'col-span-1 row-span-1',
    customStyle: { backgroundSize: '100%', backgroundRepeat: 'no-repeat' },
  },
];

const CategoryGrid = () => {
  return (
    <section className="py-20 px-4 max-w-7xl mx-auto">
      <h2 className="text-3xl font-serif font-bold text-korzen-charcoal mb-12 text-center">Nasze kategorie</h2>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">
        {categories.map((cat, index) => (
          <Link 
            key={cat.id} 
            to={cat.path}
            className={`relative group overflow-hidden rounded-lg ${cat.size} bg-stone-100`}
          >
            <div 
              className="absolute inset-0 bg-center transition-transform duration-700 group-hover:scale-105 bg-cover"
              style={{ backgroundImage: `url("${cat.image}")`, ...cat.customStyle }}
            />
            <div className="absolute inset-0 bg-black/30 group-hover:bg-black/40 transition-colors" />
            
            <div className="absolute bottom-0 left-0 p-8 text-white">
              <h3 className="text-2xl font-serif font-bold mb-2">{cat.name}</h3>
              <p className="text-gray-200 opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-4 group-hover:translate-y-0 duration-300">
                {cat.description}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default CategoryGrid;
