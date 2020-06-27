import React, { useState } from 'react';

function Dropdown({ sort, setSort }) {
	const [isHovering, setIsHovering] = useState(false);

	function handleMouseHover() {
		setIsHovering(!isHovering);
	}

	return (
		<div>
			<p onMouseEnter={handleMouseHover} onMouseLeave={handleMouseHover}>
				{sort.replace(/\..*/, '').replace(/_/, ' ')}
			</p>
			{isHovering && (
				<ul
					onClick={(e) => {
						const dataId = e.target.getAttribute('data-sort');
						setSort(dataId);
					}}
				>
					<li data-sort='popularity.desc'>popularity</li>
					<li data-sort='release_date.desc'>release date</li>
					<li data-sort='revenue.desc'>revenue</li>
					<li data-sort='vote_count.desc'>vote count</li>
				</ul>
			)}
		</div>
	);
}

export default Dropdown;
