import React, { useState } from 'react';
import { motion } from 'framer-motion';
import useCartStore from '../store/useCartStore';
import useOrderStore from '../store/useOrderStore';
import { formatPrice } from '../utils/formatPrice';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Link } from 'react-router-dom';
import { ChevronRight } from 'lucide-react';

const Checkout = () => {
  const { cart, getCartTotal, clearCart } = useCartStore();
  const addOrder = useOrderStore((state) => state.addOrder);
  const total = getCartTotal(cart);
  const [step, setStep] = useState(1); // 1: Contact, 2: Shipping, 3: Payment
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    address: '',
    zip: '',
    city: ''
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleNextStep = () => {
    setStep(prev => prev + 1);
  };

  if (cart.length === 0) {
    return (
      <div className="min-h-screen bg-stone-50 flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center pt-32 pb-16 px-4">
           <div className="text-center">
             <h2 className="text-3xl font-serif text-korzen-charcoal mb-4">Twój koszyk jest pusty</h2>
             <p className="text-gray-500 mb-8">Wygląda na to, że nie dodałeś jeszcze żadnych produktów.</p>
             <Link to="/" className="inline-block bg-korzen-olive text-white px-8 py-3 rounded-md hover:bg-korzen-olive/90 transition-colors">
               Wróć do sklepu
             </Link>
           </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#F9F8F6] flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Left Column: Form */}
          <div className="flex-1">
            <div className="mb-8 flex items-center text-sm text-gray-500">
              <span className={step >= 1 ? "text-korzen-olive font-medium" : ""}>Koszyk</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className={step >= 1 ? "text-korzen-olive font-medium" : ""}>Dane</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className={step >= 2 ? "text-korzen-olive font-medium" : ""}>Wysyłka</span>
              <ChevronRight className="w-4 h-4 mx-2" />
              <span className={step >= 3 ? "text-korzen-olive font-medium" : ""}>Płatność</span>
            </div>

            {step === 1 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-6">Dane kontaktowe</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Imię</label>
                      <input 
                        type="text" 
                        name="firstName"
                        value={formData.firstName}
                        onChange={handleInputChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-korzen-olive focus:ring-korzen-olive py-2 px-3 border" 
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Nazwisko</label>
                      <input 
                        type="text" 
                        name="lastName"
                        value={formData.lastName}
                        onChange={handleInputChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-korzen-olive focus:ring-korzen-olive py-2 px-3 border" 
                      />
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-korzen-olive focus:ring-korzen-olive py-2 px-3 border" 
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Adres</label>
                    <input 
                      type="text" 
                      name="address"
                      value={formData.address}
                      onChange={handleInputChange}
                      className="w-full border-gray-300 rounded-md shadow-sm focus:border-korzen-olive focus:ring-korzen-olive py-2 px-3 border" 
                      placeholder="Ulica i numer" 
                    />
                  </div>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-1">Kod pocztowy</label>
                      <input 
                        type="text" 
                        name="zip"
                        value={formData.zip}
                        onChange={handleInputChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-korzen-olive focus:ring-korzen-olive py-2 px-3 border" 
                      />
                    </div>
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-1">Miasto</label>
                      <input 
                        type="text" 
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                        className="w-full border-gray-300 rounded-md shadow-sm focus:border-korzen-olive focus:ring-korzen-olive py-2 px-3 border" 
                      />
                    </div>
                  </div>

                  <div className="pt-4">
                    <button 
                      type="button" 
                      onClick={handleNextStep}
                      className="w-full bg-korzen-olive text-white py-3 rounded-md hover:bg-korzen-olive/90 transition-colors font-medium"
                    >
                      Przejdź do wysyłki
                    </button>
                  </div>
                </form>
              </div>
            )}

            {step === 2 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-6">Metoda wysyłki</h2>
                <div className="space-y-4">
                  <div className="border border-korzen-olive bg-korzen-olive/5 p-4 rounded-md flex justify-between items-center cursor-pointer">
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 rounded-full border border-korzen-olive bg-korzen-olive flex items-center justify-center">
                          <div className="w-2 h-2 rounded-full bg-white" />
                       </div>
                       <span className="font-medium text-korzen-charcoal">Kurier InPost</span>
                    </div>
                    <span className="font-medium">{total > 200 ? formatPrice(0) : formatPrice(15)}</span>
                  </div>
                  
                  <div className="border border-gray-200 p-4 rounded-md flex justify-between items-center cursor-pointer opacity-60">
                    <div className="flex items-center gap-3">
                       <div className="w-4 h-4 rounded-full border border-gray-300" />
                       <span className="font-medium text-gray-600">Paczkomaty (Wkrótce)</span>
                    </div>
                  </div>
                </div>

                <div className="pt-8 flex gap-4">
                  <button 
                    type="button" 
                    onClick={() => setStep(1)}
                    className="w-1/3 border border-gray-300 text-gray-700 py-3 rounded-md hover:bg-gray-50 transition-colors font-medium"
                  >
                    Wróć
                  </button>
                  <button 
                    type="button" 
                    onClick={handleNextStep}
                    className="w-2/3 bg-korzen-olive text-white py-3 rounded-md hover:bg-korzen-olive/90 transition-colors font-medium"
                  >
                    Przejdź do płatności
                  </button>
                </div>
              </div>
            )}

            {step === 3 && (
              <div className="bg-white p-8 rounded-lg shadow-sm border border-gray-100">
                <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-6">Płatność i Finalizacja</h2>
                <div className="text-center py-6">
                  <p className="text-gray-600 mb-8">
                    Obecnie realizujemy zamówienia poprzez bezpośredni kontakt. 
                    Kliknij poniżej, aby wysłać zamówienie przez WhatsApp. 
                    Potwierdzimy dostępność i podamy dane do przelewu.
                  </p>
                  
                  <button 
                    className="bg-[#25D366] text-white px-8 py-4 rounded-md hover:bg-[#20bd5a] transition-colors font-medium flex items-center justify-center mx-auto gap-3 text-lg"
                    onClick={() => {
                      const orderText = `*Nowe Zamówienie ze strony KORZEŃ*\n\n` +
                        `*Produkty:*\n` +
                        cart.map(item => `- ${item.quantity}x ${item.name} (${formatPrice((item.price + (item.customization?.size?.priceMod || 0) + (item.customization?.engraving ? 20 : 0)) * item.quantity)})`).join('\n') +
                        `\n\n*Dostawa:* ${total > 200 ? 'Gratis' : '15 zł'}` +
                        `\n*Do zapłaty:* ${formatPrice(total + (total > 200 ? 0 : 15))}` +
                        `\n\n*Dane klienta:*\n${formData.firstName} ${formData.lastName}\n${formData.email}\n${formData.address}\n${formData.zip} ${formData.city}`;
                      
                      // Guardar orden en el sistema
                      addOrder({
                        items: cart.map(item => ({
                          id: item.id,
                          name: item.name,
                          price: item.price,
                          quantity: item.quantity,
                          image: item.image,
                          customization: item.customization
                        })),
                        customerInfo: {
                          name: `${formData.firstName} ${formData.lastName}`,
                          email: formData.email,
                          phone: '',
                          address: `${formData.address}, ${formData.zip} ${formData.city}`
                        },
                        total: total + (total > 200 ? 0 : 15),
                        shippingCost: total > 200 ? 0 : 15
                      });
                      
                      // Limpiar carrito
                      clearCart();
                      
                      const encodedText = encodeURIComponent(orderText);
                      window.open(`https://wa.me/48123456789?text=${encodedText}`, '_blank');
                    }}
                  >
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" className="css-i6dzq1"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                    Zamów przez WhatsApp
                  </button>
                  <p className="text-xs text-gray-400 mt-4">Nie masz WhatsApp? Napisz do nas na kontakt@korzen.pl</p>
                </div>
                
                 <div className="pt-8">
                  <button 
                    type="button" 
                    onClick={() => setStep(2)}
                    className="text-sm text-gray-500 hover:text-korzen-charcoal underline"
                  >
                    Wróć do wysyłki
                  </button>
                </div>
              </div>
            )}
          </div>

          {/* Right Column: Order Summary */}
          <div className="lg:w-96">
            <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 sticky top-32">
              <h3 className="text-lg font-serif font-bold text-korzen-charcoal mb-4">Podsumowanie</h3>
              <div className="space-y-4 mb-6 max-h-80 overflow-y-auto pr-2">
                {cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-3">
                    <div className="w-16 h-16 bg-gray-100 rounded-md overflow-hidden flex-shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div className="flex-1">
                      <h4 className="text-sm font-medium text-gray-900 line-clamp-2">{item.name}</h4>
                      <p className="text-xs text-gray-500 mt-1">Ilość: {item.quantity}</p>
                    </div>
                    <div className="text-sm font-medium text-gray-900">
                      {formatPrice((item.price + (item.customization?.size?.priceMod || 0) + (item.customization?.engraving ? 20 : 0)) * item.quantity)}
                    </div>
                  </div>
                ))}
              </div>
              
              <div className="border-t border-gray-100 pt-4 space-y-2">
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Wartość koszyka</span>
                  <span>{formatPrice(total)}</span>
                </div>
                <div className="flex justify-between text-sm text-gray-600">
                  <span>Dostawa</span>
                  <span>{total > 200 ? formatPrice(0) : formatPrice(15)}</span>
                </div>
              </div>
              
              <div className="border-t border-gray-100 pt-4 mt-4">
                <div className="flex justify-between text-lg font-bold text-korzen-charcoal">
                  <span>Do zapłaty</span>
                  <span>{formatPrice(total + (total > 200 ? 0 : 15))}</span>
                </div>
              </div>
            </div>
          </div>

        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Checkout;