import React from 'react';
import { Link } from 'react-router-dom';

function Sidebar() {
	return (
		<div>
			<h1>Logo</h1>
			<hr />
			<ul>
				<Link to='/'>Movies</Link>
				<Link to='/tv'>Tv</Link>
			</ul>
		</div>
	);
}

export default Sidebar;
