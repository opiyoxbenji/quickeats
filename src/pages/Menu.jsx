import React, { useContext } from "react";
import '../components/FoodsDisplay/FoodsDisplay.css';
import { StoreContext } from "../StoreContext/StoreContext";
import FoodItem from "../components/FoodsDisplay/FoodItem";

const FoodDisplay = () => {
    const {food_list} = useContext(StoreContext);
    return (
        <div className="display-foods" id="display-foods">
          <h2>Menu</h2>
          <div className="food-display-list">
            {food_list.map((item, index) => {
              return <FoodItem key={index} id={item._id} name={item.name} description={item.description} price={item.price} image={item.image} />
            })}
          </div>
        </div>
    )
}

export default FoodDisplay;