// import React, { useState } from 'react';
// import { CreditCard, Building2, X, HelpCircle } from 'lucide-react';

// const PaymentPage = () => {
// 	const [cardNumber, setCardNumber] = useState('');
// 	const [expiry, setExpiry] = useState('');
// 	const [cvc, setCvc] = useState('');
// 	const [bankBranch, setBankBranch] = useState('');
// 	const [showPopup, setShowPopup] = useState(false);
// 	const [paymentMessage, setPaymentMessage] = useState('');

// 	const handleSubmit = event => {
// 		event.preventDefault();
// 		// Simulate payment processing
// 		setTimeout(() => {
// 			setPaymentMessage('Payment successful!');
// 		}, 2000);

// 		setCardNumber('');
// 		setExpiry('');
// 		setCvc('');
// 		setBankBranch('');
// 	};

// 	return (
// 		<div className='min-h-screen'>
// 			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12'>
// 				<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8'>
// 					{/* Header */}
// 					<div className='flex items-center gap-3 mb-8'>
// 						<CreditCard className='w-8 h-8 text-orange-600' />
// 						<h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
// 							Payment Details
// 						</h1>
// 					</div>

// 					{/* Payment Warning */}
// 					<div className='flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg mb-6'>
// 						<HelpCircle className='w-5 h-5 flex-shrink-0' />
// 						<p className='text-sm'>
// 							We only accept debit cards. No credit cards allowed.
// 						</p>
// 					</div>

// 					{/* Payment Form */}
// 					<form onSubmit={handleSubmit} className='space-y-6'>
// 						{/* Card Number */}
// 						<div>
// 							<label
// 								htmlFor='card_number'
// 								className='block text-sm font-medium text-gray-700 mb-2'>
// 								Card Number
// 							</label>
// 							<input
// 								type='text'
// 								id='card_number'
// 								className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 								value={cardNumber}
// 								onChange={e => setCardNumber(e.target.value)}
// 								placeholder='1234 5678 9012 3456'
// 								required
// 							/>
// 						</div>

// 						{/* Expiry and CVV */}
// 						<div className='grid grid-cols-2 gap-4'>
// 							<div>
// 								<label
// 									htmlFor='exp_date'
// 									className='block text-sm font-medium text-gray-700 mb-2'>
// 									Expiration Date
// 								</label>
// 								<input
// 									type='text'
// 									id='exp_date'
// 									className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 									value={expiry}
// 									onChange={e => setExpiry(e.target.value)}
// 									placeholder='MM/YY'
// 									required
// 								/>
// 							</div>
// 							<div>
// 								<label
// 									htmlFor='cvv'
// 									className='block text-sm font-medium text-gray-700 mb-2'>
// 									CVV
// 								</label>
// 								<input
// 									type='text'
// 									id='cvv'
// 									className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 									value={cvc}
// 									onChange={e => setCvc(e.target.value)}
// 									placeholder='123'
// 									required
// 								/>
// 							</div>
// 						</div>

// 						{/* Bank Branch */}
// 						<div>
// 							<label
// 								htmlFor='bank_branch'
// 								className='block text-sm font-medium text-gray-700 mb-2'>
// 								Bank Branch
// 							</label>
// 							<input
// 								type='text'
// 								id='bank_branch'
// 								className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 								value={bankBranch}
// 								onChange={e => setBankBranch(e.target.value)}
// 								placeholder='Enter bank branch'
// 								required
// 							/>
// 							<button
// 								type='button'
// 								className='mt-2 text-orange-600 text-sm hover:text-orange-700 inline-flex items-center gap-1'
// 								onClick={() => setShowPopup(true)}>
// 								<HelpCircle className='w-4 h-4' />
// 								Need help finding your bank branch?
// 							</button>
// 						</div>

// 						{/* Submit Button */}
// 						<button
// 							type='submit'
// 							className='w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
// 							Place Order
// 							<CreditCard className='w-5 h-5' />
// 						</button>
// 					</form>

// 					{/* Success Message */}
// 					{paymentMessage && (
// 						<div className='mt-4 p-4 bg-green-50 text-green-600 rounded-lg flex items-center gap-2'>
// 							<div className='w-2 h-2 bg-green-600 rounded-full animate-pulse' />
// 							{paymentMessage}
// 						</div>
// 					)}
// 				</div>
// 			</div>

// 			{/* Help Modal */}
// 			{showPopup && (
// 				<div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>
// 					<div className='bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative'>
// 						<button
// 							onClick={() => setShowPopup(false)}
// 							className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'>
// 							<X className='w-5 h-5' />
// 						</button>

// 						<div className='flex items-center gap-3 mb-4'>
// 							<Building2 className='w-6 h-6 text-orange-600' />
// 							<h2 className='text-xl font-bold text-gray-800'>
// 								Bank Branch Information
// 							</h2>
// 						</div>

// 						<p className='text-gray-600'>
// 							You can find your bank branch number on your bank
// 							statement or by contacting your bank. This
// 							information is typically located at the top of your
// 							statement or near your account details.
// 						</p>
// 					</div>
// 				</div>
// 			)}
// 		</div>
// 	);
// };

// export default PaymentPage;

import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { CreditCard, Lock, CheckCircle, ShoppingBag } from "lucide-react";
import { StoreContext } from "../StoreContext/StoreContext";

const DELIVERY_FEE = 35;

const formatCard = (v) =>
  v
    .replace(/\D/g, "")
    .slice(0, 16)
    .replace(/(.{4})/g, "$1 ")
    .trim();
const formatExpiry = (v) => {
  const d = v.replace(/\D/g, "").slice(0, 4);
  return d.length > 2 ? `${d.slice(0, 2)}/${d.slice(2)}` : d;
};

const Payment = () => {
  const navigate = useNavigate();
  const { getTotalCart, setCartItems } = useContext(StoreContext);

  const subtotal = getTotalCart();
  const total = subtotal + (subtotal > 0 ? DELIVERY_FEE : 0);

  const [form, setForm] = useState({
    cardNumber: "",
    name: "",
    expiry: "",
    cvv: "",
  });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  const onChange = (e) => {
    const { name, value } = e.target;
    let formatted = value;
    if (name === "cardNumber") formatted = formatCard(value);
    if (name === "expiry") formatted = formatExpiry(value);
    if (name === "cvv") formatted = value.replace(/\D/g, "").slice(0, 3);
    setForm((f) => ({ ...f, [name]: formatted }));
    setErrors((er) => ({ ...er, [name]: "" }));
  };

  const validate = () => {
    const e = {};
    if (form.cardNumber.replace(/\s/g, "").length < 16)
      e.cardNumber = "Enter a valid 16-digit card number.";
    if (!form.name.trim()) e.name = "Enter the name on your card.";
    if (form.expiry.length < 5) e.expiry = "Enter a valid expiry date.";
    if (form.cvv.length < 3) e.cvv = "Enter a valid CVV.";
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) return setErrors(errs);
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSuccess(true);
      setCartItems({});
    }, 1800);
  };

  const inputClass = (field) =>
    `w-full px-4 py-3 border rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 transition-all ${
      errors[field]
        ? "border-red-300 focus:ring-red-200"
        : "border-gray-200 focus:ring-red-300 focus:border-transparent"
    }`;

  if (success) {
    return (
      <div className="min-h-screen flex items-center justify-center px-4 pt-24">
        <div className="text-center max-w-md">
          <div className="h-24 w-24 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle className="h-12 w-12 text-green-500" />
          </div>
          <h1 className="text-3xl font-black text-gray-900 mb-2">
            Order Placed!
          </h1>
          <p className="text-gray-400 mb-8">
            Your order has been confirmed. We'll start preparing it right away.
            🎉
          </p>
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5 mb-6 text-left">
            <div className="flex justify-between text-sm">
              <span className="text-gray-500">Amount charged</span>
              <span className="font-black text-gray-900 text-lg">
                R {total}
              </span>
            </div>
          </div>
          <button
            onClick={() => navigate("/menu")}
            className="flex items-center gap-2 mx-auto bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-red-200"
          >
            <ShoppingBag className="h-4 w-4" />
            Order More Food
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 pb-16">
      <div className="max-w-lg mx-auto">
        {/* Header */}
        <div className="flex items-center gap-3 mb-8">
          <CreditCard className="h-7 w-7 text-red-500" />
          <h1 className="text-2xl font-black text-gray-900">Payment</h1>
        </div>

        {/* Order total chip */}
        <div className="bg-gray-900 text-white rounded-2xl px-6 py-4 mb-6 flex items-center justify-between">
          <div>
            <p className="text-xs text-gray-400 uppercase tracking-wide">
              Total Due
            </p>
            <p className="text-2xl font-black mt-0.5">R {total}</p>
          </div>
          <div className="flex items-center gap-1.5 text-green-400 text-xs font-semibold">
            <Lock className="h-3.5 w-3.5" />
            Secure Payment
          </div>
        </div>

        {/* Card form */}
        <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
          {/* Demo notice */}
          <div className="bg-blue-50 border border-blue-100 text-blue-600 text-xs rounded-xl px-4 py-3 mb-6 flex items-start gap-2">
            <Lock className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
            <span>
              This is a demo — no real payment is processed. Use any
              valid-format card number.
            </span>
          </div>

          <form onSubmit={handleSubmit} className="space-y-5">
            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Card Number
              </label>
              <input
                name="cardNumber"
                value={form.cardNumber}
                onChange={onChange}
                placeholder="1234 5678 9012 3456"
                className={inputClass("cardNumber")}
              />
              {errors.cardNumber && (
                <p className="text-xs text-red-500 mt-1">{errors.cardNumber}</p>
              )}
            </div>

            <div>
              <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                Name on Card
              </label>
              <input
                name="name"
                value={form.name}
                onChange={onChange}
                placeholder="John Doe"
                className={inputClass("name")}
              />
              {errors.name && (
                <p className="text-xs text-red-500 mt-1">{errors.name}</p>
              )}
            </div>

            <div className="grid grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Expiry
                </label>
                <input
                  name="expiry"
                  value={form.expiry}
                  onChange={onChange}
                  placeholder="MM/YY"
                  className={inputClass("expiry")}
                />
                {errors.expiry && (
                  <p className="text-xs text-red-500 mt-1">{errors.expiry}</p>
                )}
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  CVV
                </label>
                <input
                  name="cvv"
                  value={form.cvv}
                  onChange={onChange}
                  placeholder="123"
                  type="password"
                  className={inputClass("cvv")}
                />
                {errors.cvv && (
                  <p className="text-xs text-red-500 mt-1">{errors.cvv}</p>
                )}
              </div>
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-bold py-4 rounded-xl transition-all shadow-lg shadow-red-200 mt-2"
            >
              {loading ? (
                <>
                  <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                  Processing...
                </>
              ) : (
                <>
                  <Lock className="h-4 w-4" />
                  Pay R {total}
                </>
              )}
            </button>
          </form>
        </div>

        <p className="text-center text-xs text-gray-400 mt-4 flex items-center justify-center gap-1">
          <Lock className="h-3 w-3" /> Secured with 256-bit SSL encryption
        </p>
      </div>
    </div>
  );
};

export default Payment;