import React from 'react';

const Navbar = () => {
	return (
		<div className=''>
			<nav className='flex justify-between items-center w-[92%] mx-auto'>
				<div>
					<img
						src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
						alt='Burger Icon'
						className='w-16'
					/>
				</div>
				<div className='md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
					<ul className='flex md:flex-row flex-col md:items-center md:gap-[4vw] gap-8'>
						<li>
							{' '}
							<a
								className='font-bold  hover:text-orange-500'
								href='#'>
								Home
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold  hover:text-orange-500'
								href='#'>
								Menu
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold  hover:text-orange-500'
								href='#'>
								Offers
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold  hover:text-orange-500'
								href='#'>
								Contact
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold  hover:text-orange-500'
								href='#'>
								Careers
							</a>
						</li>
					</ul>
				</div>
				<div className='flex items-center gap-6'>
					<button className='bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-orange-500'>
						Sign In
					</button>
				</div>
			</nav>
		</div>
	);
};

export default Navbar;
