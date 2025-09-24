import React, { useState } from 'react';
import { X, CreditCard, Lock, CheckCircle, Loader } from 'lucide-react';

const PaymentModal = ({ isOpen, onClose, amount, onPaymentSuccess }) => {
    const [paymentStep, setPaymentStep] = useState('form'); // 'form', 'processing', 'success'
    const [formData, setFormData] = useState({
        cardNumber: '',
        cardName: '',
        expiryDate: '',
        cvv: '',
        email: '',
        billingAddress: {
            street: '',
            city: '',
            state: '',
            zipCode: '',
            country: 'India'
        }
    });

    const [errors, setErrors] = useState({});

    const formatCardNumber = (value) => {
        const v = value.replace(/\s+/g, '').replace(/[^0-9]/gi, '');
        const matches = v.match(/\d{4,16}/g);
        const match = matches && matches[0] || '';
        const parts = [];
        for (let i = 0, len = match.length; i < len; i += 4) {
            parts.push(match.substring(i, i + 4));
        }
        if (parts.length) {
            return parts.join(' ');
        } else {
            return v;
        }
    };

    const formatExpiryDate = (value) => {
        const v = value.replace(/\D/g, '');
        if (v.length >= 2) {
            return v.substring(0, 2) + '/' + v.substring(2, 4);
        }
        return v;
    };

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        
        if (name === 'cardNumber') {
            setFormData(prev => ({ ...prev, [name]: formatCardNumber(value) }));
        } else if (name === 'expiryDate') {
            setFormData(prev => ({ ...prev, [name]: formatExpiryDate(value) }));
        } else if (name === 'cvv') {
            setFormData(prev => ({ ...prev, [name]: value.replace(/\D/g, '').substring(0, 4) }));
        } else if (name.startsWith('billing.')) {
            const field = name.split('.')[1];
            setFormData(prev => ({
                ...prev,
                billingAddress: { ...prev.billingAddress, [field]: value }
            }));
        } else {
            setFormData(prev => ({ ...prev, [name]: value }));
        }
        
        // Clear error when user starts typing
        if (errors[name]) {
            setErrors(prev => ({ ...prev, [name]: '' }));
        }
    };

    const validateForm = () => {
        const newErrors = {};
        
        if (!formData.cardNumber || formData.cardNumber.replace(/\s/g, '').length < 13) {
            newErrors.cardNumber = 'Please enter a valid card number';
        }
        if (!formData.cardName.trim()) {
            newErrors.cardName = 'Please enter the cardholder name';
        }
        if (!formData.expiryDate || formData.expiryDate.length < 5) {
            newErrors.expiryDate = 'Please enter a valid expiry date';
        }
        if (!formData.cvv || formData.cvv.length < 3) {
            newErrors.cvv = 'Please enter a valid CVV';
        }
        if (!formData.email.includes('@')) {
            newErrors.email = 'Please enter a valid email address';
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0;
    };

    const handlePayment = async (e) => {
        e.preventDefault();
        
        if (!validateForm()) return;

        setPaymentStep('processing');
        
        // Simulate payment processing
        setTimeout(() => {
            setPaymentStep('success');
            setTimeout(() => {
                onPaymentSuccess({
                    transactionId: 'TXN' + Date.now(),
                    amount: amount,
                    paymentMethod: 'Credit Card',
                    cardLast4: formData.cardNumber.slice(-4),
                    timestamp: new Date().toISOString()
                });
            }, 2000);
        }, 3000);
    };

    const getCardType = (number) => {
        const num = number.replace(/\s/g, '');
        if (num.startsWith('4')) return 'Visa';
        if (num.startsWith('5') || num.startsWith('2')) return 'Mastercard';
        if (num.startsWith('3')) return 'American Express';
        return 'Card';
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-2xl shadow-2xl w-full max-w-2xl max-h-[90vh] overflow-y-auto">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center space-x-3">
                        <div className="p-2 bg-green-100 rounded-lg">
                            <Lock className="w-6 h-6 text-green-600" />
                        </div>
                        <div>
                            <h2 className="text-xl font-bold text-gray-900">Secure Payment</h2>
                            <p className="text-sm text-gray-500">Your payment information is encrypted and secure</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                        disabled={paymentStep === 'processing'}
                    >
                        <X className="w-5 h-5 text-gray-500" />
                    </button>
                </div>

                {/* Content */}
                <div className="p-6">
                    {paymentStep === 'form' && (
                        <form onSubmit={handlePayment} className="space-y-6">
                            {/* Amount Display */}
                            <div className="bg-gray-50 rounded-lg p-4 text-center">
                                <p className="text-sm text-gray-600">Total Amount</p>
                                <p className="text-3xl font-bold text-gray-900">₹{amount?.toLocaleString()}</p>
                            </div>

                            {/* Card Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                                    <CreditCard className="w-5 h-5 mr-2" />
                                    Card Information
                                </h3>
                                
                                <div className="grid grid-cols-1 gap-4">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Card Number
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="text"
                                                name="cardNumber"
                                                value={formData.cardNumber}
                                                onChange={handleInputChange}
                                                placeholder="1234 5678 9012 3456"
                                                maxLength="19"
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.cardNumber ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            />
                                            {formData.cardNumber && (
                                                <div className="absolute right-3 top-3 text-sm font-medium text-gray-500">
                                                    {getCardType(formData.cardNumber)}
                                                </div>
                                            )}
                                        </div>
                                        {errors.cardNumber && (
                                            <p className="text-red-500 text-sm mt-1">{errors.cardNumber}</p>
                                        )}
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Cardholder Name
                                        </label>
                                        <input
                                            type="text"
                                            name="cardName"
                                            value={formData.cardName}
                                            onChange={handleInputChange}
                                            placeholder="JOHN DOE"
                                            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                errors.cardName ? 'border-red-500' : 'border-gray-300'
                                            }`}
                                        />
                                        {errors.cardName && (
                                            <p className="text-red-500 text-sm mt-1">{errors.cardName}</p>
                                        )}
                                    </div>

                                    <div className="grid grid-cols-2 gap-4">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Expiry Date
                                            </label>
                                            <input
                                                type="text"
                                                name="expiryDate"
                                                value={formData.expiryDate}
                                                onChange={handleInputChange}
                                                placeholder="MM/YY"
                                                maxLength="5"
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.expiryDate ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            />
                                            {errors.expiryDate && (
                                                <p className="text-red-500 text-sm mt-1">{errors.expiryDate}</p>
                                            )}
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                CVV
                                            </label>
                                            <input
                                                type="text"
                                                name="cvv"
                                                value={formData.cvv}
                                                onChange={handleInputChange}
                                                placeholder="123"
                                                maxLength="4"
                                                className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                                    errors.cvv ? 'border-red-500' : 'border-gray-300'
                                                }`}
                                            />
                                            {errors.cvv && (
                                                <p className="text-red-500 text-sm mt-1">{errors.cvv}</p>
                                            )}
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* Contact Information */}
                            <div className="space-y-4">
                                <h3 className="text-lg font-semibold text-gray-900">Contact Information</h3>
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-2">
                                        Email Address
                                    </label>
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleInputChange}
                                        placeholder="john.doe@example.com"
                                        className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent ${
                                            errors.email ? 'border-red-500' : 'border-gray-300'
                                        }`}
                                    />
                                    {errors.email && (
                                        <p className="text-red-500 text-sm mt-1">{errors.email}</p>
                                    )}
                                </div>
                            </div>

                            {/* Security Notice */}
                            <div className="bg-blue-50 border border-blue-200 rounded-lg p-4">
                                <div className="flex items-center space-x-2">
                                    <Lock className="w-5 h-5 text-blue-600" />
                                    <div>
                                        <p className="text-sm font-medium text-blue-900">Secure Payment</p>
                                        <p className="text-xs text-blue-700">Your payment information is encrypted using industry-standard SSL technology</p>
                                    </div>
                                </div>
                            </div>

                            {/* Pay Button */}
                            <button
                                type="submit"
                                className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-4 px-6 rounded-lg transition-colors duration-200 flex items-center justify-center space-x-2"
                            >
                                <Lock className="w-5 h-5" />
                                <span>Pay ₹{amount?.toLocaleString()}</span>
                            </button>
                        </form>
                    )}

                    {paymentStep === 'processing' && (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-4">
                                <Loader className="w-8 h-8 text-blue-600 animate-spin" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Processing Payment</h3>
                            <p className="text-gray-600 mb-4">Please wait while we securely process your payment...</p>
                            <div className="w-full bg-gray-200 rounded-full h-2">
                                <div className="bg-blue-600 h-2 rounded-full animate-pulse" style={{ width: '70%' }}></div>
                            </div>
                        </div>
                    )}

                    {paymentStep === 'success' && (
                        <div className="text-center py-12">
                            <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-4">
                                <CheckCircle className="w-8 h-8 text-green-600" />
                            </div>
                            <h3 className="text-xl font-semibold text-gray-900 mb-2">Payment Successful!</h3>
                            <p className="text-gray-600 mb-4">Your payment has been processed successfully</p>
                            <div className="bg-gray-50 rounded-lg p-4 text-left max-w-md mx-auto">
                                <div className="flex justify-between text-sm">
                                    <span className="text-gray-600">Amount Paid:</span>
                                    <span className="font-medium">₹{amount?.toLocaleString()}</span>
                                </div>
                                <div className="flex justify-between text-sm mt-2">
                                    <span className="text-gray-600">Payment Method:</span>
                                    <span className="font-medium">**** {formData.cardNumber.slice(-4)}</span>
                                </div>
                            </div>
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
};

export default PaymentModal;