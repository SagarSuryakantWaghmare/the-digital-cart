import React, { useEffect } from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate, useParams } from 'react-router-dom';
import { Package, Upload, Save, ArrowLeft } from 'lucide-react'
import {fetchProductDetails, updateProduct} from '../../redux/slice/adminProductSlice';
import LoadingSpinner, { InlineLoader } from '../Common/LoadingSpinner';
import axios from 'axios';
const EditProductPage = () => {
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const { id } = useParams();
    const { product, loading, error } = useSelector((state) => state.adminProducts);


    const [productData, setProductData] = useState({
        name: "",
        description: "",
        price: 0,
        countInStock: 0,
        sku: "",
        category: "",
        brand: "",
        sizes: [],
        colors: [],
        collections: "",
        material: "",
        gender: "",
        images: [],

    });

    const [uploading, setUploading] = useState(false);
    useEffect(() => {
        if (id) {
            dispatch(fetchProductDetails(id));
        }
    }, [dispatch,id]);

    useEffect(()=>{
       if(product){
        setProductData({
            ...product,
            images: product.images || [],
            sizes: product.sizes || [],
            colors: product.colors || []
        });
       } 
    },[product]);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setProductData((prevData) => ({ ...prevData, [name]: value }))
    }
    const handleImageUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) {
            return;
        }
        
        const formData = new FormData();
        formData.append("image", file);
        
        try {
            setUploading(true);
            
            const { data } = await axios.post(
                `${import.meta.env.VITE_BACKEND_URL}/api/upload`,
                formData
            );
            
            setProductData((prevData) => ({
                ...prevData,
                images: [...(prevData.images || []), { url: data.imageUrl, altText: "" }],
            }));
            setUploading(false);
            
            // Clear the file input
            e.target.value = '';
        } catch (error) {
            console.error("Image upload error:", error.response?.data || error.message);
            alert(`Failed to upload image: ${error.response?.data?.message || error.message}`);
            setUploading(false);
        }
    }
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(updateProduct({id,productData}));
        navigate("/admin/products");
    };
    if(loading) return <LoadingSpinner size="lg" text="Loading product details..." />
    if(error) return (
        <div className="bg-red-50 border border-red-200 rounded-lg p-4 text-red-700">
            <p className="font-medium">Error loading product</p>
            <p className="text-sm">{error}</p>
        </div>
    )
    return (
        <div className='space-y-6'>
            {/* Header */}
            <div className="flex items-center justify-between mb-8">
                <div>
                    <h2 className='text-3xl font-bold text-gray-900 flex items-center'>
                        <div className="p-3 bg-blue-600 rounded-lg mr-4">
                            <Package className="text-white w-6 h-6" />
                        </div>
                        Edit Product
                    </h2>
                    <p className="text-gray-600 mt-2">Update product information and details</p>
                </div>
                <button
                    onClick={() => navigate('/admin/products')}
                    className="bg-gray-600 hover:bg-gray-700 text-white px-4 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
                >
                    <ArrowLeft className="w-4 h-4" />
                    <span>Back to Products</span>
                </button>
            </div>

            {/* Form */}
            <div className='bg-white border border-gray-200 rounded-lg p-6'>
                <form onSubmit={handleSubmit} className="space-y-6">
                    {/* Basic Information */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Product Name</label>
                            <input 
                                type="text" 
                                name='name' 
                                value={productData.name}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                required
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>SKU</label>
                            <input 
                                type="text" 
                                name='sku' 
                                value={productData.sku}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
                            />
                        </div>
                    </div>

                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Description</label>
                        <textarea 
                            name='description'
                            onChange={handleChange}
                            value={productData.description}
                            className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                            rows={4}
                            required 
                        />
                    </div>

                    {/* Pricing and Stock */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Price (₹)</label>
                            <input 
                                type="number" 
                                name='price' 
                                value={productData.price}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Stock Count</label>
                            <input 
                                type="number" 
                                name='countInStock' 
                                value={productData.countInStock}
                                onChange={handleChange}
                                className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500' 
                            />
                        </div>
                    </div>

                    {/* Product Variants */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Available Sizes</label>
                            <input 
                                type="text" 
                                name='sizes' 
                                value={productData.sizes.join(", ")}
                                onChange={(e) => setProductData({ ...productData, sizes: e.target.value.split(",").map((size) => size.trim()) })}
                                className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder="S, M, L, XL"
                            />
                            <p className="text-sm text-gray-500 mt-1">Separate sizes with commas</p>
                        </div>
                        <div>
                            <label className='block text-gray-700 font-medium mb-2'>Available Colors</label>
                            <input 
                                type="text" 
                                name='colors' 
                                value={productData.colors.join(", ")}
                                onChange={(e) => setProductData({ ...productData, colors: e.target.value.split(",").map((color) => color.trim()) })}
                                className='w-full border border-gray-300 rounded-lg p-3 focus:ring-2 focus:ring-blue-500 focus:border-blue-500'
                                placeholder="Red, Blue, Green"
                            />
                            <p className="text-sm text-gray-500 mt-1">Separate colors with commas</p>
                        </div>
                    </div>

                    {/* Image Upload */}
                    <div>
                        <label className='block text-gray-700 font-medium mb-2'>Product Images</label>
                        <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center">
                            <Upload className="w-8 h-8 text-gray-400 mx-auto mb-2" />
                            <input 
                                type="file" 
                                accept="image/*" 
                                onChange={handleImageUpload}
                                disabled={uploading}
                                className='w-full'
                            />
                            {uploading && (
                                <div className='mt-4 text-blue-600 flex items-center justify-center space-x-2'>
                                    <InlineLoader size="sm" color="blue" />
                                    <span>Uploading image...</span>
                                </div>
                            )}
                        </div>
                        
                        {/* Image Preview */}
                        {productData.images && productData.images.length > 0 && (
                            <div className='mt-4'>
                                <p className="text-sm font-medium text-gray-700 mb-2">Current Images:</p>
                                <div className='flex gap-4 flex-wrap'>
                                    {productData.images.map((image, index) => (
                                        <div key={index} className="relative">
                                            <img 
                                                src={image.url}
                                                alt={image.alt || "Product Image"}
                                                className='w-20 h-20 object-cover rounded-lg border border-gray-200'
                                            />
                                        </div>
                                    ))}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Submit Button */}
                    <div className="flex justify-end pt-6 border-t border-gray-200">
                        <button 
                            type='submit' 
                            className='bg-green-600 hover:bg-green-700 text-white py-3 px-6 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2'
                        >
                            <Save className="w-4 h-4" />
                            <span>Update Product</span>
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default EditProductPage