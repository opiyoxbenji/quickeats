// import React, { useContext } from 'react';
// import { StoreContext } from '../StoreContext/StoreContext';
// import { useNavigate } from 'react-router-dom';
// import { CreditCard, Truck } from 'lucide-react';

// const PlaceOrder = () => {
// 	const { getTotalCart } = useContext(StoreContext);
// 	const navigate = useNavigate();

// 	return (
// 		<form className='flex flex-col lg:flex-row items-start justify-between gap-12 mt-24 min-h-screen px-4 md:px-24 pb-12'>
// 			{/* Left Section - Delivery Info */}
// 			<div className='w-full lg:w-[max(30%,500px)]'>
// 				<div className='flex items-center gap-3 mb-12'>
// 					<Truck className='w-8 h-8 text-orange-600' />
// 					<h2 className='text-2xl md:text-3xl font-semibold text-gray-800'>
// 						Delivery Information
// 					</h2>
// 				</div>

// 				<div className='space-y-4'>
// 					{/* Name Fields */}
// 					<div className='flex gap-4'>
// 						<input
// 							type='text'
// 							placeholder='First Name'
// 							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 						/>
// 						<input
// 							type='text'
// 							placeholder='Last Name'
// 							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 						/>
// 					</div>

// 					{/* Email Field */}
// 					<input
// 						type='email'
// 						placeholder='Email address'
// 						className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 					/>

// 					{/* Address Field */}
// 					<input
// 						type='text'
// 						placeholder='Address'
// 						className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 					/>

// 					{/* Location Fields */}
// 					<div className='flex gap-4'>
// 						<input
// 							type='text'
// 							placeholder='Zip code'
// 							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 						/>
// 						<input
// 							type='text'
// 							placeholder='Country'
// 							className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 						/>
// 					</div>

// 					{/* Phone Field */}
// 					<input
// 						type='text'
// 						placeholder='Phone Number'
// 						className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all'
// 					/>
// 				</div>
// 			</div>

// 			{/* Right Section - Order Summary */}
// 			<div className='w-full lg:w-[max(40%,500px)]'>
// 				<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 					<div className='flex items-center gap-3 mb-6'>
// 						<CreditCard className='w-6 h-6 text-orange-600' />
// 						<h2 className='text-xl font-bold text-gray-800'>
// 							Order Summary
// 						</h2>
// 					</div>

// 					<div className='space-y-4'>
// 						<div className='flex justify-between text-gray-600'>
// 							<p>Subtotal</p>
// 							<p className='font-medium'>R {getTotalCart()}</p>
// 						</div>
// 						<hr className='border-gray-200' />

// 						<div className='flex justify-between text-gray-600'>
// 							<p>Delivery Fee</p>
// 							<p className='font-medium'>
// 								R {getTotalCart() === 0 ? 0 : 2}
// 							</p>
// 						</div>
// 						<hr className='border-gray-200' />

// 						<div className='flex justify-between text-gray-800 font-bold'>
// 							<p>Total</p>
// 							<p>
// 								R{' '}
// 								{getTotalCart() === 0 ? 0 : getTotalCart() + 2}
// 							</p>
// 						</div>
// 					</div>

// 					<button
// 						onClick={() => navigate('/payment')}
// 						className='w-full mt-8 bg-orange-600 text-white py-3 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
// 						Proceed to Payment
// 						<CreditCard className='w-5 h-5' />
// 					</button>
// 				</div>
// 			</div>
// 		</form>
// 	);
// };

// export default PlaceOrder;

import React, { useContext, useState } from "react";
import { StoreContext } from "../StoreContext/StoreContext";
import { useNavigate } from "react-router-dom";
import { Truck, CreditCard, ChevronRight, MapPin } from "lucide-react";

const DELIVERY_FEE = 35;

const PlaceOrder = () => {
  const { getTotalCart, cartItems, food_list } = useContext(StoreContext);
  const navigate = useNavigate();

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    address: "",
    city: "",
    zipCode: "",
    country: "South Africa",
    phone: "",
  });

  const onChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const subtotal = getTotalCart();
  const delivery = subtotal === 0 ? 0 : DELIVERY_FEE;
  const total = subtotal + delivery;

  const cartCount = Object.values(cartItems).reduce(
    (a, b) => a + (b > 0 ? b : 0),
    0,
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate("/payment");
  };

  const inputClass =
    "w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all text-sm";

  return (
    <div className="min-h-screen pt-24 px-4 md:px-8 pb-16 max-w-6xl mx-auto">
      <div className="flex items-center gap-3 mb-8">
        <Truck className="h-7 w-7 text-red-500" />
        <h1 className="text-2xl md:text-3xl font-black text-gray-900">
          Checkout
        </h1>
      </div>

      <form onSubmit={handleSubmit} className="grid lg:grid-cols-3 gap-8">
        {/* Delivery Form */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center gap-2 mb-5">
              <MapPin className="h-5 w-5 text-red-500" />
              <h2 className="font-bold text-gray-900">Delivery Information</h2>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  First Name *
                </label>
                <input
                  name="firstName"
                  value={form.firstName}
                  onChange={onChange}
                  placeholder="John"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Last Name *
                </label>
                <input
                  name="lastName"
                  value={form.lastName}
                  onChange={onChange}
                  placeholder="Doe"
                  className={inputClass}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Email *
                </label>
                <input
                  name="email"
                  type="email"
                  value={form.email}
                  onChange={onChange}
                  placeholder="you@example.com"
                  className={inputClass}
                  required
                />
              </div>
              <div className="sm:col-span-2">
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Street Address *
                </label>
                <input
                  name="address"
                  value={form.address}
                  onChange={onChange}
                  placeholder="123 Main Street"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  City *
                </label>
                <input
                  name="city"
                  value={form.city}
                  onChange={onChange}
                  placeholder="Johannesburg"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Postal Code *
                </label>
                <input
                  name="zipCode"
                  value={form.zipCode}
                  onChange={onChange}
                  placeholder="2000"
                  className={inputClass}
                  required
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Country
                </label>
                <input
                  name="country"
                  value={form.country}
                  onChange={onChange}
                  className={inputClass}
                />
              </div>
              <div>
                <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                  Phone *
                </label>
                <input
                  name="phone"
                  type="tel"
                  value={form.phone}
                  onChange={onChange}
                  placeholder="+27 11 000 0000"
                  className={inputClass}
                  required
                />
              </div>
            </div>
          </div>
        </div>

        {/* Order Summary */}
        <div className="space-y-4">
          {/* Items preview */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <h3 className="font-bold text-gray-900 mb-4 text-sm">
              Your Order{" "}
              <span className="text-gray-400 font-normal">
                ({cartCount} items)
              </span>
            </h3>
            <div className="space-y-3 max-h-48 overflow-y-auto">
              {food_list
                .filter((item) => cartItems[item._id] > 0)
                .map((item) => (
                  <div key={item._id} className="flex items-center gap-3">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-10 w-10 rounded-lg object-cover flex-shrink-0"
                    />
                    <div className="flex-1 min-w-0">
                      <p className="text-xs font-semibold text-gray-900 truncate">
                        {item.name}
                      </p>
                      <p className="text-xs text-gray-400">
                        × {cartItems[item._id]}
                      </p>
                    </div>
                    <p className="text-xs font-bold text-gray-900">
                      R {item.price * cartItems[item._id]}
                    </p>
                  </div>
                ))}
            </div>
          </div>

          {/* Totals */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-5">
            <div className="flex items-center gap-2 mb-4">
              <CreditCard className="h-4 w-4 text-red-500" />
              <h3 className="font-bold text-gray-900 text-sm">Order Summary</h3>
            </div>
            <div className="space-y-2.5 text-sm">
              <div className="flex justify-between text-gray-600">
                <span>Subtotal</span>
                <span className="font-medium text-gray-900">R {subtotal}</span>
              </div>
              <div className="flex justify-between text-gray-600">
                <span>Delivery Fee</span>
                <span className="font-medium text-gray-900">R {delivery}</span>
              </div>
              <div className="border-t border-gray-100 pt-2.5 flex justify-between font-black text-gray-900">
                <span>Total</span>
                <span>R {total}</span>
              </div>
            </div>

            <button
              type="submit"
              className="mt-5 w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-200"
            >
              Proceed to Payment
              <ChevronRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </form>
    </div>
  );
};

export default PlaceOrder;
