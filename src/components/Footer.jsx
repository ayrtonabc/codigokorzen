import React from 'react';
import { Instagram, Facebook, Mail, ArrowRight, CreditCard, Truck, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';

const Footer = () => {
  return (
    <footer id="footer" className="bg-korzen-charcoal text-white pt-20 pb-10 border-t border-korzen-olive/20">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Newsletter & Brand */}
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Brand Column */}
          <div className="lg:col-span-1">
            <Link to="/" className="inline-flex flex-col items-center mb-6">
            <span className="text-3xl font-serif font-bold text-korzen-sand tracking-wider">KORZEŃ</span>
            <span className="block text-[0.6rem] tracking-[0.3em] text-gray-500 uppercase mt-1">Pracownia</span>
          </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6">
              Tworzymy z pasją w sercu Warmii i Mazur. Nadajemy drugie życie drewnu i szkłu, łącząc rzemiosło z naturą.
            </p>
            <div className="text-sm text-gray-500 mb-6 space-y-1">
               <p className="font-medium text-gray-400">Pracownia Rzemieślnicza</p>
               <p>NIP: 739-395-XX-XX</p>
            </div>
          </div>

          {/* Links Column 1: Shop */}
          <div className="lg:col-span-1 lg:pl-8">
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Sklep</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/category/kitchen-wood" className="hover:text-korzen-sand transition-colors">Kuchnia i Drewno</Link></li>
              <li><Link to="/category/decor" className="hover:text-korzen-sand transition-colors">Dekoracje</Link></li>
              <li><Link to="/category/kids" className="hover:text-korzen-sand transition-colors">Dla Dzieci</Link></li>
              <li><Link to="/category/candles" className="hover:text-korzen-sand transition-colors">Świece i Szkło</Link></li>
              <li><Link to="/category/for-her" className="hover:text-korzen-sand transition-colors">Pomysły na Prezent</Link></li>
            </ul>
          </div>

          {/* Links Column 2: Help */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Pomoc</h4>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/about" className="hover:text-korzen-sand transition-colors">O Pracowni</Link></li>
              <li><Link to="/delivery" className="hover:text-korzen-sand transition-colors">Dostawa i Płatności</Link></li>
              <li><Link to="/returns" className="hover:text-korzen-sand transition-colors">Zwroty i Reklamacje</Link></li>
              <li><Link to="/terms" className="hover:text-korzen-sand transition-colors">Regulamin Sklepu</Link></li>
              <li><Link to="/privacy" className="hover:text-korzen-sand transition-colors">Polityka Prywatności</Link></li>
            </ul>
          </div>

          {/* Newsletter Column */}
          <div className="lg:col-span-1">
            <h4 className="text-lg font-serif font-medium mb-6 text-white">Zostań z nami</h4>
            <p className="text-gray-400 text-sm mb-4">
              Zapisz się do newslettera i otrzymaj <span className="text-korzen-sand">10% zniżki</span> na pierwsze zakupy.
            </p>
            <form className="space-y-3" onSubmit={(e) => e.preventDefault()}>
              <div className="relative">
                <input 
                  type="email" 
                  placeholder="Twój adres email" 
                  className="w-full bg-white/5 border border-white/10 rounded-md px-4 py-3 text-sm text-white focus:outline-none focus:border-korzen-olive focus:ring-1 focus:ring-korzen-olive transition-colors placeholder:text-gray-600"
                />
                <button 
                  type="submit"
                  className="absolute right-1 top-1 bottom-1 bg-korzen-olive text-white px-3 rounded-sm hover:bg-korzen-olive/90 transition-colors"
                >
                  <ArrowRight size={16} />
                </button>
              </div>
              <p className="text-xs text-gray-600">
                Klikając, akceptujesz regulamin newslettera.
              </p>
            </form>
          </div>
        </div>

        {/* Separator */}
        <div className="border-t border-white/10 my-12"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="text-gray-500 text-sm">
            &copy; {new Date().getFullYear()} KORZEŃ Pracownia. Wszelkie prawa zastrzeżone.
          </div>
          
          {/* Payment & Trust Badges */}
          <div className="flex flex-wrap justify-center items-center gap-4 text-gray-400">
             <div className="flex items-center gap-3">
                 <span className="text-xs uppercase tracking-wide mr-1 hidden xl:inline">Płatności:</span>
                 <div className="h-8 w-12 bg-white rounded-md flex items-center justify-center overflow-hidden shadow-sm border border-gray-200" title="BLIK">
                    <img src="/img/blik.webp" alt="BLIK" className="w-full h-full object-cover" />
                 </div>
                 <div className="h-8 w-12 bg-white rounded-md flex items-center justify-center overflow-hidden shadow-sm border border-gray-200" title="Stripe">
                    <img src="/img/stripe.png" alt="Stripe" className="w-full h-full object-contain p-1" />
                 </div>
             </div>
             
             <div className="h-4 w-px bg-white/10 hidden md:block"></div>
             
             <div className="flex items-center gap-2" title="Szybka dostawa">
                <div className="h-8 w-12 bg-white rounded-md flex items-center justify-center overflow-hidden shadow-sm border border-gray-200" title="InPost">
                   <img src="/img/inpost.webp" alt="InPost" className="w-full h-full object-cover" />
                </div>
                <span className="text-xs uppercase tracking-wide">Wysyłka w 24h</span>
             </div>
             
             <div className="h-4 w-px bg-white/10 hidden md:block"></div>
             
             <div className="flex items-center gap-2" title="Gwarancja jakości">
                <ShieldCheck size={16} />
                <span className="text-xs uppercase tracking-wide">Gwarancja</span>
             </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
