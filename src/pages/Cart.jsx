// import React, { useContext } from 'react';
// import { StoreContext } from '../StoreContext/StoreContext';
// import { useNavigate } from 'react-router-dom';

// import { ShoppingCart, X, Tag, ChevronRight } from 'lucide-react';

// const Cart = () => {
// 	const { cartItems, food_list, removeFromCart, getTotalCart } =
// 		useContext(StoreContext);
// 	const navigate = useNavigate();

// 	return (
// 		<div className='min-h-screen pt-24 px-4 md:px-24 pb-12'>
// 			<div className='max-w-6xl mx-auto'>
// 				{/* Header */}
// 				<div className='flex items-center gap-3 mb-8'>
// 					<ShoppingCart className='w-8 h-8 text-orange-600' />
// 					<h1 className='text-2xl md:text-3xl font-bold text-gray-800'>
// 						Shopping Cart
// 					</h1>
// 				</div>

// 				{/* Cart Items */}
// 				<div className='bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden'>
// 					<div className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center bg-gray-50 p-4 text-sm text-gray-700 font-semibold'>
// 						<p>Items</p>
// 						<p>Title</p>
// 						<p>Price</p>
// 						<p>Quantity</p>
// 						<p>Total</p>
// 						<p>Remove</p>
// 					</div>

// 					<div className='divide-y divide-gray-100'>
// 						{food_list.map(item => {
// 							if (cartItems[item._id] > 0) {
// 								return (
// 									<div
// 										key={item._id}
// 										className='grid grid-cols-[1fr_1.5fr_1fr_1fr_1fr_0.5fr] items-center p-4 hover:bg-gray-50 transition-colors'>
// 										<img
// 											src={`http://localhost:4000/images/${item.image}`}
// 											alt=''
// 											className='w-16 h-16 object-cover rounded-lg'
// 										/>
// 										<p className='font-medium text-gray-800'>
// 											{item.name}
// 										</p>
// 										<p className='text-gray-600'>
// 											R {item.price}
// 										</p>
// 										<div className='flex items-center gap-2'>
// 											<span className='bg-orange-100 text-orange-700 px-3 py-1 rounded-full font-medium'>
// 												{cartItems[item._id]}
// 											</span>
// 										</div>
// 										<p className='font-medium text-gray-800'>
// 											R {item.price * cartItems[item._id]}
// 										</p>
// 										<button
// 											onClick={() =>
// 												removeFromCart(item._id)
// 											}
// 											className='w-8 h-8 flex items-center justify-center rounded-full hover:bg-red-50 text-red-500 transition-colors'>
// 											<X className='w-5 h-5' />
// 										</button>
// 									</div>
// 								);
// 							}
// 						})}
// 					</div>
// 				</div>

// 				{/* Cart Bottom Section */}
// 				<div className='mt-8 flex flex-col-reverse md:flex-row gap-8'>
// 					{/* Cart Total */}
// 					<div className='w-full md:w-1/2'>
// 						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 							<h2 className='text-xl font-bold text-gray-800 mb-6'>
// 								Cart Summary
// 							</h2>
// 							<div className='space-y-4'>
// 								<div className='flex justify-between text-gray-600'>
// 									<p>Subtotal</p>
// 									<p className='font-medium'>
// 										R {getTotalCart()}
// 									</p>
// 								</div>
// 								<div className='flex justify-between text-gray-600'>
// 									<p>Delivery Fee</p>
// 									<p className='font-medium'>
// 										R {getTotalCart() === 0 ? 0 : 2}
// 									</p>
// 								</div>
// 								<div className='pt-4 border-t'>
// 									<div className='flex justify-between'>
// 										<p className='font-bold text-gray-800'>
// 											Total
// 										</p>
// 										<p className='font-bold text-gray-800'>
// 											R{' '}
// 											{getTotalCart() === 0
// 												? 0
// 												: getTotalCart() + 2}
// 										</p>
// 									</div>
// 								</div>
// 							</div>
// 							<button
// 								onClick={() => navigate('/order')}
// 								className='mt-6 w-full bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
// 								Proceed to Checkout
// 								<ChevronRight className='w-4 h-4' />
// 							</button>
// 						</div>
// 					</div>

// 					{/* Promo Code */}
// 					<div className='w-full lg:w-1/2 mt-4 lg:mt-0'>
// 						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-4 md:p-6'>
// 							<div className='flex items-center gap-2 mb-4'>
// 								<Tag className='w-5 h-5 text-orange-600' />
// 								<h2 className='text-xl font-bold text-gray-800'>
// 									Promo Code
// 								</h2>
// 							</div>
// 							<p className='text-gray-600 mb-4'>
// 								Enter your promo code to get special discounts
// 							</p>
// 							<div className='flex flex-col sm:flex-row gap-2'>
// 								<input
// 									type='text'
// 									placeholder='Enter promo code'
// 									className='w-full flex-1 px-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
// 								/>
// 								<button className='w-full sm:w-auto bg-gray-900 text-white px-6 py-2 rounded-lg font-medium hover:bg-gray-800 transition-colors'>
// 									Apply
// 								</button>
// 							</div>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Cart;

import React, { useContext, useState } from "react";
import { StoreContext } from "../StoreContext/StoreContext";
import { useNavigate, Link } from "react-router-dom";
import {
  ShoppingCart,
  X,
  Tag,
  ChevronRight,
  Plus,
  Minus,
  ShoppingBag,
} from "lucide-react";

const PROMO_CODES = {
  WELCOME20: { type: "percent", value: 20, label: "20% off" },
  STUDENT15: { type: "percent", value: 15, label: "15% off" },
  SWEETWEEKEND: {
    type: "free_item",
    value: 0,
    label: "Free dessert (applied at checkout)",
  },
  LUNCHTIME: {
    type: "free_item",
    value: 0,
    label: "Free drink (applied at checkout)",
  },
};

const DELIVERY_FEE = 35;

const Cart = () => {
  const { cartItems, food_list, addToCart, removeFromCart, getTotalCart } =
    useContext(StoreContext);
  const navigate = useNavigate();

  const [promoInput, setPromoInput] = useState("");
  const [appliedPromo, setAppliedPromo] = useState(null);
  const [promoError, setPromoError] = useState("");

  const cartItemsList = food_list.filter((item) => cartItems[item._id] > 0);
  const subtotal = getTotalCart();
  const delivery = subtotal === 0 ? 0 : DELIVERY_FEE;

  const discount =
    appliedPromo?.type === "percent"
      ? Math.round((subtotal * appliedPromo.value) / 100)
      : 0;

  const total = subtotal + delivery - discount;

  const applyPromo = () => {
    const code = promoInput.trim().toUpperCase();
    if (!code) return;
    const promo = PROMO_CODES[code];
    if (promo) {
      setAppliedPromo({ code, ...promo });
      setPromoError("");
    } else {
      setAppliedPromo(null);
      setPromoError("Invalid promo code. Try WELCOME20 or STUDENT15.");
    }
  };

  if (cartItemsList.length === 0) {
    return (
      <div className="min-h-screen flex flex-col items-center justify-center px-4 text-center pt-24">
        <div className="h-24 w-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
          <ShoppingBag className="h-10 w-10 text-gray-300" />
        </div>
        <h2 className="text-2xl font-bold text-gray-900 mb-2">
          Your cart is empty
        </h2>
        <p className="text-gray-400 mb-8 max-w-sm">
          Looks like you haven't added anything yet. Head to the menu and find
          something delicious!
        </p>
        <Link
          to="/menu"
          className="bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-red-200"
        >
          Browse Menu
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-16 max-w-6xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-3 mb-8">
        <ShoppingCart className="h-7 w-7 text-red-500" />
        <h1 className="text-2xl md:text-3xl font-black text-gray-900">
          Your Cart
        </h1>
        <span className="ml-2 bg-red-100 text-red-600 text-sm font-bold px-3 py-0.5 rounded-full">
          {cartItemsList.length} {cartItemsList.length === 1 ? "item" : "items"}
        </span>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        {/* Cart Items */}
        <div className="lg:col-span-2 space-y-3">
          {cartItemsList.map((item) => (
            <div
              key={item._id}
              className="bg-white rounded-2xl shadow-sm border border-gray-100 p-4 flex items-center gap-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="h-20 w-20 rounded-xl object-cover flex-shrink-0"
              />
              <div className="flex-1 min-w-0">
                <p className="font-bold text-gray-900 text-sm leading-tight truncate">
                  {item.name}
                </p>
                <p className="text-xs text-gray-400 mt-0.5">{item.category}</p>
                <p className="text-red-500 font-extrabold mt-1">
                  R {item.price}
                </p>
              </div>

              {/* Quantity stepper */}
              <div className="flex items-center gap-2 bg-gray-100 rounded-xl p-1 flex-shrink-0">
                <button
                  onClick={() => removeFromCart(item._id)}
                  className="h-8 w-8 rounded-lg bg-white shadow-sm flex items-center justify-center text-gray-600 hover:text-red-500 transition-colors"
                >
                  <Minus className="h-3.5 w-3.5" />
                </button>
                <span className="w-6 text-center font-bold text-gray-900 text-sm">
                  {cartItems[item._id]}
                </span>
                <button
                  onClick={() => addToCart(item._id)}
                  className="h-8 w-8 rounded-lg bg-red-500 flex items-center justify-center text-white hover:bg-red-600 transition-colors"
                >
                  <Plus className="h-3.5 w-3.5" />
                </button>
              </div>

              {/* Line total */}
              <p className="font-bold text-gray-900 text-sm w-16 text-right flex-shrink-0">
                R {item.price * cartItems[item._id]}
              </p>

              {/* Remove */}
              <button
                onClick={() => {
                  const count = cartItems[item._id];
                  for (let i = 0; i < count; i++) removeFromCart(item._id);
                }}
                className="h-8 w-8 flex-shrink-0 rounded-full hover:bg-red-50 text-gray-300 hover:text-red-500 flex items-center justify-center transition-colors"
              >
                <X className="h-4 w-4" />
              </button>
            </div>
          ))}

          {/* Continue shopping */}
          <Link
            to="/menu"
            className="flex items-center gap-2 text-red-500 hover:text-red-600 font-semibold text-sm pt-2 transition-colors"
          >
            ← Continue Shopping
          </Link>
        </div>

        {/* Right panel */}
        <div className="space-y-4">
          {/* Promo Code */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <Tag className="h-4 w-4 text-red-500" />
              <h3 className="font-bold text-gray-900 text-sm">Promo Code</h3>
            </div>

            {appliedPromo ? (
              <div className="flex items-center justify-between bg-green-50 border border-green-200 rounded-xl px-4 py-3">
                <div>
                  <p className="text-xs font-bold text-green-700">
                    {appliedPromo.code}
                  </p>
                  <p className="text-xs text-green-600">{appliedPromo.label}</p>
                </div>
                <button
                  onClick={() => {
                    setAppliedPromo(null);
                    setPromoInput("");
                  }}
                  className="text-green-400 hover:text-green-600"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>
            ) : (
              <>
                <div className="flex gap-2">
                  <input
                    type="text"
                    value={promoInput}
                    onChange={(e) => {
                      setPromoInput(e.target.value.toUpperCase());
                      setPromoError("");
                    }}
                    onKeyDown={(e) => e.key === "Enter" && applyPromo()}
                    placeholder="Enter code"
                    className="flex-1 px-3 py-2.5 border border-gray-200 rounded-xl text-sm font-mono text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent"
                  />
                  <button
                    onClick={applyPromo}
                    className="bg-gray-900 hover:bg-gray-700 text-white text-sm font-bold px-4 rounded-xl transition-colors"
                  >
                    Apply
                  </button>
                </div>
                {promoError && (
                  <p className="text-xs text-red-500 mt-2">{promoError}</p>
                )}
                <p className="text-xs text-gray-400 mt-2">
                  Try: WELCOME20, STUDENT15
                </p>
              </>
            )}
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-4">Order Summary</h3>

            <div className="space-y-3 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">R {subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="font-medium text-gray-900">R {delivery}</span>
              </div>
              {discount > 0 && (
                <div className="flex justify-between text-green-600">
                  <span>Discount ({appliedPromo.value}%)</span>
                  <span className="font-medium">−R {discount}</span>
                </div>
              )}
              <div className="border-t border-gray-100 pt-3 flex justify-between font-black text-gray-900 text-base">
                <span>Total</span>
                <span>R {total}</span>
              </div>
            </div>

            <button
              onClick={() => navigate("/order")}
              className="mt-5 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-200"
            >
              Proceed to Checkout
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Cart;
