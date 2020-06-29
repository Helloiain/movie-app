import React from 'react';

function Pagination({ page, totalPages, setPage }) {
	return (
		<div style={{ display: 'flex', justifyContent: 'space-between' }}>
			{page === 1 || page === 0 ? null : (
				<button
					onClick={() => {
						setPage(page - 1);
					}}
					style={{
						padding: '.5rem 1.5rem',
						borderRadius: '1rem',
						margin: '0 0 3rem 2rem',
						background: 'none',
					}}
				>
					Page {page - 1}
				</button>
			)}
			{page === totalPages ? null : (
				<button
					onClick={() => {
						setPage(page + 1);
					}}
					style={{
						padding: '.5rem 1.5rem',
						borderRadius: '1rem',
						margin: '0 2rem 3rem auto',
						background: 'none',
					}}
				>
					Page {page * 1 + 1}
				</button>
			)}
		</div>
	);
}

export default Pagination;
