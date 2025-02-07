import { useState } from 'react';
import './Add.css';
import { assets } from '../../assets/assets';
import axios from 'axios';
import { toast } from 'react-toastify';

const Add = () => {
	const url = 'http://localhost:4000';
	const [image, setImage] = useState(null);
	const [data, setData] = useState({
		name: '',
		description: '',
		price: '',
		category: 'Pizza',
	});

	const onChangeHandler = event => {
		const { name, value } = event.target;
		setData({ ...data, [name]: value });
	};

	const onSubmitHandler = async event => {
		event.preventDefault();
		try {
			const formData = new FormData();
			formData.append('name', data.name);
			formData.append('description', data.description);
			formData.append('price', Number(data.price));
			formData.append('category', data.category);
			if (image) {
				formData.append('image', image);
			}

			const config = {
				headers: { 'Content-Type': 'multipart/form-data' },
			};

			const res = await axios.post(
				`${url}/api/food/add`,
				formData,
				config
			);

			if (res.data.success) {
				setData({
					name: '',
					description: '',
					price: '',
					category: 'Pizza',
				});
				setImage(null);
				toast.success(res.data.message);
			} else {
				toast.error(res.data.message);
			}
		} catch (error) {
			console.log('Error adding food item:', error);
			toast.error(
				error.response?.data?.message || 'Error adding food item'
			);
		}
	};

	return (
		<div className='add'>
			<form className='flex-col' onSubmit={onSubmitHandler}>
				<div className='add-img-upload flex-col'>
					<p>Upload Image</p>
					<label htmlFor='image'>
						<img
							src={
								image
									? URL.createObjectURL(image)
									: assets.upload_area
							}
							alt=''
							width={80}
							height={80}
						/>
					</label>
					<input
						onChange={e => setImage(e.target.files[0])}
						type='file'
						id='image'
						hidden
						required
						accept='image/*'
					/>
				</div>
				<div className='add-product-name flex-col'>
					<p>Product name</p>
					<input
						onChange={onChangeHandler}
						value={data.name}
						type='text'
						name='name'
						placeholder='Type here'
						required
					/>
				</div>
				<div className='add-product-description flex-col'>
					<p>Product Ingredients</p>
					<textarea
						onChange={onChangeHandler}
						value={data.description}
						name='description'
						rows='6'
						placeholder='Write content'
						required></textarea>
				</div>
				<div className='add-category-price'>
					<div className='add-category flex-col'>
						<p>Category of Product</p> 
						<select
							onChange={onChangeHandler}
							name='category'
							value={data.category}>
							<option value='Pizza'>Pizza</option>
							<option value='Ribs & Steaks'>Ribs & Steaks</option>
							<option value='Chicken'>Chicken</option>
							<option value='Burgers'>Burgers</option>
							<option value='Seafood'>Seafood</option>
							<option value='Pasta'>Pasta</option>
							<option value='Starters'>Starters</option>
							<option value='Desserts'>Desserts</option>
							<option value='Beverages'>Beverages</option>
						</select>
					</div>
					<div className='add-price flex-col'>
						<p>Price of Product</p>
						<input
							onChange={onChangeHandler}
							value={data.price}
							type='number'
							name='price'
							placeholder='R200'
							required
						/>
					</div>
				</div>
				<button type='submit' className='button-add'>
					Add
				</button>
			</form>
		</div>
	);
};

export default Add;
