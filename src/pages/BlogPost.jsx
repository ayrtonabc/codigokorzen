import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2 } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import { getBlogPostById } from '../services/dataService';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
       setLoading(true);
       try {
         const data = await getBlogPostById(id);
         setPost(data);
       } catch (error) {
         console.error("Failed to load post", error);
       } finally {
         setLoading(false);
       }
    };
    loadPost();
  }, [id]);

  if (loading) {
     return (
        <div className="min-h-screen flex items-center justify-center bg-stone-50">
           <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-korzen-olive"></div>
        </div>
     );
  }

  if (!post) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-stone-50">
        <div className="text-center">
          <h2 className="text-2xl font-serif text-korzen-charcoal mb-4">Artykuł nie znaleziony</h2>
          <button onClick={() => navigate('/blog')} className="text-korzen-olive hover:underline">
            Wróć do bloga
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen flex flex-col bg-stone-50">
      <Helmet>
        <title>{post.title} | Blog KORZEŃ</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <Navbar />
      <CartDrawer />

      <main className="flex-grow pt-32 pb-16 px-4 sm:px-6 lg:px-8 max-w-4xl mx-auto w-full">
        <button 
          onClick={() => navigate('/blog')}
          className="flex items-center text-sm text-gray-500 hover:text-korzen-olive mb-8 transition-colors"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Wróć do listy artykułów
        </button>

        <article>
          <motion.header 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="mb-12 text-center"
          >
            <div className="inline-block px-3 py-1 bg-korzen-olive/10 text-korzen-olive text-xs font-bold uppercase tracking-wider rounded-full mb-4">
              {post.category}
            </div>
            <h1 className="text-3xl md:text-5xl font-serif font-bold text-korzen-charcoal mb-6 leading-tight">
              {post.title}
            </h1>
            <div className="flex items-center justify-center text-sm text-gray-500 space-x-6">
              <span className="flex items-center">
                <Calendar size={16} className="mr-2" /> {post.date}
              </span>
              <span className="flex items-center">
                <Clock size={16} className="mr-2" /> {post.readTime}
              </span>
            </div>
          </motion.header>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="aspect-video w-full rounded-xl overflow-hidden mb-12 shadow-lg"
          >
            <img src={post.image} alt={post.title} className="w-full h-full object-cover" />
          </motion.div>

          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="prose prose-lg prose-stone mx-auto"
          >
            <p className="lead text-xl text-gray-600 mb-8 font-serif italic border-l-4 border-korzen-olive pl-4">
              {post.excerpt}
            </p>
            <ContentRenderer content={post.content} />
          </motion.div>
          
          <div className="mt-12 pt-8 border-t border-gray-200 flex justify-between items-center">
            <p className="font-serif font-bold text-lg text-korzen-charcoal">Podobało się? Udostępnij:</p>
            <button className="p-2 rounded-full hover:bg-gray-100 transition-colors text-gray-600">
               <Share2 size={24} />
            </button>
          </div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
