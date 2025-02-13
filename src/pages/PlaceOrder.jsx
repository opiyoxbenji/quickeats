import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext/StoreContext';
import { useNavigate } from 'react-router-dom';
import { CreditCard, Truck } from 'lucide-react';

const PlaceOrder = () => {
	const { getTotalCart } = useContext(StoreContext);
	const navigate = useNavigate();

	return (
		<form className='flex flex-col lg:flex-row items-start justify-between gap-12 mt-24 min-h-screen px-4 md:px-24 pb-12'>
			{/* Left Section - Delivery Info */}
			<div className='w-full lg:w-[max(30%,500px)]'>
				<div className='flex items-center gap-3 mb-12'>
					<Truck className='w-8 h-8 text-orange-600' />
					<h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
						Delivery Information
					</h2>
				</div>

				<div className='space-y-4'>
					{/* Name Fields */}
					<div className='flex gap-4'>
						<input
							type='text'
							placeholder='First Name'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
						/>
						<input
							type='text'
							placeholder='Last Name'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
						/>
					</div>

					{/* Email Field */}
					<input
						type='email'
						placeholder='Email address'
						className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
					/>

					{/* Address Field */}
					<input
						type='text'
						placeholder='Address'
						className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
					/>

					{/* Location Fields */}
					<div className='flex gap-4'>
						<input
							type='text'
							placeholder='Zip code'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
						/>
						<input
							type='text'
							placeholder='Country'
							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
						/>
					</div>

					{/* Phone Field */}
					<input
						type='text'
						placeholder='Phone Number'
						className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
					/>
				</div>
			</div>

			{/* Right Section - Order Summary */}
			<div className='w-full lg:w-[max(40%,500px)]'>
				<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
					<div className='flex items-center gap-3 mb-6'>
						<CreditCard className='w-6 h-6 text-orange-600' />
						<h2 className='text-xl font-bold text-gray-800'>
							Order Summary
						</h2>
					</div>

					<div className='space-y-4'>
						<div className='flex justify-between text-gray-600'>
							<p>Subtotal</p>
							<p className='font-medium'>R {getTotalCart()}</p>
						</div>
						<hr className='border-gray-200' />

						<div className='flex justify-between text-gray-600'>
							<p>Delivery Fee</p>
							<p className='font-medium'>
								R {getTotalCart() === 0 ? 0 : 2}
							</p>
						</div>
						<hr className='border-gray-200' />

						<div className='flex justify-between text-gray-800 font-bold'>
							<p>Total</p>
							<p>
								R{' '}
								{getTotalCart() === 0 ? 0 : getTotalCart() + 2}
							</p>
						</div>
					</div>

					<button
						onClick={() => navigate('/payment')}
						className='w-full mt-8 bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
						Proceed to Payment
						<CreditCard className='w-5 h-5' />
					</button>
				</div>
			</div>
		</form>
	);
};

export default PlaceOrder;
