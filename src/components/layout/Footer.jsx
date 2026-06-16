// import React from 'react';
// import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';

// const Footer = () => {
// 	const currentYear = new Date().getFullYear();

// 	return (
// 		<footer className='bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 mt-auto'>
// 			<div className='mx-auto max-w-screen-xl p-6 lg:p-8'>
// 				<div className='grid gap-12 lg:grid-cols-4'>
// 					<div className='space-y-4'>
// 						<a
// 							href='http://localhost:5173/'
// 							className='group flex items-center space-x-3'>
// 							<img
// 								src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
// 								className='h-10 transition-transform duration-300 group-hover:rotate-12'
// 								alt='QuickEats Logo'
// 							/>
// 							<span className='text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>
// 								QuickEats
// 							</span>
// 						</a>
// 						<p className='text-sm text-gray-600 dark:text-gray-400'>
// 							Delivering happiness, one meal at a time across
// 							Africa.
// 						</p>
// 					</div>

// 					<div className='space-y-4'>
// 						<h2 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
// 							Locations
// 						</h2>
// 						<div className='grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400'>
// 							{[
// 								'Gauteng',
// 								'Bhisho',
// 								'Cape Town',
// 								'Mombasa',
// 								'Kigali',
// 							].map(city => (
// 								<a
// 									key={city}
// 									href='#'
// 									className='transition-colors hover:text-red-500 dark:hover:text-red-400'>
// 									{city}
// 								</a>
// 							))}
// 						</div>
// 					</div>

// 					<div className='space-y-4'>
// 						<h2 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
// 							Follow us
// 						</h2>
// 						<div className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
// 							{[
// 								{
// 									name: 'Github',
// 									href: 'https://github.com/opiyoxbenji',
// 								},
// 								{
// 									name: 'Discord',
// 									href: 'https://discord.gg/1068927035994554419',
// 								},
// 								{
// 									name: 'Twitter',
// 									href: 'https://x.com/Opiyos_Benji',
// 								},
// 							].map(link => (
// 								<a
// 									key={link.name}
// 									href={link.href}
// 									target='_blank'
// 									rel='noopener noreferrer'
// 									className='block transition-colors hover:text-red-500 dark:hover:text-red-400'>
// 									{link.name}
// 								</a>
// 							))}
// 						</div>
// 					</div>

// 					<div className='space-y-4'>
// 						<h2 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
// 							Legal
// 						</h2>
// 						<div className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
// 							<a
// 								href='#'
// 								className='block transition-colors hover:text-red-500 dark:hover:text-red-400'>
// 								Privacy Policy
// 							</a>
// 							<a
// 								href='#'
// 								className='block transition-colors hover:text-red-500 dark:hover:text-red-400'>
// 								Terms & Conditions
// 							</a>
// 						</div>
// 					</div>
// 				</div>

// 				<hr className='my-8 border-gray-200 dark:border-gray-700' />

// 				<div className='flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0'>
// 					<span className='text-sm text-gray-600 dark:text-gray-400'>
// 						© {currentYear}{' '}
// 						<a
// 							href='http://localhost:5173/'
// 							className='font-semibold hover:text-red-500 dark:hover:text-red-400'>
// 							QuickEats™
// 						</a>
// 						. All Rights Reserved.
// 					</span>

// 					<div className='flex space-x-4'>
// 						{[
// 							{ Icon: FaDiscord, label: 'Discord' },
// 							{ Icon: FaXTwitter, label: 'Twitter' },
// 							{ Icon: FaGithub, label: 'GitHub' },
// 						].map(({ Icon, label }) => (
// 							<a
// 								key={label}
// 								href='#'
// 								className='text-gray-500 transition-transform hover:scale-110 hover:text-gray-900 dark:hover:text-white'>
// 								<Icon className='h-6 w-6' aria-hidden='true' />
// 								<span className='sr-only'>{label}</span>
// 							</a>
// 						))}
// 					</div>
// 				</div>
// 			</div>
// 		</footer>
// 	);
// };

// export default Footer;

import React from "react";
import { FaDiscord, FaGithub, FaXTwitter, FaInstagram } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const year = new Date().getFullYear();
  const navigate = useNavigate();

  const links = {
    Explore: [
      { label: "Menu", to: "/menu" },
      { label: "Offers", to: "/offers" },
      { label: "About Us", to: "/about" },
      { label: "Contact", to: "/contact" },
    ],
    Locations: [
      { label: "Johannesburg" },
      { label: "Cape Town" },
      { label: "Mombasa" },
      { label: "Kigali" },
    ],
    Legal: [
      { label: "Privacy Policy", to: "#" },
      { label: "Terms & Conditions", to: "#" },
      { label: "Cookie Policy", to: "#" },
    ],
  };

  const socials = [
    { Icon: FaXTwitter, label: "Twitter", href: "https://x.com/Opiyos_Benji" },
    { Icon: FaGithub, label: "GitHub", href: "https://github.com/opiyoxbenji" },
    {
      Icon: FaDiscord,
      label: "Discord",
      href: "https://discord.gg/1068927035994554419",
    },
    { Icon: FaInstagram, label: "Instagram", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-gray-400 mt-auto">
      {/* Top strip */}
      <div className="border-b border-gray-800">
        <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-12">
          <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
            {/* Brand */}
            <div className="col-span-2 space-y-4 pr-8">
              <button
                onClick={() => navigate("/")}
                className="flex items-center gap-3 group"
              >
                <div className="h-10 w-10 rounded-xl bg-red-500 flex items-center justify-center shadow-lg shadow-red-900/30 group-hover:bg-red-400 transition-colors">
                  <span className="text-white font-black text-lg">Q</span>
                </div>
                <span className="text-white text-2xl font-extrabold tracking-tight">
                  Quick<span className="text-red-500">Eats</span>
                </span>
              </button>
              <p className="text-sm leading-relaxed max-w-xs">
                Delivering happiness one meal at a time — across South Africa
                and beyond.
              </p>
              <div className="flex gap-3 pt-1">
                {socials.map(({ Icon, label, href }) => (
                  <a
                    key={label}
                    href={href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={label}
                    className="h-9 w-9 rounded-lg bg-gray-800 hover:bg-red-500 flex items-center justify-center text-gray-400 hover:text-white transition-all duration-200"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>

            {/* Nav columns */}
            {Object.entries(links).map(([heading, items]) => (
              <div key={heading} className="space-y-4">
                <h3 className="text-white text-xs font-bold uppercase tracking-widest">
                  {heading}
                </h3>
                <ul className="space-y-3">
                  {items.map(({ label, to }) => (
                    <li key={label}>
                      {to ? (
                        <button
                          onClick={() => to !== "#" && navigate(to)}
                          className="text-sm hover:text-red-400 transition-colors text-left"
                        >
                          {label}
                        </button>
                      ) : (
                        <span className="text-sm">{label}</span>
                      )}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-screen-xl mx-auto px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-gray-600">
        <span>© {year} QuickEats™. All rights reserved.</span>
        <span className="flex items-center gap-1">
          Made with <span className="text-red-500 mx-1">♥</span> in South Africa
        </span>
      </div>
    </footer>
  );
};

export default Footer;
