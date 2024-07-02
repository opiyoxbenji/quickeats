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
		<div className='container-fluid'>
			<div className='row'>
				<h1 className='text-center col-12 fw-bold mt-3 mb-5'>
					Top Rated Menu Items
				</h1>
			</div>
			<div className='row justify-content-center'>
				{categories.map((category, index) => (
					<button
						key={index}
						className={`btn btn-primary m-2 ${
							activeCategory === category ? 'active' : ''
						}`}
						onClick={() => onSelectCategory(category)}>
						{category}
					</button>
				))}
			</div>
		</div>
	);
};

export default CategorySelection;
