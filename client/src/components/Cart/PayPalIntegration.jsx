import React, { useEffect, useState, useCallback } from 'react';

const PayPalIntegration = ({ amount, onSuccess, onError, onCancel }) => {
  const [isScriptLoaded, setIsScriptLoaded] = useState(false);
  const [paypal, setPaypal] = useState(null);

  // Sandbox Client ID - for testing only
  const CLIENT_ID = "sb"; // Simplified sandbox client ID
  
  // Memoize callbacks to prevent unnecessary re-renders
  const handleSuccess = useCallback((details) => {
    onSuccess && onSuccess(details);
  }, [onSuccess]);

  const handleError = useCallback((error) => {
    onError && onError(error);
  }, [onError]);

  const handleCancel = useCallback((data) => {
    onCancel && onCancel(data);
  }, [onCancel]);
  
  useEffect(() => {
    // Check if PayPal script is already loaded
    if (window.paypal) {
      setPaypal(window.paypal);
      setIsScriptLoaded(true);
      return;
    }

    // Create PayPal script
    const script = document.createElement('script');
    script.src = `https://www.sandbox.paypal.com/sdk/js?client-id=${CLIENT_ID}&currency=USD&debug=true`;
    script.async = true;
    
    script.onload = () => {
      if (window.paypal) {
        setPaypal(window.paypal);
        setIsScriptLoaded(true);
        console.log('PayPal SDK loaded successfully');
      }
    };
    
    script.onerror = (error) => {
      console.error('Failed to load PayPal SDK:', error);
      handleError('Failed to load PayPal SDK');
    };

    document.body.appendChild(script);

    return () => {
      // Cleanup
      if (document.body.contains(script)) {
        document.body.removeChild(script);
      }
    };
  }, [handleError]);

  useEffect(() => {
    if (isScriptLoaded && paypal && document.getElementById('paypal-button-container')) {
      // Clear existing buttons
      document.getElementById('paypal-button-container').innerHTML = '';
      
      paypal.Buttons({
        createOrder: (data, actions) => {
          console.log('Creating PayPal order for amount:', amount);
          return actions.order.create({
            purchase_units: [{
              amount: {
                value: amount.toString(),
                currency_code: 'USD'
              },
              description: 'Digital Cart Purchase'
            }]
          });
        },
        
        onApprove: async (data, actions) => {
          try {
            console.log('PayPal payment approved:', data);
            const details = await actions.order.capture();
            console.log('Payment captured:', details);
            handleSuccess(details);
          } catch (error) {
            console.error('Error capturing payment:', error);
            handleError('Failed to capture payment');
          }
        },
        
        onError: (err) => {
          console.error('PayPal error:', err);
          handleError('PayPal payment failed');
        },
        
        onCancel: (data) => {
          console.log('PayPal payment cancelled:', data);
          handleCancel(data);
        },
        
        style: {
          color: 'blue',
          shape: 'rect',
          label: 'pay',
          height: 40
        }
      }).render('#paypal-button-container');
    }
  }, [isScriptLoaded, paypal, amount, handleSuccess, handleError, handleCancel]);

  if (!isScriptLoaded) {
    return (
      <div className="flex items-center justify-center p-4">
        <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-500"></div>
        <span className="ml-2">Loading PayPal...</span>
      </div>
    );
  }

  return (
    <div className="paypal-container">
      <div id="paypal-button-container" className="w-full"></div>
    </div>
  );
};

export default PayPalIntegration;