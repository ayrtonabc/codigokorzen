import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { getBlogPosts } from '../services/dataService';

const Blog = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPosts = async () => {
      try {
        const data = await getBlogPosts();
        setPosts(data);
      } catch (error) {
        console.error("Failed to load blog posts", error);
      } finally {
        setLoading(false);
      }
    };
    loadPosts();
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Helmet>
        <title>Blog & Porady | KORZEŃ - Rękodzieło z Drewna</title>
        <meta name="description" content="Porady dotyczące pielęgnacji drewna, inspiracje prezentowe i wiedza o ekologicznym stylu życia. Odkryj świat naturalnego piękna z KORZEŃ." />
      </Helmet>
      
      <Navbar />
      <CartDrawer />

      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto w-full">
        <div className="text-center mb-16">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-4xl md:text-5xl font-serif text-korzen-charcoal mb-4"
          >
            Dziennik Pracowni
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="text-lg text-gray-600 max-w-2xl mx-auto"
          >
            Dzielimy się wiedzą o drewnie, inspiracjami i życiem naszej manufaktury.
          </motion.p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {loading ? (
             <div className="col-span-full flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-korzen-olive"></div>
             </div>
          ) : (
            posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100 flex flex-col h-full"
            >
              <Link to={`/blog/${post.id}`} className="block aspect-video overflow-hidden group">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </Link>
              
              <div className="p-6 flex flex-col flex-grow">
                <div className="flex items-center text-xs text-korzen-olive font-medium uppercase tracking-wider mb-3">
                  <span>{post.category}</span>
                </div>
                
                <h2 className="text-xl font-serif font-bold text-gray-900 mb-3 line-clamp-2 hover:text-korzen-olive transition-colors">
                  <Link to={`/blog/${post.id}`}>{post.title}</Link>
                </h2>
                
                <p className="text-gray-600 text-sm mb-6 line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>
                
                <div className="flex items-center justify-between pt-4 border-t border-gray-100 text-xs text-gray-500">
                  <div className="flex items-center space-x-4">
                    <span className="flex items-center">
                      <Calendar size={14} className="mr-1" /> {post.date}
                    </span>
                    <span className="flex items-center">
                      <Clock size={14} className="mr-1" /> {post.readTime}
                    </span>
                  </div>
                </div>
                
                <Link 
                  to={`/blog/${post.id}`}
                  className="mt-4 inline-flex items-center text-sm font-medium text-korzen-charcoal hover:text-korzen-olive transition-colors"
                >
                  Czytaj więcej <ArrowRight size={16} className="ml-1" />
                </Link>
              </div>
            </motion.article>
          )))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
