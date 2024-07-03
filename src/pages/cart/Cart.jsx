import React, { useContext } from "react";
import './cart.css';
import { StoreContext } from "../../StoreContext/StoreContext";
import { useNavigate } from "react-router-dom";

const Cart = () => {
    const { cartItems, food_list, removeFromCart, getTotalCart } = useContext(StoreContext);
    const navigate = useNavigate();
    return (
		<div className='cart'>
			<div className='cart-items'>
				<div className='cart-items-title'>
					<p>Items</p>
					<p>Title</p>
					<p>Price</p>
					<p>Quantity</p>
					<p>Total</p>
					<p>Remove</p>
				</div>
				<br />
				<hr />
				{food_list.map((item, index) => {
					if (cartItems[item._id] > 0) {
						return (
							<div>
								<div className='cart-items-title cart-items-item'>
									<img
										src={`http://localhost:4000/images/${item.image}`}
										alt=''
									/>
									<p>{item.name}</p>
									<p>R {item.price}</p>
									<p>{cartItems[item._id]}</p>
									<p>R {item.price * cartItems[item._id]}</p>
									<p
										onClick={() => removeFromCart(item._id)}
										className='remove_cross'>
										X
									</p>
								</div>
								<hr />
							</div>
						);
					}
				})}
			</div>
			<div className='cart-bottom'>
				<div className='cart-total'>
					<h2 className="font-bold">Cart Total</h2>
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
					<button onClick={() => navigate('/order')} className='hover:bg-slate-900 cursor-pointer'>
						Proceed to Checkout
					</button>
				</div>
				<div className='cart-promo'>
					<div>
						<p>Enter Promo Code here</p>
						<div className='cart-promo-input'>
							<input type='text' placeholder='Promo Code' />
							<button className='hover:bg-orange-700'>Submit</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
}
export default Cart;