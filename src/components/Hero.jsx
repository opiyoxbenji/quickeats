import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/gravy.jpg';

const Hero = () => {
	return (
		<section className='text-orange-700 relative bg-[url(https://images.unsplash.com/photo-1601924928318-03e2cda35a22?ixlib=rb-1.2.1&auto=format&fit=crop&w=1770&q=80)] bg-cover bg-center bg-no-repeat'>
			<div
				className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'
				style={{ height: '100vh', marginTop: 0 }}>
				<div className='mx-auto max-w-xl text-center'>
					<p className='font-bold p-2 uppercase text-lg'>
						Quick Bites, Big Delights – Experience QuickEats Today!
					</p>
					<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
						Best in Town
					</h1>
					<div>
						<p className='mt-4 sm:text-xl/relaxed'>
							Fast, Fresh, Flavorful!
						</p>
						{/* Typing animation */}
					</div>
					<div className='mt-8 flex flex-wrap justify-center gap-4'>
						<Link
							to='/menu'
							className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'>
							Our menu
						</Link>
					</div>
				</div>
			</div>
		</section>

		// 	<section class='bg-gray-50'>
		// 		<div class='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'>
		// 			<div class='mx-auto max-w-xl text-center'>
		// 				<h1 class='text-3xl font-extrabold sm:text-5xl'>
		// 					Understand User Flow.
		// 					<strong class='font-extrabold text-red-700 sm:block'>
		// 						{' '}
		// 						Increase Conversion.{' '}
		// 					</strong>
		// 				</h1>

		// 				<p class='mt-4 sm:text-xl/relaxed'>
		// 					Lorem ipsum dolor sit amet consectetur, adipisicing
		// 					elit. Nesciunt illo tenetur fuga ducimus numquam ea!
		// 				</p>

		// 				<div class='mt-8 flex flex-wrap justify-center gap-4'>
		// 					<a
		// 						class='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'
		// 						href='#'>
		// 						Get Started
		// 					</a>

		// 					<a
		// 						class='block w-full rounded px-12 py-3 text-sm font-medium text-red-600 shadow hover:text-red-700 focus:outline-none focus:ring active:text-red-500 sm:w-auto'
		// 						href='#'>
		// 						Learn More
		// 					</a>
		// 				</div>
		// 			</div>
		// 		</div>
		// 	</section>
	);
};

export default Hero;

// style="background-image:url(https://)
