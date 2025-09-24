import React from 'react'
import { Link } from 'react-router-dom';
import { ShoppingCart, Eye } from 'lucide-react';

const ProductGrid = ({ products, loading, error }) => {
    if (loading) {
        return (
            <div className="max-w-7xl mx-auto px-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                    {[...Array(8)].map((_, index) => (
                        <div key={index} className="animate-pulse">
                            <div className="bg-gray-300 h-80 rounded-2xl mb-4"></div>
                            <div className="bg-gray-300 h-4 rounded mb-2"></div>
                            <div className="bg-gray-300 h-4 rounded w-1/2"></div>
                        </div>
                    ))}
                </div>
            </div>
        );
    }
    
    if (error) {
        return (
            <div className="max-w-7xl mx-auto px-4 text-center py-16">
                <div className="bg-red-50 border border-red-200 rounded-lg p-8">
                    <h3 className="text-xl font-semibold text-red-800 mb-2">Error Loading Products</h3>
                    <p className="text-red-600">{error}</p>
                </div>
            </div>
        );
    }
    
    return (
        <div className='max-w-7xl mx-auto px-4'>
            <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 md:gap-8'>
                {products.map((product, index) => (
                    <div
                        key={index}
                        className='group relative bg-white rounded-2xl shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden border border-gray-100'
                    >
                        {/* Product Image Container */}
                        <div className='relative overflow-hidden rounded-t-2xl bg-gray-50'>
                            <Link to={`/products/${product._id}`}>
                                <img 
                                    src={product.images[0].url} 
                                    alt={product.images[0].altText || product.name} 
                                    loading="lazy"
                                    className='w-full h-64 md:h-72 object-cover transition-transform duration-500 group-hover:scale-110' 
                                />
                            </Link>
                            
                            {/* Overlay with quick actions */}
                            <div className='absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center'>
                                <div className='flex space-x-3'>
                                    <Link 
                                        to={`/products/${product._id}`}
                                        className='bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-110'>
                                        <Eye className='w-5 h-5 text-gray-700' />
                                    </Link>
                                    <button className='bg-white p-3 rounded-full hover:bg-gray-100 transition-colors duration-200 transform hover:scale-110'>
                                        <ShoppingCart className='w-5 h-5 text-gray-700' />
                                    </button>
                                </div>
                            </div>
                            
                            {/* Sale Badge */}
                            {product.onSale && (
                                <div className='absolute top-3 left-3 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-semibold'>
                                    SALE
                                </div>
                            )}
                        </div>
                        
                        {/* Product Info */}
                        <div className='p-4 md:p-6'>
                            <Link to={`/products/${product._id}`}>
                                <h3 className='text-lg font-semibold text-gray-900 mb-2 line-clamp-2 group-hover:text-blue-600 transition-colors duration-200'>
                                    {product.name}
                                </h3>
                            </Link>
                            
                            {/* Price */}
                            <div className='flex items-center justify-between'>
                                <div className='flex items-center space-x-2'>
                                    <span className='text-xl font-bold text-gray-900'>
                                        ₹{product.price}
                                    </span>
                                    {product.discountPrice && product.discountPrice !== product.price && (
                                        <span className='text-sm text-gray-500 line-through'>
                                            ₹{product.discountPrice}
                                        </span>
                                    )}
                                </div>
                                
                                {/* Rating Stars */}
                                <div className='flex items-center space-x-1'>
                                    {[...Array(5)].map((_, i) => (
                                        <svg 
                                            key={i} 
                                            className={`w-4 h-4 ${i < (product.rating || 4) ? 'text-yellow-400' : 'text-gray-300'}`} 
                                            fill='currentColor' 
                                            viewBox='0 0 20 20'
                                        >
                                            <path d='M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z' />
                                        </svg>
                                    ))}
                                </div>
                            </div>
                            
                            {/* Category */}
                            {product.category && (
                                <p className='text-sm text-gray-500 mt-2 capitalize'>
                                    {product.category}
                                </p>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default ProductGrid