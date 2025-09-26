import React from 'react';
import { Shield, Eye, Lock, Share2, Cookie, Database } from 'lucide-react';

const Privacy = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
          <p className="text-lg text-gray-600">
            Your privacy is important to us. This policy explains how we collect, use, and protect your information.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 26, 2025</p>
        </div>

        {/* Privacy Overview */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Shield className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">Our Commitment to Privacy</h2>
          </div>
          <p className="text-gray-600 mb-6">
            At The Digital Cart, we are committed to protecting your personal information and your right to privacy. 
            This Privacy Policy explains what information we collect, how we use it, and what rights you have in relation to it.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Lock className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Secure</h3>
              <p className="text-sm text-gray-600">Industry-standard encryption</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Transparent</h3>
              <p className="text-sm text-gray-600">Clear data practices</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Protected</h3>
              <p className="text-sm text-gray-600">Your rights respected</p>
            </div>
          </div>
        </div>

        {/* Information We Collect */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Information We Collect</h2>
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Database className="h-5 w-5 mr-2 text-blue-600" />
                Personal Information
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• Name, email address, and phone number</li>
                <li>• Billing and shipping addresses</li>
                <li>• Payment information (processed securely by payment providers)</li>
                <li>• Account credentials and preferences</li>
                <li>• Order history and purchase behavior</li>
              </ul>
            </div>
            
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Eye className="h-5 w-5 mr-2 text-green-600" />
                Automatically Collected Information
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• IP address and device information</li>
                <li>• Browser type and version</li>
                <li>• Pages visited and time spent on our website</li>
                <li>• Referring website or search terms</li>
                <li>• Location data (with your permission)</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                <Cookie className="h-5 w-5 mr-2 text-orange-600" />
                Cookies and Tracking Technologies
              </h3>
              <ul className="space-y-2 text-gray-600 ml-7">
                <li>• Essential cookies for website functionality</li>
                <li>• Analytics cookies to improve our services</li>
                <li>• Marketing cookies for personalized advertising</li>
                <li>• Social media cookies for sharing features</li>
              </ul>
            </div>
          </div>
        </div>

        {/* How We Use Information */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">How We Use Your Information</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Process and fulfill your orders</li>
                <li>• Provide customer support</li>
                <li>• Send order confirmations and updates</li>
                <li>• Handle returns and exchanges</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Improvement & Marketing</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Improve our website and services</li>
                <li>• Send promotional offers and updates</li>
                <li>• Personalize your shopping experience</li>
                <li>• Conduct market research and analysis</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Information Sharing */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Information Sharing</h2>
          <p className="text-gray-600 mb-4">
            We do not sell, trade, or otherwise transfer your personal information to third parties without your consent, except in the following circumstances:
          </p>
          <div className="space-y-4">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Service Providers:</strong> Third-party companies that help us operate our website and serve our customers (payment processors, shipping companies, etc.)</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Legal Requirements:</strong> When required by law or to protect our rights and safety</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>Business Transfers:</strong> In connection with a merger, acquisition, or sale of assets</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700"><strong>With Your Consent:</strong> When you explicitly agree to share your information</p>
            </div>
          </div>
        </div>

        {/* Data Security */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Data Security</h2>
          <p className="text-gray-600 mb-6">
            We implement appropriate security measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Technical Safeguards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• SSL encryption for data transmission</li>
                <li>• Secure servers and databases</li>
                <li>• Regular security audits and updates</li>
                <li>• Access controls and authentication</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Operational Safeguards</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Limited access to personal information</li>
                <li>• Employee training on privacy practices</li>
                <li>• Regular privacy impact assessments</li>
                <li>• Incident response procedures</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Your Rights */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Your Privacy Rights</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span><strong>Access:</strong> Request access to your personal information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span><strong>Correction:</strong> Request correction of inaccurate information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span><strong>Deletion:</strong> Request deletion of your personal information</span>
                </li>
              </ul>
            </div>
            <div>
              <ul className="space-y-3 text-gray-700">
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span><strong>Portability:</strong> Request transfer of your information</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span><strong>Opt-out:</strong> Unsubscribe from marketing communications</span>
                </li>
                <li className="flex items-start">
                  <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
                  <span><strong>Complaint:</strong> Lodge a complaint with supervisory authorities</span>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Contact Us About Privacy</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about this Privacy Policy or our privacy practices, please contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Share2 className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Email: privacy@thedigitalcart.com</span>
            </div>
            <div className="flex items-center">
              <Share2 className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Phone: +91-72193387XX</span>
            </div>
            <div className="flex items-center">
              <Share2 className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Address: Chhatrapati Sambhajinagar, India</span>
            </div>
          </div>
          <div className="mt-6 pt-6 border-t border-gray-200">
            <p className="text-sm text-gray-500">
              We reserve the right to update this Privacy Policy from time to time. We will notify you of any material changes by posting the updated policy on our website.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Privacy;