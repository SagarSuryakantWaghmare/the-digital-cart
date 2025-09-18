import React, { useEffect } from 'react'
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
    <>
    <Hero/>
    <GenderCollectionSection/>
    <NewArrivals/>
    <h2 className='text-3xl text-center font-bold mb-4'>
        Best Seller
    </h2>
    {bestSellerProducts?(

      <ProductDetails productId={bestSellerProducts._id}/>
    ):(<p className='text-center'>Loading Best seller Product .....</p>)}

    <div className='container mx-auto'>
          <h2 className='text-3xl text-center font-bold mb-4'>
            Top Wears for Women
          </h2>
          <ProductGrid products={products} loading={loading} error={error} />
    </div>
    <FeaturedCollection />
    <FeaturesSection />
    </>
  )
}

export default Home