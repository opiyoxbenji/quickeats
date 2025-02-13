import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/layout/Footer';
import Hero from '../components/home/Hero';
import Navbar from '../components/layout/Navbar';

const Home = () => {
	return (
		<div>
			<Hero />
		</div>
	);
};

export default Home;
