// import React from 'react';
// import { Link } from 'react-router-dom';
// import heroImage from '../../assets/images/banner.jpg';

// const Hero = () => {
// 	return (
// 		<section className='text-[#DC3E26] relative'>
// 			<div
// 				className='mx-auto min-h-screen px-4 py-32 lg:px-32 lg:h-screen bg-cover bg-no-repeat'
// 				style={{
// 					backgroundImage: `url(${heroImage})`,
// 					height: '100vh',
// 					marginTop: 0,
// 				}}>
// 				<div className='mx-auto max-w-xl text-center'>
// 					<p className='font-bold p-2 uppercase text-lg'>
// 						Quick Bites, Big Delights – Experience QuickEats Today!
// 					</p>
// 					<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
// 						Best in Town
// 					</h1>
// 					<div>
// 						<p className='mt-4 sm:text-2xl/relaxed'>
// 							Fast, Fresh, Flavorful!
// 						</p>
// 						{/* Typing animation */}
// 					</div>
// 					<div className='mt-8 flex flex-wrap justify-center gap-4'>
// 						<Link
// 							to='/menu'
// 							className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'>
// 							Order Now
// 						</Link>
// 					</div>
// 				</div>
// 			</div>
// 		</section>
// 	);
// };

// export default Hero;

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import heroImage from "../../assets/images/banner.jpg";
import { ChevronDown } from "lucide-react";

const ROTATING_WORDS = ["Fresh.", "Fast.", "Flavourful.", "Yours."];

const Hero = () => {
  const [wordIndex, setWordIndex] = useState(0);
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setVisible(false);
      setTimeout(() => {
        setWordIndex((i) => (i + 1) % ROTATING_WORDS.length);
        setVisible(true);
      }, 350);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  const scrollToMenu = () => {
    const el = document.getElementById("display-foods");
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="relative min-h-screen flex flex-col">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      {/* Gradient overlay — darkens bottom so text pops */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black/70" />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center flex-1 px-4 text-center pt-24 pb-32">
        {/* Eyebrow pill */}
        <span className="inline-flex items-center gap-2 bg-red-500/20 border border-red-400/40 text-red-300 text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8 backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 rounded-full bg-red-400 animate-pulse" />
          Now serving across Africa
        </span>

        {/* Headline */}
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black text-white leading-none tracking-tight mb-4 drop-shadow-2xl">
          Best in Town
        </h1>

        {/* Rotating word */}
        <p
          className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-red-400 mb-6 h-14 flex items-center justify-center transition-all duration-300"
          style={{
            opacity: visible ? 1 : 0,
            transform: visible ? "translateY(0)" : "translateY(8px)",
          }}
        >
          {ROTATING_WORDS[wordIndex]}
        </p>

        {/* Subline */}
        <p className="text-white/70 text-lg sm:text-xl max-w-xl mb-12 leading-relaxed">
          From sizzling grills to creamy pastas — order in minutes,
          <br className="hidden sm:block" /> enjoy in moments.
        </p>

        {/* CTA buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            to="/menu"
            className="px-10 py-4 bg-red-500 hover:bg-red-400 active:scale-95 text-white font-bold text-lg rounded-xl shadow-xl shadow-red-900/40 transition-all duration-200"
          >
            Order Now
          </Link>
          <Link
            to="/offers"
            className="px-10 py-4 bg-white/10 hover:bg-white/20 active:scale-95 text-white font-bold text-lg rounded-xl border border-white/20 backdrop-blur-sm transition-all duration-200"
          >
            View Offers
          </Link>
        </div>

        {/* Stats strip */}
        <div className="mt-16 flex flex-wrap items-center justify-center gap-8 sm:gap-16 text-white/80">
          {[
            { value: "37+", label: "Menu Items" },
            { value: "9", label: "Categories" },
            { value: "5", label: "Cities" },
            { value: "4.8★", label: "Avg Rating" },
          ].map(({ value, label }) => (
            <div key={label} className="text-center">
              <p className="text-3xl font-black text-white">{value}</p>
              <p className="text-xs uppercase tracking-widest text-white/50 mt-0.5">
                {label}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Scroll cue */}
      <button
        onClick={scrollToMenu}
        className="relative z-10 mx-auto mb-6 flex flex-col items-center gap-1 text-white/40 hover:text-white/70 transition-colors group"
        aria-label="Scroll to menu"
      >
        <span className="text-xs uppercase tracking-widest">Explore</span>
        <ChevronDown className="h-5 w-5 animate-bounce" />
      </button>
    </section>
  );
};

export default Hero;