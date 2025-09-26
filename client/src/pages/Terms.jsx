import React from 'react';
import { FileText, Shield, Users, Gavel, AlertTriangle, Mail } from 'lucide-react';

const Terms = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms of Service</h1>
          <p className="text-lg text-gray-600">
            Please read these terms carefully before using The Digital Cart website and services.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 26, 2025</p>
        </div>

        {/* Agreement Overview */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <FileText className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Agreement to Terms</h2>
          </div>
          <p className="text-gray-600 mb-4">
            By accessing and using The Digital Cart website (www.thedigitalcart.com), you accept and agree to be bound by the terms and provision of this agreement.
          </p>
          <div className="bg-blue-50 p-6 rounded-lg">
            <p className="text-blue-800 font-semibold mb-2">Important Notice:</p>
            <p className="text-blue-700 text-sm">
              If you do not agree to abide by the above, please do not use this service. By continuing to use our website, you acknowledge that you have read, understood, and agree to be bound by these terms.
            </p>
          </div>
        </div>

        {/* Use of Website */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Use of Website</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Permitted Use</h3>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• Browse and purchase products for personal use</li>
                <li>• Create and manage your user account</li>
                <li>• Use our services in accordance with applicable laws</li>
                <li>• Contact customer support for assistance</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <AlertTriangle className="h-5 w-5 mr-2 text-red-600" />
                Prohibited Activities
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• Using the website for any unlawful purpose</li>
                <li>• Attempting to gain unauthorized access to our systems</li>
                <li>• Interfering with the proper working of the website</li>
                <li>• Uploading malicious code or viruses</li>
                <li>• Impersonating others or providing false information</li>
                <li>• Engaging in any form of data mining or harvesting</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Account Terms */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Account Terms</h2>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Account Creation:</strong> You must provide accurate and complete information when creating an account</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Account Security:</strong> You are responsible for maintaining the confidentiality of your login credentials</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Account Activity:</strong> You are responsible for all activities that occur under your account</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Account Termination:</strong> We reserve the right to suspend or terminate accounts that violate these terms</p>
            </div>
          </div>
        </div>

        {/* Product and Pricing */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Products and Pricing</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Product Information</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• We strive to display accurate product information</li>
                <li>• Colors may vary due to monitor settings</li>
                <li>• Product availability is subject to stock</li>
                <li>• We reserve the right to discontinue products</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Pricing Policy</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• All prices are in Indian Rupees (₹)</li>
                <li>• Prices are subject to change without notice</li>
                <li>• Shipping charges are additional unless stated</li>
                <li>• Sale prices are valid for limited time</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Orders and Payment */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Orders and Payment</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Order Processing</h3>
              <p className="text-gray-600 mb-3">
                By placing an order, you make an offer to purchase products. We reserve the right to accept or decline your order.
              </p>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• Order confirmation will be sent via email</li>
                <li>• We may cancel orders due to pricing errors or stock unavailability</li>
                <li>• Orders are subject to verification and fraud prevention checks</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
              <ul className="space-y-2 text-gray-600 ml-4">
                <li>• Payment is required at the time of order placement</li>
                <li>• We accept major credit cards, debit cards, UPI, and COD</li>
                <li>• All transactions are processed securely</li>
                <li>• Refunds will be processed as per our return policy</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Intellectual Property */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Intellectual Property</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              The Digital Cart and its content, features, and functionality are owned by us and are protected by international copyright, trademark, and other intellectual property laws.
            </p>
            <div className="bg-yellow-50 p-6 rounded-lg">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">You May Not:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Reproduce, distribute, or create derivative works</li>
                <li>• Use our trademarks or logos without permission</li>
                <li>• Copy or reverse engineer our website or mobile app</li>
                <li>• Use our content for commercial purposes without authorization</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Limitation of Liability */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Limitation of Liability</h2>
          <div className="space-y-4">
            <p className="text-gray-600">
              To the fullest extent permitted by applicable law, The Digital Cart shall not be liable for any indirect, incidental, special, consequential, or punitive damages.
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">We Are Not Liable For:</h3>
                <ul className="space-y-2 text-gray-600">
                  <li>• Loss of profits or business</li>
                  <li>• Service interruptions</li>
                  <li>• Data loss or corruption</li>
                  <li>• Third-party actions</li>
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Maximum Liability:</h3>
                <p className="text-gray-600">
                  Our maximum liability shall not exceed the amount you paid for the specific product or service that gave rise to the claim.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Governing Law */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center">
            <Gavel className="h-6 w-6 mr-2" />
            Governing Law
          </h2>
          <p className="text-gray-700 mb-4">
            These Terms of Service and your use of the website are governed by and construed in accordance with the laws of India.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Jurisdiction:</strong> Courts in Chhatrapati Sambhajinagar, Maharashtra, India</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Dispute Resolution:</strong> We encourage resolving disputes through direct communication first</p>
            </div>
          </div>
        </div>

        {/* Changes to Terms */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Changes to Terms</h2>
          <p className="text-gray-600 mb-4">
            We reserve the right to modify these terms at any time. Changes will be effective immediately upon posting on the website.
          </p>
          <div className="bg-gray-50 p-4 rounded-lg">
            <p className="text-gray-700 text-sm">
              <strong>Your Responsibility:</strong> It is your responsibility to review these terms periodically. 
              Continued use of the website after changes constitutes acceptance of the modified terms.
            </p>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Information</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about these Terms of Service, please contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Mail className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Email: legal@thedigitalcart.com</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Phone: +91-72193387XX</span>
            </div>
            <div className="flex items-center">
              <Users className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Address: Chhatrapati Sambhajinagar, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Terms;