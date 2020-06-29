import React from 'react';
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
			<img
				src='./images/cinema.png'
				alt='logo'
				style={{
					display: 'block',
					width: '60px',
					margin: '2rem auto 0 auto',
				}}
			/>
			<h1 style={{ marginTop: '1rem', textAlign: 'center' }}>Movio</h1>
			<hr />
			<Navigation />
		</div>
	);
}

export default Sidebar;
