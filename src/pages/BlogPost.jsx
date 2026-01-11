import React, { useState, useEffect } from 'react';
import { useParams, useNavigate, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowLeft, Calendar, Clock, Share2, Tag, User } from 'lucide-react';
import { Helmet } from 'react-helmet-async';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import CartDrawer from '../components/CartDrawer';
import ContentRenderer from '../components/ContentRenderer';
import useBlogStore from '../store/useBlogStore';

const BlogPost = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { posts, fetchPosts, getPostById } = useBlogStore();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const loadPost = async () => {
       setLoading(true);
       try {
         if (posts.length === 0) {
           await fetchPosts();
         }
         const data = getPostById(id);
         setPost(data);
       } catch (error) {
         console.error("Failed to load post", error);
       } finally {
         setLoading(false);
       }
    };
    loadPost();
  }, [id, posts.length]);

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
    <div className="min-h-screen flex flex-col bg-white">
      <Helmet>
        <title>{post.title} | Blog KORZEŃ</title>
        <meta name="description" content={post.excerpt} />
      </Helmet>
      
      <Navbar />
      <CartDrawer />

      {/* Hero Section with Image */}
      <div className="relative w-full h-[60vh] md:h-[70vh] overflow-hidden">
        <motion.div 
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
        </motion.div>
        
        {/* Back Button */}
        <motion.button 
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          onClick={() => navigate('/blog')}
          className="absolute top-24 left-4 md:left-8 flex items-center text-white hover:text-korzen-olive transition-colors bg-black/30 backdrop-blur-sm px-4 py-2 rounded-full"
        >
          <ArrowLeft className="h-4 w-4 mr-2" /> Wróć do bloga
        </motion.button>

        {/* Title Overlay */}
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-12">
          <div className="max-w-4xl mx-auto">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="inline-flex items-center px-3 py-1 bg-korzen-olive text-white text-xs font-bold uppercase tracking-wider rounded-full mb-4">
                <Tag size={12} className="mr-1" />
                {post.category}
              </div>
              <h1 className="text-3xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-4 leading-tight drop-shadow-lg">
                {post.title}
              </h1>
              <div className="flex items-center text-sm text-white/90 space-x-6">
                <span className="flex items-center">
                  <User size={16} className="mr-2" /> KORZEŃ Team
                </span>
                <span className="flex items-center">
                  <Calendar size={16} className="mr-2" /> {post.date}
                </span>
                <span className="flex items-center">
                  <Clock size={16} className="mr-2" /> {post.readTime}
                </span>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      <main className="flex-grow py-16 px-4 sm:px-6 lg:px-8">
        <article className="max-w-3xl mx-auto">
          {/* Excerpt */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4 }}
            className="mb-12"
          >
            <p className="text-xl md:text-2xl text-gray-700 leading-relaxed font-serif border-l-4 border-korzen-olive pl-6 py-2 bg-stone-50/50">
              {post.excerpt}
            </p>
          </motion.div>

          {/* Content */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5 }}
            className="prose prose-lg prose-stone max-w-none
              prose-headings:font-serif prose-headings:text-korzen-charcoal prose-headings:font-bold
              prose-p:text-gray-700 prose-p:leading-relaxed prose-p:mb-6
              prose-a:text-korzen-olive prose-a:no-underline hover:prose-a:underline
              prose-strong:text-korzen-charcoal prose-strong:font-semibold
              prose-img:rounded-lg prose-img:shadow-md
              prose-blockquote:border-l-4 prose-blockquote:border-korzen-olive prose-blockquote:pl-6 prose-blockquote:italic prose-blockquote:text-gray-600
              prose-ul:list-disc prose-ul:pl-6
              prose-ol:list-decimal prose-ol:pl-6
              prose-li:text-gray-700 prose-li:mb-2"
          >
            <ContentRenderer content={post.content} />
          </motion.div>
          
          {/* Share Section */}
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
            className="mt-16 pt-8 border-t-2 border-stone-200"
          >
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
              <div>
                <p className="font-serif font-bold text-2xl text-korzen-charcoal mb-2">
                  Podobał Ci się artykuł?
                </p>
                <p className="text-gray-600">
                  Podziel się nim ze znajomymi
                </p>
              </div>
              <button className="group flex items-center space-x-2 px-6 py-3 bg-korzen-olive text-white rounded-full hover:bg-korzen-charcoal transition-colors">
                <Share2 size={20} />
                <span className="font-medium">Udostępnij</span>
              </button>
            </div>
          </motion.div>

          {/* Back to Blog CTA */}
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7 }}
            className="mt-12 p-8 bg-stone-50 rounded-xl text-center"
          >
            <p className="text-gray-600 mb-4">Odkryj więcej inspiracji i porad</p>
            <button 
              onClick={() => navigate('/blog')}
              className="inline-flex items-center px-6 py-3 bg-korzen-charcoal text-white rounded-full hover:bg-korzen-olive transition-colors font-medium"
            >
              <ArrowLeft className="h-5 w-5 mr-2" /> Zobacz więcej artykułów
            </button>
          </motion.div>
        </article>
      </main>
      
      <Footer />
    </div>
  );
};

export default BlogPost;
