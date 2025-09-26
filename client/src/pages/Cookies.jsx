import React from 'react';
import { Cookie, Settings, Eye, Shield, ToggleLeft, ToggleRight } from 'lucide-react';

const Cookies = () => {
  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Cookie Policy</h1>
          <p className="text-lg text-gray-600">
            Learn about how we use cookies and similar technologies to improve your experience on our website.
          </p>
          <p className="text-sm text-gray-500 mt-2">Last updated: September 26, 2025</p>
        </div>

        {/* What Are Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <div className="flex items-center mb-6">
            <Cookie className="h-8 w-8 text-blue-600 mr-3" />
            <h2 className="text-2xl font-bold text-gray-900">What Are Cookies?</h2>
          </div>
          <p className="text-gray-600 mb-6">
            Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience by remembering your preferences and analyzing how you use our site.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="text-center p-4 bg-blue-50 rounded-lg">
              <Settings className="h-8 w-8 text-blue-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Functionality</h3>
              <p className="text-sm text-gray-600">Remember your preferences</p>
            </div>
            <div className="text-center p-4 bg-green-50 rounded-lg">
              <Eye className="h-8 w-8 text-green-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Analytics</h3>
              <p className="text-sm text-gray-600">Understand website usage</p>
            </div>
            <div className="text-center p-4 bg-purple-50 rounded-lg">
              <Shield className="h-8 w-8 text-purple-600 mx-auto mb-2" />
              <h3 className="font-semibold text-gray-900 mb-1">Security</h3>
              <p className="text-sm text-gray-600">Keep your session secure</p>
            </div>
          </div>
        </div>

        {/* Types of Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Types of Cookies We Use</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-green-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Essential Cookies</h3>
              <p className="text-gray-600 mb-3">
                These cookies are necessary for the website to function properly. They enable core functionality such as security, network management, and accessibility.
              </p>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-green-800 text-sm"><strong>Note:</strong> These cookies cannot be disabled as they are essential for the website to work.</p>
              </div>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Examples:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Session management cookies</li>
                  <li>• Shopping cart functionality</li>
                  <li>• Security and authentication</li>
                  <li>• Load balancing</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-blue-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Performance & Analytics Cookies</h3>
              <p className="text-gray-600 mb-3">
                These cookies help us understand how visitors interact with our website by collecting and reporting information anonymously.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">What we collect:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Pages visited and time spent</li>
                  <li>• Click patterns and navigation paths</li>
                  <li>• Device and browser information</li>
                  <li>• Error messages and page load times</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-purple-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Functional Cookies</h3>
              <p className="text-gray-600 mb-3">
                These cookies enable enhanced functionality and personalization, such as remembering your preferences and choices.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Features enabled:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Language and region preferences</li>
                  <li>• User interface customization</li>
                  <li>• Recently viewed products</li>
                  <li>• Wishlist and favorites</li>
                </ul>
              </div>
            </div>

            <div className="border-l-4 border-orange-500 pl-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Marketing & Advertising Cookies</h3>
              <p className="text-gray-600 mb-3">
                These cookies are used to deliver personalized advertisements and measure the effectiveness of advertising campaigns.
              </p>
              <div className="mt-4">
                <h4 className="font-semibold text-gray-900 mb-2">Used for:</h4>
                <ul className="text-gray-600 space-y-1 ml-4">
                  <li>• Personalized product recommendations</li>
                  <li>• Targeted advertising campaigns</li>
                  <li>• Social media integration</li>
                  <li>• Remarketing and retargeting</li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        {/* Third-Party Cookies */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Third-Party Cookies</h2>
          <p className="text-gray-600 mb-6">
            We may also use third-party services that set cookies on your device. These services help us provide better functionality and analyze website performance.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Analytics Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Google Analytics (website traffic analysis)</li>
                <li>• Hotjar (user behavior tracking)</li>
                <li>• Facebook Pixel (conversion tracking)</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Other Services</h3>
              <ul className="space-y-2 text-gray-600">
                <li>• Payment processors (secure transactions)</li>
                <li>• Customer support chat (live assistance)</li>
                <li>• Social media plugins (sharing features)</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Cookie Management */}
        <div className="bg-blue-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Managing Your Cookie Preferences</h2>
          <p className="text-gray-700 mb-6">
            You have control over which cookies you accept. You can manage your preferences through your browser settings or our cookie preference center.
          </p>
          
          <div className="space-y-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Browser Settings</h3>
              <p className="text-gray-700 mb-3">Most browsers allow you to:</p>
              <ul className="space-y-2 text-gray-700 ml-4">
                <li>• View cookies stored on your device</li>
                <li>• Delete existing cookies</li>
                <li>• Block future cookies</li>
                <li>• Set cookie preferences for specific websites</li>
              </ul>
            </div>

            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Cookie Preference Center</h3>
              <p className="text-gray-700 mb-4">
                Use our preference center to customize your cookie settings specifically for The Digital Cart:
              </p>
              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200">
                Manage Cookie Preferences
              </button>
            </div>
          </div>
        </div>

        {/* Impact of Disabling Cookies */}
        <div className="bg-yellow-50 rounded-lg p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Impact of Disabling Cookies</h2>
          <p className="text-gray-700 mb-4">
            While you can disable cookies, please note that this may affect your browsing experience:
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Potential Issues:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• You may need to log in repeatedly</li>
                <li>• Shopping cart may not work properly</li>
                <li>• Personalized features may be unavailable</li>
                <li>• Website performance may be affected</li>
              </ul>
            </div>
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Recommendations:</h3>
              <ul className="space-y-2 text-gray-700">
                <li>• Keep essential cookies enabled</li>
                <li>• Consider allowing functional cookies</li>
                <li>• Review and update preferences regularly</li>
                <li>• Contact us if you experience issues</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Updates to Policy */}
        <div className="bg-white rounded-lg shadow-sm p-8 mb-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Updates to This Policy</h2>
          <p className="text-gray-600 mb-4">
            We may update this Cookie Policy from time to time to reflect changes in our practices or for other operational, legal, or regulatory reasons.
          </p>
          <div className="space-y-3">
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700">We will notify you of material changes by posting the updated policy on our website</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700">The "Last updated" date at the top of this policy indicates when it was last revised</p>
            </div>
            <div className="flex items-start">
              <div className="w-2 h-2 bg-blue-600 rounded-full mr-3 mt-2"></div>
              <p className="text-gray-700">Your continued use of our website constitutes acceptance of the updated policy</p>
            </div>
          </div>
        </div>

        {/* Contact Information */}
        <div className="bg-white rounded-lg shadow-sm p-8">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Questions About Cookies?</h2>
          <p className="text-gray-600 mb-6">
            If you have any questions about our use of cookies or this Cookie Policy, please contact us:
          </p>
          <div className="space-y-4">
            <div className="flex items-center">
              <Cookie className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Email: privacy@thedigitalcart.com</span>
            </div>
            <div className="flex items-center">
              <Shield className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Phone: +91-72193387XX</span>
            </div>
            <div className="flex items-center">
              <Settings className="h-5 w-5 text-blue-600 mr-3" />
              <span className="text-gray-700">Address: Chhatrapati Sambhajinagar, India</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cookies;