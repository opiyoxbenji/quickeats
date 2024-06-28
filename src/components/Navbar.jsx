import React, { useState } from 'react';
import { Link } from 'react-router-dom';

import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosBasket } from 'react-icons/io';

const Navbar = () => {
	const [nav, setNav] = useState(false);

	const handleNav = () => {
		setNav(!nav)
	} 

	return (
		<div className=''>
			<nav className='flex justify-between items-center w-[92%] mx-auto h-20'>
				<div>
					<img
						src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
						alt='Burger Icon'
						className='w-16'
					/>
				</div>
				<div className='md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
					<ul className='flex md:flex-row flex-col  md:gap-[4vw] gap-8 '>
						<li>
							{' '}
							<Link
								className='font-bold  hover:text-orange-500'
								to='/'>
								Home
							</Link>
						</li>
						<li>
							{' '}
							<Link
								className='font-bold  hover:text-orange-500'
								to='/menu'>
								Menu
							</Link>
						</li>
						<li>
							{' '}
							<Link
								className='font-bold  hover:text-orange-500'
								to='/offers'>
								Offers
							</Link>
						</li>
						<li>
							{' '}
							<Link
								className='font-bold  hover:text-orange-500'
								to='/contact'>
								Contact
							</Link>
						</li>
						<li>
							{' '}
							<Link
								className='font-bold  hover:text-orange-500'
								to='/about'>
								About
							</Link>
						</li>
					</ul>
				</div>
				<div className='flex items-center gap-6 '>
					<div>
						<IoIosBasket className='w-7 h-7' />
					</div>
					<button className='bg-purple-600 text-white px-5 py-2 rounded-full hover:bg-orange-500'>
						Sign In
					</button>
				</div>
				<div onClick={handleNav} className='block md:hidden'>
					{!nav ? (
						<AiOutlineClose size={20} />
					) : (
						<AiOutlineMenu size={20} />
					)}
				</div>

				{/* <div className={!nav ? 'fixed left-0 top-0 w-[60%] border-r bg-[#f0e4d1] ease-in-out duration-500' : 'fixed left-[-100%]'}>
					<h1 className='w-full text-3xl font-bold text-orange-600 m-4'>
						QuickEats
					</h1>
					<ul className='uppercase p-4'>
						<li>
							{' '}
							<a
								className='font-bold hover:text-orange-500'
								href='#'>
								Home
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold hover:text-orange-500'
								href='#'>
								Menu
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold hover:text-orange-500'
								href='#'>
								Offers
							</a>
						</li>
						<li>
							{' '}
							<a
								className='font-bold hover:text-orange-500'
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
				</div> */}
			</nav>
		</div>
	);
};

export default Navbar;
