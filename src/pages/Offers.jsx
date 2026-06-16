import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  Tag,
  Clock,
  Percent,
  ChevronRight,
  Copy,
  CheckCheck,
} from "lucide-react";
import food_list from "../data/products";

const deals = [
  {
    id: "deal_1",
    tag: "Limited Time",
    tagColor: "bg-red-500",
    title: "20% Off Your First Order",
    description:
      "New to QuickEats? Welcome! Use code WELCOME20 at checkout and enjoy 20% off everything on your first order.",
    code: "WELCOME20",
    discount: "20% OFF",
    expiry: "31 Jul 2025",
    emoji: "🎉",
    gradient: "from-red-500 to-orange-400",
  },
  {
    id: "deal_2",
    tag: "Weekend Special",
    tagColor: "bg-purple-500",
    title: "Buy 2 Mains, Get a Dessert Free",
    description:
      "Every Friday to Sunday — order any two main dishes and we'll throw in a dessert of your choice on the house.",
    code: "SWEETWEEKEND",
    discount: "FREE DESSERT",
    expiry: "Every Weekend",
    emoji: "🍰",
    gradient: "from-purple-500 to-pink-400",
  },
  {
    id: "deal_3",
    tag: "Student Deal",
    tagColor: "bg-blue-500",
    title: "Student Discount – 15% Off Always",
    description:
      "Got a valid student card? Show it on delivery and enjoy 15% off every single order, all year round.",
    code: "STUDENT15",
    discount: "15% OFF",
    expiry: "Always On",
    emoji: "🎓",
    gradient: "from-blue-500 to-cyan-400",
  },
  {
    id: "deal_4",
    tag: "Lunch Special",
    tagColor: "bg-yellow-500",
    title: "Weekday Lunch Combo",
    description:
      "Order any burger or pasta between 12:00–14:00 Monday to Friday and get a free soft drink added automatically.",
    code: "LUNCHTIME",
    discount: "FREE DRINK",
    expiry: "Mon–Fri 12–14:00",
    emoji: "☀️",
    gradient: "from-yellow-400 to-orange-300",
  },
];

const CopyCode = ({ code }) => {
  const [copied, setCopied] = useState(false);
  const copy = () => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };
  return (
    <button
      onClick={copy}
      className="flex items-center gap-2 bg-gray-900 hover:bg-gray-700 text-white font-mono text-sm font-bold px-4 py-2 rounded-lg transition-colors group"
    >
      <span>{code}</span>
      {copied ? (
        <CheckCheck className="h-4 w-4 text-green-400" />
      ) : (
        <Copy className="h-4 w-4 text-gray-400 group-hover:text-white transition-colors" />
      )}
    </button>
  );
};

// Pick a few featured items at random-ish positions
const featured = [
  food_list.find((p) => p._id === "burger_001"),
  food_list.find((p) => p._id === "steak_001"),
  food_list.find((p) => p._id === "pasta_005"),
  food_list.find((p) => p._id === "dessert_001"),
].filter(Boolean);

const Offers = () => {
  return (
    <div className="min-h-screen">
      {/* Header */}
      <section className="bg-gray-900 text-white py-24 px-4 text-center relative overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top,_#f59e0b,_transparent_55%)]" />
        <div className="relative z-10 max-w-2xl mx-auto">
          <span className="inline-flex items-center gap-2 bg-yellow-400/20 border border-yellow-400/30 text-yellow-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            <Percent className="h-3.5 w-3.5" /> Hot Deals
          </span>
          <h1 className="text-5xl font-black mb-4">
            Deals that make
            <br />
            <span className="text-yellow-400">every bite better.</span>
          </h1>
          <p className="text-white/60 text-lg">
            Copy a promo code and use it at checkout — no fuss, just savings.
          </p>
        </div>
      </section>

      {/* Deal cards */}
      <section className="max-w-6xl mx-auto px-4 py-16">
        <div className="grid md:grid-cols-2 gap-6">
          {deals.map((deal) => (
            <div
              key={deal.id}
              className="bg-white rounded-2xl shadow-md overflow-hidden hover:shadow-lg transition-shadow flex flex-col"
            >
              {/* Colour bar */}
              <div
                className={`bg-gradient-to-r ${deal.gradient} px-6 py-5 flex items-center justify-between`}
              >
                <div>
                  <span className="inline-block bg-white/20 text-white text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-2">
                    {deal.tag}
                  </span>
                  <p className="text-white font-black text-3xl">
                    {deal.discount}
                  </p>
                </div>
                <span className="text-5xl">{deal.emoji}</span>
              </div>

              {/* Body */}
              <div className="p-6 flex-1 flex flex-col">
                <h3 className="text-xl font-extrabold text-gray-900 mb-2">
                  {deal.title}
                </h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-6 flex-1">
                  {deal.description}
                </p>

                <div className="flex items-center justify-between">
                  <CopyCode code={deal.code} />
                  <div className="flex items-center gap-1.5 text-gray-400 text-xs">
                    <Clock className="h-3.5 w-3.5" />
                    <span>{deal.expiry}</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured items */}
      <section className="bg-gray-50 py-16 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="flex items-center justify-between mb-10">
            <div>
              <h2 className="text-3xl font-extrabold text-gray-900">
                Popular right now
              </h2>
              <p className="text-gray-400 mt-1 text-sm">
                Fan favourites that pair perfectly with a deal.
              </p>
            </div>
            <Link
              to="/menu"
              className="hidden sm:flex items-center gap-1 text-red-500 hover:text-red-600 font-semibold text-sm transition-colors"
            >
              Full Menu <ChevronRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {featured.map((item) => (
              <Link
                key={item._id}
                to={`/menu/${item._id}`}
                state={{
                  id: item._id,
                  name: item.name,
                  price: item.price,
                  description: item.description,
                  image: item.image,
                }}
                className="bg-white rounded-xl shadow hover:shadow-md transition-all group overflow-hidden"
              >
                <div className="aspect-video overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-4">
                  <p className="text-xs text-gray-400 font-medium mb-1">
                    {item.category}
                  </p>
                  <h4 className="font-bold text-gray-900 text-sm leading-snug">
                    {item.name}
                  </h4>
                  <p className="text-red-500 font-extrabold mt-2">
                    R {item.price}
                  </p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-8 sm:hidden">
            <Link to="/menu" className="text-red-500 font-semibold text-sm">
              View Full Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Newsletter strip */}
      <section className="bg-red-500 py-14 px-4 text-center text-white">
        <Tag className="h-8 w-8 mx-auto mb-4 text-red-200" />
        <h2 className="text-3xl font-black mb-2">Never miss a deal</h2>
        <p className="text-red-100 mb-8 max-w-md mx-auto">
          Drop your email and we'll send you exclusive promos before anyone
          else.
        </p>
        <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
          <input
            type="email"
            placeholder="your@email.com"
            className="flex-1 px-5 py-3 rounded-xl text-gray-900 font-medium placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-white/50"
          />
          <button className="bg-gray-900 hover:bg-gray-800 text-white font-bold px-6 py-3 rounded-xl transition-colors whitespace-nowrap">
            Subscribe
          </button>
        </div>
        <p className="mt-4 text-red-200/60 text-xs">
          No spam. Unsubscribe anytime.
        </p>
      </section>
    </div>
  );
};

export default Offers;
