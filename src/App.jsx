import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import About from './pages/About.jsx';
import Layout from './components/layout/Layout';
import Error from './pages/Error';
import Cart from './pages/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder.jsx';
import PaymentPage from './pages/Payment.jsx';
import MenuItem from '../src/components/menu/MenuItem.jsx';
import Profile from './components/profile/Profile.jsx';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/menu/:id' element={<MenuItem />} />
				<Route path='/offers' element={<Offers />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Error />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/order' element={<PlaceOrder />} />
				<Route path='/payment' element={<PaymentPage />} />
				<Route path='/profile' element={<Profile />} />
			</Route>
		</Routes>
	);
}

export default App;
