import React, { useState } from 'react';

function Dropdown({ sort, setSort }) {
	return (
		<div>
			{sort.replace(/\..*/, '').replace(/_/, ' ')}
			<ul
				onClick={(e) => {
					const dataId = e.target.getAttribute('data-sort');
					setSort(dataId);
				}}
			>
				<li data-sort='popular.desc'>popular</li>
				<li data-sort='release_date.desc'>release date</li>
				<li data-sort='revenue.desc'>revenue</li>
				<li data-sort='vote_count.desc'>vote count</li>
			</ul>
		</div>
	);
}

export default Dropdown;
