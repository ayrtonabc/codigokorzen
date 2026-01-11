import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Lock, Mail, AlertCircle, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useAuthStore from '../store/useAuthStore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function AdminLogin() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const login = useAuthStore((state) => state.login);

  const handleSubmit = (e) => {
    e.preventDefault();
    setError('');
    
    const result = login(email.trim(), password);
    if (result.success) {
      navigate('/admin/dashboard');
    } else {
      setError(result.error);
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Zaloguj się | KORZEŃ - Pracownia</title>
      </Helmet>
      
      <Navbar />

      <main className="flex-grow flex items-center justify-center px-4 py-24">
        <div className="max-w-6xl w-full grid md:grid-cols-2 gap-12 items-center">
          
          {/* Left Side - Decorative */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            className="hidden md:block"
          >
            <div className="relative">
              <div className="absolute -top-4 -left-4 w-72 h-72 bg-korzen-olive/10 rounded-full blur-3xl"></div>
              <div className="relative z-10">
                <h1 className="text-5xl font-serif font-bold text-korzen-charcoal mb-6 leading-tight">
                  Witaj ponownie w KORZEŃ
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Zaloguj się, aby zarządzać swoją pracownią rękodzieła.
                </p>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-korzen-olive rounded-full mt-2"></div>
                    <p>Zarządzanie produktami</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-korzen-olive rounded-full mt-2"></div>
                    <p>Przeglądanie zamówień</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-korzen-olive rounded-full mt-2"></div>
                    <p>Aktualizowanie bloga</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Side - Form */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
          >
            <div className="bg-white rounded-xl shadow-lg p-8 md:p-10 border border-stone-200">
              <div className="mb-8">
                <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-2">
                  Zaloguj się
                </h2>
                <p className="text-gray-600 text-sm">
                  Wprowadź swoje dane, aby kontynuować
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                {error && (
                  <motion.div 
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    className="bg-red-50 border border-red-200 text-red-700 px-4 py-3 rounded-lg flex items-start space-x-2 text-sm"
                  >
                    <AlertCircle className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <span>{error}</span>
                  </motion.div>
                )}

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">
                    Adres e-mail
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korzen-olive focus:border-korzen-olive transition-all bg-white"
                      placeholder="admin@korzen.com"
                      required
                    />
                  </div>
                </div>

                <div>
                  <div className="flex items-center justify-between mb-2">
                    <label className="block text-sm font-medium text-gray-700">
                      Hasło
                    </label>
                  </div>
                  <div className="relative">
                    <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korzen-olive focus:border-korzen-olive transition-all bg-white"
                      placeholder="••••••••"
                      required
                    />
                  </div>
                </div>

                <div className="bg-amber-50 border border-amber-200 rounded-lg p-3 text-xs text-amber-800">
                  <p className="font-semibold mb-1">Dane testowe:</p>
                  <p>Email: admin@korzen.com</p>
                  <p>Hasło: admin123</p>
                </div>

                <button
                  type="submit"
                  className="w-full bg-korzen-olive text-white py-3.5 rounded-lg hover:bg-korzen-charcoal transition-all font-medium flex items-center justify-center space-x-2"
                >
                  <Lock className="w-5 h-5" />
                  <span>Zaloguj się</span>
                </button>
              </form>
            </div>

            {/* Back Link */}
            <div className="text-center mt-6">
              <button
                onClick={() => navigate('/')}
                className="inline-flex items-center text-sm text-gray-600 hover:text-korzen-olive transition-colors"
              >
                <ArrowLeft className="w-4 h-4 mr-1" />
                Powrót do sklepu
              </button>
            </div>
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
