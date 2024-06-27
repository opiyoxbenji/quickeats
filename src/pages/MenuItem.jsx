import React from 'react';
import { useParams } from 'react-router-dom';

const MenuItem = () => {
	const { id } = useParams();
	return <div>MenuItem</div>;
};

export default MenuItem;
