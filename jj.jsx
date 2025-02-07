import React, { useState, useEffect } from 'react';
import { FaDiscord, FaGithub, FaXTwitter } from 'react-icons/fa6';

const Footer = () => {
	// Add scroll visibility state and handler
	const [isVisible, setIsVisible] = useState(false);
	const currentYear = new Date().getFullYear();

	useEffect(() => {
		// Handle scroll event to show/hide footer
		const handleScroll = () => {
			const scrolledToBottom =
				window.innerHeight + window.pageYOffset >=
				document.documentElement.scrollHeight - 20;
			setIsVisible(scrolledToBottom);
		};

		window.addEventListener('scroll', handleScroll);
		return () => window.removeEventListener('scroll', handleScroll);
	}, []);

	return (
		<footer
			className={`
        fixed bottom-0 left-0 right-0 
        bg-gradient-to-b from-white to-gray-50 
        dark:from-slate-900 dark:to-slate-800 
        transform transition-transform duration-300 ease-in-out
        ${isVisible ? 'translate-y-0' : 'translate-y-full'}
        shadow-lg z-50
      `}>
			{/* Rest of your footer content remains the same */}
			{/* ... */}
		</footer>
	);
};

export default Footer;
