import React, { useContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { StoreContext } from '../../StoreContext/StoreContext';
import {
	User,
	ShoppingBag,
	CreditCard,
	Clock,
	ChevronRight,
	LogOut,
	Settings,
	ShoppingCart,
} from 'lucide-react';

const Profile = () => {
	const { cartItems, food_list, getTotalCart } = useContext(StoreContext);
	const navigate = useNavigate();
	const [activeTab, setActiveTab] = useState('profile');

	// Mock user data - replace with actual user data from your auth system
	const userData = {
		name: 'John Doe',
		email: 'john.doe@example.com',
		phone: '+27 123 456 789',
		address: '123 Main Street, Cape Town',
		orderHistory: [
			{ id: '1', date: '2025-02-10', total: 250, status: 'Delivered' },
			{ id: '2', date: '2025-02-01', total: 180, status: 'Delivered' },
		],
	};

	const hasCartItems = Object.values(cartItems).some(
		quantity => quantity > 0
	);

	return (
		<div className='min-h-screen'>
			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12'>
				<div className='flex flex-col lg:flex-row gap-8'>
					{/* Left Sidebar */}
					<div className='w-full lg:w-1/4'>
						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
							<div className='flex items-center gap-4 mb-6'>
								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center'>
									<User className='w-8 h-8 text-orange-600' />
								</div>
								<div>
									<h2 className='text-xl font-bold text-gray-800'>
										{userData.name}
									</h2>
									<p className='text-gray-600'>
										{userData.email}
									</p>
								</div>
							</div>

							<div className='space-y-2'>
								<button
									onClick={() => setActiveTab('profile')}
									className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
										activeTab === 'profile'
											? 'bg-orange-50 text-orange-600'
											: 'text-gray-600 hover:bg-gray-50'
									}`}>
									<User className='w-5 h-5' />
									Profile
								</button>
								<button
									onClick={() => navigate('/cart')}
									className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
										activeTab === 'orders'
											? 'bg-orange-50 text-orange-600'
											: 'text-gray-600 hover:bg-gray-50'
									}`}>
									<ShoppingBag className='w-5 h-5' />
									Orders
								</button>
								<button
									onClick={() => setActiveTab('settings')}
									className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
										activeTab === 'settings'
											? 'bg-orange-50 text-orange-600'
											: 'text-gray-600 hover:bg-gray-50'
									}`}>
									<Settings className='w-5 h-5' />
									Settings
								</button>
								<button className='w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors'>
									<LogOut className='w-5 h-5' />
									Logout
								</button>
							</div>
						</div>

						{/* Cart Summary Card */}
						{hasCartItems && (
							<div className='mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
								<div className='flex items-center justify-between mb-4'>
									<div className='flex items-center gap-2'>
										<ShoppingCart className='w-5 h-5 text-orange-600' />
										<h3 className='font-bold text-gray-800'>
											Cart Summary
										</h3>
									</div>
									<span className='bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium'>
										{Object.values(cartItems).reduce(
											(a, b) => a + b,
											0
										)}{' '}
										items
									</span>
								</div>
								<div className='space-y-3'>
									<div className='flex justify-between text-gray-600'>
										<p>Subtotal</p>
										<p>R {getTotalCart()}</p>
									</div>
									<div className='flex justify-between text-gray-600'>
										<p>Delivery</p>
										<p>R {getTotalCart() === 0 ? 0 : 2}</p>
									</div>
									<hr className='border-gray-100' />
									<div className='flex justify-between font-bold text-gray-800'>
										<p>Total</p>
										<p>
											R{' '}
											{getTotalCart() === 0
												? 0
												: getTotalCart() + 2}
										</p>
									</div>
								</div>
								<button
									onClick={() => navigate('/payment')}
									className='mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
									Proceed to Payment
									<ChevronRight className='w-4 h-4' />
								</button>
							</div>
						)}
					</div>

					{/* Main Content */}
					<div className='w-full lg:w-3/4'>
						{activeTab === 'profile' && (
							<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
								<div className='flex items-center gap-3 mb-6'>
									<User className='w-6 h-6 text-orange-600' />
									<h2 className='text-xl font-bold text-gray-800'>
										Personal Information
									</h2>
								</div>
								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Full Name
										</label>
										<input
											type='text'
											value={userData.name}
											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										/>
									</div>
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Email
										</label>
										<input
											type='email'
											value={userData.email}
											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										/>
									</div>
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Phone
										</label>
										<input
											type='tel'
											value={userData.phone}
											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										/>
									</div>
									<div>
										<label className='block text-sm font-medium text-gray-700 mb-2'>
											Address
										</label>
										<input
											type='text'
											value={userData.address}
											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
										/>
									</div>
								</div>
								<button className='mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors'>
									Save Changes
								</button>
							</div>
						)}

						{activeTab === 'orders' && (
							<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
								<div className='flex items-center gap-3 mb-6'>
									<Clock className='w-6 h-6 text-orange-600' />
									<h2 className='text-xl font-bold text-gray-800'>
										Order History
									</h2>
								</div>
								<div className='space-y-4'>
									{userData.orderHistory.map(order => (
										<div
											key={order.id}
											className='flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors'>
											<div>
												<p className='font-medium text-gray-800'>
													Order #{order.id}
												</p>
												<p className='text-sm text-gray-600'>
													{order.date}
												</p>
											</div>
											<div className='text-right'>
												<p className='font-medium text-gray-800'>
													R {order.total}
												</p>
												<span className='inline-block px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full'>
													{order.status}
												</span>
											</div>
										</div>
									))}
								</div>
							</div>
						)}

						{activeTab === 'settings' && (
							<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
								<div className='flex items-center gap-3 mb-6'>
									<Settings className='w-6 h-6 text-orange-600' />
									<h2 className='text-xl font-bold text-gray-800'>
										Account Settings
									</h2>
								</div>
								<div className='space-y-6'>
									<div>
										<h3 className='font-medium text-gray-800 mb-2'>
											Email Notifications
										</h3>
										<div className='space-y-2'>
											<label className='flex items-center gap-2'>
												<input
													type='checkbox'
													className='rounded text-orange-600'
												/>
												<span className='text-gray-600'>
													Order updates
												</span>
											</label>
											<label className='flex items-center gap-2'>
												<input
													type='checkbox'
													className='rounded text-orange-600'
												/>
												<span className='text-gray-600'>
													Special offers
												</span>
											</label>
										</div>
									</div>
									<div>
										<h3 className='font-medium text-gray-800 mb-2'>
											Password
										</h3>
										<button className='text-orange-600 hover:text-orange-700'>
											Change Password
										</button>
									</div>
								</div>
							</div>
						)}
					</div>
				</div>
			</div>
		</div>
	);
};

export default Profile;
