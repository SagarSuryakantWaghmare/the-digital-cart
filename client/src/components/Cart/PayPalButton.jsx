import React from 'react'
import { PayPalButtons, PayPalScriptProvider } from "@paypal/react-paypal-js";
import { data } from 'react-router-dom';
const PayPalButton = ({ amount, onSuccess, onError }) => {
    return (
        <>
            <PayPalScriptProvider options={{ "clientId": "AVx2V-qecGAcjTyZ9D6Wtr1B98vb2geVKXpFmAyXM4g3RgGVyaCQyU9NsDUMM1VBlnDNnsAvno9XKVNS" }
            }>
                <PayPalButtons style={{ layout: "vertical" }}
                    createOrder={(data, actions) => {
                        return actions.order.create({
                            purchase_units: [{
                                amount: {
                                    value: "100.00"
                                }
                            }]
                        })
                    }}
                    onApprove={(data, actions) => {
                        return actions.order.capture().then(onSuccess)
                    }}
                    onError={onError} />
            </PayPalScriptProvider>
        </>
    )
}

export default PayPalButton