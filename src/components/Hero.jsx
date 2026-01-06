import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';

const images = [
  {
    url: '/img/hero1.png',
    title: 'Z korzeni natury do Twojego domu',
    subtitle: 'Idealne na prezent / do Twojej kuchni'
  },
  {
    url: '/img/hero2.png',
    title: 'Naturalne Piękno',
    subtitle: 'Ręcznie tworzone w Polsce'
  },
  {
    url: '/img/hero 3.png',
    title: 'Dom z Duszą',
    subtitle: 'Detale, które zmieniają wszystko'
  },
];

const Hero = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 6000); // Slower interval for a more relaxed vibe

    return () => clearInterval(timer);
  }, []);

  return (
    <div className="relative h-[80vh] min-h-[600px] w-full overflow-hidden bg-korzen-charcoal">
      <AnimatePresence mode="popLayout">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, scale: 1.1 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2, ease: "easeOut" }} // Slower transition
          className="absolute inset-0 w-full h-full"
        >
           {/* Background Image */}
           <div 
             className="absolute inset-0 bg-cover bg-center"
             style={{ backgroundImage: `url("${images[currentIndex].url}")` }}
           />
           {/* Gradient Overlay for Text Readability - subtle gradient from bottom and top */}
           <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-black/40" />
        </motion.div>
      </AnimatePresence>

      {/* Content Layer */}
      <div className="absolute inset-0 flex flex-col justify-end pb-16 md:pb-20 px-6 md:px-20 max-w-[1400px] mx-auto pointer-events-none">
         <motion.div
            key={`text-${currentIndex}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1, delay: 0.5 }}
            className="pointer-events-auto"
         >
            <span className="block text-white/80 text-xs md:text-sm tracking-[0.4em] uppercase mb-4 border-l-2 border-korzen-olive pl-4">
              {images[currentIndex].subtitle}
            </span>
            <h1 className="text-5xl md:text-7xl lg:text-9xl font-serif text-white font-medium mb-8 leading-none tracking-tight">
              {images[currentIndex].title}
            </h1>
            
            <div className="flex items-center gap-8">
              <Link 
                to="/category/kitchen-wood"
                className="group flex items-center gap-4 text-white hover:text-korzen-sand transition-colors pb-1 border-b border-white/30 hover:border-korzen-sand"
              >
                <span className="text-sm tracking-[0.2em] uppercase">Zobacz kolekcję</span>
                <ArrowRight className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" />
              </Link>
            </div>
         </motion.div>
      </div>

      {/* Minimal Progress Bar instead of Dots */}
      <div className="absolute bottom-0 left-0 w-full h-1 bg-white/10">
        <motion.div 
          key={currentIndex}
          initial={{ width: "0%" }}
          animate={{ width: "100%" }}
          transition={{ duration: 6, ease: "linear" }}
          className="h-full bg-korzen-olive"
        />
      </div>
    </div>
  );
};

export default Hero;
