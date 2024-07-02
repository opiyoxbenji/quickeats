import React, { useContext } from "react";
import './Fooditem.css'
import { StoreContext } from "../../StoreContext/StoreContext";


const FoodItem = ({id, name, price, description, image}) => {
    const { url } = useContext(StoreContext);
    return(
        <div className="food_item ">
            <div className="food_item_image_container">
                <img className="food_image" src={"http://localhost:4000/images/" + image} alt=""/>
            </div>
            <div className="food_item_name">
                <p>{name}</p>
            </div>
            <div className="food_item_information">
                <p className="food_item_ingredients">{description}</p>
                <p className="food_price">R {price}</p>
            </div>
        </div>
    )
}

export default FoodItem;