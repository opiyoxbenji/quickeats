import React, { useContext } from 'react';
import { StoreContext } from '../../StoreContext/StoreContext';
import { useNavigate, useLocation } from 'react-router-dom';
import { ArrowLeft, Minus, Plus } from 'lucide-react';

const FoodItemDetail = () => {
	const navigate = useNavigate();
	const location = useLocation();
	const item = location.state;

	const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
	const itemCount = cartItems[item?.id] || 0;

	// If no item data is found, show error or redirect
	if (!item) {
		return (
			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
				<div className='text-center'>
					<h1 className='text-2xl font-bold text-gray-900 mb-4'>
						Item Not Found
					</h1>
					<button
						onClick={() => navigate('/menu')}
						className='flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900'>
						<ArrowLeft className='h-6 w-6' />
						Back to Menu
					</button>
				</div>
			</div>
		);
	}

	return (
		<div className='min-h-screen'>
			{/* Header */}
			<div className='sticky top-0 z-10 shadow-md'>
				<div className='container mx-auto px-4 py-4'>
					<button
						onClick={() => navigate(-1)}
						className='flex items-center text-gray-600 hover:text-gray-900'>
						<ArrowLeft className='h-6 w-6 mr-2' />
						Back to Menu
					</button>
				</div>
			</div>

			{/* Hero Image */}
			<div className='max-w-5xl mx-auto shadow-lg overflow-hidden'>
				<img
					src={'http://localhost:4000/images/' + item.image}
					alt={item.name}
					className='w-full h-full object-cover'
				/>
			</div>

			{/* Content */}
			<div className='container mx-auto px-4 py-8'>
				<div className='max-w-3xl mx-auto'>
					{/* Title and Price */}
					<div className='flex justify-between items-start mb-6'>
						<div>
							<h1 className='text-3xl font-bold text-gray-900'>
								{item.name}
							</h1>
							<p className='text-xl font-semibold text-red-500'>
								R {item.price}
							</p>
						</div>

						{/* Add to Cart Controls */}
						<div className='rounded-lg p-2'>
							{!itemCount ? (
								<button
									onClick={() => addToCart(item.id)}
									className='flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors'>
									<Plus className='h-5 w-5' />
									Add to Cart
								</button>
							) : (
								<div className='flex items-center gap-4'>
									<button
										onClick={() => removeFromCart(item.id)}
										className='p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200'>
										<Minus className='h-5 w-5' />
									</button>
									<span className='font-semibold text-xl min-w-[2rem] text-center'>
										{itemCount}
									</span>
									<button
										onClick={() => addToCart(item.id)}
										className='p-2 rounded-full bg-green-100 text-green-500 hover:bg-green-200'>
										<Plus className='h-5 w-5' />
									</button>
								</div>
							)}
						</div>
					</div>

					{/* Description */}
					<div className='prose max-w-none mb-8'>
						<h2 className='text-xl font-semibold mb-4'>
							Description
						</h2>
						<p className='text-gray-600'>{item.description}</p>
					</div>
				</div>
			</div>
		</div>
	);
};

export default FoodItemDetail;
