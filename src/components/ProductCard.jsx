import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { formatPrice } from '../utils/formatPrice';

const ProductCard = ({ product }) => {
  return (
    <Link to={`/product/${product.id}`} className="group block">
      <div className="relative overflow-hidden rounded-lg bg-gray-100 aspect-[4/5]">
        <img
          src={product.image}
          alt={product.name}
          className="h-full w-full object-cover object-center transition-transform duration-500 group-hover:scale-110"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-300" />
        
        {/* Quick Add overlay or just a badge? keeping it clean for now */}
        {product.category === 'kids' && (
           <span className="absolute top-2 right-2 bg-yellow-400 text-xs font-bold px-2 py-1 rounded-full text-black">
             Dla Dzieci
           </span>
        )}
      </div>
      <div className="mt-4 flex justify-between">
        <div>
          <h3 className="text-lg font-medium text-korzen-charcoal group-hover:text-korzen-olive transition-colors">
            {product.name}
          </h3>
          {/* <p className="mt-1 text-sm text-gray-500 capitalize">{product.subcategory}</p> */}
        </div>
        <p className="text-lg font-serif font-bold text-korzen-wood">{formatPrice(product.price)}</p>
      </div>
    </Link>
  );
};

export default ProductCard;
