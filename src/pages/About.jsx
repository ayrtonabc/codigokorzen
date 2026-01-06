import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { Link } from 'react-router-dom';
import { Hammer, Heart, Cpu } from 'lucide-react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-32">
        {/* Hero Section */}
        <section className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-1 md:order-2">
              <div className="relative aspect-square overflow-hidden rounded-lg shadow-xl md:w-4/5 mx-auto">
                <img src="/img/cnc.jpg" alt="Praca w warsztacie CNC" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            <div className="order-2 md:order-1">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-korzen-charcoal mb-6">
                Rzemiosło spotyka Technologię
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed text-justify">
                KORZEŃ to nie tylko marka – to powrót do źródeł z nowoczesnym podejściem. 
                Nasza historia zaczęła się w małym garażowym warsztacie, gdzie zapach świeżo ciętego drewna 
                mieszał się z dźwiękiem maszyn CNC.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Cpu className="w-6 h-6 text-korzen-olive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-korzen-charcoal">Technologia</h3>
                    <p className="text-sm text-gray-600">Precyzja cięcia CNC.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Hammer className="w-6 h-6 text-korzen-olive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-korzen-charcoal">Rzemiosło</h3>
                    <p className="text-sm text-gray-600">Ręczne wykończenie.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* The Story Section */}
        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-korzen-charcoal mb-4">
                Nasza Filozofia
              </h2>
              <div className="w-24 h-1 bg-korzen-olive mx-auto"></div>
            </div>

            <div className="space-y-12 text-lg text-gray-600 leading-relaxed">
              <p>
                Wierzymy, że w erze masowej produkcji brakuje przedmiotów z duszą. Dlatego każdy nasz produkt 
                przechodzi przez ręce rzemieślnika.
              </p>

              <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-korzen-olive my-8">
                <p className="italic text-xl text-korzen-charcoal">
                  "Maszyny CNC zapewniają nam chirurgiczną precyzję cięcia, 
                  niezbędną przy skomplikowanych wzorach skarbonek czy grawerach, ale to ludzka ręka nadaje 
                  ostateczny szlif, gładkość i charakter."
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center">
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-korzen-olive/10 rounded-full flex items-center justify-center mb-4 text-korzen-olive">
                       <Cpu className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-korzen-charcoal mb-2">Precyzja</h3>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-korzen-olive/10 rounded-full flex items-center justify-center mb-4 text-korzen-olive">
                       <Hammer className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-korzen-charcoal mb-2">Warsztat</h3>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-korzen-olive/10 rounded-full flex items-center justify-center mb-4 text-korzen-olive">
                       <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-korzen-charcoal mb-2">Pasja</h3>
                 </div>
              </div>

              <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                     <img src="/img/tablas cocina.jpg" alt="Deski kuchenne" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                     <img src="/img/cartelito.jpg" alt="Grawer" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                     <img src="/img/alcancianiños.jpg" alt="Skarbonki" className="w-full h-full object-cover" />
                  </div>
               </div>
              
              <div className="mt-16 text-center">
                <Link to="/category/kitchen-wood" className="inline-block bg-korzen-olive text-white px-8 py-3 rounded-sm hover:bg-korzen-wood transition-colors tracking-widest uppercase text-sm font-bold">
                  Zobacz nasze produkty
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default About;
