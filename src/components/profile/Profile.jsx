// import React, { useContext, useState } from 'react';
// import { useNavigate } from 'react-router-dom';
// import { StoreContext } from '../../StoreContext/StoreContext';
// import {
// 	User,
// 	ShoppingBag,
// 	CreditCard,
// 	Clock,
// 	ChevronRight,
// 	LogOut,
// 	Settings,
// 	ShoppingCart,
// } from 'lucide-react';

// const Profile = () => {
// 	const { cartItems, food_list, getTotalCart } = useContext(StoreContext);
// 	const navigate = useNavigate();
// 	const [activeTab, setActiveTab] = useState('profile');

// 	// Mock user data - replace with actual user data from your auth system
// 	const userData = {
// 		name: 'John Doe',
// 		email: 'john.doe@example.com',
// 		phone: '+27 123 456 789',
// 		address: '123 Main Street, Cape Town',
// 		orderHistory: [
// 			{ id: '1', date: '2025-02-10', total: 250, status: 'Delivered' },
// 			{ id: '2', date: '2025-02-01', total: 180, status: 'Delivered' },
// 		],
// 	};

// 	const hasCartItems = Object.values(cartItems).some(
// 		quantity => quantity > 0
// 	);

// 	return (
// 		<div className='min-h-screen'>
// 			<div className='max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-24 pb-12'>
// 				<div className='flex flex-col lg:flex-row gap-8'>
// 					{/* Left Sidebar */}
// 					<div className='w-full lg:w-1/4'>
// 						<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 							<div className='flex items-center gap-4 mb-6'>
// 								<div className='w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center'>
// 									<User className='w-8 h-8 text-orange-600' />
// 								</div>
// 								<div>
// 									<h2 className='text-xl font-bold text-gray-800'>
// 										{userData.name}
// 									</h2>
// 									<p className='text-gray-600'>
// 										{userData.email}
// 									</p>
// 								</div>
// 							</div>

// 							<div className='space-y-2'>
// 								<button
// 									onClick={() => setActiveTab('profile')}
// 									className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
// 										activeTab === 'profile'
// 											? 'bg-orange-50 text-orange-600'
// 											: 'text-gray-600 hover:bg-gray-50'
// 									}`}>
// 									<User className='w-5 h-5' />
// 									Profile
// 								</button>
// 								<button
// 									onClick={() => navigate('/cart')}
// 									className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
// 										activeTab === 'orders'
// 											? 'bg-orange-50 text-orange-600'
// 											: 'text-gray-600 hover:bg-gray-50'
// 									}`}>
// 									<ShoppingBag className='w-5 h-5' />
// 									Orders
// 								</button>
// 								<button
// 									onClick={() => setActiveTab('settings')}
// 									className={`w-full flex items-center gap-3 px-4 py-2 rounded-lg transition-colors ${
// 										activeTab === 'settings'
// 											? 'bg-orange-50 text-orange-600'
// 											: 'text-gray-600 hover:bg-gray-50'
// 									}`}>
// 									<Settings className='w-5 h-5' />
// 									Settings
// 								</button>
// 								<button className='w-full flex items-center gap-3 px-4 py-2 rounded-lg text-red-600 hover:bg-red-50 transition-colors'>
// 									<LogOut className='w-5 h-5' />
// 									Logout
// 								</button>
// 							</div>
// 						</div>

// 						{/* Cart Summary Card */}
// 						{hasCartItems && (
// 							<div className='mt-6 bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 								<div className='flex items-center justify-between mb-4'>
// 									<div className='flex items-center gap-2'>
// 										<ShoppingCart className='w-5 h-5 text-orange-600' />
// 										<h3 className='font-bold text-gray-800'>
// 											Cart Summary
// 										</h3>
// 									</div>
// 									<span className='bg-orange-100 text-orange-600 px-3 py-1 rounded-full text-sm font-medium'>
// 										{Object.values(cartItems).reduce(
// 											(a, b) => a + b,
// 											0
// 										)}{' '}
// 										items
// 									</span>
// 								</div>
// 								<div className='space-y-3'>
// 									<div className='flex justify-between text-gray-600'>
// 										<p>Subtotal</p>
// 										<p>R {getTotalCart()}</p>
// 									</div>
// 									<div className='flex justify-between text-gray-600'>
// 										<p>Delivery</p>
// 										<p>R {getTotalCart() === 0 ? 0 : 2}</p>
// 									</div>
// 									<hr className='border-gray-100' />
// 									<div className='flex justify-between font-bold text-gray-800'>
// 										<p>Total</p>
// 										<p>
// 											R{' '}
// 											{getTotalCart() === 0
// 												? 0
// 												: getTotalCart() + 2}
// 										</p>
// 									</div>
// 								</div>
// 								<button
// 									onClick={() => navigate('/payment')}
// 									className='mt-4 w-full bg-orange-600 text-white py-2 px-4 rounded-lg font-medium hover:bg-orange-700 transition-colors flex items-center justify-center gap-2'>
// 									Proceed to Payment
// 									<ChevronRight className='w-4 h-4' />
// 								</button>
// 							</div>
// 						)}
// 					</div>

// 					{/* Main Content */}
// 					<div className='w-full lg:w-3/4'>
// 						{activeTab === 'profile' && (
// 							<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 								<div className='flex items-center gap-3 mb-6'>
// 									<User className='w-6 h-6 text-orange-600' />
// 									<h2 className='text-xl font-bold text-gray-800'>
// 										Personal Information
// 									</h2>
// 								</div>
// 								<div className='grid grid-cols-1 md:grid-cols-2 gap-6'>
// 									<div>
// 										<label className='block text-sm font-medium text-gray-700 mb-2'>
// 											Full Name
// 										</label>
// 										<input
// 											type='text'
// 											value={userData.name}
// 											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
// 										/>
// 									</div>
// 									<div>
// 										<label className='block text-sm font-medium text-gray-700 mb-2'>
// 											Email
// 										</label>
// 										<input
// 											type='email'
// 											value={userData.email}
// 											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
// 										/>
// 									</div>
// 									<div>
// 										<label className='block text-sm font-medium text-gray-700 mb-2'>
// 											Phone
// 										</label>
// 										<input
// 											type='tel'
// 											value={userData.phone}
// 											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
// 										/>
// 									</div>
// 									<div>
// 										<label className='block text-sm font-medium text-gray-700 mb-2'>
// 											Address
// 										</label>
// 										<input
// 											type='text'
// 											value={userData.address}
// 											className='w-full px-4 py-3 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-orange-500 focus:border-transparent'
// 										/>
// 									</div>
// 								</div>
// 								<button className='mt-6 bg-orange-600 text-white py-2 px-6 rounded-lg font-medium hover:bg-orange-700 transition-colors'>
// 									Save Changes
// 								</button>
// 							</div>
// 						)}

// 						{activeTab === 'orders' && (
// 							<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 								<div className='flex items-center gap-3 mb-6'>
// 									<Clock className='w-6 h-6 text-orange-600' />
// 									<h2 className='text-xl font-bold text-gray-800'>
// 										Order History
// 									</h2>
// 								</div>
// 								<div className='space-y-4'>
// 									{userData.orderHistory.map(order => (
// 										<div
// 											key={order.id}
// 											className='flex items-center justify-between p-4 border border-gray-100 rounded-lg hover:bg-gray-50 transition-colors'>
// 											<div>
// 												<p className='font-medium text-gray-800'>
// 													Order #{order.id}
// 												</p>
// 												<p className='text-sm text-gray-600'>
// 													{order.date}
// 												</p>
// 											</div>
// 											<div className='text-right'>
// 												<p className='font-medium text-gray-800'>
// 													R {order.total}
// 												</p>
// 												<span className='inline-block px-3 py-1 bg-green-100 text-green-600 text-sm rounded-full'>
// 													{order.status}
// 												</span>
// 											</div>
// 										</div>
// 									))}
// 								</div>
// 							</div>
// 						)}

// 						{activeTab === 'settings' && (
// 							<div className='bg-white rounded-xl shadow-sm border border-gray-100 p-6'>
// 								<div className='flex items-center gap-3 mb-6'>
// 									<Settings className='w-6 h-6 text-orange-600' />
// 									<h2 className='text-xl font-bold text-gray-800'>
// 										Account Settings
// 									</h2>
// 								</div>
// 								<div className='space-y-6'>
// 									<div>
// 										<h3 className='font-medium text-gray-800 mb-2'>
// 											Email Notifications
// 										</h3>
// 										<div className='space-y-2'>
// 											<label className='flex items-center gap-2'>
// 												<input
// 													type='checkbox'
// 													className='rounded text-orange-600'
// 												/>
// 												<span className='text-gray-600'>
// 													Order updates
// 												</span>
// 											</label>
// 											<label className='flex items-center gap-2'>
// 												<input
// 													type='checkbox'
// 													className='rounded text-orange-600'
// 												/>
// 												<span className='text-gray-600'>
// 													Special offers
// 												</span>
// 											</label>
// 										</div>
// 									</div>
// 									<div>
// 										<h3 className='font-medium text-gray-800 mb-2'>
// 											Password
// 										</h3>
// 										<button className='text-orange-600 hover:text-orange-700'>
// 											Change Password
// 										</button>
// 									</div>
// 								</div>
// 							</div>
// 						)}
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default Profile;

import React, { useContext, useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { StoreContext } from "../../StoreContext/StoreContext";
import {
  User,
  ShoppingBag,
  Clock,
  ChevronRight,
  LogOut,
  Settings,
  ShoppingCart,
  MapPin,
  Phone,
  Mail,
  Bell,
  Lock,
  ChevronDown,
  Package,
  CheckCircle,
  Truck,
  Edit2,
  Save,
  X,
} from "lucide-react";

const DELIVERY_FEE = 35;

const orderHistory = [
  {
    id: "QE-00124",
    date: "10 Feb 2025",
    items: ["Hunger Buster", "Stella Artois"],
    total: 144,
    status: "Delivered",
  },
  {
    id: "QE-00098",
    date: "1 Feb 2025",
    items: ["Prime Rib", "Iced Coffee Latte"],
    total: 234,
    status: "Delivered",
  },
  {
    id: "QE-00071",
    date: "18 Jan 2025",
    items: ["BBQ Chicken Pizza", "Churros", "Coca-Cola"],
    total: 189,
    status: "Delivered",
  },
];

const statusConfig = {
  Delivered: { color: "text-green-600", bg: "bg-green-50", icon: CheckCircle },
  "In Transit": { color: "text-blue-600", bg: "bg-blue-50", icon: Truck },
  Preparing: { color: "text-orange-600", bg: "bg-orange-50", icon: Package },
};

const tabs = [
  { id: "profile", label: "Profile", Icon: User },
  { id: "orders", label: "Orders", Icon: ShoppingBag },
  { id: "settings", label: "Settings", Icon: Settings },
];

const inputClass =
  "w-full px-4 py-3 border border-gray-200 rounded-xl text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all disabled:bg-gray-50 disabled:text-gray-500";

const Profile = () => {
  const { cartItems, food_list, getTotalCart, setToken } =
    useContext(StoreContext);
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("profile");
  const [editing, setEditing] = useState(false);
  const [saved, setSaved] = useState(false);
  const [notifs, setNotifs] = useState({
    orderUpdates: true,
    specialOffers: false,
    newsletter: true,
  });
  const [expandedOrder, setExpandedOrder] = useState(null);

  const [form, setForm] = useState({
    name: "John Doe",
    email: "john.doe@example.com",
    phone: "+27 123 456 789",
    address: "123 Main Street, Cape Town",
  });
  const [draft, setDraft] = useState(form);

  const cartItemsList = food_list.filter((i) => cartItems[i._id] > 0);
  const subtotal = getTotalCart();
  const total = subtotal > 0 ? subtotal + DELIVERY_FEE : 0;
  const totalQty = Object.values(cartItems).reduce(
    (a, b) => a + (b > 0 ? b : 0),
    0,
  );

  const initials = form.name
    .split(" ")
    .map((w) => w[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const handleSave = () => {
    setForm(draft);
    setEditing(false);
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  const handleLogout = () => {
    localStorage.removeItem("token");
    sessionStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  return (
    <div className="min-h-screen pt-24 pb-16 px-4 md:px-8 max-w-6xl mx-auto">
      <div className="flex flex-col lg:flex-row gap-6">
        {/* ── Sidebar ── */}
        <aside className="w-full lg:w-64 flex-shrink-0 space-y-4">
          {/* Avatar card */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 text-center">
            <div className="h-20 w-20 bg-red-500 rounded-full flex items-center justify-center mx-auto mb-3 text-white text-2xl font-black">
              {initials}
            </div>
            <h2 className="font-bold text-gray-900 text-lg">{form.name}</h2>
            <p className="text-gray-400 text-sm mt-0.5">{form.email}</p>
            <div className="mt-3 inline-flex items-center gap-1.5 bg-green-50 text-green-600 text-xs font-semibold px-3 py-1 rounded-full">
              <span className="h-1.5 w-1.5 bg-green-500 rounded-full" />
              Active Member
            </div>
          </div>

          {/* Nav */}
          <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-2">
            {tabs.map(({ id, label, Icon }) => (
              <button
                key={id}
                onClick={() => setActiveTab(id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                  activeTab === id
                    ? "bg-red-50 text-red-500"
                    : "text-gray-600 hover:bg-gray-50"
                }`}
              >
                <Icon className="h-4 w-4" />
                {label}
                {id === "orders" && (
                  <span className="ml-auto bg-gray-100 text-gray-500 text-xs font-bold px-1.5 py-0.5 rounded-full">
                    {orderHistory.length}
                  </span>
                )}
              </button>
            ))}
            <div className="border-t border-gray-100 mt-1 pt-1">
              <button
                onClick={handleLogout}
                className="w-full flex items-center gap-3 px-4 py-3 rounded-xl text-sm font-semibold text-red-500 hover:bg-red-50 transition-all"
              >
                <LogOut className="h-4 w-4" />
                Sign Out
              </button>
            </div>
          </div>

          {/* Cart snapshot */}
          {cartItemsList.length > 0 && (
            <div className="bg-gray-900 rounded-2xl p-5 text-white">
              <div className="flex items-center justify-between mb-4">
                <div className="flex items-center gap-2">
                  <ShoppingCart className="h-4 w-4 text-red-400" />
                  <span className="font-bold text-sm">Cart</span>
                </div>
                <span className="bg-red-500 text-white text-xs font-black px-2 py-0.5 rounded-full">
                  {totalQty}
                </span>
              </div>
              <div className="space-y-2 mb-4">
                {cartItemsList.slice(0, 3).map((item) => (
                  <div key={item._id} className="flex items-center gap-2">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="h-8 w-8 rounded-lg object-cover flex-shrink-0"
                    />
                    <span className="text-xs text-gray-300 truncate flex-1">
                      {item.name}
                    </span>
                    <span className="text-xs text-white font-semibold flex-shrink-0">
                      ×{cartItems[item._id]}
                    </span>
                  </div>
                ))}
                {cartItemsList.length > 3 && (
                  <p className="text-xs text-gray-500">
                    +{cartItemsList.length - 3} more items
                  </p>
                )}
              </div>
              <div className="border-t border-gray-700 pt-3 mb-4">
                <div className="flex justify-between text-xs text-gray-400 mb-1">
                  <span>Subtotal</span>
                  <span>R {subtotal}</span>
                </div>
                <div className="flex justify-between text-xs text-gray-400">
                  <span>Delivery</span>
                  <span>R {DELIVERY_FEE}</span>
                </div>
                <div className="flex justify-between font-black text-white mt-2">
                  <span>Total</span>
                  <span>R {total}</span>
                </div>
              </div>
              <button
                onClick={() => navigate("/order")}
                className="w-full bg-red-500 hover:bg-red-600 text-white text-sm font-bold py-2.5 rounded-xl transition-colors flex items-center justify-center gap-2"
              >
                Checkout <ChevronRight className="h-4 w-4" />
              </button>
            </div>
          )}
        </aside>

        {/* ── Main content ── */}
        <div className="flex-1 min-w-0">
          {/* PROFILE TAB */}
          {activeTab === "profile" && (
            <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-xl font-black text-gray-900">
                  Personal Information
                </h2>
                {!editing ? (
                  <button
                    onClick={() => {
                      setDraft(form);
                      setEditing(true);
                    }}
                    className="flex items-center gap-2 text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    <Edit2 className="h-4 w-4" /> Edit
                  </button>
                ) : (
                  <div className="flex gap-2">
                    <button
                      onClick={() => setEditing(false)}
                      className="flex items-center gap-1.5 text-sm font-semibold text-gray-400 hover:text-gray-600 px-3 py-1.5 rounded-lg hover:bg-gray-100 transition-all"
                    >
                      <X className="h-4 w-4" /> Cancel
                    </button>
                    <button
                      onClick={handleSave}
                      className="flex items-center gap-1.5 text-sm font-bold text-white bg-red-500 hover:bg-red-600 px-4 py-1.5 rounded-lg transition-all"
                    >
                      <Save className="h-4 w-4" /> Save
                    </button>
                  </div>
                )}
              </div>

              {saved && (
                <div className="flex items-center gap-2 bg-green-50 border border-green-100 text-green-600 text-sm px-4 py-3 rounded-xl mb-6">
                  <CheckCircle className="h-4 w-4" /> Profile updated
                  successfully.
                </div>
              )}

              <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                {[
                  { label: "Full Name", key: "name", type: "text", Icon: User },
                  {
                    label: "Email Address",
                    key: "email",
                    type: "email",
                    Icon: Mail,
                  },
                  {
                    label: "Phone Number",
                    key: "phone",
                    type: "tel",
                    Icon: Phone,
                  },
                  {
                    label: "Address",
                    key: "address",
                    type: "text",
                    Icon: MapPin,
                  },
                ].map(({ label, key, type, Icon }) => (
                  <div key={key}>
                    <label className="flex items-center gap-1.5 text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                      <Icon className="h-3.5 w-3.5" /> {label}
                    </label>
                    <input
                      type={type}
                      value={editing ? draft[key] : form[key]}
                      onChange={(e) =>
                        setDraft((d) => ({ ...d, [key]: e.target.value }))
                      }
                      disabled={!editing}
                      className={inputClass}
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* ORDERS TAB */}
          {activeTab === "orders" && (
            <div className="space-y-4">
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="flex items-center justify-between mb-6">
                  <h2 className="text-xl font-black text-gray-900">
                    Order History
                  </h2>
                  <Link
                    to="/menu"
                    className="text-sm font-semibold text-red-500 hover:text-red-600 transition-colors"
                  >
                    + New Order
                  </Link>
                </div>

                {orderHistory.length === 0 ? (
                  <div className="text-center py-12">
                    <Package className="h-12 w-12 text-gray-200 mx-auto mb-3" />
                    <p className="text-gray-400 font-medium">No orders yet</p>
                    <Link
                      to="/menu"
                      className="text-red-500 text-sm font-semibold mt-2 block"
                    >
                      Browse the menu →
                    </Link>
                  </div>
                ) : (
                  <div className="space-y-3">
                    {orderHistory.map((order) => {
                      const {
                        color,
                        bg,
                        icon: StatusIcon,
                      } = statusConfig[order.status] || statusConfig.Delivered;
                      const isOpen = expandedOrder === order.id;
                      return (
                        <div
                          key={order.id}
                          className="border border-gray-100 rounded-2xl overflow-hidden"
                        >
                          <button
                            onClick={() =>
                              setExpandedOrder(isOpen ? null : order.id)
                            }
                            className="w-full flex items-center justify-between p-4 hover:bg-gray-50 transition-colors text-left"
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`h-10 w-10 ${bg} rounded-xl flex items-center justify-center flex-shrink-0`}
                              >
                                <StatusIcon className={`h-5 w-5 ${color}`} />
                              </div>
                              <div>
                                <p className="font-bold text-gray-900 text-sm">
                                  #{order.id}
                                </p>
                                <p className="text-xs text-gray-400 mt-0.5">
                                  {order.date}
                                </p>
                              </div>
                            </div>
                            <div className="flex items-center gap-4">
                              <div className="text-right">
                                <p className="font-black text-gray-900">
                                  R {order.total}
                                </p>
                                <span
                                  className={`text-xs font-semibold ${color}`}
                                >
                                  {order.status}
                                </span>
                              </div>
                              <ChevronDown
                                className={`h-4 w-4 text-gray-400 transition-transform ${isOpen ? "rotate-180" : ""}`}
                              />
                            </div>
                          </button>
                          {isOpen && (
                            <div className="px-4 pb-4 border-t border-gray-100">
                              <p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-3 mb-2">
                                Items
                              </p>
                              <div className="space-y-1">
                                {order.items.map((item) => (
                                  <div
                                    key={item}
                                    className="flex items-center gap-2"
                                  >
                                    <span className="h-1.5 w-1.5 bg-red-400 rounded-full" />
                                    <span className="text-sm text-gray-700">
                                      {item}
                                    </span>
                                  </div>
                                ))}
                              </div>
                              <div className="mt-3 pt-3 border-t border-gray-100 flex justify-between text-sm">
                                <span className="text-gray-500">
                                  Order Total
                                </span>
                                <span className="font-black text-gray-900">
                                  R {order.total}
                                </span>
                              </div>
                            </div>
                          )}
                        </div>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          )}

          {/* SETTINGS TAB */}
          {activeTab === "settings" && (
            <div className="space-y-4">
              {/* Notifications */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Bell className="h-5 w-5 text-red-500" />
                  <h2 className="text-xl font-black text-gray-900">
                    Notifications
                  </h2>
                </div>
                <div className="space-y-4">
                  {[
                    {
                      key: "orderUpdates",
                      label: "Order Updates",
                      desc: "Confirmations, dispatch alerts and delivery status.",
                    },
                    {
                      key: "specialOffers",
                      label: "Special Offers",
                      desc: "Exclusive deals and promo codes sent to your email.",
                    },
                    {
                      key: "newsletter",
                      label: "Newsletter",
                      desc: "Monthly digest of new menu items and QuickEats news.",
                    },
                  ].map(({ key, label, desc }) => (
                    <div
                      key={key}
                      className="flex items-start justify-between gap-4 py-3 border-b border-gray-100 last:border-0"
                    >
                      <div>
                        <p className="font-semibold text-gray-900 text-sm">
                          {label}
                        </p>
                        <p className="text-xs text-gray-400 mt-0.5">{desc}</p>
                      </div>
                      <button
                        onClick={() =>
                          setNotifs((n) => ({ ...n, [key]: !n[key] }))
                        }
                        className={`relative flex-shrink-0 h-6 w-11 rounded-full transition-colors duration-200 ${notifs[key] ? "bg-red-500" : "bg-gray-200"}`}
                      >
                        <span
                          className={`absolute top-0.5 left-0.5 h-5 w-5 bg-white rounded-full shadow transition-transform duration-200 ${notifs[key] ? "translate-x-5" : "translate-x-0"}`}
                        />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              {/* Password */}
              <div className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 md:p-8">
                <div className="flex items-center gap-2 mb-6">
                  <Lock className="h-5 w-5 text-red-500" />
                  <h2 className="text-xl font-black text-gray-900">Password</h2>
                </div>
                <div className="space-y-4 max-w-md">
                  {[
                    "Current Password",
                    "New Password",
                    "Confirm New Password",
                  ].map((label) => (
                    <div key={label}>
                      <label className="block text-xs font-semibold text-gray-500 uppercase tracking-wide mb-1.5">
                        {label}
                      </label>
                      <input
                        type="password"
                        placeholder="••••••••"
                        className={inputClass}
                      />
                    </div>
                  ))}
                  <button className="bg-red-500 hover:bg-red-600 text-white font-bold px-6 py-2.5 rounded-xl transition-colors text-sm">
                    Update Password
                  </button>
                </div>
              </div>

              {/* Danger zone */}
              <div className="bg-white rounded-2xl shadow-sm border border-red-100 p-6 md:p-8">
                <h2 className="text-xl font-black text-gray-900 mb-1">
                  Danger Zone
                </h2>
                <p className="text-sm text-gray-400 mb-5">
                  These actions are permanent and cannot be undone.
                </p>
                <div className="flex flex-col sm:flex-row gap-3">
                  <button
                    onClick={handleLogout}
                    className="flex items-center justify-center gap-2 border border-gray-200 hover:bg-gray-50 text-gray-700 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm"
                  >
                    <LogOut className="h-4 w-4" /> Sign Out
                  </button>
                  <button className="flex items-center justify-center gap-2 border border-red-200 hover:bg-red-50 text-red-500 font-semibold px-5 py-2.5 rounded-xl transition-colors text-sm">
                    <X className="h-4 w-4" /> Delete Account
                  </button>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Profile;
