import React, { useContext } from "react";
import './Fooditem.css'
import { StoreContext } from "../../StoreContext/StoreContext";
import assets from '../../assets/assets';

const FoodItem = ({id, name, price, description, image}) => {
    const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
    const itemCount = cartItems[id] || 0; // Get item count from cartItems

    return (
		<div className='food_item'>
			<div className='food_item_image_container'>
				<img
					className='food_image'
					src={'http://localhost:4000/images/' + image}
					alt=''
				/>
				{!itemCount ? (
					<img
						className='add'
						onClick={() => addToCart(id)}
						src={assets.add_icon}
						alt=''
					/>
				) : (
					<div className='food-item-counter'>
						<img
							onClick={() => removeFromCart(id)}
							src={assets.red_minus}
							alt=''
						/>
						<p>{itemCount}</p>
						<img
							onClick={() => addToCart(id)}
							src={assets.green_plus}
							alt=''
						/>
					</div>
				)}
			</div>
			<div className='food_item_name'>
				<p>{name}</p>
			</div>
			<div className='food_item_information'>
				<p className='food_item_ingredients'>{description}</p>
				<p className='food_price text-red-500'>R {price}</p>
			</div>
		</div>
	);
}

export default FoodItem;