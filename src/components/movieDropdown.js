import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function MovieDropdown({ sort, setSort }) {
	const [isOpen, setisOpen] = useState(false);

	MovieDropdown.handleClickOutside = () => setisOpen(false);

	function toggleList() {
		setisOpen(!isOpen);
	}
	return (
		<div>
			<div
				onClick={() => {
					toggleList();
				}}
			>
				{sort.replace(/\..*/, '').replace(/_/, ' ')}
				{isOpen ? '˅' : '˄'}
			</div>
			{isOpen && (
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

const clickOutsideConfig = {
	handleClickOutside: () => MovieDropdown.handleClickOutside,
};

export default onClickOutside(MovieDropdown, clickOutsideConfig);
