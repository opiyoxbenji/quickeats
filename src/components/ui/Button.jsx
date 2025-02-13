import React from 'react';

const Button = ({ title, onClick }) => {
	return (
		<div>
			<button
				className='bg-purple-600 px-5 py-2 border-2 border-brightColor text-brightColor hover:bg-orange-700 hover:text-white transition-all rounded-full'
				onClick={onClick}>
				{title}
			</button>
		</div>
	);
};

export default Button;
