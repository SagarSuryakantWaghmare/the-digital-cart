import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import { Package, Edit, Trash2 } from 'lucide-react'
import { deleteProduct, fetchAdminProducts } from '../../redux/slice/adminProductSlice';
import LoadingSpinner from '../Common/LoadingSpinner';
const ProductMangement = () => {
    const dispatch = useDispatch();
    const { products, loading, error } = useSelector(
        (state) => state.adminProducts
    );

    useEffect(() => {
        dispatch(fetchAdminProducts());

    }, [dispatch])
    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete to Product?")) {
            dispatch(deleteProduct(id));
        }
    }
    if(loading) return <LoadingSpinner size="lg" text="Loading products..." />
    if(error) return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            <p className="font-medium">Error loading products</p>
            <p className="text-sm">{error}</p>
        </div>
    )
    return (
        <div className='space-y-6'>
            {/* Clean Header */}
            <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-8 space-y-4 sm:space-y-0">
                <div>
                    <h2 className='text-2xl sm:text-3xl font-bold text-gray-900 flex items-center'>
                        <div className="p-2 sm:p-3 bg-orange-600 rounded-lg mr-3 sm:mr-4">
                            <Package className="text-white w-5 h-5 sm:w-6 sm:h-6" />
                        </div>
                        <span className="hidden sm:inline">Product Catalog Management</span>
                        <span className="sm:hidden">Products</span>
                    </h2>
                    <p className="text-gray-600 mt-2 text-sm sm:text-base">Manage your entire product inventory and pricing</p>
                </div>
                <div className="bg-blue-600 text-white px-4 sm:px-6 py-2 sm:py-3 rounded-lg shadow-md">
                    <span className="font-bold text-lg">{products.length}</span>
                    <p className="text-xs sm:text-sm opacity-90">Total Products</p>
                </div>
            </div>

            {/* Products Grid */}
            <div className='space-y-4'>
                {products.length > 0 ? products.map((product) => (
                    <div key={product._id} className='bg-white border border-gray-200 rounded-lg p-4 sm:p-6 hover:shadow-md transition-all duration-200 hover:border-gray-300'>
                        <div className="flex flex-col space-y-4">
                            {/* Product Info */}
                            <div className="flex items-center space-x-3 sm:space-x-4">
                                {/* Product Image */}
                                <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-lg overflow-hidden bg-gray-100 flex-shrink-0">
                                    {product.images && product.images.length > 0 ? (
                                        <img 
                                            src={product.images[0].url} 
                                            alt={product.name}
                                            className="w-full h-full object-cover"
                                            onError={(e) => {
                                                e.target.style.display = 'none';
                                                e.target.nextSibling.style.display = 'flex';
                                            }}
                                        />
                                    ) : null}
                                    <div className={`w-full h-full bg-blue-600 rounded-lg flex items-center justify-center ${product.images && product.images.length > 0 ? 'hidden' : ''}`}>
                                        <Package className="text-white w-4 h-4 sm:w-6 sm:h-6" />
                                    </div>
                                </div>
                                <div className="flex-1 min-w-0">
                                    <h3 className='font-bold text-gray-900 text-base sm:text-lg mb-1 truncate'>
                                        {product.name}
                                    </h3>
                                    <div className="flex flex-col sm:flex-row sm:items-center sm:space-x-4 space-y-1 sm:space-y-0 text-xs sm:text-sm text-gray-600">
                                        <span className="bg-green-100 text-green-800 px-2 sm:px-3 py-1 rounded-full font-medium w-fit">
                                            ₹{product.price}
                                        </span>
                                        <span className="bg-blue-100 text-blue-800 px-2 sm:px-3 py-1 rounded-full font-medium w-fit">
                                            SKU: {product.sku}
                                        </span>
                                    </div>
                                </div>
                            </div>

                            {/* Action Buttons */}
                            <div className="flex flex-col sm:flex-row gap-2 sm:gap-3">
                                <Link 
                                    to={`/admin/products/${product._id}/edit`}
                                    className='bg-yellow-500 hover:bg-yellow-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base'
                                >
                                    <Edit className="w-4 h-4" />
                                    <span>Edit</span>
                                </Link>
                                <button
                                    className='bg-red-500 hover:bg-red-600 text-white px-4 sm:px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center justify-center space-x-2 text-sm sm:text-base'
                                    onClick={() => handleDelete(product._id)}
                                >
                                    <Trash2 className="w-4 h-4" />
                                    <span>Delete</span>
                                </button>
                            </div>
                        </div>
                    </div>
                )) : (
                    <div className='bg-gray-50 border-2 border-dashed border-gray-300 rounded-lg p-12 text-center'>
                        <div className="w-16 h-16 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-4">
                            <Package className="text-gray-400 w-8 h-8" />
                        </div>
                        <h3 className="text-xl font-semibold text-gray-700 mb-2">No Products Available</h3>
                        <p className="text-gray-500">Start building your product catalog by adding your first product.</p>
                    </div>
                )}
            </div>
        </div>
    )
}

export default ProductMangement