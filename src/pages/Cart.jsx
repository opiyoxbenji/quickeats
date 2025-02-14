import React, { useContext } from 'react';
import { StoreContext } from '../StoreContext/StoreContext';
import { useNavigate } from 'react-router-dom';

import { ShoppingCart, X, Tag, ChevronRight } from 'lucide-react';

const Cart = () => {
	const { cartItems, food_list, removeFromCart, getTotalCart } =
		useContext(StoreContext);
	const navigate = useNavigate();

	return (
		<div className='min-h-screen pt-24 px-4 md:px-24 pb-12'>
			<div className='max-w-6xl mx-auto'>
				{/* Header */}
				<div className='flex items-center gap-3 mb-8'>
					<ShoppingCart className='w-8 h-8 text-orange-600' />
					<h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
						Shopping Cart
					</h1>
				</div>

				{/* Cart Items */}
				<div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
					<div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center bg-gray-50 p-4 text-sm text-gray-700 font-semibold'>
						<p>Items</p>
						<p>Title</p>
						<p>Price</p>
						<p>Quantity</p>
						<p>Total</p>
						<p>Remove</p>
					</div>

					<div className='divide-y divide-gray-100'>
						{food_list.map(item => {
							if (cartItems[item._id] > 0) {
								return (
									<div
										key={item._id}
										className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center p-4 hover:bg-gray-50 transition-colors'>
										<img
											src={`http://localhost:4000/images/${item.image}`}
											alt=''
											className='w-16 h-16 object-cover rounded-lg'
										/>
										<p className='font-medium text-gray-800'>
											{item.name}
										</p>
										<p className='text-gray-600'>
											R {item.price}
										</p>
										<div className='flex items-center gap-2'>
											<span className='bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium'>
												{cartItems[item._id]}
											</span>
										</div>
										<p className='font-medium text-gray-800'>
											R {item.price * cartItems[item._id]}
										</p>
										<button
											onClick={() =>
												removeFromCart(item._id)
											}
											className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-red-500 transition-colors'>
											<X className='w-5 h-5' />
										</button>
									</div>
								);
							}
						})}
					</div>
				</div>

				{/* Cart Bottom Section */}
				<div className='mt-8 flex flex-col-reverse md:flex-row gap-8'>
					{/* Cart Total */}
					<div className='w-full md:w-1/2'>
						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
							<h2 className='text-xl font-bold text-gray-800 mb-6'>
								Cart Summary
							</h2>
							<div className='space-y-4'>
								<div className='flex justify-between text-gray-600'>
									<p>Subtotal</p>
									<p className='font-medium'>
										R {getTotalCart()}
									</p>
								</div>
								<div className='flex justify-between text-gray-600'>
									<p>Delivery Fee</p>
									<p className='font-medium'>
										R {getTotalCart() === 0 ? 0 : 2}
									</p>
								</div>
								<div className='pt-4 border-t'>
									<div className='flex justify-between'>
										<p className='font-bold text-gray-800'>
											Total
										</p>
										<p className='font-bold text-gray-800'>
											R{' '}
											{getTotalCart() === 0
												? 0
												: getTotalCart() + 2}
										</p>
									</div>
								</div>
							</div>
							<button
								onClick={() => navigate('/order')}
								className='mt-6 w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
								Proceed to Checkout
								<ChevronRight className='w-4 h-4' />
							</button>
						</div>
					</div>

					{/* Promo Code */}
					<div className='w-full lg:w-1/2 mt-4 lg:mt-0'>
						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6'>
							<div className='flex items-center gap-2 mb-4'>
								<Tag className='w-5 h-5 text-orange-600' />
								<h2 className='text-xl font-bold text-gray-800'>
									Promo Code
								</h2>
							</div>
							<p className='text-gray-600 mb-4'>
								Enter your promo code to get special discounts
							</p>
							<div className='flex flex-col sm:flex-row gap-2'>
								<input
									type='text'
									placeholder='Enter promo code'
									className='w-full flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
								/>
								<button className='w-full sm:w-auto bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
									Apply
								</button>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Cart;
