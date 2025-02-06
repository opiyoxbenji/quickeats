import React from 'react';
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	const currentYear = new Date().getFullYear();

	return (
		<footer className='bg-white dark:bg-slate-900 mt-auto'>
			<div className='mx-auto max-w-screen-xl p-4 py-6 lg:py-8'>
				<div className='md:flex md:justify-between'>
					<div className='mb-6 md:mb-0'>
						<a
							href='https://quickeats.com/'
							className='flex items-center'>
							<img
								src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
								className='h-8 me-2'
								alt='QuickEats Logo'
							/>
							<span className='self-center text-2xl font-semibold whitespace-nowrap dark:text-white'>
								QuickEats
							</span>
						</a>
					</div>
					<div className='grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3'>
						<div>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
								Locations
							</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-2'>
									<a
										href='https://quickeats.com/'
										className='hover:underline'>
										Gauteng
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://tailwindcss.com/'
										className='hover:underline'>
										Bhisho
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://tailwindcss.com/'
										className='hover:underline'>
										Cape Town
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://tailwindcss.com/'
										className='hover:underline'>
										Mombasa
									</a>
								</li>
								<li>
									<a
										href='https://tailwindcss.com/'
										className='hover:underline'>
										Kigali
									</a>
								</li>
							</ul>
						</div>
						<div>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
								Follow us
							</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-2'>
									<a
										href='https://github.com/opiyoxbenji'
										className='hover:underline '
										target='blank'>
										Github
									</a>
								</li>
								<li classNameName='mb-2'>
									<a
										href='https://discord.gg/1068927035994554419'
										className='hover:underline'
										target='blank'>
										Discord
									</a>
								</li>
								<li className='mb-2'>
									<a
										href='https://x.com/Opiyos_Benji'
										className='hover:underline '
										target='blank'>
										Twitter
									</a>
								</li>
								{/* <li className='mb-2'>
									<a
										href='https://github.com/opiyoxbenji'
										className='hover:underline '>
										Github
									</a>
								</li> */}
							</ul>
						</div>
						<div>
							<h2 className='mb-4 text-sm font-semibold text-gray-900 uppercase dark:text-white'>
								Legal
							</h2>
							<ul className='text-gray-500 dark:text-gray-400 font-medium'>
								<li className='mb-4'>
									<a href='#' className='hover:underline'>
										Privacy Policy
									</a>
								</li>
								<li>
									<a href='#' className='hover:underline'>
										Terms &amp; Conditions
									</a>
								</li>
							</ul>
						</div>
					</div>
				</div>
				<hr className='my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8' />
				<div className='sm:flex sm:items-center sm:justify-between'>
					<span className='text-sm text-gray-500 sm:text-center dark:text-gray-400'>
						© {currentYear} {' '}
						<a
							href='https://quickeats.com/'
							className=' font-bold hover:text-yellow-400'>
							QuickEats™
						</a>
						. All Rights Reserved.
					</span>
					<div className='flex mt-4 sm:justify-center sm:mt-0'>
						<a
							href='#'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
							<FaDiscord className='w-6 h-6' aria-hidden='true' />
							<span className='sr-only'>Discord</span>
						</a>
						<a
							href='#'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
							<FaXTwitter
								className='w-6 h-6'
								aria-hidden='true'
							/>
							<span className='sr-only'>Twitter page</span>
						</a>
						<a
							href='#'
							className='text-gray-500 hover:text-gray-900 dark:hover:text-white ms-5'>
							<FaGithub className='w-6 h-6' aria-hidden='true' />
							<span className='sr-only'>GitHub account</span>
						</a>
					</div>
				</div>
			</div>
		</footer>
	);
};

export default Footer;
