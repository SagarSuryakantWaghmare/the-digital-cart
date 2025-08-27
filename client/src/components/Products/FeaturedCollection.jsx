import React from 'react'
import { Link } from 'react-router-dom'
import features from '../../assets/DifferentClothes.jpg';
const FeaturedCollection = () => {
  return (
<section className='py-16 px-4 lg:px-0'>
    <div className='container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl'>
        {/* left side */}
        <div className='lg:w-1/2 p-8 text-center lg:text-left'>
        <h2 className='text-lg font-semibold text-gray-700 mb-2'>
             Comfort And Style
        </h2>
        <h2 className='text-4xl lg:text-5xl font-bold mb-6'>
             Apparel made for your everyday life
        </h2>
        <p className='text-lg text-gray-600 mb-6'>
            Discover our featured collection that combines comfort and style for your everyday needs.
        </p>
        </div>
        <Link to="/collections/all" className='bg-black text-white px-6 py-3 rounded-lg text-lg
        hover:bg-gray-800'>
        Shop Now
        </Link>
        {/* right side */}
        <div className='lg:w-1/2'>
            <img src={features} alt="Featured Collection"
             className='w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-bl-3xl rounded-3xl' />
        </div>

    </div>

</section>
  )
}

export default FeaturedCollection