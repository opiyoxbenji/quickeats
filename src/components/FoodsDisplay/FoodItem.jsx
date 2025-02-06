import React, { useContext } from 'react';
import './Fooditem.css';
import { StoreContext } from '../../StoreContext/StoreContext';
import assets from '../../assets/assets';
import { motion } from 'framer-motion';

const FoodItem = ({ id, name, price, description, image }) => {
	const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
	const itemCount = cartItems[id] || 0; // Get item count from cartItems

	return (
		<div className='group relative overflow-hidden rounded-xl shadow-lg transition-all duration-300 hover:shadow-xl p-4'>
			<div className='relative aspect-square overflow-hidden rounded-lg'>
				<img
					className='h-full w-full object-cover transition-transform duration-300 group-hover:scale-110'
					src={'http://localhost:4000/images/' + image}
					alt={name}
				/>
				<div className='absolute inset-0 bg-black/20 opacity-0 transition-opacity duration-300 group-hover:opacity-100' />

				<div className='absolute bottom-4 right-4'>
					{!itemCount ? (
						<button
							onClick={() => addToCart(id)}
							className='rounded-full bg-red-500 p-3 text-white shadow-lg transition-transform hover:scale-110 hover:bg-red-600 active:scale-95'>
							<svg
								xmlns='http://www.w3.org/2000/svg'
								className='h-6 w-6'
								fill='none'
								viewBox='0 0 24 24'
								stroke='currentColor'>
								<path
									strokeLinecap='round'
									strokeLinejoin='round'
									strokeWidth={2}
									d='M12 6v6m0 0v6m0-6h6m-6 0H6'
								/>
							</svg>
						</button>
					) : (
						<div className='flex items-center gap-2 rounded-full bg-white p-2 shadow-lg'>
							<button
								onClick={() => removeFromCart(id)}
								className='rounded-full bg-red-100 p-2 text-red-500 transition-colors hover:bg-red-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M20 12H4'
									/>
								</svg>
							</button>
							<span className='min-w-[1.5rem] text-center font-semibold'>
								{itemCount}
							</span>
							<button
								onClick={() => addToCart(id)}
								className='rounded-full bg-green-100 p-2 text-green-500 transition-colors hover:bg-green-200'>
								<svg
									xmlns='http://www.w3.org/2000/svg'
									className='h-4 w-4'
									fill='none'
									viewBox='0 0 24 24'
									stroke='currentColor'>
									<path
										strokeLinecap='round'
										strokeLinejoin='round'
										strokeWidth={2}
										d='M12 6v6m0 0v6m0-6h6m-6 0H6'
									/>
								</svg>
							</button>
						</div>
					)}
				</div>
			</div>
			<div className='mt-4 space-y-2'>
				<h3 className='font-bold uppercase tracking-wide text-gray-900'>
					{name}
				</h3>
				<p className='line-clamp-2 text-sm text-gray-600'>
					{description}
				</p>
				<div className='flex items-center justify-between'>
					<span className='text-lg font-bold text-red-500'>
						R {price}
					</span>
					<span className='text-xs text-gray-500'>tap to add</span>
				</div>
			</div>
		</div>
	);
};

export default FoodItem;
