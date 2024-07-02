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
						className={`btn btn-primary m-2 ${
							activeCategory === category ? 'active' : ''
						}  hover:text-orange-500`}
						onClick={() => onSelectCategory(category)}>
						{category}
					</button>
				))}
			</div>
		</div>
	);
};

export default CategorySelection;
