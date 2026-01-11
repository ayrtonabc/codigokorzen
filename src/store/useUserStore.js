import { create } from 'zustand';
import { supabase } from '../lib/supabase';

const useUserStore = create((set, get) => ({
  user: null,
  isAuthenticated: false,
  loading: false,

  // Inicializar sesión desde localStorage o Supabase
  initializeAuth: async () => {
    try {
      const { data: { session } } = await supabase.auth.getSession();
      if (session) {
        set({ user: session.user, isAuthenticated: true });
      }
    } catch (error) {
      console.error('Error initializing auth:', error);
    }
  },

  // Registro de nuevo usuario
  register: async (email, password, fullName) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            full_name: fullName,
          }
        }
      });

      if (error) throw error;

      set({ 
        user: data.user, 
        isAuthenticated: true,
        loading: false 
      });
      return { success: true };
    } catch (error) {
      set({ loading: false });
      return { success: false, error: error.message };
    }
  },

  // Login de usuario existente
  login: async (email, password) => {
    set({ loading: true });
    try {
      const { data, error } = await supabase.auth.signInWithPassword({
        email,
        password,
      });

      if (error) throw error;

      set({ 
        user: data.user, 
        isAuthenticated: true,
        loading: false 
      });
      return { success: true };
    } catch (error) {
      set({ loading: false });
      return { success: false, error: error.message };
    }
  },

  // Logout
  logout: async () => {
    try {
      await supabase.auth.signOut();
      set({ user: null, isAuthenticated: false });
    } catch (error) {
      console.error('Error logging out:', error);
    }
  },

  // Obtener perfil de usuario
  getUserProfile: () => {
    const { user } = get();
    if (!user) return null;
    return {
      email: user.email,
      fullName: user.user_metadata?.full_name || '',
      id: user.id,
    };
  },
}));

export default useUserStore;
