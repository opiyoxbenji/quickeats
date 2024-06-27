import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';
import Hero from '../components/Hero';
import Navbar from '../components/Navbar';

const Home = () => {
	return (
		<div>
			<Hero />
		</div>
	);
};

export default Home;
