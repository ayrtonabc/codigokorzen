import { create } from 'zustand';

const useCartStore = create((set) => ({
  cart: [],
  isCartOpen: false,

  toggleCart: () => set((state) => ({ isCartOpen: !state.isCartOpen })),
  
  openCart: () => set({ isCartOpen: true }),
  
  closeCart: () => set({ isCartOpen: false }),

  addToCart: (product, quantity = 1, customization = {}) => set((state) => {
    // Generate a unique ID for the cart item based on product ID and customization options
    const cartItemId = `${product.id}-${JSON.stringify(customization)}`;
    
    const existingItem = state.cart.find(item => item.cartItemId === cartItemId);

    if (existingItem) {
      return {
        cart: state.cart.map(item => 
          item.cartItemId === cartItemId 
            ? { ...item, quantity: item.quantity + quantity } 
            : item
        ),
        isCartOpen: true
      };
    }

    return {
      cart: [...state.cart, { 
        ...product, 
        cartItemId, 
        quantity, 
        customization // { size: '...', engravedText: '...' }
      }],
      isCartOpen: true
    };
  }),

  removeFromCart: (cartItemId) => set((state) => ({
    cart: state.cart.filter(item => item.cartItemId !== cartItemId)
  })),

  updateQuantity: (cartItemId, delta) => set((state) => ({
    cart: state.cart.map(item => {
      if (item.cartItemId === cartItemId) {
        const newQuantity = Math.max(1, item.quantity + delta);
        return { ...item, quantity: newQuantity };
      }
      return item;
    })
  })),

  clearCart: () => set({ cart: [] }),
  
  getCartTotal: (cart) => {
    return cart.reduce((total, item) => {
        let itemPrice = item.price;
        
        // Add size modifier
        if (item.customization?.size?.priceMod) {
            itemPrice += item.customization.size.priceMod;
        }

        // Add engraving cost
        if (item.customization?.engraving) {
            itemPrice += 20; // 20 PLN for engraving
        }

        return total + (itemPrice * item.quantity);
    }, 0);
  }
}));

export default useCartStore;
