import React from 'react';
import { X, Trash2, Plus, Minus } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { formatPrice } from '../utils/formatPrice';
import useCartStore from '../store/useCartStore';

const CartDrawer = () => {
  const { cart, isCartOpen, closeCart, removeFromCart, updateQuantity, getCartTotal } = useCartStore();
  const total = getCartTotal(cart);

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 0.5 }}
            exit={{ opacity: 0 }}
            onClick={closeCart}
            className="fixed inset-0 bg-black z-[60]"
          />
          
          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 max-w-md w-full bg-white shadow-xl z-[70] flex flex-col"
          >
            <div className="flex items-center justify-between p-4 border-b border-gray-100">
              <h2 className="text-xl font-serif font-bold text-korzen-charcoal">Twój Koszyk</h2>
              <button onClick={closeCart} className="p-2 hover:bg-gray-100 rounded-full">
                <X className="h-6 w-6 text-gray-500" />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-4 space-y-4">
              {cart.length === 0 ? (
                <div className="text-center py-10 text-gray-500">
                  Koszyk jest pusty.
                </div>
              ) : (
                cart.map((item) => (
                  <div key={item.cartItemId} className="flex gap-4 py-4 border-b border-gray-50">
                    <div className="h-20 w-20 flex-shrink-0 overflow-hidden rounded-md border border-gray-200">
                      <img
                        src={item.image}
                        alt={item.name}
                        className="h-full w-full object-cover object-center"
                      />
                    </div>

                    <div className="flex flex-1 flex-col">
                      <div>
                        <div className="flex justify-between text-base font-medium text-gray-900">
                          <h3>{item.name}</h3>
                          <p className="ml-4">
                            {/* Calculate individual item price with modifiers */}
                            {(() => {
                                let price = item.price;
                                if(item.customization?.size?.priceMod) price += item.customization.size.priceMod;
                                if(item.customization?.engraving) price += 20;
                                return formatPrice(price * item.quantity);
                            })()}
                          </p>
                        </div>
                        {item.customization?.size && (
                            <p className="mt-1 text-sm text-gray-500">Rozmiar: {item.customization.size.label}</p>
                        )}
                        {item.customization?.engraving && (
                            <p className="mt-1 text-sm text-korzen-olive">Grawer: "{item.customization.engraving}"</p>
                        )}
                      </div>
                      <div className="flex flex-1 items-end justify-between text-sm">
                        <div className="flex items-center border rounded-md">
                            <button 
                                onClick={() => updateQuantity(item.cartItemId, -1)}
                                className="p-1 hover:bg-gray-100"
                            >
                                <Minus className="h-4 w-4" />
                            </button>
                            <span className="px-2">{item.quantity}</span>
                            <button 
                                onClick={() => updateQuantity(item.cartItemId, 1)}
                                className="p-1 hover:bg-gray-100"
                            >
                                <Plus className="h-4 w-4" />
                            </button>
                        </div>

                        <button
                          type="button"
                          onClick={() => removeFromCart(item.cartItemId)}
                          className="font-medium text-red-500 hover:text-red-700 flex items-center gap-1"
                        >
                          <Trash2 className="h-4 w-4" /> Usuń
                        </button>
                      </div>
                    </div>
                  </div>
                ))
              )}
            </div>

            <div className="border-t border-gray-100 p-4 bg-gray-50">
              <div className="flex justify-between text-base font-medium text-gray-900 mb-4">
                <p>Suma</p>
                <p>{formatPrice(total)}</p>
              </div>
              <p className="mt-0.5 text-sm text-gray-500 mb-4">
                Dostawa obliczana przy kasie.
              </p>
              <div className="mt-6">
                <Link
                  to="/checkout"
                  onClick={closeCart}
                  className="flex items-center justify-center rounded-md border border-transparent bg-korzen-olive px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-korzen-olive/90 transition-colors"
                >
                  Przejdź do kasy
                </Link>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};

export default CartDrawer;
