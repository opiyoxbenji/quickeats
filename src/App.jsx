import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/Layout';
import Error from './pages/Error'

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/offers' element={<Offers />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={ <Error />} />
			</Route>
		</Routes>
	);
}

export default App;
