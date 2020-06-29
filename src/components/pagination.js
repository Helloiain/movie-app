import React from 'react';

function Pagination({ page, totalPages, setPage }) {
	return (
		<div>
			{page === 1 || page === 0 ? null : (
				<button
					onClick={() => {
						setPage(page - 1);
					}}
					style={{
						padding: '.5rem 1.5rem',
						borderRadius: '1rem',
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
						position: 'absolute',
						right: '1.5rem',
					}}
				>
					Page {page * 1 + 1}
				</button>
			)}
		</div>
	);
}

export default Pagination;
