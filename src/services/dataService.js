import { products as localProducts } from '../data/products';
import { blogPosts as localBlogPosts } from '../data/blogPosts';

// --- PRODUCTOS ---

export const getProducts = async () => {
  // Retorna datos locales simulando una carga asíncrona rápida
  return new Promise(resolve => setTimeout(() => resolve(localProducts), 50));
};

export const getProductById = async (id) => {
  return new Promise(resolve => setTimeout(() => resolve(localProducts.find(p => p.id === id)), 50));
};

// --- BLOG ---

export const getBlogPosts = async () => {
  return new Promise(resolve => setTimeout(() => resolve(localBlogPosts), 50));
};

export const getBlogPostById = async (id) => {
  return new Promise(resolve => setTimeout(() => resolve(localBlogPosts.find(p => p.id === Number(id) || p.id === id)), 50));
};
