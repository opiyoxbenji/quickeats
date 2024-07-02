import React, { useContext } from "react";
import './Fooditem.css'
import { StoreContext } from "../../StoreContext/StoreContext";
import assets from '../../assets/assets';


const FoodItem = ({id, name, price, description, image}) => {
    const { url } = useContext(StoreContext);
    const [cartItems, addToCart, removeFromCart] = useContext(StoreContext);
    return(
        <div className="food_item">
            <div className="food_item_image_container">
                <img className="food_image" src={"http://localhost:4000/images/" + image} alt=""/>
                {!cartItems[id]
                    ?<img className="add" onClick={() => addToCart(id)} src={assets.add_icon} alt="" />
                    :<div className="food-item-counter" >
                        <img onClick={() => removeFromCart(id)} src={assets.red_minus} alt="" />
                        <p>{cartItems[id]}</p>
                        <img onClick={() => addToCart(id)} src={assets.green_plus} alt="" />
                    </div>
                }
            </div>
            <div className="food_item_name">
                <p>{name}</p>
            </div>
            <div className="food_item_information">
                <p className="food_item_ingredients">{description}</p>
                <p className="food_price">R{price}</p>
            </div>
        </div>
    )
}

export default FoodItem;