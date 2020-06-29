import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div style={{ padding: '0 50px' }}>
			<h1>Logo</h1>
			<hr style={{ margin: '30px -40px' }} />
			<ul>
				<Link to='/'>Movies</Link>
				<Link to='/tv'>Tv</Link>
			</ul>
		</div>
	);
}

export default Sidebar;
