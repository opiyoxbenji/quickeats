// import React, { useContext } from 'react';
// import { StoreContext } from '../../StoreContext/StoreContext';
// import { useNavigate, useLocation } from 'react-router-dom';
// import { ArrowLeft, Minus, Plus } from 'lucide-react';

// const MenuItem = () => {
// 	const navigate = useNavigate();
// 	const location = useLocation();
// 	const item = location.state;

// 	const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
// 	const itemCount = cartItems[item?.id] || 0;

// 	// If no item data is found, show error or redirect
// 	if (!item) {
// 		return (
// 			<div className='min-h-screen bg-gray-50 flex items-center justify-center'>
// 				<div className='text-center'>
// 					<h1 className='text-2xl font-bold text-gray-900 mb-4'>
// 						Item Not Found
// 					</h1>
// 					<button
// 						onClick={() => navigate('/menu')}
// 						className='flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900'>
// 						<ArrowLeft className='h-6 w-6' />
// 						Back to Menu
// 					</button>
// 				</div>
// 			</div>
// 		);
// 	}

// 	return (
// 		<div className='min-h-screen'>
// 			{/* Header */}
// 			<div className='sticky top-0 z-10 shadow-md'>
// 				<div className='container mx-auto px-4 py-4'>
// 					<button
// 						onClick={() => navigate(-1)}
// 						className='flex items-center text-gray-600 hover:text-gray-900'>
// 						<ArrowLeft className='h-6 w-6 mr-2' />
// 						Back to Menu
// 					</button>
// 				</div>
// 			</div>

// 			{/* Hero Image */}
// 			<div className='max-w-5xl mx-auto shadow-lg overflow-hidden'>
// 				<img
// 					src={'http://localhost:4000/images/' + item.image}
// 					alt={item.name}
// 					className='w-full h-full object-cover'
// 				/>
// 			</div>

// 			{/* Content */}
// 			<div className='container mx-auto px-4 py-8'>
// 				<div className='max-w-3xl mx-auto'>
// 					{/* Title and Price */}
// 					<div className='flex justify-between items-start mb-6'>
// 						<div>
// 							<h1 className='text-3xl font-bold text-gray-900'>
// 								{item.name}
// 							</h1>
// 							<p className='text-xl font-semibold text-red-500'>
// 								R {item.price}
// 							</p>
// 						</div>

// 						{/* Add to Cart Controls */}
// 						<div className='rounded-lg p-2'>
// 							{!itemCount ? (
// 								<button
// 									onClick={() => addToCart(item.id)}
// 									className='flex items-center justify-center gap-2 bg-red-500 text-white px-6 py-3 rounded-lg hover:bg-red-600 transition-colors'>
// 									<Plus className='h-5 w-5' />
// 									Add to Cart
// 								</button>
// 							) : (
// 								<div className='flex items-center gap-4'>
// 									<button
// 										onClick={() => removeFromCart(item.id)}
// 										className='p-2 rounded-full bg-red-100 text-red-500 hover:bg-red-200'>
// 										<Minus className='h-5 w-5' />
// 									</button>
// 									<span className='font-semibold text-xl min-w-[2rem] text-center'>
// 										{itemCount}
// 									</span>
// 									<button
// 										onClick={() => addToCart(item.id)}
// 										className='p-2 rounded-full bg-green-100 text-green-500 hover:bg-green-200'>
// 										<Plus className='h-5 w-5' />
// 									</button>
// 								</div>
// 							)}
// 						</div>
// 					</div>

// 					{/* Description */}
// 					<div className='prose max-w-none mb-8'>
// 						<h2 className='text-xl font-semibold mb-4'>
// 							Description
// 						</h2>
// 						<p className='text-gray-600'>{item.description}</p>
// 					</div>
// 				</div>
// 			</div>
// 		</div>
// 	);
// };

// export default MenuItem;

import React, { useContext, useState } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";
import { useNavigate, useLocation } from "react-router-dom";
import {
  ArrowLeft,
  Minus,
  Plus,
  Clock,
  ShieldCheck,
  Flame,
  Star,
} from "lucide-react";
import food_list from "../../data/products";

const SpiceIndicator = ({ level }) => {
  const labels = ["Mild", "Medium", "Hot", "Extra Hot"];
  if (level === 0)
    return <span className="text-sm text-gray-400 italic">No spice</span>;
  return (
    <div className="flex items-center gap-2">
      <div className="flex gap-1">
        {[1, 2, 3].map((i) => (
          <Flame
            key={i}
            className={`h-4 w-4 ${i <= level ? "text-orange-500" : "text-gray-200"}`}
            fill={i <= level ? "currentColor" : "none"}
          />
        ))}
      </div>
      <span className="text-sm font-medium text-orange-500">
        {labels[level]}
      </span>
    </div>
  );
};

const MenuItem = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const item = location.state;
  const [activeTab, setActiveTab] = useState("description");
  const [reviewText, setReviewText] = useState("");
  const [reviewRating, setReviewRating] = useState(0);
  const [hoveredStar, setHoveredStar] = useState(0);
  const [reviews, setReviews] = useState([
    {
      name: "Thabo M.",
      rating: 5,
      text: "Absolutely delicious, best I have had in a long time!",
      date: "Jun 2025",
    },
    {
      name: "Naledi K.",
      rating: 4,
      text: "Great flavour, would order again.",
      date: "May 2025",
    },
  ]);

  const { cartItems, addToCart, removeFromCart } = useContext(StoreContext);
  const itemCount = item ? cartItems[item.id] || 0 : 0;

  // Enrich item with extra fields from products data
  const fullItem = item
    ? food_list.find((p) => p._id === item.id) || item
    : null;

  // Related items (same category, excluding current)
  const relatedItems = fullItem
    ? food_list
        .filter(
          (p) => p.category === fullItem.category && p._id !== fullItem._id,
        )
        .slice(0, 3)
    : [];

  const submitReview = () => {
    if (!reviewText.trim() || reviewRating === 0) return;
    setReviews((prev) => [
      {
        name: "You",
        rating: reviewRating,
        text: reviewText,
        date: new Date().toLocaleDateString("en-ZA", {
          month: "short",
          year: "numeric",
        }),
      },
      ...prev,
    ]);
    setReviewText("");
    setReviewRating(0);
  };

  const avgRating = reviews.length
    ? (reviews.reduce((a, r) => a + r.rating, 0) / reviews.length).toFixed(1)
    : "–";

  if (!fullItem) {
    return (
      <div className="min-h-screen bg-gray-50 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-gray-900 mb-4">
            Item Not Found
          </h1>
          <button
            onClick={() => navigate("/menu")}
            className="flex items-center justify-center gap-2 text-gray-600 hover:text-gray-900"
          >
            <ArrowLeft className="h-6 w-6" />
            Back to Menu
          </button>
        </div>
      </div>
    );
  }

  const tabs = ["description", "allergens", "reviews"];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Back Bar */}
      <div className="sticky top-0 z-10 bg-white shadow-sm">
        <div className="container mx-auto px-4 py-4">
          <button
            onClick={() => navigate(-1)}
            className="flex items-center gap-2 text-gray-600 hover:text-red-500 transition-colors font-medium"
          >
            <ArrowLeft className="h-5 w-5" />
            Back to Menu
          </button>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8 max-w-5xl">
        {/* Hero Section */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image */}
            <div className="relative aspect-square lg:aspect-auto lg:min-h-[420px] overflow-hidden">
              <img
                src={fullItem.image}
                alt={fullItem.name}
                className="w-full h-full object-cover"
              />
              {fullItem.badge && (
                <span className="absolute top-4 left-4 bg-red-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow">
                  {fullItem.badge}
                </span>
              )}
            </div>

            {/* Info Panel */}
            <div className="p-8 flex flex-col justify-between">
              <div>
                <p className="text-sm font-semibold text-red-400 uppercase tracking-widest mb-1">
                  {fullItem.category}
                </p>
                <h1 className="text-3xl font-bold text-gray-900 mb-2">
                  {fullItem.name}
                </h1>

                {/* Rating row */}
                <div className="flex items-center gap-3 mb-6">
                  <div className="flex items-center gap-1">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star
                        key={i}
                        className={`h-4 w-4 ${i <= Math.round(avgRating) ? "text-yellow-400" : "text-gray-200"}`}
                        fill={
                          i <= Math.round(avgRating) ? "currentColor" : "none"
                        }
                      />
                    ))}
                  </div>
                  <span className="text-sm font-semibold text-gray-700">
                    {avgRating}
                  </span>
                  <span className="text-sm text-gray-400">
                    ({reviews.length} reviews)
                  </span>
                </div>

                {/* Meta chips */}
                <div className="flex flex-wrap gap-3 mb-6">
                  {fullItem.prepTime && (
                    <div className="flex items-center gap-1.5 bg-gray-100 text-gray-600 px-3 py-1.5 rounded-full text-sm">
                      <Clock className="h-4 w-4" />
                      {fullItem.prepTime}
                    </div>
                  )}
                  <div className="flex items-center gap-1.5 bg-gray-100 px-3 py-1.5 rounded-full text-sm">
                    <SpiceIndicator level={fullItem.spiceLevel || 0} />
                  </div>
                </div>

                <p className="text-gray-600 leading-relaxed mb-8">
                  {fullItem.description}
                </p>
              </div>

              {/* Price + Cart */}
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-4xl font-extrabold text-gray-900">
                    R <span className="text-red-500">{fullItem.price}</span>
                  </span>
                </div>

                {!itemCount ? (
                  <button
                    onClick={() => addToCart(item.id)}
                    className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 active:scale-95 text-white font-bold py-4 rounded-xl transition-all duration-200 shadow-lg shadow-red-200 text-lg"
                  >
                    <Plus className="h-5 w-5" />
                    Add to Cart
                  </button>
                ) : (
                  <div className="flex items-center justify-between bg-gray-100 rounded-xl p-2">
                    <button
                      onClick={() => removeFromCart(item.id)}
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-white shadow text-red-500 hover:bg-red-50 transition-colors"
                    >
                      <Minus className="h-5 w-5" />
                    </button>
                    <span className="text-2xl font-bold text-gray-900 min-w-[2rem] text-center">
                      {itemCount}
                    </span>
                    <button
                      onClick={() => addToCart(item.id)}
                      className="flex items-center justify-center h-12 w-12 rounded-lg bg-red-500 shadow text-white hover:bg-red-600 transition-colors"
                    >
                      <Plus className="h-5 w-5" />
                    </button>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="bg-white rounded-2xl shadow-lg overflow-hidden mb-8">
          <div className="flex border-b border-gray-100">
            {tabs.map((tab) => (
              <button
                key={tab}
                onClick={() => setActiveTab(tab)}
                className={`flex-1 py-4 text-sm font-semibold capitalize tracking-wide transition-colors ${
                  activeTab === tab
                    ? "text-red-500 border-b-2 border-red-500"
                    : "text-gray-400 hover:text-gray-700"
                }`}
              >
                {tab === "reviews" ? `Reviews (${reviews.length})` : tab}
              </button>
            ))}
          </div>

          <div className="p-8">
            {/* Description tab */}
            {activeTab === "description" && (
              <div className="prose max-w-none text-gray-600 leading-relaxed">
                <p>{fullItem.description}</p>
                <p className="mt-4 text-sm text-gray-400">
                  All dishes are freshly prepared to order. Prices are in South
                  African Rand (ZAR).
                </p>
              </div>
            )}

            {/* Allergens tab */}
            {activeTab === "allergens" && (
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <ShieldCheck className="h-5 w-5 text-green-500" />
                  <h3 className="font-semibold text-gray-800">
                    Allergen Information
                  </h3>
                </div>
                {fullItem.allergens && fullItem.allergens.length > 0 ? (
                  <div className="flex flex-wrap gap-2">
                    {fullItem.allergens.map((a) => (
                      <span
                        key={a}
                        className="bg-orange-50 border border-orange-200 text-orange-700 text-sm font-medium px-4 py-2 rounded-full"
                      >
                        {a}
                      </span>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500 text-sm">
                    No common allergens listed.
                  </p>
                )}
                <p className="mt-6 text-xs text-gray-400">
                  * Our kitchen handles nuts, dairy, gluten and shellfish.
                  Please inform your server of any severe allergies.
                </p>
              </div>
            )}

            {/* Reviews tab */}
            {activeTab === "reviews" && (
              <div>
                {/* Submit review */}
                <div className="bg-gray-50 rounded-xl p-6 mb-6 border border-gray-100">
                  <h4 className="font-semibold text-gray-800 mb-3">
                    Leave a Review
                  </h4>
                  <div className="flex gap-1 mb-3">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <button
                        key={i}
                        onMouseEnter={() => setHoveredStar(i)}
                        onMouseLeave={() => setHoveredStar(0)}
                        onClick={() => setReviewRating(i)}
                        className="focus:outline-none"
                      >
                        <Star
                          className={`h-7 w-7 transition-colors ${
                            i <= (hoveredStar || reviewRating)
                              ? "text-yellow-400"
                              : "text-gray-200"
                          }`}
                          fill={
                            i <= (hoveredStar || reviewRating)
                              ? "currentColor"
                              : "none"
                          }
                        />
                      </button>
                    ))}
                  </div>
                  <textarea
                    value={reviewText}
                    onChange={(e) => setReviewText(e.target.value)}
                    placeholder="Share your thoughts..."
                    rows={3}
                    className="w-full border border-gray-200 rounded-lg p-3 text-sm text-gray-700 focus:outline-none focus:ring-2 focus:ring-red-300 resize-none mb-3"
                  />
                  <button
                    onClick={submitReview}
                    className="bg-red-500 hover:bg-red-600 text-white text-sm font-semibold px-6 py-2 rounded-lg transition-colors"
                  >
                    Post Review
                  </button>
                </div>

                {/* Review list */}
                <div className="space-y-4">
                  {reviews.map((r, i) => (
                    <div
                      key={i}
                      className="flex gap-4 py-4 border-b border-gray-100 last:border-0"
                    >
                      <div className="flex-shrink-0 h-10 w-10 rounded-full bg-red-100 text-red-500 font-bold flex items-center justify-center">
                        {r.name[0]}
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center justify-between mb-1">
                          <span className="font-semibold text-gray-800 text-sm">
                            {r.name}
                          </span>
                          <span className="text-xs text-gray-400">
                            {r.date}
                          </span>
                        </div>
                        <div className="flex gap-0.5 mb-2">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star
                              key={s}
                              className={`h-3.5 w-3.5 ${s <= r.rating ? "text-yellow-400" : "text-gray-200"}`}
                              fill={s <= r.rating ? "currentColor" : "none"}
                            />
                          ))}
                        </div>
                        <p className="text-sm text-gray-600">{r.text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Related Items */}
        {relatedItems.length > 0 && (
          <div className="mb-8">
            <h2 className="text-xl font-bold text-gray-900 mb-4">
              More from {fullItem.category}
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
              {relatedItems.map((r) => (
                <button
                  key={r._id}
                  onClick={() =>
                    navigate(`/menu/${r._id}`, {
                      state: {
                        id: r._id,
                        name: r.name,
                        price: r.price,
                        description: r.description,
                        image: r.image,
                      },
                    })
                  }
                  className="bg-white rounded-xl shadow hover:shadow-md transition-shadow overflow-hidden text-left group"
                >
                  <div className="aspect-video overflow-hidden">
                    <img
                      src={r.image}
                      alt={r.name}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                    />
                  </div>
                  <div className="p-4">
                    <p className="font-semibold text-gray-800 text-sm">
                      {r.name}
                    </p>
                    <p className="text-red-500 font-bold text-sm mt-1">
                      R {r.price}
                    </p>
                  </div>
                </button>
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItem;
