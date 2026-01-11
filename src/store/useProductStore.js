import { create } from 'zustand';
import { supabase } from '../lib/supabase';

const useProductStore = create((set, get) => ({
  products: [],
  loading: false,
  error: null,

  // Cargar productos desde Supabase
  fetchProducts: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('products')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      set({ products: data || [], loading: false });
    } catch (error) {
      console.error('Error fetching products:', error);
      set({ error: error.message, loading: false });
    }
  },

  // Agregar producto
  addProduct: async (product) => {
    try {
      const newProduct = {
        id: Date.now().toString(),
        ...product,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('products')
        .insert([newProduct])
        .select()
        .single();

      if (error) throw error;
      
      set((state) => ({ 
        products: [data, ...state.products] 
      }));
      
      return { success: true, data };
    } catch (error) {
      console.error('Error adding product:', error);
      return { success: false, error: error.message };
    }
  },

  // Actualizar producto
  updateProduct: async (id, updates) => {
    try {
      const { data, error } = await supabase
        .from('products')
        .update({ ...updates, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      set((state) => ({
        products: state.products.map((p) => (p.id === id ? data : p)),
      }));

      return { success: true, data };
    } catch (error) {
      console.error('Error updating product:', error);
      return { success: false, error: error.message };
    }
  },

  // Eliminar producto
  deleteProduct: async (id) => {
    try {
      const { error } = await supabase
        .from('products')
        .delete()
        .eq('id', id);

      if (error) throw error;

      set((state) => ({
        products: state.products.filter((p) => p.id !== id),
      }));

      return { success: true };
    } catch (error) {
      console.error('Error deleting product:', error);
      return { success: false, error: error.message };
    }
  },
}));

export default useProductStore;
