import React from 'react';
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-gradient-to-b from-white to-gray-50 dark:from-slate-900 dark:to-slate-800 mt-auto'>
			<div className='mx-auto max-w-screen-xl p-6 lg:p-8'>
				<div className='grid gap-12 lg:grid-cols-4'>
					<div className='space-y-4'>
						<a
							href='http://localhost:5173/'
							className='group flex items-center space-x-3'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
								className='h-10 transition-transform duration-300 group-hover:rotate-12'
								alt='QuickEats Logo'
							/>
							<span className='text-2xl font-bold bg-gradient-to-r from-red-500 to-yellow-500 bg-clip-text text-transparent'>
								QuickEats
							</span>
						</a>
						<p className='text-sm text-gray-600 dark:text-gray-400'>
							Delivering happiness, one meal at a time across
							Africa.
						</p>
					</div>

					<div className='space-y-4'>
						<h2 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
							Locations
						</h2>
						<div className='grid grid-cols-2 gap-2 text-sm text-gray-600 dark:text-gray-400'>
							{[
								'Gauteng',
								'Bhisho',
								'Cape Town',
								'Mombasa',
								'Kigali',
							].map(city => (
								<a
									key={city}
									href='#'
									className='transition-colors hover:text-red-500 dark:hover:text-red-400'>
									{city}
								</a>
							))}
						</div>
					</div>

					<div className='space-y-4'>
						<h2 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
							Follow us
						</h2>
						<div className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
							{[
								{
									name: 'Github',
									href: 'https://github.com/opiyoxbenji',
								},
								{
									name: 'Discord',
									href: 'https://discord.gg/1068927035994554419',
								},
								{
									name: 'Twitter',
									href: 'https://x.com/Opiyos_Benji',
								},
							].map(link => (
								<a
									key={link.name}
									href={link.href}
									target='_blank'
									rel='noopener noreferrer'
									className='block transition-colors hover:text-red-500 dark:hover:text-red-400'>
									{link.name}
								</a>
							))}
						</div>
					</div>

					<div className='space-y-4'>
						<h2 className='text-sm font-bold uppercase tracking-wider text-gray-900 dark:text-white'>
							Legal
						</h2>
						<div className='space-y-2 text-sm text-gray-600 dark:text-gray-400'>
							<a
								href='#'
								className='block transition-colors hover:text-red-500 dark:hover:text-red-400'>
								Privacy Policy
							</a>
							<a
								href='#'
								className='block transition-colors hover:text-red-500 dark:hover:text-red-400'>
								Terms & Conditions
							</a>
						</div>
					</div>
				</div>

				<hr className='my-8 border-gray-200 dark:border-gray-700' />

				<div className='flex flex-col items-center justify-between space-y-4 sm:flex-row sm:space-y-0'>
					<span className='text-sm text-gray-600 dark:text-gray-400'>
						© {currentYear}{' '}
						<a
							href='http://localhost:5173/'
							className='font-semibold hover:text-red-500 dark:hover:text-red-400'>
							QuickEats™
						</a>
						. All Rights Reserved.
					</span>

					<div className='flex space-x-4'>
						{[
							{ Icon: FaDiscord, label: 'Discord' },
							{ Icon: FaXTwitter, label: 'Twitter' },
							{ Icon: FaGithub, label: 'GitHub' },
						].map(({ Icon, label }) => (
							<a
								key={label}
								href='#'
								className='text-gray-500 transition-transform hover:scale-110 hover:text-gray-900 dark:hover:text-white'>
								<Icon className='h-6 w-6' aria-hidden='true' />
								<span className='sr-only'>{label}</span>
							</a>
						))}
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
