import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';

const Layout = ({ children }) => {
	return (
		<div flex flex-col min-h-screen>
			<Navbar />
			<main className='flex-grow'>
				<Outlet />
			</main>
			<Footer />
		</div>
	);
};

export default Layout;
