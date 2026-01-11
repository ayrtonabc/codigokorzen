import React, { useState, useEffect } from 'react';
import { Helmet } from 'react-helmet-async';
import { Star, Quote } from 'lucide-react';
import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import CategoryGrid from '../components/CategoryGrid';
import ProductCard from '../components/ProductCard';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import useProductStore from '../store/useProductStore';
import { useParams, Link } from 'react-router-dom';

const Home = () => {
  const { category } = useParams();
  const { products, loading, fetchProducts } = useProductStore();

  useEffect(() => {
    fetchProducts();
  }, []);

  const seoTexts = {
    'kitchen-wood': {
      title: 'Drewniane Deski do Krojenia i Akcesoria Kuchenne',
      description: 'Ręcznie robione deski do krojenia z litego dębu. Trwałe, antybakteryjne i ekologiczne. Sprawdź naszą ofertę akcesoriów kuchennych.',
      text: `
        <h3 class="text-xl font-bold mb-4">Dlaczego warto wybrać drewniane deski do krojenia?</h3>
        <p class="mb-4">
          <strong>Deski do krojenia drewniane</strong> to nie tylko tradycyjny element wyposażenia kuchni, ale przede wszystkim wybór podyktowany zdrowiem i funkcjonalnością. W przeciwieństwie do plastiku, naturalne drewno dębowe posiada właściwości <strong>antybakteryjne</strong> – zawarte w nim garbniki skutecznie zwalczają drobnoustroje, co czyni je najbezpieczniejszym podłożem do przygotowywania posiłków dla Twojej rodziny.
        </p>
        <p class="mb-4">
          Nasze deski "Sztorcowe" i klasyczne są wykonane z <strong>litego dębu</strong> sezonowanego, co gwarantuje ich wyjątkową trwałość. Odpowiednio pielęgnowana deska (regularne olejowanie) może służyć przez dziesięciolecia, stając się rodzinną pamiątką. Ponadto, drewno jest łaskawe dla Twoich noży – nie tępi ich tak szybko jak szkło czy kamień.
        </p>
        <h3 class="text-xl font-bold mb-4">Rodzaje desek w naszej ofercie</h3>
        <p>
          Oferujemy szeroki wybór: od potężnych <strong>bloków rzeźnickich</strong> idealnych do siekania mięsa, przez eleganckie deski do serwowania serów, aż po specjalistyczne <strong>deski do grilla</strong> z rowkami odprowadzającymi soki. Każdy produkt jest 100% ekologiczny i bezpieczny.
        </p>
      `
    },
    'for-him': {
      title: 'Prezenty dla Miłośnika Grilla i Gotowania',
      description: 'Szukasz prezentu dla niego? Zobacz nasze deski do steków, akcesoria grillowe i zestawy prezentowe dla szefa kuchni.',
      text: `
        <h3 class="text-xl font-bold mb-4">Co kupić facetowi, który lubi gotować?</h3>
        <p class="mb-4">
          Wybór prezentu dla mężczyzny bywa wyzwaniem, ale jeśli Twój tata, mąż czy brat jest królem ogrodowego grilla, mamy dla Ciebie gotowe rozwiązania. <strong>Prezenty dla miłośnika grilla</strong> powinny być przede wszystkim praktyczne i solidne – dokładnie takie, jak nasze dębowe deski.
        </p>
        <h3 class="text-xl font-bold mb-4">Najlepsze zestawy i combosy</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Deska "Grill Master":</strong> Z głębokim rowkiem na soki – absolutny must-have do serwowania steków i burgerów. Koniec z brudnym stołem!</li>
            <li><strong>Zestaw "Rustykalna Uczta":</strong> Idealny dla konesera wędlin i serów. Surowy, męski design z naturalną krawędzią (Live Edge).</li>
            <li><strong>Personalizacja:</strong> Dodaj grawer z jego imieniem lub ksywką (np. "Szef Kuchni Marek"), aby prezent stał się osobisty i wyjątkowy.</li>
        </ul>
        <p>
          Nasze produkty to gwarancja jakości "Made in Poland". To prezent, który nie wyląduje w szufladzie, ale będzie używany na każdej imprezie.
        </p>
      `
    },
    'decor': {
      title: 'Naturalne Dekoracje do Domu i Tace Drewniane',
      description: 'Unikalne dekoracje z drewna i szkła z recyklingu. Tace drewniane, świeczniki i ozdoby, które nadadzą Twojemu wnętrzu ciepła.',
      text: 'Twój dom zasługuje na dodatki, które mają duszę. W kategorii Dekoracje znajdziesz unikalne przedmioty wykonane z naturalnych materiałów, które wprowadzą do wnętrza spokój i harmonię. Nasze tace drewniane typu "artesania" to połączenie funkcjonalności z rustykalnym designem – idealne do serwowania kawy, śniadań do łóżka czy eksponowania ulubionych świec. Stawiamy na upcycling i ekologię, dlatego wiele naszych dekoracji powstaje z materiałów z odzysku, takich jak drewno z historią czy szkło z recyklingu. Każdy sęk, pęknięcie i przebarwienie to dowód na autentyczność materiału. Oferujemy również minimalistyczne świeczniki, podstawki i ozdoby ścienne, które doskonale wpisują się w styl boho, skandynawski i japandi. Wybierz dekoracje, które opowiadają historię.'
    },
    'kids': {
      title: 'Drewniane Zabawki i Dekoracje do Pokoju Dziecka',
      description: 'Bezpieczne, ekologiczne zabawki i dekoracje dla dzieci. Skarbonki, klocki i ozdoby wykonane z naturalnego drewna.',
      text: 'Pokój dziecka to miejsce magiczne, które powinno być również bezpieczne i inspirujące. Nasze drewniane produkty dla dzieci tworzymy z myślą o najmłodszych odkrywcach. Używamy wyłącznie certyfikowanych, bezpiecznych farb i olejów, a każdy element jest wielokrotnie szlifowany, by był idealnie gładki i przyjemny w dotyku. W naszej ofercie znajdziesz drewniane skarbonki w kształcie zwierząt, które uczą oszczędzania przez zabawę, a także personalizowane dekoracje ścienne i klocki. Drewno to materiał ciepły i sensoryczny, który wspiera rozwój dziecka w zgodzie z naturą, z dala od wszechobecnego plastiku. To pamiątki, które przetrwają lata i będą cieszyć kolejne pokolenia.'
    },
    'candles': {
      title: 'Świece Sojowe i Szkło z Recyklingu',
      description: 'Naturalne świece sojowe w ręcznie robionych naczyniach ze szkła z recyklingu. Ekologiczne zapachy lasu i natury.',
      text: 'Zanurz się w blasku naturalnego światła i zapachu. Nasze świece tworzymy z 100% naturalnego wosku sojowego, który jest biodegradowalny i nie wydziela szkodliwych substancji podczas spalania. To co nas wyróżnia, to naczynia – tworzymy je sami, ręcznie przecinając i szlifując szklane butelki, dając im drugie, piękne życie. Każda świeca to unikatowy produkt upcyclingowy. Kompozycje zapachowe inspirowane są polskim lasem, łąką i domowym ogniskiem. Znajdziesz u nas nuty żywiczne, drzewne, a także otulające aromaty przypraw. Po wypaleniu świecy, szklane naczynie możesz wykorzystać jako osłonkę na sukulenty lub pojemnik na drobiazgi. To ekologia w najczystszej, pachnącej postaci.'
    },
    'custom': {
      title: 'Produkty Personalizowane | KORZEŃ',
      description: 'Stwórz coś wyjątkowego. Personalizowane deski do krojenia, skarbonki z imieniem i grawerowane prezenty. Pamiątka na lata.',
      text: `
        <h3 class="text-xl font-bold mb-4">Twój Osobisty Akcent</h3>
        <p class="mb-4">
          Wierzymy, że przedmioty zyskują duszę, gdy niosą ze sobą osobiste znaczenie. Dlatego oferujemy możliwość <strong>personalizacji</strong> wielu naszych produktów. To idealny sposób, by sprawić, że prezent stanie się jedyny w swoim rodzaju.
        </p>
        <h3 class="text-xl font-bold mb-4">Co możemy dla Ciebie zrobić?</h3>
        <ul class="list-disc pl-5 mb-4 space-y-2">
            <li><strong>Grawer laserowy:</strong> Imię, data, dedykacja, a może logo firmy? Grawerujemy na deskach, tacach i pudełkach.</li>
            <li><strong>Wybór rozmiaru i drewna:</strong> Niektóre produkty możemy dopasować do wymiarów Twojej kuchni.</li>
        </ul>
        <p>
          Personalizowany prezent to dowód na to, że o kimś myślisz. To nie jest "kolejna rzecz ze sklepu", to przedmiot stworzony specjalnie dla Niej lub dla Niego.
        </p>
      `
    },
    default: {
      title: 'KORZEŃ - Rękodzieło z Drewna i Natury',
      description: 'Polska manufaktura rękodzieła. Drewniane deski do krojenia, dekoracje i prezenty. Tworzymy z pasją i szacunkiem do natury.',
      text: 'Witaj w świecie KORZEŃ, gdzie natura spotyka się z rzemiosłem. Jesteśmy polską manufakturą tworzącą unikalne przedmioty z drewna i szkła. Naszą misją jest przywracanie szacunku do przedmiotów codziennego użytku poprzez jakość, trwałość i piękno naturalnych materiałów. Specjalizujemy się w deskach do krojenia z litego dębu, unikalnych dekoracjach wnętrzarskich oraz produktach upcyclingowych. Wierzymy, że otaczanie się naturalnymi materiałami wpływa na nasze samopoczucie i harmonię w domu. Każdy nasz produkt przechodzi przez ludzkie ręce – od wyboru drewna, przez cięcie, szlifowanie, aż po olejowanie i pakowanie. Nie jesteśmy wielką fabryką, jesteśmy ludźmi z pasją. Dziękujemy, że jesteś z nami i wspierasz polskie rzemiosło.'
    }
  };

  const currentSeo = seoTexts[category] || seoTexts.default;

  // Helper function to map detailed nav categories to actual product data logic
  const getFilteredProducts = (cat) => {
    if (!cat) return products;
    
    switch (cat) {
        case 'kitchen-wood':
            return products.filter(p => p.category === 'kitchen-wood');
        case 'decor':
             return products.filter(p => p.category === 'decor' || p.category === 'glass' || p.subcategory === 'trays'); 
        case 'kids':
            return products.filter(p => p.category === 'kids');
        case 'candles':
            return products.filter(p => p.subcategory === 'candles' || p.subcategory === 'containers');
        case 'for-her':
             // Logic: Maybe trays, candles, specific boards
             return products.filter(p => p.subcategory === 'trays' || p.subcategory === 'candles' || p.subcategory === 'serving');
        case 'for-him':
             // Logic: Grill boards, gadgets
             return products.filter(p => p.subcategory === 'grill' || p.subcategory === 'cutting-boards');

        // Collections
        case 'bestseller':
             return products.filter(p => p.tags?.includes('bestseller'));
        case 'autumn':
             return products.filter(p => p.tags?.includes('autumn'));
        case 'winter':
             return products.filter(p => p.tags?.includes('winter'));
        case 'christmas':
             return products.filter(p => p.tags?.includes('christmas'));
        case 'gift-sets':
             return products.filter(p => p.tags?.includes('set') || p.tags?.includes('gift-set'));
        case 'custom':
             return products.filter(p => p.customizable === true);

        default:
            // Fallback for direct category matches in data
            return products.filter(p => p.category === cat);
    }
  };

  const filteredProducts = getFilteredProducts(category);

  const getTitle = (cat) => {
      switch(cat) {
          case 'kitchen-wood': return 'Kuchnia';
          case 'decor': return 'Dekoracje';
          case 'kids': return 'Dla Dzieci';
          case 'candles': return 'Świece i Szkło';
          case 'gift-for-her': return 'Prezenty dla Niej';
          case 'gift-for-him': return 'Prezenty dla Niego';
          case 'new-home': return 'Na Parapetówkę';
          case 'bestseller': return 'Bestsellery';
          case 'new': return 'Nowości';
          case 'gift-sets': return 'Zestawy Prezentowe';
          case 'custom': return 'Produkty Personalizowane';
          case 'autumn': return 'Jesień';
          case 'winter': return 'Zima';
          case 'christmas': return 'Boże Narodzenie';
          default: return 'Wszystkie Produkty';
      }
  };

  const sectionTitle = category ? getTitle(category) : 'Wszystkie Produkty';

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Helmet>
        <title>{currentSeo.title} | KORZEŃ</title>
        <meta name="description" content={currentSeo.description} />
      </Helmet>
      <Navbar />
      <CartDrawer />
      
      <main className="flex-grow pt-32"> {/* Increased padding for taller navbar */}
        {!category && <Hero />}
        
        {/* Only show category grid on main home page, not sub-pages */}
        {!category && <CategoryGrid />}

        {/* Why Us Section - Trust & SEO */}
        {!category && (
          <section className="py-16 bg-white border-y border-stone-100">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-12">
                <h2 className="text-3xl font-serif font-bold text-korzen-charcoal mb-4">Dlaczego KORZEŃ?</h2>
                <p className="text-gray-500 max-w-2xl mx-auto">
                  Tworzymy rzeczy, które mają duszę. Nie jesteśmy fabryką – jesteśmy pracownią, w której każdy przedmiot przechodzi przez ludzkie ręce.
                </p>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-korzen-olive/10 text-korzen-olive rounded-full flex items-center justify-center mb-4">
                    {/* Replaced generic icon with specialized ones if available, keeping generic for now */}
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-korzen-charcoal mb-2">Ręczne Rzemiosło</h3>
                  <p className="text-gray-600 text-sm">
                    Każda deska, każda świeca powstaje w naszej polskiej pracowni. Dbamy o każdy detal, szlif i wykończenie.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-korzen-olive/10 text-korzen-olive rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.48 10-10 10Z"/><path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-korzen-charcoal mb-2">Natura i Upcycling</h3>
                  <p className="text-gray-600 text-sm">
                    Wykorzystujemy drewno z certyfikowanych źródeł i dajemy drugie życie szklanym butelkom. Tworzymy w zgodzie z naturą.
                  </p>
                </div>

                <div className="flex flex-col items-center text-center p-6 bg-stone-50 rounded-lg hover:shadow-md transition-shadow duration-300">
                  <div className="w-16 h-16 bg-korzen-olive/10 text-korzen-olive rounded-full flex items-center justify-center mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"/></svg>
                  </div>
                  <h3 className="text-xl font-bold text-korzen-charcoal mb-2">Tworzone z Pasją</h3>
                  <p className="text-gray-600 text-sm">
                    Nasze produkty to nie tylko przedmioty – to historie zapisane w drewnie, idealne na wyjątkowy prezent.
                  </p>
                </div>
              </div>
            </div>
          </section>
        )}

        {/* Gift Section - Emotional Copy */}
        {!category && (
           <section className="py-16 bg-stone-100">
              <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center gap-12">
                 <div className="flex-1 space-y-6">
                    <span className="text-korzen-olive font-bold tracking-widest uppercase text-sm">Pomysł na prezent</span>
                    <h2 className="text-4xl font-serif font-bold text-korzen-charcoal">Podaruj coś więcej niż przedmiot</h2>
                    <p className="text-gray-600 text-lg leading-relaxed">
                       Ślub, parapetówka, czy urodziny bliskiej osoby? W świecie masowej produkcji, rękodzieło jest wyrazem prawdziwej troski. 
                       Nasze zestawy prezentowe to gotowe rozwiązanie – pięknie zapakowane, pachnące drewnem i lasem. 
                       Możesz dodać grawer z dedykacją, by Twój prezent stał się pamiątką na całe życie.
                    </p>
                    <Link to="/category/gift-sets" className="inline-block bg-korzen-charcoal text-white px-8 py-3 rounded hover:bg-korzen-wood transition-colors">
                       Znajdź prezent idealny
                    </Link>
                 </div>
                 <div className="flex-1 relative h-96 w-full">
                    <img 
                       src="/img/gift-set.jpg" 
                       onError={(e) => e.target.src = '/img/bandejadecoracion.jpg'} 
                       alt="Zestaw prezentowy" 
                       className="absolute inset-0 w-full h-full object-cover rounded-lg shadow-xl" 
                    />
                    <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded shadow-lg max-w-xs hidden md:block">
                       <p className="text-korzen-charcoal font-serif italic">"Najpiękniejszy prezent jaki dostałam. Zapach drewna po otwarciu paczki – bezcenny!"</p>
                       <p className="text-sm text-gray-500 mt-2">– Kasia, Warszawa</p>
                    </div>
                 </div>
              </div>
           </section>
        )}
        
        <section id="shop" className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-end mb-12">
            <div>
              <h2 className="text-3xl font-serif font-bold text-korzen-charcoal">{sectionTitle}</h2>
              <p className="mt-2 text-gray-500">Rękodzieło prosto z naszej pracowni.</p>
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-y-10 gap-x-6 xl:gap-x-8">
            {loading ? (
               <div className="col-span-full flex justify-center py-20">
                  <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-korzen-olive"></div>
               </div>
            ) : filteredProducts.length > 0 ? (
              filteredProducts.map((product) => (
                <ProductCard key={product.id} product={product} />
              ))
            ) : (
              <div className="col-span-full text-center py-20 bg-gray-100 rounded-lg">
                <p className="text-xl text-gray-500 mb-2">Brak produktów w tej kategorii.</p>
                <p className="text-sm text-gray-400">Pracujemy nad nowymi projektami!</p>
              </div>
            )}
          </div>

          {/* SEO Content Block (Bottom of Category Pages) */}
          <div className="mt-20 pt-16 border-t border-gray-200">
             <div className="max-w-4xl mx-auto">
                <h3 className="text-2xl font-serif text-korzen-charcoal mb-6 text-center">{currentSeo.title}</h3>
                <div 
                  className="prose prose-lg prose-stone mx-auto text-gray-600 text-justify"
                  dangerouslySetInnerHTML={{ __html: currentSeo.text }}
                />
             </div>
          </div>
        </section>

        {/* Reviews Section - Social Proof */}
        {!category && (
          <section className="py-20 bg-korzen-charcoal text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <span className="text-korzen-olive font-bold tracking-widest uppercase text-sm">Opinie Klientów</span>
                <h2 className="text-3xl md:text-4xl font-serif mt-4">Zaufali nam</h2>
              </div>
              
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {[
                  {
                    name: "Marta W.",
                    text: "Deska jest przepiękna! Czuć jakość i serce włożone w wykonanie. Idealnie prezentuje się w mojej nowej kuchni.",
                    product: "Deska Szefa Kuchni"
                  },
                  {
                    name: "Piotr K.",
                    text: "Zamówiłem zestaw prezentowy dla żony. Była zachwycona zapachem świecy i grawerem. Ekspresowa wysyłka!",
                    product: "Zestaw Prezentowy"
                  },
                  {
                    name: "Ewa Z.",
                    text: "Skarbonka Dino to hit! Synek od razu zaczął zbierać monety. Świetna jakość wykonania, bardzo gładka i bezpieczna.",
                    product: "Skarbonka Dino-Mite"
                  }
                ].map((review, i) => (
                  <div key={i} className="bg-white/5 p-8 rounded-lg backdrop-blur-sm border border-white/10 relative">
                    <Quote className="absolute top-4 right-4 text-korzen-olive opacity-20" size={48} />
                    <div className="flex text-amber-400 mb-4">
                      {[...Array(5)].map((_, j) => <Star key={j} size={16} fill="currentColor" />)}
                    </div>
                    <p className="text-gray-300 italic mb-6 leading-relaxed">"{review.text}"</p>
                    <div>
                      <p className="font-bold text-white">{review.name}</p>
                      <p className="text-xs text-korzen-olive uppercase tracking-wider mt-1">Zakup zweryfikowany: {review.product}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}
      </main>

      <Footer />
    </div>
  );
};

export default Home;
