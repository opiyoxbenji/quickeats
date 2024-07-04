import React, { useState } from 'react';
import './Payment.css'; // Make sure to create and include your CSS file

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
  const [bankBranch, setBankBranch] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [paymentMessage, setPaymentMessage] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Simulate payment processing
    setTimeout(() => {
      setPaymentMessage('Payment successful!');
      // You can redirect to a success page or perform other actions here
    }, 2000); // Simulating a delay for processing

    // Clear form inputs after submission (optional)
    setCardNumber('');
    setExpiry('');
    setCvc('');
    setBankBranch('');
  };

  const handlePopupClose = () => {
    setShowPopup(false);
  };

  return (
    <div className="bg-gray-100 dark:bg-gray-900">
      <div className="w-full max-w-3xl mx-auto p-8">
        <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-md border dark:border-gray-700">
          <h1 className="text-2xl font-bold text-gray-800 dark:text-white mb-4">Checkout</h1>

          {/* Payment Information */}
          <div>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Payment Information</h2>
            <p className="text-red-500 mb-4">We only accept debit cards. No credit cards allowed.</p>
            <form onSubmit={handleSubmit}>
              <div className="mt-4">
                <label htmlFor="card_number" className="block text-gray-700 dark:text-white mb-1">Card Number</label>
                <input
                  type="text"
                  id="card_number"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  value={cardNumber}
                  onChange={(e) => setCardNumber(e.target.value)}
                  required
                />
              </div>

              <div className="grid grid-cols-2 gap-4 mt-4">
                <div>
                  <label htmlFor="exp_date" className="block text-gray-700 dark:text-white mb-1">Expiration Date</label>
                  <input
                    type="text"
                    id="exp_date"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    value={expiry}
                    onChange={(e) => setExpiry(e.target.value)}
                    required
                  />
                </div>
                <div>
                  <label htmlFor="cvv" className="block text-gray-700 dark:text-white mb-1">CVV</label>
                  <input
                    type="text"
                    id="cvv"
                    className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                    value={cvc}
                    onChange={(e) => setCvc(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="mt-4">
                <label htmlFor="bank_branch" className="block text-gray-700 dark:text-white mb-1">Bank Branch</label>
                <input
                  type="text"
                  id="bank_branch"
                  className="w-full rounded-lg border py-2 px-3 dark:bg-gray-700 dark:text-white dark:border-none"
                  value={bankBranch}
                  onChange={(e) => setBankBranch(e.target.value)}
                  required
                />
                <button
                  type="button"
                  className="text-blue-500 underline mt-2"
                  onClick={() => setShowPopup(true)}
                >
                  Need help finding your bank branch?
                </button>
              </div>

              <div className="mt-8 flex justify-end">
                <button type="submit" className="bg-teal-500 text-white px-4 py-2 rounded-lg hover:bg-teal-700 dark:bg-teal-600 dark:text-white dark:hover:bg-teal-900">Place Order</button>
              </div>
            </form>
            {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
          </div>
        </div>
      </div>

      {showPopup && (
        <div className="popup" onClick={handlePopupClose}>
          <div className="popup-content" onClick={(e) => e.stopPropagation()}>
            <span className="close" onClick={handlePopupClose}>&times;</span>
            <h2 className="text-xl font-semibold text-gray-700 dark:text-white mb-2">Bank Branch Information</h2>
            <p className="text-gray-700 dark:text-white">
              You can find your bank branch number on your bank statement or by contacting your bank.
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default PaymentPage;