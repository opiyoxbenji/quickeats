import React, { useContext, useState, useEffect } from 'react';
import '../components/FoodsDisplay/FoodsDisplay.css';
import { StoreContext } from '../StoreContext/StoreContext';
import FoodItem from '../components/FoodsDisplay/FoodItem';
import Category from '../components/CategorySelection';

const FoodDisplay = () => {
	const { food_list } = useContext(StoreContext);
	const [activeCategory, setActiveCategory] = useState('');
	const [filteredFoodList, setFilteredFoodList] = useState(food_list);

	const categoriesMap = {
		'Pizza & Burgers': ['Pizza', 'Burgers'],
		'Ribs, Steaks & Chicken': ['Ribs & Steaks', 'Chicken'],
		'Seafood & Pasta': ['Seafood', 'Pasta'],
		'Starters & Desserts': ['Starters', 'Desserts'],
		Beverages: ['Beverages'],
	};

	useEffect(() => {
		if (activeCategory) {
			const relevantCategories = categoriesMap[activeCategory];
			const filteredItems = food_list.filter(item =>
				relevantCategories.includes(item.category)
			);
			setFilteredFoodList(filteredItems);
		} else {
			setFilteredFoodList(food_list);
		}
	}, [activeCategory, food_list]);

	const handleSelectCategory = category => {
		console.log('Selected Category:', category); // Debugging line
		setActiveCategory(category);
	};

	return (
		<div className='display-foods' id='display-foods'>
			<h2 className='flex items-center justify-center text-center p-2'>
				Top Dishes near you
			</h2>
			<Category
				onSelectCategory={handleSelectCategory}
				activeCategory={activeCategory}
			/>
			<div className='food-display-list'>
				{filteredFoodList.length === 0 ? (
					<p>No items available for this category.</p>
				) : (
					filteredFoodList.map((item, index) => (
						<FoodItem
							key={index}
							id={item._id}
							name={item.name}
							description={item.description}
							price={item.price}
							image={item.image}
						/>
					))
				)}
			</div>
		</div>
	);
};

export default FoodDisplay;
