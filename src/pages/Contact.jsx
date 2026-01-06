import React, { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import { Mail, Phone, MapPin, Send } from 'lucide-react';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
    // Here you would typically send the data to a backend
  };

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="min-h-screen bg-stone-50 flex flex-col">
      <Navbar />
      
      <main className="flex-grow pt-40 pb-20 px-4">
        <div className="max-w-7xl mx-auto">
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-sm">
              <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-8">Dane kontaktowe</h2>
              
              <div className="space-y-8">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-korzen-olive/10 rounded-full flex items-center justify-center flex-shrink-0 text-korzen-olive">
                    <Phone size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Zadzwoń do nas</h3>
                    <p className="text-gray-600 mb-1">123 456 789</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-korzen-olive/10 rounded-full flex items-center justify-center flex-shrink-0 text-korzen-olive">
                    <svg viewBox="0 0 24 24" width="24" height="24" stroke="currentColor" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"><path d="M21 11.5a8.38 8.38 0 0 1-.9 3.8 8.5 8.5 0 0 1-7.6 4.7 8.38 8.38 0 0 1-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 0 1-.9-3.8 8.5 8.5 0 0 1 4.7-7.6 8.38 8.38 0 0 1 3.8-.9h.5a8.48 8.48 0 0 1 8 8v.5z"></path></svg>
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">WhatsApp</h3>
                    <a href="https://wa.me/48123456789" target="_blank" rel="noopener noreferrer" className="text-gray-600 hover:text-korzen-olive transition-colors">
                      123 456 789
                    </a>
                    <p className="text-sm text-gray-500">Napisz do nas</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-korzen-olive/10 rounded-full flex items-center justify-center flex-shrink-0 text-korzen-olive">
                    <Mail size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Napisz wiadomość</h3>
                    <p className="text-gray-600">kontakt@pracowniakorzen.pl</p>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 bg-korzen-olive/10 rounded-full flex items-center justify-center flex-shrink-0 text-korzen-olive">
                    <MapPin size={24} />
                  </div>
                  <div>
                    <h3 className="font-medium text-lg mb-1">Lokalizacja</h3>
                    <p className="text-sm text-gray-500">Tworzymy w sercu natury</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="bg-white p-8 md:p-12 rounded-lg shadow-lg border border-stone-100">
              <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-8">Formularz kontaktowy</h2>
              
              {submitted ? (
                <div className="text-center py-12">
                  <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                    <Send size={32} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">Wiadomość wysłana!</h3>
                  <p className="text-gray-600">Dziękujemy za kontakt. Odpiszemy najszybciej jak to możliwe.</p>
                  <button 
                    onClick={() => setSubmitted(false)}
                    className="mt-6 text-korzen-olive font-medium hover:underline"
                  >
                    Wyślij kolejną wiadomość
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Imię</label>
                    <input 
                      type="text" 
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-transparent rounded-md px-4 py-3 text-gray-900 focus:bg-white focus:border-stone-200 focus:ring-1 focus:ring-korzen-olive outline-none transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Email</label>
                    <input 
                      type="email" 
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-transparent rounded-md px-4 py-3 text-gray-900 focus:bg-white focus:border-stone-200 focus:ring-1 focus:ring-korzen-olive outline-none transition-all duration-300"
                    />
                  </div>

                  <div>
                    <label className="block text-xs font-bold uppercase tracking-widest text-gray-500 mb-2">Wiadomość</label>
                    <textarea 
                      name="message"
                      required
                      rows="4"
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full bg-stone-50 border border-transparent rounded-md px-4 py-3 text-gray-900 focus:bg-white focus:border-stone-200 focus:ring-1 focus:ring-korzen-olive outline-none transition-all duration-300 resize-none"
                    />
                  </div>

                  <button 
                    type="submit"
                    className="w-full bg-korzen-olive text-white px-6 py-4 rounded-md hover:bg-korzen-wood transition-colors font-bold flex items-center justify-center gap-2 uppercase tracking-widest text-sm shadow-md hover:shadow-lg transform hover:-translate-y-0.5 duration-300"
                  >
                    <Send size={16} />
                    Wyślij wiadomość
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </div>
  );
};

export default Contact;