import React from 'react';
import { RotateCcw, Clock, CheckCircle, XCircle, Phone, Mail } from 'lucide-react';

const Returns = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Returns Policy</h1>
          <p className="text-lg text-gray-600">
            We want you to love your purchase. If you're not completely satisfied, we're here to help.
          </p>
        </div>

        {/* Return Policy Overview */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <RotateCcw className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">30-Day Return Policy</h2>
          </div>
          <p className="text-gray-600 mb-6">
            We offer a hassle-free 30-day return policy from the date of delivery. Items must be in original condition with all tags attached.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <CheckCircle className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Easy Returns</h3>
              <p className="text-sm text-gray-600">Simple online return process</p>
            </div>
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Clock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Quick Refunds</h3>
              <p className="text-sm text-gray-600">5-7 business days processing</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <RotateCcw className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Free Pickup</h3>
              <p className="text-sm text-gray-600">We collect from your address</p>
            </div>
          </div>
        </div>

        {/* Return Process */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How to Return an Item</h2>
          <div className="space-y-6">
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">1</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Initiate Return</h3>
                <p className="text-gray-600">Go to 'My Orders' in your account, find the item you want to return, and click 'Return Item'.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">2</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Select Reason</h3>
                <p className="text-gray-600">Choose the reason for return (wrong size, defective item, not as described, changed mind, etc.).</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">3</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Schedule Pickup</h3>
                <p className="text-gray-600">Choose a convenient date and time slot for our team to collect the item from your address.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">4</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Pack the Item</h3>
                <p className="text-gray-600">Pack the item securely with all original tags, packaging, and accessories.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">5</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Hand Over to Pickup Agent</h3>
                <p className="text-gray-600">Our pickup agent will collect the item and provide you with a receipt.</p>
              </div>
            </div>
            
            <div className="flex items-start">
              <div className="bg-blue-600 text-white rounded-full w-8 h-8 flex items-center justify-center font-bold mr-4 mt-1">6</div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-2">Refund Processing</h3>
                <p className="text-gray-600">Once we receive and inspect the item, your refund will be processed within 5-7 business days.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Return Conditions */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Return Conditions</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div>
              <h3 className="text-lg font-semibold text-green-600 mb-4 flex items-center">
                <CheckCircle className="h-5 w-5 mr-2" />
                Returnable Items
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Items in original condition with tags</li>
                <li>• Unworn and unwashed clothing</li>
                <li>• Items with original packaging</li>
                <li>• Items within 30 days of delivery</li>
                <li>• Items purchased at full price</li>
                <li>• Sale items (with some exceptions)</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-red-600 mb-4 flex items-center">
                <XCircle className="h-5 w-5 mr-2" />
                Non-Returnable Items
              </h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Undergarments and innerwear</li>
                <li>• Personalized or customized items</li>
                <li>• Items without original tags</li>
                <li>• Damaged or worn items</li>
                <li>• Items beyond 30-day return window</li>
                <li>• Final sale items (clearance)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Refund Information */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Refund Information</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Processing Time:</strong> 5-7 business days after we receive the item</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Refund Method:</strong> Original payment method (credit card, UPI, etc.)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Bank Processing:</strong> Additional 2-3 business days for bank processing</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>COD Orders:</strong> Refund via bank transfer (provide bank details)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Shipping Charges:</strong> Non-refundable unless item is defective</p>
            </div>
          </div>
        </div>

        {/* Exchange Policy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Exchange Policy</h2>
          <p className="text-gray-600 mb-4">
            Want a different size or color? We offer easy exchanges subject to availability.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Exchange Process</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Select 'Exchange' instead of 'Return'</li>
                <li>• Choose new size/color/variant</li>
                <li>• We'll send the new item after receiving the original</li>
                <li>• No additional shipping charges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Exchange Conditions</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Same or lower price items only</li>
                <li>• Subject to stock availability</li>
                <li>• Within 15 days of delivery</li>
                <li>• One exchange per item</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Need Help with Returns?</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="flex items-center">
              <Phone className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Call Us</p>
                <p className="text-gray-600">+91-72193387XX</p>
                <p className="text-sm text-gray-500">Mon-Fri, 9 AM - 6 PM</p>
              </div>
            </div>
            <div className="flex items-center">
              <Mail className="h-6 w-6 text-blue-600 mr-3" />
              <div>
                <p className="font-semibold text-gray-900">Email Us</p>
                <p className="text-gray-600">hello@thedigitalcart.com</p>
                <p className="text-sm text-gray-500">Response within 24 hours</p>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200 text-center">
            <p className="text-gray-600">
              Our customer support team is always ready to assist you with returns, exchanges, and any other queries.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Returns;