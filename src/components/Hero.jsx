import React from 'react';
// import Typed from 'react-typed';

const Hero = () => {
	return (
		<div className='text-amber-900'>
			<div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto  text-center flex flex-col justify-center' style="background-image:url(https://)">
				<p className='font-bold p-2 uppercase text-lg'>
					Quick Bites, Big Delights – Experience QuickEats Today!
				</p>
				<h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
					Best in Town
				</h1>
				<div>
					<p>Lorem ipsum dolor sit amet consectetur adipisicing.</p>
					{/* Typing animation */}
				</div>
				<a
					href=''
					className='px-5 py-2 inline-block bg-amber-800 text-white hover:bg-orange-400 transition-colors mt-10 rounded-full'>
					Our menu
				</a>
			</div>
		</div>
	);
};

export default Hero;
