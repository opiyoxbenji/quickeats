import { NavLink } from 'react-router-dom';
import { PlusCircle, List, ShoppingBag } from 'lucide-react';

const Sidebar = () => {
	return (
		<div className='min-h-screen w-64 bg-gray-900 text-gray-100 shadow-lg'>
			<div className='p-4'>
				<h2 className='mb-6 text-xl font-bold text-gray-100'>
					Admin Panel
				</h2>

				<nav className='space-y-2'>
					<NavLink
						to='/add'
						className={({ isActive }) => `
              flex items-center gap-3 rounded-lg px-4 py-3
              transition-all duration-200
              ${
					isActive
						? 'bg-blue-600 text-white shadow-lg'
						: 'text-gray-300 hover:bg-gray-800 hover:text-white'
				}
            `}>
						<PlusCircle className='h-5 w-5' />
						<span className='font-medium'>Add Items</span>
					</NavLink>

					<NavLink
						to='/list'
						className={({ isActive }) => `
              flex items-center gap-3 rounded-lg px-4 py-3
              transition-all duration-200
              ${
					isActive
						? 'bg-blue-600 text-white shadow-lg'
						: 'text-gray-300 hover:bg-gray-800 hover:text-white'
				}
            `}>
						<List className='h-5 w-5' />
						<span className='font-medium'>List Items</span>
					</NavLink>

					<NavLink
						to='/orders'
						className={({ isActive }) => `
              flex items-center gap-3 rounded-lg px-4 py-3
              transition-all duration-200
              ${
					isActive
						? 'bg-blue-600 text-white shadow-lg'
						: 'text-gray-300 hover:bg-gray-800 hover:text-white'
				}
            `}>
						<ShoppingBag className='h-5 w-5' />
						<span className='font-medium'>Orders</span>
					</NavLink>
				</nav>
			</div>
		</div>
	);
};

export default Sidebar;
