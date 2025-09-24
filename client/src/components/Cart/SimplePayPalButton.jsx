import React, { useEffect, useRef } from 'react';

const SimplePayPalButton = ({ amount, onSuccess, onError, onCancel }) => {
  const paypalRef = useRef();

  useEffect(() => {
    // PayPal SDK configuration for sandbox
    const script = document.createElement('script');
    script.src = 'https://www.sandbox.paypal.com/sdk/js?client-id=sb&currency=USD';
    script.async = true;
    
    script.onload = () => {
      if (window.paypal && paypalRef.current) {
        window.paypal.Buttons({
          createOrder: (data, actions) => {
            return actions.order.create({
              purchase_units: [{
                amount: {
                  value: amount.toString()
                }
              }]
            });
          },
          onApprove: (data, actions) => {
            return actions.order.capture().then((details) => {
              console.log('Payment successful:', details);
              onSuccess && onSuccess(details);
            });
          },
          onError: (err) => {
            console.error('PayPal Error:', err);
            onError && onError(err);
          },
          onCancel: (data) => {
            console.log('Payment cancelled:', data);
            onCancel && onCancel(data);
          }
        }).render(paypalRef.current);
      }
    };

    script.onerror = () => {
      console.error('Failed to load PayPal SDK');
      onError && onError('Failed to load PayPal SDK');
    };

    document.body.appendChild(script);

    return () => {
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [amount, onSuccess, onError, onCancel]);

  return <div ref={paypalRef} className="w-full" />;
};

export default SimplePayPalButton;