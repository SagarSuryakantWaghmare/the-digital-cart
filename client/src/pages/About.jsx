import React from 'react';
import { Users, Target, Award, Heart } from 'lucide-react';

const About = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
      <div className="bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="text-center">
            <h1 className="text-4xl font-bold text-gray-900 mb-4">About The Digital Cart</h1>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Your premium destination for modern fashion, where style meets comfort and quality defines every piece.
            </p>
          </div>
        </div>
      </div>

      {/* Our Story */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-600">
                <p>
                  Founded in 2024, The Digital Cart began with a simple vision: to make premium fashion accessible to everyone. 
                  We believe that great style shouldn't come at the expense of comfort or quality.
                </p>
                <p>
                  Starting from Chhatrapati Sambhajinagar, India, we've grown from a small local boutique to a comprehensive 
                  online fashion destination. Our journey has been driven by our passion for curating the finest apparel 
                  that reflects modern trends while maintaining timeless appeal.
                </p>
                <p>
                  Today, we serve customers across India, offering carefully selected pieces that define contemporary fashion 
                  while staying true to our commitment to quality and customer satisfaction.
                </p>
              </div>
            </div>
            <div className="bg-gradient-to-br from-blue-500 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Why Choose Us?</h3>
              <ul className="space-y-3">
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-3" />
                  Premium quality materials
                </li>
                <li className="flex items-center">
                  <Heart className="h-5 w-5 mr-3" />
                  Carefully curated collections
                </li>
                <li className="flex items-center">
                  <Users className="h-5 w-5 mr-3" />
                  Excellent customer service
                </li>
                <li className="flex items-center">
                  <Target className="h-5 w-5 mr-3" />
                  Competitive pricing
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Mission & Vision */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Target className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Mission</h3>
              <p className="text-gray-600">
                To provide premium quality fashion that empowers individuals to express their unique style 
                while feeling comfortable and confident in every piece they wear.
              </p>
            </div>
            <div className="text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our Vision</h3>
              <p className="text-gray-600">
                To become India's most trusted online fashion destination, known for our commitment to quality, 
                style, and exceptional customer experience.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Values */}
      <div className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-green-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Award className="h-8 w-8 text-green-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Quality First</h3>
              <p className="text-gray-600">
                We never compromise on quality. Every product is carefully selected and tested to meet our high standards.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-blue-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Heart className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Customer Love</h3>
              <p className="text-gray-600">
                Our customers are at the heart of everything we do. Their satisfaction drives our continuous improvement.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm text-center">
              <div className="bg-purple-100 w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6">
                <Users className="h-8 w-8 text-purple-600" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-4">Inclusivity</h3>
              <p className="text-gray-600">
                Fashion is for everyone. We celebrate diversity and offer styles that cater to all tastes and preferences.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Team Section */}
      <div className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-gray-900 mb-8">Meet Our Team</h2>
            <p className="text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              Behind The Digital Cart is a passionate team of fashion enthusiasts, tech experts, and customer service professionals 
              working together to bring you the best shopping experience.
            </p>
            
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 rounded-lg p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Founded & Developed by</h3>
              <p className="text-xl mb-2">Sagar Suryakant Waghmare</p>
              <p className="text-blue-100">Full Stack Developer & Fashion Enthusiast</p>
              <p className="mt-4 text-sm opacity-90">
                "Combining my passion for technology and fashion to create an exceptional online shopping experience."
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;