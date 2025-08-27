import React from 'react'
import { Link } from 'react-router-dom';
const ProductGrid = ({ products }) => {
    if (!Array.isArray(products) || products.length === 0) {
        return <div className="text-center text-gray-500 py-10">No products found.</div>;
    }
    return (
        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6  '>
            {products.map((product, index) => (
                <Link
                    key={index}
                    to={`/products/${product._id}`}
                    className='block'
                >
                    <div className='bg-white p-4 rounded-lg'>
                        <div className='w-full h-96 mb-4'>
                            <img src={product.images[0].url} alt={product.images[0].altText || product.name} className='w-full h-full object-cover rounded-lg' />
                        </div>
                        <h3 className='text-sm mb-2 font-semibold'>{product.name}</h3>
                        <p className='text-gray-600 font-medium text-sm tracking-tighter'>${product.price}</p>
                    </div>
                </Link>
            ))}
        </div>
    )
}

export default ProductGrid