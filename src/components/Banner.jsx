import React from 'react';
import BannerImg from '../assets/banner.jpg';

const Banner = () => {
	return (
		<>
			<div className='min-h-[620px] flex justify-center items-center py-12 sm:py-0'>
				<div className='container'>
					<div className='grid grid-cols sm:grid-cols-2 gap-6'>
						{/* Image Section */}
						<div>
							<img src={BannerImg} alt='' />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};

export default Banner;
