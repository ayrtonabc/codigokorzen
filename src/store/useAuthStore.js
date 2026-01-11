import { create } from 'zustand';
import { persist } from 'zustand/middleware';

const useAuthStore = create(
  persist(
    (set) => ({
      isAuthenticated: false,
      user: null,
      
      // Credenciales por defecto (en producción deberías usar una API real)
      login: (email, password) => {
        // Credenciales de ejemplo
        if (email === 'admin@korzen.com' && password === 'admin123') {
          set({ 
            isAuthenticated: true, 
            user: { email, role: 'admin' } 
          });
          return { success: true };
        }
        return { success: false, error: 'Credenciales inválidas' };
      },
      
      logout: () => {
        set({ isAuthenticated: false, user: null });
      },
    }),
    {
      name: 'auth-storage',
    }
  )
);

export default useAuthStore;
