import { create } from 'zustand';
import { supabase } from '../lib/supabase';

const useBlogStore = create((set, get) => ({
  posts: [],
  loading: false,
  error: null,

  // Cargar posts desde Supabase
  fetchPosts: async () => {
    set({ loading: true, error: null });
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .select('*')
        .order('created_at', { ascending: false });
      
      if (error) throw error;
      set({ posts: data || [], loading: false });
    } catch (error) {
      console.error('Error fetching posts:', error);
      set({ error: error.message, loading: false });
    }
  },

  addPost: async (post) => {
    try {
      const newPost = {
        id: Date.now().toString(),
        date: new Date().toLocaleDateString('es-ES', {
          year: 'numeric',
          month: 'long',
          day: 'numeric'
        }),
        read_time: '5 min czytania',
        ...post,
        created_at: new Date().toISOString(),
        updated_at: new Date().toISOString(),
      };

      const { data, error } = await supabase
        .from('blog_posts')
        .insert([newPost])
        .select()
        .single();

      if (error) throw error;

      set((state) => ({ posts: [data, ...state.posts] }));
      return { success: true };
    } catch (error) {
      console.error('Error adding post:', error);
      return { success: false, error: error.message };
    }
  },

  updatePost: async (id, updatedPost) => {
    try {
      const { data, error } = await supabase
        .from('blog_posts')
        .update({ ...updatedPost, updated_at: new Date().toISOString() })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;

      set((state) => ({
        posts: state.posts.map((post) => (post.id === id ? data : post)),
      }));

      return { success: true };
    } catch (error) {
      console.error('Error updating post:', error);
      return { success: false, error: error.message };
    }
  },

  deletePost: async (id) => {
    try {
      const { error } = await supabase
        .from('blog_posts')
        .delete()
        .eq('id', id);

      if (error) throw error;

      set((state) => ({
        posts: state.posts.filter((post) => post.id !== id),
      }));

      return { success: true };
    } catch (error) {
      console.error('Error deleting post:', error);
      return { success: false, error: error.message };
    }
  },

  getPostById: (id) => {
    return get().posts.find((post) => post.id === id);
  },
}));

export default useBlogStore;
