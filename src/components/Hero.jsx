import React from 'react';
import { Link } from 'react-router-dom';
import heroImage from '../assets/gravy4.jpg';

const Hero = () => {
	return (
		<section className='text-[#DC3E26] relative'>
			<div
				className='mx-auto min-h-screen px-4 py-32 lg:px-32 lg:h-screen px-5 bg-cover bg-no-repeat'
				style={{
					backgroundImage: `url(${heroImage})`,
					height: '100vh',
					marginTop: 0,
				}}>
				<div className='mx-auto max-w-xl text-center'>
					<p className='font-bold p-2 uppercase text-lg'>
						Quick Bites, Big Delights – Experience QuickEats Today!
					</p>
					<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
						Best in Town
					</h1>
					<div>
						<p className='mt-4 sm:text-2xl/relaxed'>
							Fast, Fresh, Flavorful!
						</p>
						{/* Typing animation */}
					</div>
					<div className='mt-8 flex flex-wrap justify-center gap-4'>
						<Link
							to='/menu'
							className='block w-full rounded bg-red-600 px-12 py-3 text-sm font-medium text-white shadow hover:bg-red-700 focus:outline-none focus:ring active:bg-red-500 sm:w-auto'>
							Order Now
						</Link>
					</div>
				</div>
			</div>
		</section>
	);
};

export default Hero;
