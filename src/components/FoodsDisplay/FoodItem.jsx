import React, { useContext, useState } from "react";
import './Fooditem.css'
import { StoreContext } from "../../StoreContext/StoreContext";
import assets from '../../assets/assets';


const FoodItem = ({id, name, price, description, image}) => {
    const  [itemCount, setItemCount] = useState(0);
    const { url } = useContext(StoreContext);
    return(
        <div className="food_item ">
            <div className="food_item_image_container">
                <img className="food_image" src={"http://localhost:4000/images/" + image} alt=""/>
                {!itemCount
                    ?<img className="add" onClick={() => setItemCount(prev=>prev+1)} src={assets.add_icon} alt="" />
                    :<div className="food-item-counter" >
                        <img onClick={() => setItemCount(prev=>prev-1)} src={assets.red_minus} alt="" />
                        <p>{itemCount}</p>
                        <img onClick={() => setItemCount(prev=>prev+1)} src={assets.green_plus} alt="" />
                    </div>
                }
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