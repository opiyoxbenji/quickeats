import React from "react";
import './Fooditem.css'
const FoodItem = ({id, name, price, ingredients, image}) => {
    return(
        <div className="food_item">
            <div className="food_item_image_container">
                <img className="food_image" src={image} alt="" />
            </div>
            <div className="food_item_name">
                <p>{name}</p>
            </div>
            <div className="food_item_information">
                <p className="food_item_ingredients">{ingredients}</p>
                <p className="food_price">R{price}</p>
            </div>
        </div>
    )
}

export default FoodItem;