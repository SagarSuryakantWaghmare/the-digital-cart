import React from 'react';
import { Truck, Clock, MapPin, Package, Phone, Mail } from 'lucide-react';

const Shipping = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Shipping Information</h1>
          <p className="text-lg text-gray-600">
            Everything you need to know about our delivery services and shipping policies.
          </p>
        </div>

        {/* Shipping Options */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Shipping Options</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Truck className="h-8 w-8 text-blue-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Standard Delivery</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Delivery Time: 3-7 business days</li>
                <li>• Free shipping on orders above ₹999</li>
                <li>• ₹99 shipping fee for orders below ₹999</li>
                <li>• Available across India</li>
              </ul>
            </div>
            
            <div className="border border-gray-200 rounded-lg p-6">
              <div className="flex items-center mb-4">
                <Clock className="h-8 w-8 text-green-600 mr-3" />
                <h3 className="text-xl font-semibold text-gray-900">Express Delivery</h3>
              </div>
              <ul className="space-y-2 text-gray-600">
                <li>• Delivery Time: 1-2 business days</li>
                <li>• Additional ₹199 charges</li>
                <li>• Available in major cities</li>
                <li>• Same-day delivery in select areas</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Delivery Areas */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Delivery Coverage</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Metro Cities</h3>
              <p className="text-gray-600 text-sm">Mumbai, Delhi, Bangalore, Chennai, Kolkata, Hyderabad, Pune, Ahmedabad</p>
            </div>
            <div className="text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Package className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Tier 2 Cities</h3>
              <p className="text-gray-600 text-sm">Jaipur, Lucknow, Kanpur, Nagpur, Indore, Bhopal, Visakhapatnam, Patna</p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4">
                <Truck className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Other Areas</h3>
              <p className="text-gray-600 text-sm">We deliver to most pin codes across India. Check availability during checkout.</p>
            </div>
          </div>
        </div>

        {/* Shipping Process */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How Shipping Works</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Order Confirmation</h3>
                <p className="text-gray-600">Once you place an order, you'll receive a confirmation email with order details and expected delivery date.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Processing</h3>
                <p className="text-gray-600">Our team carefully packs your items (usually within 24 hours on business days).</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Dispatch</h3>
                <p className="text-gray-600">Your order is handed over to our delivery partner and you'll receive tracking information.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Delivery</h3>
                <p className="text-gray-600">Your package arrives at your doorstep. Our delivery partner may call before delivery.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Important Notes */}
        <div className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Important Notes</h2>
          <div className="space-y-4 text-gray-700">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></div>
              <p><strong>Business Days:</strong> Monday to Saturday (excluding public holidays)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></div>
              <p><strong>Delivery Attempts:</strong> Our delivery partner will attempt delivery 3 times before returning the package</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></div>
              <p><strong>Address Accuracy:</strong> Please ensure your delivery address is complete and accurate to avoid delays</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></div>
              <p><strong>Order Tracking:</strong> Track your order using the tracking number sent via SMS and email</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-yellow-600 rounded-full mr-3 mt-2"></div>
              <p><strong>COVID-19:</strong> Contactless delivery is available upon request</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Shipping?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-gray-600">+91-72193387XX</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-gray-600">hello@thedigitalcart.com</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-gray-600 text-center">
              Our customer support team is available Monday-Friday, 9 AM to 6 PM to assist you with any shipping queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;