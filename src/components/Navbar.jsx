import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenuUnfold } from 'react-icons/ai';
import { IoIosBasket } from 'react-icons/io';
import Button from './Button';
import Modal from './Modal';

const Navbar = () => {
	const [menu, setMenu] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);

	const handleChange = () => {
		setMenu(!menu);
	};

	const openModal = () => {
		setIsModalOpen(true);
	};

	const closeModal = () => {
		setIsModalOpen(false);
	};

	return (
		<div>
			<nav className='flex justify-between items-center w-[92%] mx-auto h-20'>
				<div>
					<Link
						to='/'
						className='flex items-center text-3xl font-bold text-orange-700'>
						<span>
							Quick<span className='text-red-900'>Eats</span>
						</span>
						<img
							src='https://cdn-icons-png.flaticon.com/512/1046/1046784.png'
							alt='Burger Icon'
							className='w-auto h-12 ml-1'
						/>
					</Link>
				</div>
				<div className='md:static absolute md:min-h-fit min-h-[60vh] left-0 top-[-100%] md:w-auto w-full flex items-center px-5'>
					<nav className='flex md:flex-row flex-col md:gap-[4vw] gap-8 text-[#502314]'>
						<Link
							className='font-bold hover:text-orange-500 cursor-pointer'
							to='/'>
							Home
						</Link>
						<Link
							className='font-bold hover:text-orange-500 cursor-pointer'
							to='/menu'>
							Menu
						</Link>
						<Link
							className='font-bold hover:text-orange-500 cursor-pointer'
							to='/offers'>
							Offers
						</Link>
						<Link
							className='font-bold hover:text-orange-500 cursor-pointer'
							to='/contact'>
							Contact
						</Link>
						<Link
							className='font-bold hover:text-orange-500 cursor-pointer'
							to='/about'>
							About
						</Link>
					</nav>
				</div>
				<div className='hidden md:flex items-center gap-6'>
					<div>
						<Link to='/Cart'>
							<IoIosBasket className='w-7 h-7 cursor-pointer' />
						</Link>
					</div>
					<Button title='login' onClick={openModal} />
				</div>
				<div className='md:hidden flex items-center'>
					{!menu ? (
						<AiOutlineClose size={20} onClick={handleChange} />
					) : (
						<AiOutlineMenuUnfold size={20} onClick={handleChange} />
					)}
				</div>

				<div
					className={`${
						menu ? 'translate-x-0' : '-translate-x-full'
					} lg:hidden flex flex-col absolute bg-black text-white left-0 top-20 font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-full h-fit transition-transform duration-300`}>
					<Link
						className='font-bold hover:text-orange-500 cursor-pointer'
						to='/'>
						Home
					</Link>
					<Link
						className='font-bold hover:text-orange-500 cursor-pointer'
						to='/menu'>
						Menu
					</Link>
					<Link
						className='font-bold hover:text-orange-500 cursor-pointer'
						to='/offers'>
						Offers
					</Link>
					<Link
						className='font-bold hover:text-orange-500 cursor-pointer'
						to='/contact'>
						Contact
					</Link>
					<Link
						className='font-bold hover:text-orange-500 cursor-pointer'
						to='/about'>
						About
					</Link>
				</div>
			</nav>
			<Modal isOpen={isModalOpen} onClose={closeModal} />
		</div>
	);
};

export default Navbar;
