import React from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { Link } from 'react-router-dom';
import { Recycle, Heart, Hammer, Leaf } from 'lucide-react';

const Upcycling = () => {
  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-32">
        {/* Hero / Intro Section */}
        <section className="py-20 bg-stone-100">
          <div className="max-w-7xl mx-auto px-4 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="relative aspect-square md:aspect-[4/5] overflow-hidden rounded-lg shadow-xl">
                <img src="/img/upcycling.jpg" alt="Pracownia" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-black/10" />
              </div>
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl md:text-5xl font-serif font-bold text-korzen-charcoal mb-6">
                Drugie życie szkła
              </h2>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                W mojej pracowni nic się nie marnuje. Ratuję butelki przed wyrzuceniem, by dać im drugie życie jako świece premium. 
                Każda butelka ma swoją historię, którą staram się wydobyć poprzez ręczną obróbkę.
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mt-8">
                <div className="flex items-start space-x-3">
                  <Recycle className="w-6 h-6 text-korzen-olive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-korzen-charcoal">Upcycling</h3>
                    <p className="text-sm text-gray-600">Dajemy drugie życie zużytym butelkom.</p>
                  </div>
                </div>
                <div className="flex items-start space-x-3">
                  <Leaf className="w-6 h-6 text-korzen-olive flex-shrink-0 mt-1" />
                  <div>
                    <h3 className="font-bold text-korzen-charcoal">Ekologia</h3>
                    <p className="text-sm text-gray-600">Tworzymy w 100% świadomie i lokalnie.</p>
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
                Jak to się zaczęło?
              </h2>
              <div className="w-24 h-1 bg-korzen-olive mx-auto"></div>
            </div>

            <div className="space-y-12 text-lg text-gray-600 leading-relaxed">
              <p>
                Nasza pracownia zrodziła się z połączenia dwóch rzeczy: <strong className="text-korzen-charcoal">pasji do tworzenia i potrzeby ekologii</strong>.
              </p>

              <p>
                Wszystko zaczęło się od miłości do świec sojowych. Marzyliśmy o własnej ekologicznej linii, ale szybko napotkaliśmy przeszkodę: zaporową cenę nowego szkła. 
                Zastanawialiśmy się, jak połączyć produkt przyjazny naturze z drogim, masowo produkowanym opakowaniem.
              </p>

              <div className="bg-stone-50 p-8 rounded-lg border-l-4 border-korzen-olive my-8">
                <p className="italic text-xl text-korzen-charcoal">
                  "Prawdziwy moment EUREKA nadszedł niespodziewanie. Pewnego wieczoru, delektując się winem, spojrzeliśmy na pustą butelkę przeznaczoną do kosza. 
                  W głowie pojawiło się proste pytanie: <span className="font-bold">A gdyby tak wykorzystać tę butelkę ponownie?</span>"
                </p>
              </div>

              <p>
                Wtedy zrozumieliśmy, że szlachetny materiał jest wszędzie – musieliśmy po prostu dać mu drugie życie.
              </p>

              <p>
                Tak rozpoczęła się nasza przygoda z upcyclingiem. W domowym zaciszu, metodą prób i błędów, ręcznie przecinaliśmy każdą butelkę. 
                Był to proces wymagający ogromnej cierpliwości: od precyzyjnego cięcia, przez długie godziny szlifowania i polerowania, aż do uzyskania idealnie gładkiej krawędzi.
              </p>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 my-12 text-center">
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-korzen-olive/10 rounded-full flex items-center justify-center mb-4 text-korzen-olive">
                       <Hammer className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-korzen-charcoal mb-2">Ręczna Praca</h3>
                    <p className="text-sm">Każdy produkt przechodzi przez nasze ręce.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-korzen-olive/10 rounded-full flex items-center justify-center mb-4 text-korzen-olive">
                       <Recycle className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-korzen-charcoal mb-2">Zero Waste</h3>
                    <p className="text-sm">Ratujemy szkło przed wysypiskiem.</p>
                 </div>
                 <div className="flex flex-col items-center">
                    <div className="w-16 h-16 bg-korzen-olive/10 rounded-full flex items-center justify-center mb-4 text-korzen-olive">
                       <Heart className="w-8 h-8" />
                    </div>
                    <h3 className="font-bold text-korzen-charcoal mb-2">Z Sercem</h3>
                    <p className="text-sm">Tworzymy przedmioty z duszą.</p>
                 </div>
              </div>

              <p>
                Dziś każdy przedmiot z <strong className="text-korzen-charcoal">Pracownia Korzeń</strong> jest owocem skrupulatnego rzemiosła. 
                W ten sposób łączymy unikalny design z troską o planetę. Wierzymy, że to, co inni uważają za odpad, może stać się małym dziełem sztuki.
              </p>

              <div className="my-12 grid grid-cols-1 md:grid-cols-3 gap-4">
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                     <img src="/img/upcycling2.webp" alt="Gotowe świece" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md">
                     <img src="/img/upcycling4.jpeg" alt="Detale" className="w-full h-full object-cover" />
                  </div>
                  <div className="aspect-square overflow-hidden rounded-lg shadow-md bg-stone-100 flex items-center justify-center p-8 text-center">
                     <p className="font-serif text-xl italic text-korzen-charcoal">"Piękno tkwi w prostocie i szacunku do materiału."</p>
                  </div>
               </div>
              
              <p className="text-center font-medium text-korzen-olive pt-8">
                Dlaczego wino? Bo od niego wszystko się zaczęło 😉
              </p>
            </div>
            
            <div className="mt-16 text-center">
              <Link to="/category/candles" className="inline-block bg-korzen-olive text-white px-8 py-3 rounded-sm hover:bg-korzen-wood transition-colors tracking-widest uppercase text-sm font-bold">
                Zobacz nasze świece
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default Upcycling;
