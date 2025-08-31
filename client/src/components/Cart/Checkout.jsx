import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const cart = {
    products: [
        {
            name: "T-shirt",
            size: "M",
            color: "Red",
            price: 1400,
            image: "https://picsum.photos/200?random=1",
        },
        {
            name: "Shirt",
            size: "M",
            color: "Orange",
            price: 1400,
            image: "https://picsum.photos/200?random=2",
        }
    ],
    totalPrice: 2800
}
const Checkout = () => {
    const navigate = useNavigate();
    const [CheckoutId, setCheckoutId] = useState(null);
    const [shippingAddress, setShippingAddress] = useState({
        firstName: "",
        lastName: "",
        address: "",
        city: "",
        postalCode: "",
        country: "",
        phone: "",
    });

    const handleCreateCheckout=(e)=>{
        e.preventDefault();
        setCheckoutId(123);
    }
    return (
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto py-10 px-6 tracking-tighter'>
            {/* Left section */}
            <div className='bg-white rounded-lg p-6'>
                <h2 className='text-2xl uppercase mb-6 '>
                    Checkout
                </h2>
                <form onSubmit={handleCreateCheckout}>
                    <h3 className='text-lg mb-4 '>
                        Contact Details
                    </h3>
                    <div className='mb-4'>
                        <label className='block text-gray-700 '>Email</label>
                        <input type="email" value="rajat@gmail.com" className='w-full p-2 border rounded'
                            disabled />
                    </div>
                    <h3 className='text-lg mb-4 '>
                        Delivery
                    </h3>
                    <div className='mb-4 grid grid-cols-2 gap-4'>
                        <div>
                            <label className='block text-gray-700'>First Name</label>
                            <input type="text"
                                value={shippingAddress.firstName}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, firstName: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Last Name</label>
                            <input type="text"
                                value={shippingAddress.lastName}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, lastName: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700
                       '> Address</label>
                        <input
                            type="text"
                            value={shippingAddress.address}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, address: e.target.value })}
                            className='w-full p-2 border rounded'
                        />
                    </div>
                    <div className="mb-4 grid grid-cols-2 gap-4">
                        <div>
                            <label className='block text-gray-700'>City</label>
                            <input type="text"
                                value={shippingAddress.city}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, city: e.target.value })}
                            />
                        </div>
                        <div>
                            <label className='block text-gray-700'>Pin code</label>
                            <input type="text"
                                value={shippingAddress.postalCode}
                                onChange={(e) => setShippingAddress({ ...shippingAddress, postalCode: e.target.value })}
                            />
                        </div>
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Country</label>
                        <input type="text"
                            value={shippingAddress.country}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, country: e.target.value })}
                        />
                    </div>
                    <div className='mb-4'>
                        <label className='block text-gray-700'>Phone</label>
                        <input type="text"
                            required
                            value={shippingAddress.phone}
                            onChange={(e) => setShippingAddress({ ...shippingAddress, phone: e.target.value })}
                        />
                    </div>
                    <div className='mt-6'>
                        {!CheckoutId ? (
                            <button type='submit' className='w-full bg-black text-white py-3 rounded'>Continue to Payment</button>
                        ) : (
                            <div>
                                <h3 className='text-lg mb-4'>
                                    Pay with paypal
                                </h3>
                            </div>
                        )}
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Checkout