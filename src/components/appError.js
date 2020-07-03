import React from 'react';
import { Link } from 'react-router-dom';

const AppError = () => (
	<div style={{ marginLeft: '200px' }}>
		<h1>Oh No!</h1>
		<p>It looks like something went wrong!</p>
		<Link to='/'>Go Home</Link>
	</div>
);

export default AppError;
