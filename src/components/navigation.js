import React from 'react';
import { Link } from 'react-router-dom';

import { FaFilm, FaTv } from 'react-icons/fa';

function Navigation() {
	return (
		<ul style={{ marginLeft: '50px' }}>
			<li>
				<Link to='/'>
					<FaFilm style={{ marginRight: '1rem', verticalAlign: 'sub' }} />
					{` `}
					Movies
				</Link>
			</li>
			<li>
				<Link to='/tv'>
					<FaTv style={{ marginRight: '1rem', verticalAlign: 'sub' }} />
					{` `}
					Tv
				</Link>
			</li>
		</ul>
	);
}

export default Navigation;
