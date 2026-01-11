import { create } from 'zustand';
import { supabase } from '../lib/supabase';

const useOrderStore = create((set, get) => ({
  orders: [],
  loading: false,
  error: null,

  // Cargar órdenes desde Supabase
  fetchOrders: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('orders')
        .select('*')
        .order('date', { ascending: false });
      
      if (error) throw error;
      set({ orders: data || [], loading: false });
    } catch (error) {
      console.error('Error fetching orders:', error);
      set({ error: error.message, loading: false });
    }
  },

  addOrder: async (order) => {
    try {
      const newOrder = {
        id: Date.now().toString(),
        date: new Date().toISOString(),
        status: 'pending',
        ...order,
        created_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('orders')
        .insert([newOrder])
        .select()
        .single();

      if (error) throw error;

      set((state) => ({ orders: [data, ...state.orders] }));
      return { success: true };
    } catch (error) {
      console.error('Error adding order:', error);
      return { success: false, error: error.message };
    }
  },

  updateOrderStatus: async (orderId, status) => {
    try {
      const { data, error } = await supabase
        .from('orders')
        .update({ status })
        .eq('id', orderId)
        .select()
        .single();

      if (error) throw error;

      set((state) => ({
        orders: state.orders.map((order) =>
          order.id === orderId ? data : order
        ),
      }));

      return { success: true };
    } catch (error) {
      console.error('Error updating order:', error);
      return { success: false, error: error.message };
    }
  },

  getOrderById: (orderId) => {
    return get().orders.find((order) => order.id === orderId);
  },
}));

export default useOrderStore;
