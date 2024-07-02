import { createContext, useEffect, useState } from "react";
import axios from 'axios';

export const StoreContext = createContext(null);

const StoreContextProvider = (props) => {
    const url = "http://localhost:4000";
    const foodurl = "http://localhost:4000/api/food/list"
    const [token, setToken] = useState("");
    const [food_list, setFoodLIst] = useState([]);
    
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
    const contextValue = {
        food_list,
        url,
        token,
        setToken
    }
    return (
        <StoreContext.Provider value={contextValue}>
            {props.children}
        </StoreContext.Provider>
    )
}

export default StoreContextProvider;