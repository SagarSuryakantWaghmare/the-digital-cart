import React, { useEffect } from 'react'
import { Link } from 'react-router-dom'
import Hero from '../components/Home/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Products/ProductDetails'
import ProductGrid from '../components/Products/ProductGrid'
import FeaturedCollection from '../components/Products/FeaturedCollection'
import FeaturesSection from '../components/Products/FeaturesSection'
import { useDispatch, useSelector } from 'react-redux';
import { useState } from 'react'
import axios from 'axios'

// const placeholderProducts=[
//   {
//     _id: '1',
//     name: 'Product 1',
//     price: 29.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 1 Image'
//       }
//     ]
//   },
//   {
//     _id: '2',
//     name: 'Product 2',
//     price: 39.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 2 Image'
//       }
//     ]
//   },
//   {
//     _id: '3',
//     name: 'Product 3',
//     price: 49.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 3 Image'
//       }
//     ]
//   },
//   {
//     _id: '4',
//     name: 'Product 4',
//     price: 59.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 4 Image'
//       }
//     ]
//   },
//   {
//     _id: '5',
//     name: 'Product 5',
//     price: 69.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 5 Image'
//       }
//     ]
//   },
//   {
//     _id: '6',
//     name: 'Product 6',
//     price: 79.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 6 Image'
//       }
//     ]
//   },
//   {
//     _id: '7',
//     name: 'Product 7',
//     price: 89.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 7 Image'
//       }
//     ]
//   },
//   {
//     _id: '8',
//     name: 'Product 8',
//     price: 99.99,
//     images: [
//       {
//         url: 'https://via.placeholder.com/150',
//         altText: 'Product 8 Image'
//       }
//     ]
//   }
// ]


const Home = () => {
  const dispatch=useDispatch();
  const {products,loading,error}=useSelector((state)=>state.products);
  const [bestSellerProducts,setBestSellerProducts]=useState(null);
  useEffect(()=>{
    // Fetch products for a specific collection
    // dispatch(fetchProductByFilters({
    //   gender:"Women",
    //   category:"Bottom Wear",
    //   limit:8,
    // }));
    const fetchBestSeller=async()=>{
      try {
        const response=await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/best-seller`
        );
        setBestSellerProducts(response.data);
      } catch (error) {
        console.error(error);

      }
    };
    fetchBestSeller();
  }, [dispatch]);
  return (
    <div className='min-h-screen bg-white'>
      <Hero/>
      <GenderCollectionSection/>
      <NewArrivals/>
      
      {/* Best Seller Section */}
      <section className='py-16 md:py-24 px-4 bg-gray-50'>
        <div className='max-w-7xl mx-auto text-center'>
          <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
            Today's <span className='text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-pink-600'>Spotlight</span>
          </h2>
          <p className='text-lg md:text-xl text-gray-600 mb-12 max-w-2xl mx-auto'>
            Featured product handpicked by our style experts
          </p>
          {bestSellerProducts ? (
            <div className='bg-white rounded-3xl shadow-xl p-8 md:p-12'>
              <ProductDetails productId={bestSellerProducts._id}/>
            </div>
          ) : (
            <div className='bg-white rounded-3xl shadow-xl p-16'>
              <div className='animate-pulse flex flex-col items-center'>
                <div className='bg-gray-300 h-64 w-64 rounded-2xl mb-6'></div>
                <div className='bg-gray-300 h-6 w-48 rounded mb-4'></div>
                <div className='bg-gray-300 h-4 w-32 rounded'></div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Top Wears Section */}
      <section className='py-16 md:py-24 px-4 bg-white'>
        <div className='max-w-7xl mx-auto'>
          <div className='text-center mb-16'>
            <h2 className='text-4xl md:text-5xl font-bold text-gray-900 mb-4'>
              Premium <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-teal-600'>Collection</span>
            </h2>
            <p className='text-lg md:text-xl text-gray-600 max-w-2xl mx-auto'>
              Curated selection of premium pieces for the discerning fashion enthusiast
            </p>
          </div>
          
          {loading ? (
            <ProductGrid products={[]} loading={loading} error={error} />
          ) : error ? (
            <ProductGrid products={[]} loading={loading} error={error} />
          ) : (
            <ProductGrid products={products} loading={loading} error={error} />
          )}
          
          {/* View All Button */}
          <div className='text-center mt-12'>
            <Link 
              to="/collections/all" 
              className='inline-flex items-center gap-2 bg-gray-900 text-white px-8 py-4 rounded-full 
              font-semibold hover:bg-gray-700 transition-all duration-300 transform hover:scale-105'>
              Explore All Products
              <svg className='w-5 h-5' fill='none' stroke='currentColor' viewBox='0 0 24 24'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth={2} d='M17 8l4 4m0 0l-4 4m4-4H3' />
              </svg>
            </Link>
          </div>
        </div>
      </section>
      
      <FeaturedCollection />
      <FeaturesSection />
    </div>
  )
}

export default Home