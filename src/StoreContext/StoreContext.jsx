import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const [cartItems, setCartItems] = useState({});
    const url = "http://localhost:4000";
    const foodurl = "http://localhost:4000/api/food/list"
    const [token, setToken] = useState("");
    const [food_list, setFoodLIst] = useState([]);
    
    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({...prev,[itemId]:1}))
        } else {
            setCartItems((prev) => ({...prev, [itemId]:prev[itemId]+1}))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) =>({...prev, [itemId]:prev[itemId]-1}))
    }
    
    const getFood = async () => {
        const res = await axios.get(foodurl);
        setFoodLIst(res.data.data);
    }
    useEffect(() => {
        async function loadData() {
            await getFood();
            if (localStorage.getItem("token")) {
                setToken(localStorage.getItem("token"));
            }
        }
        loadData();
    },[])
    useEffect(() => {
        console.log(cartItems);
    }, [cartItems])
    const contextValue = {
        food_list,
        url,
        token,
        setToken,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;