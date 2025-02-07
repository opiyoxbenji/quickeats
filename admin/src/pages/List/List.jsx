import { useEffect, useState } from 'react';
import './List.css';
import axios from 'axios';
import { toast } from 'react-toastify';

const List = () => {
	const url = 'http://localhost:4000'; 
	const [list, setList] = useState([]);
	const getList = async () => {
		const res = await axios.get(`${url}/api/food/list`);
		if (res.data.success) {
			setList(res.data.data);
		} else {
			toast.error('Error Setting data');
		}
	};
	const removeFoods = async foodId => {
		const res = await axios.post(`${url}/api/food/remove`, { id: foodId });
		await getList();
		if (res.data.success) {
			toast.success(res.data.message);
		} else {
			toast.error('Error Deleting food');
		}
	};
	useEffect(() => {
		getList();
	}, []);
	return (
		<div className='list-item add flex-col'>
			<p>List for all available foods</p>
			<div className='table-listing'>
				<div className='listing-format title'>
					<b>Image</b>
					<b>Name</b>
					<b>Category</b>
					<b>Price</b>
					<b>Removal</b>
				</div>
				{list.map((item, idx) => {
					return (
						<div key={idx} className='listing-format'>
							<img src={`${url}/images/` + item.image} alt='' />
							<p>{item.name}</p>
							<p>{item.category}</p>
							<p>R{item.price}</p>
							<p
								onClick={() => removeFoods(item._id)}
								className='cursor'>
								X
							</p>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default List;
