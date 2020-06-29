import React from 'react';
import { Link } from 'react-router-dom';
import Navigation from './navigation';

function Sidebar() {
	return (
		<div
			style={{
				position: 'fixed',
				top: '0',
				width: '200px',
			}}
		>
			<h1 style={{ marginTop: '3rem', textAlign: 'center' }}>Logo</h1>
			<hr />
			<Navigation />
		</div>
	);
}

export default Sidebar;
