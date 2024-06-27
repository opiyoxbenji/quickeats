import React from 'react';
import { Link } from 'react-router-dom';
// import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className='text-amber-900'>
			<div
				className='mx-auto max-w-screen-xl px-4 py-32 lg:flex lg:h-screen lg:items-center'
				style={{ height: '100vh', marginTop: 0 }}>
				<div className='mx-auto max-w-xl text-center'>
					<div>
						<p className='font-bold p-2 uppercase text-lg'>
							Quick Bites, Big Delights – Experience QuickEats
							Today!
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
			</div>
		</div>

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
