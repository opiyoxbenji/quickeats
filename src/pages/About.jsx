import React from 'react';
import chefImage from '../assets/chef.jpg';

const About = () => {
	return (
		<section style={{ minHeight: '100vh', marginTop: 0 }}>
			<div className='container mx-auto py-16 px-4 sm:px-6 lg:px-8'>
				<div className='grid grid-cols-1 lg:grid-cols-2 items-center gap-8'>
					<div className='max-w-lg'>
						<h2 className='text-3xl font-extrabold dark:text-dark-100 sm:text-4xl'>
							Why Order With Us?
						</h2>
						<p className='mt-4 text-gray-700 text-lg'>
							At QuickEats, we serve up lightning-fast bites with
							mouthwatering flavors that hit the spot every time.
							Our secret? A sprinkle of love, a dash of speed, and
							a whole lot of deliciousness! Whether you're in a
							rush or just craving something amazing, we've got
							you covered. Dive into a meal that’s quick, fresh,
							and oh-so-satisfying!
						</p>
						<div className='mt-8'>
							<a
								href='#'
								className='text-blue-500 hover:text-blue-600 font-medium'>
								Learn more about us
								<span className='ml-2'>&#8594;</span>
							</a>
						</div>
					</div>
					<div className='mt-12 md:mt-0'>
						<img
							src={chefImage}
							alt='About Us Image'
							className='object-cover rounded-lg shadow-md'
						/>
					</div>
				</div>
				<div className='flex flex-col lg:flex-row items-center justify-center'>
					<div className='lg:w-1/2 p-5 flex justify-center'>
						<div className='image object-center text-center'>
							<img
								src='https://i.imgur.com/WbQnbas.png'
								alt='About Us'
								className='rounded-lg shadow-md'
							/>
						</div>
					</div>
					<div className='lg:w-1/2 p-5'>
						<div className='text'>
							<h2 className='my-4 font-bold text-3xl sm:text-4xl'>
								About{' '}
								<span className='text-indigo-600'>
									Our Company
								</span>
							</h2>
							<p className='text-gray-900'>
								At QuickEats, we are committed to providing
								high-quality, freshly prepared meals that cater
								to the modern, fast-paced lifestyle. Our mission
								is to deliver exceptional dining experiences,
								combining the finest ingredients with efficient
								service. Whether you're on the go or dining in,
								QuickEats is dedicated to satisfying your
								culinary needs with professionalism and care.
							</p>
						</div>
					</div>
				</div>
			</div>
		</section>
	);
};

export default About;
