import React from 'react';
import Navigation from './navigation';

function Sidebar() {
	return (
		<div
			style={{
				position: 'fixed',
				top: '0',
				width: '200px',
				height: '100%',
				boxShadow: ' 1px 8px 16px 0 rgba(0, 0, 0, 0.2)',
			}}
		>
			<img
				src={process.env.PUBLIC_URL + '/images/cinema.png'}
				alt='logo'
				style={{
					display: 'block',
					width: '60px',
					margin: '2rem auto 0 auto',
				}}
			/>
			<h1 style={{ marginTop: '1rem', textAlign: 'center' }}>Movio</h1>
			<hr style={{ borderTop: '1px solid rgba(0,0,0,0.1)' }} />
			<Navigation />
		</div>
	);
}

export default Sidebar;
