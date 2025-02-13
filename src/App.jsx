import { useState } from 'react';
import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Menu from './pages/Menu';
import Offers from './pages/Offers';
import Contact from './pages/Contact';
import About from './pages/About';
import Layout from './components/Layout';
import Error from './pages/Error';
import Cart from './pages/cart/Cart.jsx';
import PlaceOrder from './pages/PlaceOrder/PlaceOrder.jsx';
import PaymentPage from './pages/Payment/Payment.jsx';
import FoodItemDetail from './components/FoodItemDetail/FoodItemDetail.jsx';

function App() {
	return (
		<Routes>
			<Route path='/' element={<Layout />}>
				<Route path='/' element={<Home />} />
				<Route path='/menu' element={<Menu />} />
				<Route path='/menu/:id' element={<FoodItemDetail />} />
				<Route path='/offers' element={<Offers />} />
				<Route path='/contact' element={<Contact />} />
				<Route path='/about' element={<About />} />
				<Route path='*' element={<Error />} />
				<Route path='/cart' element={<Cart />} />
				<Route path='/order' element={<PlaceOrder />} />
				<Route path='/payment' element={<PaymentPage />} />
			</Route>
		</Routes>
	);
}

export default App;
