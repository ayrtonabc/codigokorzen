import React, { useState, useEffect, useRef } from 'react';
import { createPortal } from 'react-dom';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search } from 'lucide-react';
import useCartStore from '../store/useCartStore';
import TopBar from './TopBar';
import { products } from '../data/products';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';

const Navbar = () => {
  const { cart, toggleCart } = useCartStore();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const [scrolled, setScrolled] = useState(false);
  const searchInputRef = useRef(null);
  const navigate = useNavigate();
  const location = useLocation();
  const isHome = location.pathname === '/';

  const cartCount = cart.reduce((acc, item) => acc + item.quantity, 0);

  // New Menu Structure
  const leftLinks = [
    { 
      name: 'Sklep', 
      path: '#', // Dropdown trigger
      isMegaMenu: true,
      submenu: [
         {
             title: 'Kategorie',
             items: [
                { name: 'Deski Kuchenne', path: '/category/kitchen-wood' },
                { name: 'Tace i Dekoracje', path: '/category/decor' },
                { name: 'Świece & Szkło', path: '/category/candles' },
             ]
         },
         {
             title: 'Okazje',
             items: [
                 { name: 'Prezenty dla Niej', path: '/category/gift-for-her' },
                 { name: 'Prezenty dla Niego', path: '/category/gift-for-him' },
                 { name: 'Dla Dzieci', path: '/category/kids' },
                 { name: 'Personalizowane', path: '/category/custom' },
             ]
         },
         {
             title: 'Kolekcje',
             items: [
                 { name: 'Bestsellery', path: '/category/bestseller' },
                 { name: 'Jesień', path: '/category/autumn' },
                 { name: 'Zima', path: '/category/winter' },
                 { name: 'Boże Narodzenie', path: '/category/christmas' },
             ]
         }
      ]
    },
    { name: 'Pracownia', path: '/about' }
  ];

  const rightLinks = [
    { name: 'Upcycling', path: '/upcycling' },
    { name: 'Blog', path: '/blog' },
    { name: 'Kontakt', path: '/contact' }
  ];

  const handleLinkClick = (path) => {
    if (path.startsWith('#')) {
      const element = document.querySelector(path);
      if (element) element.scrollIntoView({ behavior: 'smooth' });
    } else if (path.includes('#')) {
       // Handle /#story
       const [page, hash] = path.split('#');
       if (location.pathname !== page) {
           navigate(page);
           setTimeout(() => {
               const element = document.getElementById(hash);
               if (element) element.scrollIntoView({ behavior: 'smooth' });
           }, 500);
       } else {
           const element = document.getElementById(hash);
           if (element) element.scrollIntoView({ behavior: 'smooth' });
       }
    } else {
      navigate(path);
      window.scrollTo(0, 0);
    }
    setIsMenuOpen(false);
  };

  // Scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Search Logic
  const filteredProducts = searchQuery.length > 1 
    ? products.filter(product => 
        product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
        product.category.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (product.subcategory && product.subcategory.toLowerCase().includes(searchQuery.toLowerCase()))
      ).slice(0, 6)
    : [];

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current.focus(), 100);
    }
  }, [isSearchOpen]);

  return (
    <>
      {/* Top Bar - Hidden on scroll to clean up view */}
      <div className={`fixed w-full z-[60] transition-transform duration-300 ${scrolled ? '-translate-y-full' : 'translate-y-0'}`}>
         <TopBar />
      </div>

      <nav 
        className={`fixed w-full z-50 transition-all duration-500 ease-in-out bg-[#F9F8F6]/95 backdrop-blur-md shadow-sm text-korzen-charcoal ${
          scrolled 
            ? 'py-2 top-0' 
            : 'py-6 top-8'
        }`}
      >
        <div className="max-w-[1400px] mx-auto px-6">
          <div className="flex flex-col md:flex-row items-center justify-between relative">
            
            {/* Mobile Menu Button (Left) */}
            <div className="absolute left-0 top-1/2 -translate-y-1/2 md:hidden">
              <button onClick={() => setIsMenuOpen(true)} className="p-2">
                <Menu className="h-6 w-6" />
              </button>
            </div>

            {/* Desktop Navigation (Left Side) */}
            <div className="hidden md:flex flex-1 justify-start space-x-8">
              {leftLinks.map((link) => (
                <div key={link.name} className="relative group">
                  <button 
                    onClick={() => !link.submenu && handleLinkClick(link.path)}
                    className="text-xs font-medium tracking-[0.2em] uppercase hover:text-korzen-olive transition-colors relative py-4"
                  >
                    {link.name}
                    <span className="absolute bottom-2 left-0 w-0 h-px bg-korzen-olive transition-all duration-300 group-hover:w-full" />
                  </button>
                  
                  {link.submenu && (
                    <div className={`absolute top-full left-0 bg-white shadow-lg rounded-sm py-6 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0 border-t-2 border-korzen-olive ${link.isMegaMenu ? 'w-[600px] grid grid-cols-3 gap-8 px-8' : 'w-48'}`}>
                      {link.isMegaMenu ? (
                         link.submenu.map((section, idx) => (
                           <div key={idx}>
                              <h4 className="font-serif font-bold text-korzen-olive mb-4 text-sm uppercase tracking-wider">{section.title}</h4>
                              <div className="space-y-2 flex flex-col items-start">
                                 {section.items.map(item => (
                                    <button
                                       key={item.name}
                                       onClick={() => handleLinkClick(item.path)}
                                       className="text-sm text-gray-600 hover:text-korzen-charcoal hover:translate-x-1 transition-all text-left"
                                    >
                                       {item.name}
                                    </button>
                                 ))}
                              </div>
                           </div>
                         ))
                      ) : (
                        link.submenu.map(sub => (
                          <button
                            key={sub.name}
                            onClick={() => handleLinkClick(sub.path)}
                            className="block w-full text-left px-4 py-2 text-sm text-korzen-charcoal hover:bg-stone-50 hover:text-korzen-olive transition-colors"
                          >
                            {sub.name}
                          </button>
                        ))
                      )}
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Logo (Center) */}
            <div className="flex-shrink-0 mx-auto transform hover:scale-105 transition-transform duration-500 cursor-pointer" onClick={() => navigate('/')}>
               <div className="flex flex-col items-center">
                  <span className={`font-serif font-bold tracking-widest transition-all duration-300 text-korzen-olive ${scrolled ? 'text-3xl' : 'text-4xl'}`}>
                    KORZEŃ
                  </span>
                  <span className="text-[0.5rem] uppercase tracking-[0.4em] mt-1 transition-colors text-korzen-wood">
                    Pracownia
                  </span>
               </div>
            </div>

            {/* Desktop Navigation (Right Side) */}
            <div className="hidden md:flex flex-1 justify-end items-center space-x-8">
               <div className="flex space-x-8 mr-8">
                  {rightLinks.map((link) => (
                    <button 
                      key={link.name}
                      onClick={() => handleLinkClick(link.path)}
                      className="text-xs font-medium tracking-[0.2em] uppercase hover:text-korzen-olive transition-colors relative group"
                    >
                      {link.name}
                      <span className="absolute -bottom-2 left-0 w-0 h-px bg-korzen-olive transition-all duration-300 group-hover:w-full" />
                    </button>
                  ))}
               </div>

               {/* Icons */}
               <div className="flex items-center space-x-6 pl-6 border-l border-current/20">
                  <button onClick={() => setIsSearchOpen(true)} className="hover:text-korzen-olive transition-colors">
                    <Search className="h-5 w-5" />
                  </button>
                  <button onClick={toggleCart} className="relative hover:text-korzen-olive transition-colors">
                    <ShoppingBag className="h-5 w-5" />
                    {cartCount > 0 && (
                      <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-korzen-olive text-[0.5rem] text-white">
                        {cartCount}
                      </span>
                    )}
                  </button>
               </div>
            </div>

            {/* Mobile Icons (Right) */}
            <div className="absolute right-0 top-1/2 -translate-y-1/2 flex items-center space-x-4 md:hidden">
               <button onClick={() => setIsSearchOpen(true)}>
                  <Search className="h-5 w-5" />
               </button>
               <button onClick={toggleCart} className="relative">
                  <ShoppingBag className="h-5 w-5" />
                  {cartCount > 0 && (
                    <span className="absolute -top-1 -right-1 flex h-3 w-3 items-center justify-center rounded-full bg-korzen-olive text-[0.5rem] text-white">
                      {cartCount}
                    </span>
                  )}
               </button>
            </div>

          </div>
        </div>

        {/* Search Overlay - Full Screen Minimal */}
        <AnimatePresence>
          {isSearchOpen && (
            <motion.div 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-white z-[100] flex flex-col items-center justify-center p-4"
            >
               <button onClick={() => setIsSearchOpen(false)} className="absolute top-8 right-8 p-2 hover:rotate-90 transition-transform duration-300">
                  <X className="h-8 w-8 text-korzen-charcoal" />
               </button>
               
               <div className="w-full max-w-3xl">
                  <input
                    ref={searchInputRef}
                    type="text"
                    placeholder="Szukaj..."
                    value={searchQuery}
                    onChange={(e) => setSearchQuery(e.target.value)}
                    className="w-full bg-transparent text-4xl md:text-6xl font-serif text-korzen-charcoal placeholder-gray-300 border-b-2 border-gray-200 focus:border-korzen-olive outline-none py-4 text-center transition-colors"
                  />
                  
                  {/* Minimal Results */}
                  <div className="mt-12 grid grid-cols-2 md:grid-cols-4 gap-6">
                    {filteredProducts.map(product => (
                       <div key={product.id} onClick={() => {setIsSearchOpen(false); navigate('/')}} className="cursor-pointer group">
                          <div className="aspect-[3/4] overflow-hidden mb-2 bg-gray-100">
                             <img src={product.image} alt={product.name} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" />
                          </div>
                          <p className="text-sm font-medium text-center">{product.name}</p>
                       </div>
                    ))}
                  </div>
               </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Mobile Menu Drawer */}
        {createPortal(
          <AnimatePresence>
            {isMenuOpen && (
              <>
                <motion.div 
                  key="overlay"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  onClick={() => setIsMenuOpen(false)}
                  className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[9990]"
                />
                <motion.div 
                  key="drawer"
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: "spring", stiffness: 300, damping: 30 }}
                  className="fixed top-0 left-0 h-full w-[80%] max-w-sm !bg-white z-[9999] shadow-2xl p-8 flex flex-col"
                  style={{ backgroundColor: '#ffffff' }}
                >
                  <div className="flex justify-end items-center mb-12">
                     <button onClick={() => setIsMenuOpen(false)}>
                       <X className="h-6 w-6 text-korzen-charcoal" />
                     </button>
                  </div>

                  <div className="flex flex-col space-y-4 overflow-y-auto">
                    {[...leftLinks, ...rightLinks].map((link) => (
                      <div key={link.name} className={`${link.submenu ? 'bg-stone-100' : 'bg-white border border-gray-100'} rounded-lg p-4 shadow-sm`}>
                        <button 
                          onClick={() => !link.submenu && handleLinkClick(link.path)}
                          className="text-xl font-serif text-korzen-charcoal hover:text-korzen-olive transition-colors text-left w-full font-bold"
                        >
                          {link.name}
                        </button>
                        {link.submenu && (
                          <div className="mt-3 pl-2 flex flex-col space-y-3 border-t border-gray-300 pt-3">
                            {link.submenu.map(sub => (
                               <button
                                  key={sub.name}
                                  onClick={() => handleLinkClick(sub.path)}
                                  className="text-base font-semibold text-gray-800 hover:text-korzen-olive text-left pl-2 border-l-2 border-korzen-olive/30 hover:border-korzen-olive transition-colors"
                               >
                                 {sub.name}
                               </button>
                            ))}
                          </div>
                        )}
                      </div>
                    ))}
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>,
          document.body
        )}

      </nav>
    </>
  );
};

export default Navbar;
