import React from 'react';

function Pagination({ page, totalPages, setPage }) {
	return (
		<div>
			{page === 1 || page === 0 ? null : (
				<button
					onClick={() => {
						setPage(page - 1);
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
				>
					Page {page * 1 + 1}
				</button>
			)}
		</div>
	);
}

export default Pagination;
