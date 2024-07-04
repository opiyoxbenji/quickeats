import React, { useState } from 'react';
import './Payment.css';

const PaymentPage = () => {
  const [cardNumber, setCardNumber] = useState('');
  const [expiry, setExpiry] = useState('');
  const [cvc, setCvc] = useState('');
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
  };

  return (
    <div className="payment-container">
      <h1>Payment Page</h1>
      <form onSubmit={handleSubmit}>
        <label>
          Card details:
          <input
            type="text"
            value={cardNumber}
            onChange={(e) => setCardNumber(e.target.value)}
            placeholder="Card number"
            required
          />
        </label>
        <label>
          Expiry date:
          <input
            type="text"
            value={expiry}
            onChange={(e) => setExpiry(e.target.value)}
            placeholder="MM/YY"
            required
          />
        </label>
        <label>
          CVC:
          <input
            type="text"
            value={cvc}
            onChange={(e) => setCvc(e.target.value)}
            placeholder="CVC"
            required
          />
        </label>
        <button type="submit">Pay Now</button>
      </form>
      {paymentMessage && <p className="payment-message">{paymentMessage}</p>}
    </div>
  );
};

export default PaymentPage;