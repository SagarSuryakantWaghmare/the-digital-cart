import { ArrowUpSquare, CreditCard, ShoppingBag } from 'lucide-react'
import React from 'react'

const FeaturesSection = () => {
    return (
        <section className='py-16 px-4 bg-white'>
            <div className='container mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 text-center'>
                {/* Feature 1 */}
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                      <ShoppingBag className='text-xl' />
                    </div>
                    <h4 className='tracking-tighter mb-2'>FREE INTERNATIONAL SHIPPING</h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        Enjoy free shipping on all orders over $50 to select countries worldwide.
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                      <ArrowUpSquare className='text-xl' />
                    </div>
                    <h4 className='tracking-tighter mb-2'>45 Days return</h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        Enjoy hassle-free returns within 45 days of your purchase.
                    </p>
                </div>
                <div className='flex flex-col items-center'>
                    <div className='p-4 rounded-full mb-4'>
                      <CreditCard className='text-xl' />
                    </div>
                    <h4 className='tracking-tighter mb-2'>SECURE PAYMENT OPTIONS</h4>
                    <p className='text-gray-600 text-sm tracking-tighter'>
                        We offer a variety of secure payment options to ensure your peace of mind.
                    </p>
                </div>
                
                
            </div>
        </section>
    )
}

export default FeaturesSection