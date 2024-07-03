import React, { useContext, useState } from 'react';
import axios from 'axios';
import { StoreContext } from '../StoreContext/StoreContext';

const Modal = ({ isOpen, onClose }) => {
	const { setToken } = useContext(StoreContext);
	const [isLogin, setIsLogin] = useState(true);
	const [data, setData] = useState({
		name: '',
		email: '',
		password: '',
	});
	const [rememberMe, setRememberMe] = useState(false);
	const [error, setError] = useState('');

	const onChangeHandler = (event) => {
		const name = event.target.name;
		const value = event.target.value;
		setData((prevData) => ({ ...prevData, [name]: value }));
	};

	const handleLogin = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:4000/api/user/login', {
				email: data.email,
				password: data.password,
			});
			if (response.data.success) {
				const { tok } = response.data;
				if (rememberMe) {
					localStorage.setItem('token', tok);
				} else {
					sessionStorage.setItem('token', tok);
				}
				setToken(tok);
				onClose();
				window.location.reload();
			} else {
				setError(response.data.message);
			}
		} catch (err) {
			setError(err.response ? err.response.data.message : 'An error occurred');
		}
	};

	const handleRegister = async (e) => {
		e.preventDefault();
		try {
			const response = await axios.post('http://localhost:4000/api/user/register', {
				name: data.name,
				email: data.email,
				password: data.password,
			});
			if (response.data.success) {
				const { tok } = response.data;
				if (rememberMe) {
					localStorage.setItem('token', tok);
				} else {
					sessionStorage.setItem('token', tok);
				}
				setToken(tok);
				onClose();
				window.location.reload()
			} else {
				setError(response.data.message);
			}
		} catch (err) {
			setError(err.response ? err.response.data.message : 'An error occurred');
		}
	};

	const handleRememberMeChange = (e) => {
		setRememberMe(e.target.checked);
	};

	return (
		<div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
			<div className="fixed inset-0 bg-black opacity-50"></div>
			<div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto z-50 relative">
				<div className="flex justify-end p-2">
					<button
						type="button"
						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
						onClick={onClose}>
						<svg
							className="w-5 h-5"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg">
							<path
								fillRule="evenodd"
								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
								clipRule="evenodd"></path>
						</svg>
					</button>
				</div>
				<form
					className="px-8 pb-6"
					onSubmit={isLogin ? handleLogin : handleRegister}>
					<h3 className="text-xl font-medium text-gray-900 dark:text-white">
						{isLogin ? 'Sign in to our platform' : 'Register on our platform'}
					</h3>
					{error && <div className="text-red-500 text-sm">{error}</div>}
					{!isLogin && (
						<div className="mb-4">
							<label
								htmlFor="name"
								className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
								Your name
							</label>
							<input
								type="text"
								name="name"
								id="name"
								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
								placeholder="John Doe"
								required={!isLogin}
								value={data.name}
								onChange={onChangeHandler}
							/>
						</div>
					)}
					<div className="mb-4">
						<label
							htmlFor="email"
							className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
							Your email
						</label>
						<input
							type="email"
							name="email"
							id="email"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							placeholder="name@company.com"
							required
							value={data.email}
							onChange={onChangeHandler}
						/>
					</div>
					<div className="mb-4">
						<label
							htmlFor="password"
							className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
							Your password
						</label>
						<input
							type="password"
							name="password"
							id="password"
							placeholder="••••••••"
							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
							required
							value={data.password}
							onChange={onChangeHandler}
						/>
					</div>
					<div className="flex items-center mb-4">
						<input
							id="remember"
							type="checkbox"
							className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
							checked={rememberMe}
							onChange={handleRememberMeChange}
						/>
						<label
							htmlFor="remember"
							className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
							Remember me
						</label>
					</div>
					<button
						type="submit"
						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
						{isLogin ? 'Login to your account' : 'Register your account'}
					</button>
					<div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
						{isLogin ? 'Not registered? ' : 'Already have an account? '}
						<button
							type="button"
							className="text-blue-700 hover:underline dark:text-blue-500"
							onClick={() => setIsLogin(!isLogin)}>
							{isLogin ? 'Create account' : 'Sign in'}
						</button>
					</div>
				</form>
			</div>
		</div>
	);
};

export default Modal;