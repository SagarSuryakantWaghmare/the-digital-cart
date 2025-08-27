import React from 'react'
import Hero from '../components/Home/Hero'
import GenderCollectionSection from '../components/Products/GenderCollectionSection'
import NewArrivals from '../components/Products/NewArrivals'
import ProductDetails from '../components/Home/ProductDetails'
const Home = () => {
  return (
    <>
    <Hero/>
    <GenderCollectionSection/>
    <NewArrivals/>
    <h2 className='text-3xl text-center font-bold mb-4'>
        Best Seller
    </h2>
    <ProductDetails/>
    </>
  )
}

export default Home