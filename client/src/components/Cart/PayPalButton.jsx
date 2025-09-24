import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
    // Get PayPal Client ID from environment
    const clientId = import.meta.env.VITE_PAYPAL_CLIENT_ID;
    
    // Debug: Log the client ID (remove in production)
    console.log("PayPal Client ID:", clientId ? "Found" : "Not found");
    
    // Check if client ID exists
    if (!clientId || clientId === "undefined") {
        return (
            <div className="w-full p-4 bg-red-50 border border-red-200 rounded-lg">
                <p className="text-red-600 text-sm font-semibold">PayPal Configuration Error</p>
                <p className="text-red-600 text-sm">PayPal Client ID not found. Please restart the development server.</p>
            </div>
        );
    }
    
    // PayPal SDK configuration
    const initialOptions = {
        "client-id": clientId,
        currency: "USD",
        intent: "capture",
        "data-sdk-integration-source": "react-paypal-js"
    };

    return (
        <div className="w-full">
            <PayPalScriptProvider 
                options={initialOptions}
                deferLoading={false}
            >
                <div className="paypal-button-container">
                    <PayPalButtons 
                        style={{ 
                            layout: "vertical",
                            color: "blue",
                            shape: "rect",
                            label: "paypal",
                            height: 48
                        }}
                        createOrder={(data, actions) => {
                            // Convert INR to USD (approximate rate: 1 USD = 83 INR)
                            const usdAmount = (amount / 83).toFixed(2);
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: usdAmount,
                                        currency_code: "USD"
                                    }
                                }]
                            })
                        }}
                        onApprove={(data, actions) => {
                            return actions.order.capture().then(onSuccess)
                        }}
                        onError={onError}
                        onCancel={() => {
                            console.log("Payment cancelled by user");
                        }}
                    />
                </div>
                
                {/* Payment Security Notice */}
                <div className="mt-4 text-center space-y-1">
                    <p className="text-xs text-gray-500">
                        Secured by PayPal. Your payment information is never stored on our servers.
                    </p>
                    <p className="text-xs text-gray-400">
                        Payment processed in USD (₹{amount} ≈ ${(amount / 83).toFixed(2)})
                    </p>
                </div>
            </PayPalScriptProvider>
        </div>
    )
}

export default PayPalButton