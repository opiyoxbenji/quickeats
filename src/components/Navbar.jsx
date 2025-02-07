import React, { useContext, useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';
import { IoIosBasket } from 'react-icons/io';
import { FaUserCircle, FaSignOutAlt } from 'react-icons/fa'; // Import icons for user and logout
import Button from './Button';
import Modal from './Modal';
import { StoreContext } from '../StoreContext/StoreContext';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {
	const { token, setToken } = useContext(StoreContext);
	const [menu, setMenu] = useState(false);
	const [isModalOpen, setIsModalOpen] = useState(false);
	const navigate = useNavigate();

	useEffect(() => {}, [token]);

	// Toggle menu visibilty
	const handleChange = () => {
		setMenu(!menu);
	};
	// Open Modal
	const openModal = () => {
		setIsModalOpen(true);
	};

	// Close modal
	const closeModal = () => {
		setIsModalOpen(false);
	};

	// Logout logic
	const handleLogout = () => {
		localStorage.removeItem('token');
		setToken('');
		navigate('/');
	};

	return (
		<div>
			<nav className='flex justify-between items-center w-[92%] mx-auto h-20'>
				<div>
					{/* Logo and brand link */}
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
						{/* <Link
                            className='font-bold hover:text-orange-500 cursor-pointer'
                            to='/offers'>
                            Offers
                        </Link> */}
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
				{token ? (
					<div className='hidden md:flex items-center gap-6'>
						<div>
							<Link to='/Cart'>
								<IoIosBasket className='w-7 h-7 cursor-pointer' />
							</Link>
						</div>
						{/* User-specific elements */}
						<div className='flex items-center gap-6'>
							{/* Replace with user profile, logout button, etc. */}
							<Link to='/profile'>
								<FaUserCircle className='w-7 h-7 cursor-pointer text-gray-700 hover:text-gray-900' />
							</Link>
							<button
								className='text-gray-700 hover:text-gray-900'
								onClick={handleLogout}>
								<FaSignOutAlt className='w-7 h-7 cursor-pointer' />
							</button>
						</div>
					</div>
				) : (
					<div className='hidden md:flex items-center gap-6'>
						<div>
							<Link to='/Cart'>
								<IoIosBasket className='w-7 h-7 cursor-pointer' />
							</Link>
						</div>
						<Button title='login' onClick={openModal} />
					</div>
				)}
				<div className='md:hidden flex items-center'>
					{!menu ? (
						<AiOutlineMenu size={20} onClick={handleChange} />
					) : (
						<AiOutlineClose size={20} onClick={handleChange} />
					)}
				</div>

				<div
					className={`${
						menu ? 'translate-x-0' : '-translate-x-full'
					} lg:hidden flex flex-col fixed bg-orange-500 bg-opacity-80 backdrop-filter backdrop-blur-sm text-white left-0 top-[4rem] font-semibold text-2xl text-center pt-8 pb-4 gap-8 w-64 h-auto transition-transform duration-300 z-50 shadow-lg`}>
					<Link
						className='font-bold hover:text-black cursor-pointer px-4 py-2 transition-colors duration-300'
						to='/'>
						Home
					</Link>
					<Link
						className='font-bold hover:text-black cursor-pointer px-4 py-2 transition-colors duration-300'
						to='/menu'>
						Menu
					</Link>
					<Link
						className='font-bold hover:text-black cursor-pointer px-4 py-2 transition-colors duration-300'
						to='/contact'>
						Contact
					</Link>
					<Link
						className='font-bold hover:text-black cursor-pointer px-4 py-2 transition-colors duration-300'
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
