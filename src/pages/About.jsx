// import React from 'react';
// import chefImage from '../assets/images/chef.jpg';

// const About = () => {
// 	return (
// 		<section style={{ minHeight: '100vh', marginTop: 0 }}>
// 			<div className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
// 				<div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
// 					<div className='max-w-lg'>
// 						<h2 className='text-3xl font-extrabold dark:text-dark-100 sm:text-4xl'>
// 							Why Order With Us?
// 						</h2>
// 						<p className='mt-4 text-gray-700 text-lg'>
// 							At QuickEats, we serve up lightning-fast bites with
// 							mouthwatering flavors that hit the spot every time.
// 							Our secret? A sprinkle of love, a dash of speed, and
// 							a whole lot of deliciousness! Whether you're in a
// 							rush or just craving something amazing, we've got
// 							you covered. Dive into a meal that’s quick, fresh,
// 							and oh-so-satisfying!
// 						</p>
// 						<div className='mt-8'>
// 							<a
// 								href='#'
// 								className='text-blue-500 hover:text-blue-600 font-medium'>
// 								Learn more about us
// 								<span className='ml-2'>&#8594;</span>
// 							</a>
// 						</div>
// 					</div>
// 					<div className='mt-12 md:mt-0'>
// 						<img
// 							src={chefImage}
// 							alt='About Us Image'
// 							className='object-cover rounded-lg shadow-md'
// 						/>
// 					</div>
// 				</div>
// 				<div className='flex flex-col lg:flex-row items-center justify-center'>
// 					<div className='lg:w-1/2 p-5 flex justify-center'>
// 						<div className='image object-center text-center'>
// 							<img
// 								src='https://i.imgur.com/WbQnbas.png'
// 								alt='About Us'
// 								className='rounded-lg shadow-md'
// 							/>
// 						</div>
// 					</div>
// 					<div className='lg:w-1/2 p-5'>
// 						<div className='text'>
// 							<h2 className='my-4 font-bold text-3xl sm:text-4xl'>
// 								About{' '}
// 								<span className='text-indigo-600'>
// 									Our Company
// 								</span>
// 							</h2>
// 							<p className='text-gray-900'>
// 								At QuickEats, we are committed to providing
// 								high-quality, freshly prepared meals that cater
// 								to the modern, fast-paced lifestyle. Our mission
// 								is to deliver exceptional dining experiences,
// 								combining the finest ingredients with efficient
// 								service. Whether you're on the go or dining in,
// 								QuickEats is dedicated to satisfying your
// 								culinary needs with professionalism and care.
// 							</p>
// 						</div>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default About;

import React from "react";
import chefImage from "../assets/images/chef.jpg";
import { Link } from "react-router-dom";
import { Zap, Leaf, Heart, Award } from "lucide-react";

const values = [
  {
    Icon: Zap,
    color: "text-yellow-500",
    bg: "bg-yellow-50",
    title: "Lightning Fast",
    body: "From order to door in under 30 minutes. We respect your time as much as your appetite.",
  },
  {
    Icon: Leaf,
    color: "text-green-500",
    bg: "bg-green-50",
    title: "Fresh Ingredients",
    body: "Every dish is crafted daily with locally sourced produce and premium cuts. No shortcuts, ever.",
  },
  {
    Icon: Heart,
    color: "text-red-500",
    bg: "bg-red-50",
    title: "Made with Love",
    body: "Our kitchen crew puts genuine care into every plate. You taste the difference with every bite.",
  },
  {
    Icon: Award,
    color: "text-purple-500",
    bg: "bg-purple-50",
    title: "Award-Winning",
    body: "Recognised for excellence in food quality and delivery experience across South Africa.",
  },
];

const team = [
  {
    name: "Chef Marco",
    role: "Head Chef",
    initials: "CM",
    color: "bg-red-100 text-red-600",
  },
  {
    name: "Aisha Ndlovu",
    role: "Operations Manager",
    initials: "AN",
    color: "bg-orange-100 text-orange-600",
  },
  {
    name: "Ben Opiyo",
    role: "Founder & CEO",
    initials: "BO",
    color: "bg-yellow-100 text-yellow-700",
  },
];

const About = () => {
  return (
    <div className="min-h-screen">
      {/* Hero */}
      <section className="relative bg-gray-900 text-white py-28 px-4 overflow-hidden">
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(ellipse_at_top_right,_#ef4444,_transparent_60%)]" />
        <div className="relative z-10 max-w-4xl mx-auto text-center">
          <span className="inline-block bg-red-500/20 border border-red-400/30 text-red-300 text-xs font-bold uppercase tracking-widest px-4 py-1.5 rounded-full mb-6">
            Our Story
          </span>
          <h1 className="text-5xl sm:text-6xl font-black leading-tight mb-6">
            Food is how we say
            <br />
            <span className="text-red-400">we care.</span>
          </h1>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed">
            QuickEats was born from a simple belief — great food should be fast,
            fresh and accessible to everyone. From a single kitchen in
            Johannesburg, we've grown into a multi-city brand built on flavour
            and trust.
          </p>
        </div>
      </section>

      {/* Chef feature */}
      <section className="max-w-6xl mx-auto px-4 py-20">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="absolute -inset-4 bg-red-100 rounded-3xl -z-10" />
            <img
              src={chefImage}
              alt="Our Head Chef"
              className="rounded-2xl shadow-xl w-full object-cover aspect-[4/3]"
            />
            <div className="absolute -bottom-5 -right-5 bg-white rounded-2xl shadow-lg px-6 py-4 flex items-center gap-3">
              <span className="text-3xl font-black text-red-500">4.8</span>
              <div>
                <p className="text-xs text-gray-500 font-medium">
                  Average Rating
                </p>
                <div className="flex gap-0.5 mt-0.5">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400 text-sm">
                      ★
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <h2 className="text-4xl font-extrabold text-gray-900 mb-6 leading-tight">
              Why order
              <br />
              <span className="text-red-500">with us?</span>
            </h2>
            <p className="text-gray-600 text-lg leading-relaxed mb-6">
              At QuickEats, we serve up lightning-fast bites with mouthwatering
              flavours that hit the spot every time. Our secret? A sprinkle of
              love, a dash of speed, and a whole lot of deliciousness.
            </p>
            <p className="text-gray-600 leading-relaxed mb-8">
              Whether you're in a rush or just craving something amazing, we've
              got you covered. Dive into a meal that's quick, fresh and
              oh-so-satisfying.
            </p>
            <Link
              to="/menu"
              className="inline-flex items-center gap-2 bg-red-500 hover:bg-red-600 text-white font-bold px-8 py-3 rounded-xl transition-colors shadow-lg shadow-red-200"
            >
              Browse Our Menu →
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-gray-900 py-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-14">
            <h2 className="text-4xl font-extrabold text-white mb-4">
              What we stand for
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Four principles that guide everything we do — from the kitchen to
              your door.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map(({ Icon, color, bg, title, body }) => (
              <div
                key={title}
                className="bg-gray-800 rounded-2xl p-6 hover:bg-gray-750 transition-colors"
              >
                <div
                  className={`h-12 w-12 rounded-xl ${bg} flex items-center justify-center mb-5`}
                >
                  <Icon className={`h-6 w-6 ${color}`} />
                </div>
                <h3 className="text-white font-bold text-lg mb-2">{title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-5xl mx-auto px-4 py-20">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">
            Meet the team
          </h2>
          <p className="text-gray-500 max-w-xl mx-auto">
            The people behind every perfect plate.
          </p>
        </div>
        <div className="grid sm:grid-cols-3 gap-8">
          {team.map(({ name, role, initials, color }) => (
            <div
              key={name}
              className="bg-white rounded-2xl shadow-md p-8 text-center hover:shadow-lg transition-shadow"
            >
              <div
                className={`h-20 w-20 rounded-full ${color} text-2xl font-black flex items-center justify-center mx-auto mb-5`}
              >
                {initials}
              </div>
              <h3 className="font-bold text-gray-900 text-lg">{name}</h3>
              <p className="text-gray-400 text-sm mt-1">{role}</p>
            </div>
          ))}
        </div>
      </section>

      {/* CTA banner */}
      <section className="bg-red-500 py-16 px-4 text-center text-white">
        <h2 className="text-4xl font-black mb-4">Ready to dig in?</h2>
        <p className="text-red-100 mb-8 text-lg">
          Browse 37+ dishes across 9 categories — something for everyone.
        </p>
        <Link
          to="/menu"
          className="inline-block bg-white text-red-500 font-bold px-10 py-4 rounded-xl hover:bg-red-50 transition-colors shadow-xl text-lg"
        >
          Explore the Menu
        </Link>
      </section>
    </div>
  );
};

export default About;
