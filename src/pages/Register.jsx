import { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { UserPlus, Mail, Lock, User, AlertCircle, CheckCircle, ArrowLeft } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import useUserStore from '../store/useUserStore';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';

export default function Register() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    password: '',
    confirmPassword: '',
  });
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const navigate = useNavigate();
  const { register, loading } = useUserStore();

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    
    // Validaciones
    if (formData.password !== formData.confirmPassword) {
      setError('Hasła nie pasują do siebie');
      return;
    }

    if (formData.password.length < 6) {
      setError('Hasło musi mieć co najmniej 6 znaków');
      return;
    }
    
    const result = await register(formData.email, formData.password, formData.fullName);
    if (result.success) {
      setSuccess(true);
      setTimeout(() => {
        navigate('/');
      }, 2000);
    } else {
      setError(result.error || 'Błąd podczas tworzenia konta');
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>Zarejestruj się | KORZEŃ - Pracownia</title>
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
                  Dołącz do społeczności KORZEŃ
                </h1>
                <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                  Stwórz konto i ciesz się wyjątkowymi korzyściami w naszej pracowni rękodzieła.
                </p>
                <div className="space-y-4 text-sm text-gray-600">
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-korzen-olive rounded-full mt-2"></div>
                    <p>Dostęp do ekskluzywnych promocji</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-korzen-olive rounded-full mt-2"></div>
                    <p>Newsletter z inspiracjami i nowinkami</p>
                  </div>
                  <div className="flex items-start space-x-3">
                    <div className="w-2 h-2 bg-korzen-olive rounded-full mt-2"></div>
                    <p>Możliwość personalizacji produktów</p>
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
              {success ? (
                <motion.div 
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  className="text-center py-8"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                    <CheckCircle className="w-8 h-8 text-green-600" />
                  </div>
                  <h3 className="text-2xl font-serif font-bold text-korzen-charcoal mb-2">
                    Konto utworzone!
                  </h3>
                  <p className="text-gray-600 mb-4">
                    Twoje konto zostało pomyślnie utworzone. Przekierowanie...
                  </p>
                  <div className="animate-spin rounded-full h-8 w-8 border-t-2 border-korzen-olive mx-auto"></div>
                </motion.div>
              ) : (
                <>
                  <div className="mb-8">
                    <h2 className="text-2xl font-serif font-bold text-korzen-charcoal mb-2">
                      Utwórz konto
                    </h2>
                    <p className="text-gray-600 text-sm">
                      Wypełnij formularz, aby dołączyć do nas
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
                        Imię i nazwisko
                      </label>
                      <div className="relative">
                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="text"
                          name="fullName"
                          value={formData.fullName}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korzen-olive focus:border-korzen-olive transition-all bg-white"
                          placeholder="Jan Kowalski"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Adres e-mail
                      </label>
                      <div className="relative">
                        <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korzen-olive focus:border-korzen-olive transition-all bg-white"
                          placeholder="jan@example.pl"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Hasło
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          name="password"
                          value={formData.password}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korzen-olive focus:border-korzen-olive transition-all bg-white"
                          placeholder="Min. 6 znaków"
                          required
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Potwierdź hasło
                      </label>
                      <div className="relative">
                        <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                        <input
                          type="password"
                          name="confirmPassword"
                          value={formData.confirmPassword}
                          onChange={handleChange}
                          className="w-full pl-11 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-korzen-olive focus:border-korzen-olive transition-all bg-white"
                          placeholder="Powtórz hasło"
                          required
                        />
                      </div>
                    </div>

                    <div className="flex items-start space-x-2 text-sm">
                      <input 
                        type="checkbox" 
                        id="terms"
                        required
                        className="w-4 h-4 mt-0.5 text-korzen-olive border-gray-300 rounded focus:ring-korzen-olive"
                      />
                      <label htmlFor="terms" className="text-gray-600">
                        Akceptuję{' '}
                        <Link to="/terms" className="text-korzen-olive hover:text-korzen-charcoal font-medium">
                          regulamin
                        </Link>
                        {' '}i{' '}
                        <Link to="/privacy" className="text-korzen-olive hover:text-korzen-charcoal font-medium">
                          politykę prywatności
                        </Link>
                      </label>
                    </div>

                    <button
                      type="submit"
                      disabled={loading}
                      className="w-full bg-korzen-olive text-white py-3.5 rounded-lg hover:bg-korzen-charcoal transition-all font-medium flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
                    >
                      {loading ? (
                        <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-white"></div>
                      ) : (
                        <>
                          <UserPlus className="w-5 h-5" />
                          <span>Utwórz konto</span>
                        </>
                      )}
                    </button>
                  </form>

                  {/* Divider */}
                  <div className="relative my-6">
                    <div className="absolute inset-0 flex items-center">
                      <div className="w-full border-t border-gray-200"></div>
                    </div>
                    <div className="relative flex justify-center text-xs">
                      <span className="px-3 bg-white text-gray-500 uppercase tracking-wider">
                        Lub
                      </span>
                    </div>
                  </div>

                  {/* Login Link */}
                  <div className="text-center">
                    <p className="text-sm text-gray-600">
                      Masz już konto?{' '}
                      <Link 
                        to="/login" 
                        className="text-korzen-olive hover:text-korzen-charcoal font-semibold transition-colors"
                      >
                        Zaloguj się tutaj
                      </Link>
                    </p>
                  </div>
                </>
              )}
            </div>

            {/* Back Link */}
            {!success && (
              <div className="text-center mt-6">
                <button
                  onClick={() => navigate('/')}
                  className="inline-flex items-center text-sm text-gray-600 hover:text-korzen-olive transition-colors"
                >
                  <ArrowLeft className="w-4 h-4 mr-1" />
                  Powrót do sklepu
                </button>
              </div>
            )}
          </motion.div>

        </div>
      </main>

      <Footer />
    </div>
  );
}
