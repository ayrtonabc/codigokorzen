import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  Check, ShieldCheck, Truck, ArrowLeft, Star, 
  Flame, Leaf, Award, Users, Clock 
} from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import { formatPrice } from '../utils/formatPrice';
import Navbar from '../components/Navbar';
import CartDrawer from '../components/CartDrawer';
import Footer from '../components/Footer';
import useCartStore from '../store/useCartStore';
import useProductStore from '../store/useProductStore';
import ContentRenderer from '../components/ContentRenderer';

const ProductDetail = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, openCart } = useCartStore();
  const { products, fetchProducts } = useProductStore();
  
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);

  // Load product data
  useEffect(() => {
    const loadProduct = async () => {
      setLoading(true);
      try {
        await fetchProducts();
        const foundProduct = products.find(p => p.id === id);
        setProduct(foundProduct);
      } catch (error) {
        console.error("Error loading product:", error);
      } finally {
        setLoading(false);
      }
    };
    loadProduct();
  }, [id, products.length]);
  
  // States for interaction
  const [selectedSize, setSelectedSize] = useState(null);
  const [isEngraving, setIsEngraving] = useState(false);
  const [engravingText, setEngravingText] = useState('');
  const [mainImage, setMainImage] = useState('');

  // Set default size and image on load
  useEffect(() => {
    if (product) {
      if (product.options?.sizes?.length > 0) {
        setSelectedSize(product.options.sizes[0]);
      }
      setMainImage(product.image);
    }
  }, [product]);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-korzen-olive"></div>
      </div>
    );
  }

  if (!product) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-korzen-charcoal mb-4">Produkt nie znaleziony</h2>
          <button 
            onClick={() => navigate('/')}
            className="text-korzen-olive hover:underline"
          >
            Wróć do strony głównej
          </button>
        </div>
      </div>
    );
  }

  // Calculate Price
  const basePrice = product.price;
  const sizePrice = selectedSize ? selectedSize.priceMod : 0;
  const engravingPrice = isEngraving ? 20 : 0;
  const totalPrice = basePrice + sizePrice + engravingPrice;

  const handleAddToCart = () => {
    if (product.customizable && product.options?.sizes && !selectedSize) {
      alert('Proszę wybrać rozmiar.');
      return;
    }
    
    if (isEngraving && !engravingText.trim()) {
        alert('Proszę wpisać tekst graweru.');
        return;
    }

    addToCart(product, 1, {
      size: selectedSize,
      engraving: isEngraving ? engravingText : null
    });
    openCart();
  };

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Helmet>
        <title>{product.name} | KORZEŃ</title>
        <meta name="description" content={product.description} />
      </Helmet>
      
      <Navbar />
      <CartDrawer />

      <main className="flex-grow pt-28 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        {/* Breadcrumb / Back */}
        <nav className="flex items-center text-sm text-gray-500 mb-8">
          <button 
            onClick={() => navigate(-1)}
            className="flex items-center hover:text-korzen-olive transition-colors mr-4"
          >
            <ArrowLeft className="h-4 w-4 mr-1" /> Wróć
          </button>
          <span className="mx-2">/</span>
          <span className="capitalize">{product.category === 'kitchen-wood' ? 'Kuchnia' : product.category}</span>
          <span className="mx-2">/</span>
          <span className="text-gray-900 font-medium truncate">{product.name}</span>
        </nav>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 xl:gap-16">
          {/* Left Column: Images */}
          <div className="space-y-4">
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="aspect-square rounded-xl overflow-hidden bg-gray-100 relative shadow-sm border border-stone-200"
            >
              {product.tags?.includes('bestseller') && (
                <div className="absolute top-4 left-4 bg-amber-400 text-amber-900 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider z-10">
                  Bestseller
                </div>
              )}
              <img 
                src={mainImage || product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </motion.div>
            
            {/* Gallery Thumbnails */}
            {product.gallery && product.gallery.length > 0 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => (
                  <button
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square rounded-lg overflow-hidden border-2 transition-all ${mainImage === img ? 'border-korzen-olive opacity-100' : 'border-transparent opacity-60 hover:opacity-100'}`}
                  >
                    <img src={img} alt={`${product.name} ${idx}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
            
            {/* Features Grid (Desktop) */}
            {product.features && (
              <div className="hidden lg:grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-gray-200">
                {product.features.map((feat, i) => (
                  <div key={i} className="text-center p-4 bg-white rounded-lg border border-stone-100 shadow-sm">
                    <div className="flex justify-center mb-2 text-korzen-olive">
                      {i === 0 ? <ShieldCheck size={24} /> : i === 1 ? <Leaf size={24} /> : <Award size={24} />}
                    </div>
                    <h4 className="font-serif font-bold text-gray-900 text-sm mb-1">{feat.title}</h4>
                    <p className="text-xs text-gray-500 leading-tight">{feat.desc}</p>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Right Column: Product Info & Actions */}
          <div className="flex flex-col">
            <motion.div 
               initial={{ opacity: 0, x: 20 }}
               animate={{ opacity: 1, x: 0 }}
            >
              <div className="flex items-center justify-between mb-2">
                <span className="text-korzen-olive font-medium tracking-wide uppercase text-sm">
                  {product.category === 'kitchen-wood' ? 'Rękodzieło' : 'Design'}
                </span>
                
                {/* Social Proof Badge */}
                {product.salesStats && (
                  <div className="flex items-center text-amber-600 bg-amber-50 px-3 py-1 rounded-full text-xs font-medium animate-pulse">
                    <Flame size={14} className="mr-1" />
                    {product.salesStats.count} osób kupiło {product.salesStats.period}
                  </div>
                )}
              </div>

              <h1 className="text-3xl sm:text-4xl font-serif font-bold text-korzen-charcoal mb-4 leading-tight">
                {product.name}
              </h1>
              
              {/* Rating Summary */}
              {product.reviews && (
                <div className="flex items-center mb-6">
                  <div className="flex text-amber-400 mr-2">
                    {[...Array(5)].map((_, i) => (
                      <Star key={i} size={16} fill="currentColor" />
                    ))}
                  </div>
                  <span className="text-sm text-gray-500 underline cursor-pointer">
                    ({product.reviews.length} opinii)
                  </span>
                </div>
              )}

              <p className="text-gray-600 text-lg leading-relaxed mb-8 border-b border-gray-200 pb-8">
                {product.description}
              </p>

              {/* Pricing & Selection */}
              <div className="bg-white p-6 rounded-xl border border-stone-200 shadow-sm mb-8">
                <div className="text-3xl font-serif font-medium text-korzen-wood mb-6 flex items-baseline">
                  {formatPrice(totalPrice)}
                  <span className="text-sm text-gray-400 font-sans font-normal ml-2">zawiera VAT</span>
                </div>

                {/* Size Selector */}
                {product.customizable && product.options?.sizes && (
                  <div className="mb-6">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Wybierz rozmiar:</label>
                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      {product.options.sizes.map((size) => (
                        <button
                          key={size.label}
                          onClick={() => setSelectedSize(size)}
                          className={`
                            relative px-4 py-3 text-sm rounded-lg border text-left transition-all
                            ${selectedSize?.label === size.label 
                              ? 'border-korzen-olive bg-korzen-olive/5 ring-1 ring-korzen-olive text-korzen-charcoal' 
                              : 'border-gray-200 hover:border-gray-300 text-gray-600'}
                          `}
                        >
                          <span className="font-medium block">{size.label}</span>
                          {size.priceMod > 0 && (
                            <span className="text-xs text-korzen-olive">+{size.priceMod} zł</span>
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {/* Engraving Option */}
                {product.customizable && (
                  <div className="mb-8">
                    <div className="flex items-center mb-3">
                      <input
                        type="checkbox"
                        id="engraving"
                        checked={isEngraving}
                        onChange={(e) => setIsEngraving(e.target.checked)}
                        className="h-4 w-4 text-korzen-olive focus:ring-korzen-olive border-gray-300 rounded"
                      />
                      <label htmlFor="engraving" className="ml-2 block text-sm font-medium text-gray-700">
                        Dodaj personalizowany grawer (+20 zł)
                      </label>
                    </div>
                    
                    {isEngraving && (
                      <motion.div 
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="overflow-hidden"
                      >
                        <input
                          type="text"
                          value={engravingText}
                          onChange={(e) => setEngravingText(e.target.value)}
                          placeholder="Wpisz tekst graweru (np. Dla Mamy)"
                          maxLength={30}
                          className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-korzen-olive focus:border-transparent outline-none text-sm"
                        />
                        <p className="text-xs text-gray-500 mt-1 text-right">{engravingText.length}/30 znaków</p>
                      </motion.div>
                    )}
                  </div>
                )}

                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className="w-full bg-korzen-charcoal text-white py-4 px-8 rounded-lg font-medium hover:bg-black transition-colors flex items-center justify-center space-x-2 shadow-lg shadow-gray-200"
                >
                  <Truck className="h-5 w-5" />
                  <span>Dodaj do koszyka - {formatPrice(totalPrice)}</span>
                </button>
                
                <div className="mt-4 flex items-center justify-center text-xs text-gray-500 space-x-4">
                  <span className="flex items-center"><Check size={12} className="mr-1 text-green-600" /> Wysyłka w 24h</span>
                  <span className="flex items-center"><ShieldCheck size={12} className="mr-1 text-green-600" /> Gwarancja jakości</span>
                </div>
              </div>

              {/* Accordion / Details */}
              <div className="space-y-4 border-t border-gray-200 pt-6">
                 {/* Long Description */}
                 {product.longDescription && (
                   <div className="prose prose-stone text-gray-600">
                     <h3 className="text-lg font-serif text-gray-900">Dlaczego ten produkt?</h3>
                     <ContentRenderer content={product.longDescription} />
                   </div>
                 )}
                 
                 {/* Specs */}
                 <div className="bg-stone-100 p-6 rounded-lg mt-6">
                    <h3 className="font-serif font-bold text-gray-900 mb-4">Szczegóły produktu</h3>
                    <ul className="space-y-3 text-sm text-gray-600">
                      {Object.entries(product.details || {}).map(([key, value]) => (
                        <li key={key} className="flex border-b border-gray-200 pb-2 last:border-0 last:pb-0">
                          <span className="font-medium w-32 capitalize">{key}:</span>
                          <span>{value}</span>
                        </li>
                      ))}
                    </ul>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>

        {/* Reviews Section */}
        {product.reviews && product.reviews.length > 0 && (
          <div className="mt-20 pt-16 border-t border-gray-200">
            <h3 className="text-2xl font-serif text-center text-korzen-charcoal mb-12">
              Opinie naszych klientów
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {product.reviews.map((review, idx) => (
                <div key={idx} className="bg-white p-6 rounded-xl border border-stone-100 shadow-sm relative">
                   <div className="flex text-amber-400 mb-3">
                     {[...Array(review.rating)].map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
                   </div>
                   <p className="text-gray-600 italic mb-4 text-sm">"{review.text}"</p>
                   <div className="flex items-center justify-between mt-auto pt-4 border-t border-stone-50">
                     <div className="flex items-center">
                        <div className="bg-korzen-olive/10 p-2 rounded-full mr-3">
                          <Users size={16} className="text-korzen-olive" />
                        </div>
                        <div>
                          <p className="font-bold text-sm text-gray-900">{review.user}</p>
                          <p className="text-xs text-green-600 flex items-center">
                             <Check size={10} className="mr-1" /> Zweryfikowany zakup
                          </p>
                        </div>
                     </div>
                     <span className="text-xs text-gray-400">{review.date}</span>
                   </div>
                </div>
              ))}
            </div>
          </div>
        )}

      </main>
      <Footer />
    </div>
  );
};

export default ProductDetail;
