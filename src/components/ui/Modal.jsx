// import React, { useContext, useState } from 'react';
// import axios from 'axios';
// import { StoreContext } from '../../StoreContext/StoreContext';

// const Modal = ({ isOpen, onClose }) => {
// 	const { setToken } = useContext(StoreContext);
// 	const [isLogin, setIsLogin] = useState(true);
// 	const [data, setData] = useState({
// 		name: '',
// 		email: '',
// 		password: '',
// 	});
// 	const [rememberMe, setRememberMe] = useState(false);
// 	const [error, setError] = useState('');

// 	const onChangeHandler = (event) => {
// 		const name = event.target.name;
// 		const value = event.target.value;
// 		setData((prevData) => ({ ...prevData, [name]: value }));
// 	};

// 	const handleLogin = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await axios.post('http://localhost:4000/api/user/login', {
// 				email: data.email,
// 				password: data.password,
// 			});
// 			if (response.data.success) {
// 				const { tok } = response.data;
// 				if (rememberMe) {
// 					localStorage.setItem('token', tok);
// 				} else {
// 					sessionStorage.setItem('token', tok);
// 				}
// 				setToken(tok);
// 				onClose();
// 				window.location.reload();
// 			} else {
// 				setError(response.data.message);
// 			}
// 		} catch (err) {
// 			setError(err.response ? err.response.data.message : 'An error occurred');
// 		}
// 	};

// 	const handleRegister = async (e) => {
// 		e.preventDefault();
// 		try {
// 			const response = await axios.post('http://localhost:4000/api/user/register', {
// 				name: data.name,
// 				email: data.email,
// 				password: data.password,
// 			});
// 			if (response.data.success) {
// 				const { tok } = response.data;
// 				if (rememberMe) {
// 					localStorage.setItem('token', tok);
// 				} else {
// 					sessionStorage.setItem('token', tok);
// 				}
// 				setToken(tok);
// 				onClose();
// 				window.location.reload()
// 			} else {
// 				setError(response.data.message);
// 			}
// 		} catch (err) {
// 			setError(err.response ? err.response.data.message : 'An error occurred');
// 		}
// 	};

// 	const handleRememberMeChange = (e) => {
// 		setRememberMe(e.target.checked);
// 	};

// 	return (
// 		<div className={`fixed inset-0 z-50 flex items-center justify-center ${isOpen ? 'block' : 'hidden'}`}>
// 			<div className="fixed inset-0 bg-black opacity-50"></div>
// 			<div className="bg-white rounded-lg shadow-lg max-w-3xl mx-auto z-50 relative">
// 				<div className="flex justify-end p-2">
// 					<button
// 						type="button"
// 						className="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-800 dark:hover:text-white"
// 						onClick={onClose}>
// 						<svg
// 							className="w-5 h-5"
// 							fill="currentColor"
// 							viewBox="0 0 20 20"
// 							xmlns="http://www.w3.org/2000/svg">
// 							<path
// 								fillRule="evenodd"
// 								d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
// 								clipRule="evenodd"></path>
// 						</svg>
// 					</button>
// 				</div>
// 				<form
// 					className="px-8 pb-6"
// 					onSubmit={isLogin ? handleLogin : handleRegister}>
// 					<h3 className="text-xl font-medium text-gray-900 dark:text-white">
// 						{isLogin ? 'Sign in to our platform' : 'Register on our platform'}
// 					</h3>
// 					{error && <div className="text-red-500 text-sm">{error}</div>}
// 					{!isLogin && (
// 						<div className="mb-4">
// 							<label
// 								htmlFor="name"
// 								className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
// 								Your name
// 							</label>
// 							<input
// 								type="text"
// 								name="name"
// 								id="name"
// 								className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
// 								placeholder="John Doe"
// 								required={!isLogin}
// 								value={data.name}
// 								onChange={onChangeHandler}
// 							/>
// 						</div>
// 					)}
// 					<div className="mb-4">
// 						<label
// 							htmlFor="email"
// 							className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
// 							Your email
// 						</label>
// 						<input
// 							type="email"
// 							name="email"
// 							id="email"
// 							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
// 							placeholder="name@company.com"
// 							required
// 							value={data.email}
// 							onChange={onChangeHandler}
// 						/>
// 					</div>
// 					<div className="mb-4">
// 						<label
// 							htmlFor="password"
// 							className="text-sm font-medium text-gray-900 block mb-2 dark:text-gray-300">
// 							Your password
// 						</label>
// 						<input
// 							type="password"
// 							name="password"
// 							id="password"
// 							placeholder="••••••••"
// 							className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
// 							required
// 							value={data.password}
// 							onChange={onChangeHandler}
// 						/>
// 					</div>
// 					<div className="flex items-center mb-4">
// 						<input
// 							id="remember"
// 							type="checkbox"
// 							className="bg-gray-50 border border-gray-300 focus:ring-3 focus:ring-blue-300 h-4 w-4 rounded dark:bg-gray-600 dark:border-gray-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800"
// 							checked={rememberMe}
// 							onChange={handleRememberMeChange}
// 						/>
// 						<label
// 							htmlFor="remember"
// 							className="ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">
// 							Remember me
// 						</label>
// 					</div>
// 					<button
// 						type="submit"
// 						className="w-full text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">
// 						{isLogin ? 'Login to your account' : 'Register your account'}
// 					</button>
// 					<div className="text-sm font-medium text-gray-500 dark:text-gray-300 mt-4">
// 						{isLogin ? 'Not registered? ' : 'Already have an account? '}
// 						<button
// 							type="button"
// 							className="text-blue-700 hover:underline dark:text-blue-500"
// 							onClick={() => setIsLogin(!isLogin)}>
// 							{isLogin ? 'Create account' : 'Sign in'}
// 						</button>
// 					</div>
// 				</form>
// 			</div>
// 		</div>
// 	);
// };

// export default Modal;

import React, { useContext, useState, useEffect } from "react";
import { StoreContext } from "../../StoreContext/StoreContext";
import { X, Eye, EyeOff, UtensilsCrossed } from "lucide-react";

// Since the backend is offline, auth is simulated locally for demo purposes.
// Replace handleLogin / handleRegister with real API calls when the backend is live.

const Modal = ({ isOpen, onClose }) => {
  const { setToken } = useContext(StoreContext);
  const [isLogin, setIsLogin] = useState(true);
  const [showPassword, setShowPassword] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");
  const [rememberMe, setRememberMe] = useState(false);
  const [data, setData] = useState({ name: "", email: "", password: "" });

  // Reset state when modal opens/closes
  useEffect(() => {
    if (!isOpen) {
      setTimeout(() => {
        setError("");
        setData({ name: "", email: "", password: "" });
        setLoading(false);
      }, 200);
    }
  }, [isOpen]);

  // Close on Escape
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  const onChange = (e) => {
    setError("");
    setData((d) => ({ ...d, [e.target.name]: e.target.value }));
  };

  const fakeAuth = (e) => {
    e.preventDefault();
    setError("");
    if (!data.email || !data.password)
      return setError("Please fill in all fields.");
    if (!isLogin && !data.name) return setError("Please enter your name.");
    if (data.password.length < 6)
      return setError("Password must be at least 6 characters.");

    setLoading(true);
    // Simulate network delay — swap this block for a real axios call
    setTimeout(() => {
      const fakeToken = btoa(`${data.email}:${Date.now()}`);
      if (rememberMe) localStorage.setItem("token", fakeToken);
      else sessionStorage.setItem("token", fakeToken);
      setToken(fakeToken);
      setLoading(false);
      onClose();
    }, 900);
  };

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Panel */}
      <div className="relative w-full max-w-md bg-white rounded-2xl shadow-2xl overflow-hidden animate-in fade-in zoom-in-95 duration-200">
        {/* Top accent bar */}
        <div className="h-1.5 bg-gradient-to-r from-red-500 to-orange-400" />

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 h-8 w-8 rounded-full bg-gray-100 hover:bg-gray-200 flex items-center justify-center text-gray-500 transition-colors"
        >
          <X className="h-4 w-4" />
        </button>

        <div className="px-8 py-8">
          {/* Brand */}
          <div className="flex items-center gap-2 mb-6">
            <div className="h-9 w-9 bg-red-500 rounded-xl flex items-center justify-center">
              <UtensilsCrossed className="h-4.5 w-4.5 text-white h-5 w-5" />
            </div>
            <span className="text-xl font-extrabold text-gray-900">
              Quick<span className="text-red-500">Eats</span>
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-2xl font-black text-gray-900 mb-1">
            {isLogin ? "Welcome back" : "Create an account"}
          </h2>
          <p className="text-sm text-gray-400 mb-7">
            {isLogin
              ? "Sign in to track orders and save favourites."
              : "Join QuickEats and start ordering in seconds."}
          </p>

          {/* Tab pills */}
          <div className="flex bg-gray-100 rounded-xl p-1 mb-6">
            {["Sign In", "Register"].map((label, i) => (
              <button
                key={label}
                type="button"
                onClick={() => {
                  setIsLogin(i === 0);
                  setError("");
                }}
                className={`flex-1 py-2 rounded-lg text-sm font-semibold transition-all ${
                  isLogin === (i === 0)
                    ? "bg-white text-gray-900 shadow-sm"
                    : "text-gray-500 hover:text-gray-700"
                }`}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Error */}
          {error && (
            <div className="mb-4 px-4 py-3 bg-red-50 border border-red-100 text-red-600 text-sm rounded-xl">
              {error}
            </div>
          )}

          <form onSubmit={fakeAuth} className="space-y-4">
            {!isLogin && (
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                  Full Name
                </label>
                <input
                  name="name"
                  type="text"
                  value={data.name}
                  onChange={onChange}
                  placeholder="John Doe"
                  className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                />
              </div>
            )}

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Email Address
              </label>
              <input
                name="email"
                type="email"
                value={data.email}
                onChange={onChange}
                placeholder="you@example.com"
                className="w-full px-4 py-3 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
              />
            </div>

            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1.5">
                Password
              </label>
              <div className="relative">
                <input
                  name="password"
                  type={showPassword ? "text" : "password"}
                  value={data.password}
                  onChange={onChange}
                  placeholder="••••••••"
                  className="w-full px-4 py-3 pr-12 border border-gray-200 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-red-300 focus:border-transparent transition-all"
                />
                <button
                  type="button"
                  onClick={() => setShowPassword((s) => !s)}
                  className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-gray-600"
                >
                  {showPassword ? (
                    <EyeOff className="h-4 w-4" />
                  ) : (
                    <Eye className="h-4 w-4" />
                  )}
                </button>
              </div>
            </div>

            <div className="flex items-center justify-between">
              <label className="flex items-center gap-2 cursor-pointer">
                <input
                  type="checkbox"
                  checked={rememberMe}
                  onChange={(e) => setRememberMe(e.target.checked)}
                  className="h-4 w-4 rounded border-gray-300 text-red-500 focus:ring-red-400"
                />
                <span className="text-sm text-gray-600">Remember me</span>
              </label>
              {isLogin && (
                <button
                  type="button"
                  className="text-sm text-red-500 hover:text-red-600 font-medium"
                >
                  Forgot password?
                </button>
              )}
            </div>

            <button
              type="submit"
              disabled={loading}
              className="w-full flex items-center justify-center gap-2 bg-red-500 hover:bg-red-600 disabled:opacity-60 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-red-200 mt-2"
            >
              {loading ? (
                <span className="h-5 w-5 border-2 border-white/30 border-t-white rounded-full animate-spin" />
              ) : isLogin ? (
                "Sign In"
              ) : (
                "Create Account"
              )}
            </button>
          </form>

          <p className="text-center text-sm text-gray-500 mt-6">
            {isLogin ? "Don't have an account? " : "Already have an account? "}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError("");
              }}
              className="text-red-500 hover:text-red-600 font-semibold"
            >
              {isLogin ? "Register" : "Sign In"}
            </button>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Modal;
