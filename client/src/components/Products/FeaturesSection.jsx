import { ArrowUpSquare, CreditCard, ShoppingBag } from 'lucide-react'
import React from 'react'

const FeaturesSection = () => {
    const features = [
        {
            icon: ShoppingBag,
            title: "FREE WORLDWIDE SHIPPING",
            description: "Enjoy complimentary shipping on all orders over ₹2000 to select countries worldwide.",
            color: "from-blue-500 to-cyan-500"
        },
        {
            icon: ArrowUpSquare,
            title: "45 DAYS EASY RETURNS",
            description: "Shop with confidence knowing you have 45 days for hassle-free returns.",
            color: "from-green-500 to-emerald-500"
        },
        {
            icon: CreditCard,
            title: "SECURE PAYMENTS",
            description: "Multiple secure payment options including PayPal, cards, and digital wallets.",
            color: "from-purple-500 to-pink-500"
        }
    ];

    return (
        <section className='py-16 md:py-24 px-4 bg-gray-50'>
            <div className='max-w-7xl mx-auto'>
                <div className='text-center mb-16'>
                    <h2 className='text-3xl md:text-4xl font-bold text-gray-900 mb-4'>
                        Why Choose 
                        <span className='text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-purple-600'> Digital Cart</span>
                    </h2>
                    <p className='text-lg text-gray-600 max-w-2xl mx-auto'>
                        Experience shopping like never before with our customer-centric features designed for your convenience
                    </p>
                </div>

                <div className='grid grid-cols-1 md:grid-cols-3 gap-8'>
                    {features.map((feature, index) => {
                        const IconComponent = feature.icon;
                        return (
                            <div key={index} className='group bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2 border border-gray-100'>
                                <div className='flex flex-col items-center text-center'>
                                    <div className={`p-4 rounded-2xl mb-6 bg-gradient-to-r ${feature.color} transform group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                                        <IconComponent className='text-2xl text-white w-8 h-8' />
                                    </div>
                                    
                                    <h4 className='text-xl font-bold text-gray-900 mb-4 tracking-tight'>
                                        {feature.title}
                                    </h4>
                                    
                                    <p className='text-gray-600 leading-relaxed'>
                                        {feature.description}
                                    </p>
                                </div>
                                
                                {/* Decorative element */}
                                <div className='mt-6 h-1 w-20 mx-auto bg-gradient-to-r from-transparent via-gray-300 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300'></div>
                            </div>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className='text-center mt-16'>
                    <div className='inline-flex items-center gap-2 bg-white px-6 py-3 rounded-full shadow-lg border border-gray-200'>
                        <div className='w-2 h-2 bg-green-500 rounded-full animate-pulse'></div>
                        <span className='text-gray-700 font-medium'>Trusted by 10,000+ customers worldwide</span>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default FeaturesSection