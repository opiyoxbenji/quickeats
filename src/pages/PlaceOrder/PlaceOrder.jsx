import React, { useContext } from "react";
import './PlaceOrder.css';
import { StoreContext } from "../../StoreContext/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";

const PlaceOrder = () => {
    const {getTotalCart} = useContext(StoreContext)
    const navigate = useNavigate();
    return (
        <form className="place-order">
            <div className="place-order-left">
                <p className="titles">Info on Delivery</p>
                <div className="multi-fields">
                    <input type="text" placeholder="First Name" />
                    <input type="text" placeholder="Last Name" />
                </div>
                <input type="email" placeholder="Email address" />
                <input type="text" placeholder="Address" />
                {/* <div className="multi-fields"> 
                    <input type="text" placeholder="City" />
                    <input type="text" placeholder="State" />
                </div> */}
                <div className="multi-fields">
                    <input type="text" placeholder="Zip code" />
                    <input type="text" placeholder="Country" />
                </div>
                <input type="text" placeholder="Phone Number" />
            </div>
            <div className="place-order-right">
                <div className='cart-total'>
                    <h2 className="font-bold text-xl">Cart Total</h2>
                    <div>
                    <div className='cart-total-details'>
							<p>Subtotal</p>
							<p>R {getTotalCart()}</p>
						</div>
						<hr />
						<div className='cart-total-details'>
							<p>Delivery Fee</p>
							<p>R {getTotalCart() === 0?0:2}</p>
						</div>
						<hr />
						<div className='cart-total-details'>
							<b className="font-bold">Total</b>
							<b>R {getTotalCart() === 0?0:getTotalCart() + 2}</b>
						</div>
                    </div>
                    <button onClick={() => navigate('/payment')}>
                        Proceed to Payment
                    </button>
                </div>
            </div>
        </form>
    )
}

export default PlaceOrder;