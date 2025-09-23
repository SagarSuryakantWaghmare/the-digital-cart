import React from 'react'
import mensImage from '../../assets/MensCollection.jpeg';
import womensImage from '../../assets/WomensCollection.jpg';
import { Link } from 'react-router-dom';

const GenderCollectionSection = () => {
    return (
        <section className='py-16 md:py-24 px-4 bg-gray-50'>
            <div className='max-w-7xl mx-auto'>
                {/* Section Header */}
                <div className='text-center mb-16'>
                    <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
                        Shop by <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'>Style</span>
                    </h2>
                    <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
                        Discover curated collections designed for every personality and occasion
                    </p>
                </div>

                {/* Collections Grid */}
                <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12'>
                    {/* Women's Collection */}
                    <div className='group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500'>
                        <div className='relative h-[500px] md:h-[600px] lg:h-[700px]'>
                            <img src={womensImage} alt="Women's Collection"
                                loading="lazy"
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]'>
                            <h3 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>
                                Women's Collections
                            </h3>
                            <p className='text-lg mb-6 opacity-90 leading-relaxed'>
                                Elegant designs crafted for the modern woman
                            </p>
                            <Link to="/collections/all?gender=Women"
                                className='inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full 
                                font-semibold hover:bg-yellow-400 transition-all duration-300 transform hover:scale-105'>
                                Explore Women's
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                        </div>
                    </div>

                    {/* Men's Collection */}
                    <div className='group relative overflow-hidden rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-500'>
                        <div className='relative h-[500px] md:h-[600px] lg:h-[700px]'>
                            <img src={mensImage} alt="Men's Collection"
                                loading="lazy"
                                className='w-full h-full object-cover transition-transform duration-500 group-hover:scale-110' />
                            <div className='absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent'></div>
                        </div>
                        <div className='absolute bottom-0 left-0 right-0 p-8 text-white transform transition-transform duration-300 group-hover:translate-y-[-8px]'>
                            <h3 className='text-3xl md:text-4xl font-bold mb-4 leading-tight'>
                                Men's Collections
                            </h3>
                            <p className='text-lg mb-6 opacity-90 leading-relaxed'>
                                Bold styles for the confident gentleman
                            </p>
                            <Link to="/collections/all?gender=Men"
                                className='inline-flex items-center gap-2 bg-white text-gray-900 px-8 py-4 rounded-full 
                                font-semibold hover:bg-blue-400 hover:text-white transition-all duration-300 transform hover:scale-105'>
                                Explore Men's
                                <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                                </svg>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default GenderCollectionSection