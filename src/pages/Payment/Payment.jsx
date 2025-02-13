import React, { useState } from 'react';
import { CreditCard, Building2, X, HelpCircle } from 'lucide-react';

const PaymentPage = () => {
	const [cardNumber, setCardNumber] = useState('');
	const [expiry, setExpiry] = useState('');
	const [cvc, setCvc] = useState('');
	const [bankBranch, setBankBranch] = useState('');
	const [showPopup, setShowPopup] = useState(false);
	const [paymentMessage, setPaymentMessage] = useState('');

	const handleSubmit = event => {
		event.preventDefault();
		// Simulate payment processing
		setTimeout(() => {
			setPaymentMessage('Payment successful!');
		}, 2000);

		setCardNumber('');
		setExpiry('');
		setCvc('');
		setBankBranch('');
	};

	return (
		<div className='min-h-screen'>
			<div className='max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12'>
				<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6 md:p-8'>
					{/* Header */}
					<div className='flex items-center gap-3 mb-8'>
						<CreditCard className='w-8 h-8 text-orange-600' />
						<h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
							Payment Details
						</h1>
					</div>

					{/* Payment Warning */}
					<div className='flex items-center gap-2 p-4 bg-red-50 text-red-600 rounded-lg mb-6'>
						<HelpCircle className='w-5 h-5 flex-shrink-0' />
						<p className='text-sm'>
							We only accept debit cards. No credit cards allowed.
						</p>
					</div>

					{/* Payment Form */}
					<form onSubmit={handleSubmit} className='space-y-6'>
						{/* Card Number */}
						<div>
							<label
								htmlFor='card_number'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Card Number
							</label>
							<input
								type='text'
								id='card_number'
								className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
								value={cardNumber}
								onChange={e => setCardNumber(e.target.value)}
								placeholder='1234 5678 9012 3456'
								required
							/>
						</div>

						{/* Expiry and CVV */}
						<div className='grid grid-cols-2 gap-4'>
							<div>
								<label
									htmlFor='exp_date'
									className='block text-sm font-medium text-gray-700 mb-2'>
									Expiration Date
								</label>
								<input
									type='text'
									id='exp_date'
									className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
									value={expiry}
									onChange={e => setExpiry(e.target.value)}
									placeholder='MM/YY'
									required
								/>
							</div>
							<div>
								<label
									htmlFor='cvv'
									className='block text-sm font-medium text-gray-700 mb-2'>
									CVV
								</label>
								<input
									type='text'
									id='cvv'
									className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
									value={cvc}
									onChange={e => setCvc(e.target.value)}
									placeholder='123'
									required
								/>
							</div>
						</div>

						{/* Bank Branch */}
						<div>
							<label
								htmlFor='bank_branch'
								className='block text-sm font-medium text-gray-700 mb-2'>
								Bank Branch
							</label>
							<input
								type='text'
								id='bank_branch'
								className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
								value={bankBranch}
								onChange={e => setBankBranch(e.target.value)}
								placeholder='Enter bank branch'
								required
							/>
							<button
								type='button'
								className='mt-2 text-orange-600 text-sm hover:text-orange-700 inline-flex items-center gap-1'
								onClick={() => setShowPopup(true)}>
								<HelpCircle className='w-4 h-4' />
								Need help finding your bank branch?
							</button>
						</div>

						{/* Submit Button */}
						<button
							type='submit'
							className='w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
							Place Order
							<CreditCard className='w-5 h-5' />
						</button>
					</form>

					{/* Success Message */}
					{paymentMessage && (
						<div className='mt-4 p-4 bg-green-50 text-green-600 rounded-lg flex items-center gap-2'>
							<div className='w-2 h-2 bg-green-600 rounded-full animate-pulse' />
							{paymentMessage}
						</div>
					)}
				</div>
			</div>

			{/* Help Modal */}
			{showPopup && (
				<div className='fixed inset-0 bg-black/50 flex items-center justify-center p-4 z-50'>
					<div className='bg-white rounded-xl shadow-lg max-w-md w-full p-6 relative'>
						<button
							onClick={() => setShowPopup(false)}
							className='absolute top-4 right-4 text-gray-400 hover:text-gray-600'>
							<X className='w-5 h-5' />
						</button>

						<div className='flex items-center gap-3 mb-4'>
							<Building2 className='w-6 h-6 text-orange-600' />
							<h2 className='text-xl font-bold text-gray-800'>
								Bank Branch Information
							</h2>
						</div>

						<p className='text-gray-600'>
							You can find your bank branch number on your bank
							statement or by contacting your bank. This
							information is typically located at the top of your
							statement or near your account details.
						</p>
					</div>
				</div>
			)}
		</div>
	);
};

export default PaymentPage;
