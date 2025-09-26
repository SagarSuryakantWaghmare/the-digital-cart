import React, { useState } from 'react';
import { ChevronDown, ChevronUp } from 'lucide-react';

const FAQ = () => {
  const [openItems, setOpenItems] = useState({});

  const toggleItem = (index) => {
    setOpenItems(prev => ({
      ...prev,
      [index]: !prev[index]
    }));
  };

  const faqData = [
    {
      category: "Orders & Shopping",
      questions: [
        {
          question: "How do I place an order?",
          answer: "Simply browse our collection, add items to your cart, and proceed to checkout. Fill in your shipping details and complete the payment to place your order."
        },
        {
          question: "Can I modify or cancel my order?",
          answer: "Orders can be modified or cancelled within 1 hour of placement. After that, please contact our customer service team for assistance."
        },
        {
          question: "What payment methods do you accept?",
          answer: "We accept all major credit cards, debit cards, UPI, net banking, and cash on delivery for orders above ₹500."
        },
        {
          question: "How can I track my order?",
          answer: "Once your order is dispatched, you'll receive a tracking number via email and SMS. You can also check your order status in the 'My Orders' section of your account."
        }
      ]
    },
    {
      category: "Shipping & Delivery",
      questions: [
        {
          question: "What are your shipping charges?",
          answer: "We offer free shipping on orders above ₹999. For orders below ₹999, shipping charges are ₹99 within India."
        },
        {
          question: "How long does delivery take?",
          answer: "Standard delivery takes 3-7 business days. Express delivery (available in select cities) takes 1-2 business days with additional charges."
        },
        {
          question: "Do you deliver internationally?",
          answer: "Currently, we only deliver within India. We're working on expanding to international markets soon."
        },
        {
          question: "What if I'm not available for delivery?",
          answer: "Our delivery partner will attempt delivery 3 times. If unsuccessful, the package will be returned to our warehouse and you'll need to reschedule delivery."
        }
      ]
    },
    {
      category: "Returns & Exchanges",
      questions: [
        {
          question: "What's your return policy?",
          answer: "We offer a 30-day return policy. Items must be in original condition with tags attached. Certain items like undergarments and sale items are not eligible for returns."
        },
        {
          question: "How do I return an item?",
          answer: "Go to 'My Orders', select the item you want to return, choose a reason, and schedule a pickup. Our team will collect the item from your address."
        },
        {
          question: "When will I receive my refund?",
          answer: "Refunds are processed within 5-7 business days after we receive and inspect the returned item. The amount will be credited to your original payment method."
        },
        {
          question: "Can I exchange an item for a different size or color?",
          answer: "Yes, you can exchange items for different sizes or colors subject to availability. Exchange requests must be made within 15 days of delivery."
        }
      ]
    },
    {
      category: "Account & Support",
      questions: [
        {
          question: "How do I create an account?",
          answer: "Click on 'Register' at the top of the page, fill in your details, and verify your email address. You can also sign up during checkout."
        },
        {
          question: "I forgot my password. What should I do?",
          answer: "Click on 'Forgot Password' on the login page, enter your email address, and we'll send you a link to reset your password."
        },
        {
          question: "How can I contact customer support?",
          answer: "You can reach us via email at hello@thedigitalcart.com, call us at +91-72193387XX, or use the contact form on our website. We're available Monday-Friday, 9 AM to 6 PM."
        },
        {
          question: "Is my personal information secure?",
          answer: "Yes, we use industry-standard encryption and security measures to protect your personal and payment information. We never share your data with third parties without your consent."
        }
      ]
    },
    {
      category: "Products & Sizing",
      questions: [
        {
          question: "How do I choose the right size?",
          answer: "Each product page has a detailed size chart. Measure yourself and compare with our size guide. If you're between sizes, we recommend choosing the larger size."
        },
        {
          question: "Are the colors shown on the website accurate?",
          answer: "We strive to display colors as accurately as possible. However, colors may vary slightly due to different monitor settings and lighting conditions."
        },
        {
          question: "Do you restock sold-out items?",
          answer: "Popular items are usually restocked within 2-3 weeks. You can sign up for restock notifications on the product page to get notified when it's available again."
        },
        {
          question: "Are your products genuine?",
          answer: "Yes, all our products are 100% authentic. We source directly from manufacturers and authorized distributors to ensure genuineness."
        }
      ]
    }
  ];

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h1>
          <p className="text-lg text-gray-600">
            Find answers to common questions about shopping, delivery, returns, and more.
          </p>
        </div>

        {/* FAQ Categories */}
        <div className="space-y-8">
          {faqData.map((category, categoryIndex) => (
            <div key={categoryIndex} className="bg-white rounded-lg shadow-sm p-6">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 border-b border-gray-200 pb-4">
                {category.category}
              </h2>
              <div className="space-y-4">
                {category.questions.map((item, itemIndex) => {
                  const uniqueIndex = `${categoryIndex}-${itemIndex}`;
                  const isOpen = openItems[uniqueIndex];
                  
                  return (
                    <div key={itemIndex} className="border border-gray-200 rounded-lg">
                      <button
                        className="w-full px-6 py-4 text-left flex justify-between items-center hover:bg-gray-50 focus:outline-none focus:bg-gray-50"
                        onClick={() => toggleItem(uniqueIndex)}
                      >
                        <span className="font-semibold text-gray-900">{item.question}</span>
                        {isOpen ? (
                          <ChevronUp className="h-5 w-5 text-gray-500" />
                        ) : (
                          <ChevronDown className="h-5 w-5 text-gray-500" />
                        )}
                      </button>
                      {isOpen && (
                        <div className="px-6 pb-4">
                          <p className="text-gray-600 leading-relaxed">{item.answer}</p>
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
            </div>
          ))}
        </div>

        {/* Contact Section */}
        <div className="mt-12 bg-blue-50 rounded-lg p-8 text-center">
          <h3 className="text-2xl font-bold text-gray-900 mb-4">Still have questions?</h3>
          <p className="text-gray-600 mb-6">
            Can't find the answer you're looking for? Our customer support team is here to help.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="/contact"
              className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors duration-200"
            >
              Contact Support
            </a>
            <a
              href="mailto:hello@thedigitalcart.com"
              className="bg-white text-blue-600 px-6 py-3 rounded-lg font-semibold border border-blue-600 hover:bg-blue-50 transition-colors duration-200"
            >
              Email Us
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQ;