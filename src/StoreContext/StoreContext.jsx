import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const foodurl = "http://localhost:4000/api/food/list"
    const [token, setToken] = useState("");
    const [food_list, setFoodLIst] = useState([]);
    const [cartItems, setCartItems] = useState({});

    const addToCart = (itemId) => {
        if (!cartItems[itemId]) {
            setCartItems((prev) => ({ ...prev, [itemId]: 1 }))
        } else {
            setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] + 1 }))
        }
    }
    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({ ...prev, [itemId]: prev[itemId] - 1 }))
    }

    const getFood = async () => {
        const res = await axios.get(foodurl);
        setFoodLIst(res.data.data);
    }
    useEffect(() => {
        async function loadData() {
            await getFood();
            const storedToken = localStorage.getItem("token") || sessionStorage.getItem("token");
            if (storedToken) {
                setToken(storedToken);
            }
        }
        loadData();
    }, [])

    const getTotalCart = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let iteminfo = food_list.find((product) => product._id === item);
                totalAmount += iteminfo.price * cartItems[item];
            }
        }
        return totalAmount;
    }
    const contextValue = {
        food_list,
        url,
        token,
        setToken,
        cartItems,
        setCartItems,
        addToCart,
        removeFromCart,
        getTotalCart
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;