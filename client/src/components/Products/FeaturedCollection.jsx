import React from 'react'
import { Link } from 'react-router-dom'
import features from '../../assets/DifferentClothes.jpg';

const FeaturedCollection = () => {
  return (
    <section className='py-16 md:py-24 px-4 bg-gradient-to-br from-green-50 to-blue-50'>
      <div className='max-w-7xl mx-auto'>
        <div className='bg-white rounded-3xl shadow-2xl overflow-hidden'>
          <div className='flex flex-col-reverse lg:flex-row items-center min-h-[600px]'>
            {/* Content Side */}
            <div className='lg:w-1/2 p-8 md:p-12 lg:p-16 text-center lg:text-left'>
              <div className='inline-flex items-center gap-2 bg-green-100 text-green-800 px-4 py-2 rounded-full text-sm font-semibold mb-6'>
                <svg className='w-4 h-4' fill='currentColor' viewBox='0 0 20 20'>
                  <path fillRule='evenodd' d='M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-8.293l-3-3a1 1 0 00-1.414 0l-3 3a1 1 0 001.414 1.414L9 9.414V13a1 1 0 102 0V9.414l1.293 1.293a1 1 0 001.414-1.414z' clipRule='evenodd' />
                </svg>
                Featured Collection
              </div>
              
              <h2 className='text-lg font-semibold text-gray-600 mb-3 uppercase tracking-wider'>
                Comfort Meets Style
              </h2>
              
              <h3 className='text-4xl md:text-5xl lg:text-6xl font-bold text-gray-900 mb-6 leading-tight'>
                Apparel Made For Your 
                <span className='text-transparent bg-clip-text bg-gradient-to-r from-green-600 to-blue-600'> Everyday</span> Life
              </h3>
              
              <p className='text-lg md:text-xl text-gray-600 mb-8 leading-relaxed max-w-lg'>
                Discover our handpicked collection that seamlessly blends comfort, quality, and style for your daily adventures.
              </p>
              
              <div className='flex flex-col sm:flex-row gap-4 justify-center lg:justify-start'>
                <Link to="/collections/all" 
                  className='bg-gray-900 text-white px-8 py-4 rounded-full text-lg font-semibold
                  hover:bg-gray-700 transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2'>
                  Shop Collection
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
                  </svg>
                </Link>
                
                <Link to="/collections/all" 
                  className='border-2 border-gray-900 text-gray-900 px-8 py-4 rounded-full text-lg font-semibold
                  hover:bg-gray-900 hover:text-white transition-all duration-300 transform hover:scale-105 inline-flex items-center justify-center gap-2'>
                  View All
                  <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M15 12a3 3 0 11-6 0 3 3 0 016 0z' />
                    <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z' />
                  </svg>
                </Link>
              </div>
            </div>
            
            {/* Image Side */}
            <div className='lg:w-1/2 relative'>
              <div className='relative h-[400px] lg:h-[600px] overflow-hidden'>
                <img src={features} alt="Featured Collection"
                  loading="lazy"
                  className='w-full h-full object-cover lg:rounded-tr-3xl' />
                <div className='absolute inset-0 bg-gradient-to-r from-black/20 to-transparent lg:hidden'></div>
              </div>
              
              {/* Decorative Elements */}
              <div className='absolute top-8 right-8 bg-white/90 backdrop-blur-sm rounded-2xl p-4 shadow-lg hidden lg:block'>
                <div className='flex items-center gap-3'>
                  <div className='w-12 h-12 bg-green-100 rounded-full flex items-center justify-center'>
                    <svg className='w-6 h-6 text-green-600' fill='currentColor' viewBox='0 0 20 20'>
                      <path fillRule='evenodd' d='M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z' clipRule='evenodd' />
                    </svg>
                  </div>
                  <div>
                    <p className='font-semibold text-gray-900'>Premium Quality</p>
                    <p className='text-sm text-gray-600'>Certified Materials</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default FeaturedCollection