import { useEffect, useState } from 'react';
import { Link } from 'react-router';
import { Toast } from '../components/ui/Toast';
import { SuccessIcon } from '../components/ui/SuccessIcon';

export function CheckoutSuccessPage() {
  const [showToast, setShowToast] = useState(true);

  useEffect(() => {
    localStorage.removeItem('cart');
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 flex items-center justify-center px-4">
      <div className="max-w-md w-full bg-white rounded-lg shadow-md p-8 text-center">
        <div className="mb-6">
          <SuccessIcon />
        </div>

        <h1 className="text-3xl font-bold text-gray-900 mb-4">
          Order Successful!
        </h1>

        <p className="text-gray-600 mb-8">
          Thank you for your purchase. Your order has been confirmed and will be shipping soon.
        </p>

        <Link
          to="/"
          className="inline-block w-full bg-blue-600 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-700 transition-colors"
        >
          Continue Shopping
        </Link>
      </div>

      {showToast && (
        <Toast
          message="Checkout successful!"
          type="success"
          onClose={() => setShowToast(false)}
        />
      )}
    </div>
  );
}
