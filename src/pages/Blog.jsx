import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Calendar, Clock, ArrowRight } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import useBlogStore from '../store/useBlogStore';

const Blog = () => {
  const { posts, loading, fetchPosts } = useBlogStore();

  useEffect(() => {
    fetchPosts();
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

        <div className="space-y-6">
          {loading ? (
             <div className="flex justify-center py-20">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-korzen-olive"></div>
             </div>
          ) : (
            posts.map((post, index) => (
            <motion.article 
              key={post.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="bg-white rounded-xl overflow-hidden shadow-sm hover:shadow-md transition-shadow border border-stone-100"
            >
              <Link to={`/blog/${post.id}`} className="flex flex-col md:flex-row group">
                <div className="md:w-2/5 lg:w-1/3 aspect-video md:aspect-auto overflow-hidden">
                  <img 
                    src={post.image} 
                    alt={post.title} 
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                
                <div className="p-6 md:p-8 flex flex-col flex-grow md:w-3/5 lg:w-2/3">
                  <div className="flex items-center text-xs text-korzen-olive font-medium uppercase tracking-wider mb-3">
                    <span>{post.category}</span>
                  </div>
                  
                  <h2 className="text-2xl md:text-3xl font-serif font-bold text-gray-900 mb-4 hover:text-korzen-olive transition-colors">
                    {post.title}
                  </h2>
                  
                  <p className="text-gray-600 mb-6 line-clamp-3 flex-grow">
                    {post.excerpt}
                  </p>
                  
                  <div className="flex items-center justify-between flex-wrap gap-4">
                    <div className="flex items-center space-x-4 text-xs text-gray-500">
                      <span className="flex items-center">
                        <Calendar size={14} className="mr-1" /> {post.date}
                      </span>
                      <span className="flex items-center">
                        <Clock size={14} className="mr-1" /> {post.readTime}
                      </span>
                    </div>
                    
                    <span className="inline-flex items-center text-sm font-medium text-korzen-charcoal group-hover:text-korzen-olive transition-colors">
                      Czytaj więcej <ArrowRight size={16} className="ml-1" />
                    </span>
                  </div>
                </div>
              </Link>
            </motion.article>
          )))}
        </div>
      </main>
      
      <Footer />
    </div>
  );
};

export default Blog;
