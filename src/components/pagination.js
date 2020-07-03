import React from 'react';
import { Link } from 'react-router-dom';
import { SubContainer, Button } from '../styled-components';

function Pagination({ page, totalPages }) {
	const url = window.location.pathname;
	return (
		<SubContainer>
			{page === 1 || page === 0 ? null : (
				<Link to={`${url}?page=${page * 1 - 1}`}>
					<Button style={{ margin: '0 0 3rem 2rem' }}>
						Page {page * 1 - 1}
					</Button>
				</Link>
			)}
			{page === totalPages ? null : (
				<div style={{ margin: '0 2rem 3rem auto' }}>
					<Link to={`${url}?page=${page * 1 + 1}`}>
						<Button>Page {page * 1 + 1}</Button>
					</Link>
				</div>
			)}
		</SubContainer>
	);
	// return (
	// 	<div style={{ display: 'flex', justifyContent: 'space-between' }}>
	// 		{page === 1 || page === 0 ? null : (
	// 			<button
	// 				onClick={() => {
	// 					setPage(page - 1);
	// 				}}
	// 				style={{
	// 					padding: '.5rem 1.5rem',
	// 					borderRadius: '1rem',
	// 					margin: '0 0 3rem 2rem',
	// 					background: 'none',
	// 				}}
	// 			>
	// 				Page {page - 1}
	// 			</button>
	// 		)}
	// 		{page === totalPages ? null : (
	// 			<button
	// 				onClick={() => {
	// 					setPage(page + 1);
	// 				}}
	// 				style={{
	// 					padding: '.5rem 1.5rem',
	// 					borderRadius: '1rem',
	// 					margin: '0 2rem 3rem auto',
	// 					background: 'none',
	// 				}}
	// 			>
	// 				Page {page * 1 + 1}
	// 			</button>
	// 		)}
	// 	</div>
	// );
}

export default Pagination;
