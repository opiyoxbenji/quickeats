import React, { useContext } from 'react';
import './FoodItems.css';
import { StoreContext } from '../../context/StoreContext';
import Item from '../Items/Item';

const FoodItems = ({ category }) => {
	const food_list = useContext(StoreContext);
	return (
		<div className='food-dislpay' id='food-display'>
			<h2>Top Dishes near you</h2>
			<div className='food-display-list'>
				{food_list.map((item, index) => {
					return (
						<Item
							key={index}
							id={item._id}
							name={item.name}
							price={item.price}
							image={item.image}
						/>
					);
				})}
			</div>
		</div>
	);
};

export default FoodItems;
