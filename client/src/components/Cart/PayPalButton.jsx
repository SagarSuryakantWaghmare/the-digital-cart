import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";

const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <div className="w-full">
            <PayPalScriptProvider 
                options={{ 
                    "clientId": import.meta.env.VITE_PAYPAL_CLIENT_ID,
                    currency: "INR"
                }}
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
                            return actions.order.create({
                                purchase_units: [{
                                    amount: {
                                        value: amount,
                                        currency_code: "INR"
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
                <div className="mt-4 text-center">
                    <p className="text-xs text-gray-500">
                        Secured by PayPal. Your payment information is never stored on our servers.
                    </p>
                </div>
            </PayPalScriptProvider>
        </div>
    )
}

export default PayPalButton