import React from 'react';

const CategorySelection = ({ onSelectCategory, activeCategory }) => {
	const categories = [
		'Pizza & Burgers',
		'Ribs, Steaks & Chicken',
		'Seafood & Pasta',
		'Starters & Desserts',
		'Beverages',
	];

	return (
		<div className='container-fluid text-center col-12 fw-bold mt-3 mb-5 font-bold'>
			<div className='row justify-content-center'>
				{categories.map((category, index) => (
					<button
						key={index}
						className={`btn btn-primary m-2 relative ${
							activeCategory === category
								? 'active hover:text-red-500 text-red-700'
								: ''
						}`}
						onClick={() => onSelectCategory(category)}>
						<span className='relative pb-1'>
							{category}
							{activeCategory === category && (
								<span
									className='absolute left-0 bottom-[-0.5rem] w-full h-0.5 bg-red-600'
									aria-hidden='true'></span>
							)}
						</span>
					</button>
				))}
			</div>
		</div>
	);
};

export default CategorySelection;
