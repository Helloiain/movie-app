import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

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
				{sort.replace(/\..*/, '').replace(/_/, ' ')} {` `}
				{isOpen ? (
					<FaAngleDown style={angleStyle} />
				) : (
					<FaAngleUp style={angleStyle} />
				)}
			</div>
			{isOpen && (
				<ul
					onClick={(e) => {
						const dataId = e.target.getAttribute('data-sort');
						if (dataId == null) return;
						setSort(dataId);
					}}
					style={{
						marginTop: '25px',
						padding: '0.5rem',
						position: 'absolute',
						right: '2rem',
						background: '#fff',
						borderRadius: '3px',
						boxShadow: ' 1px 8px 16px 0 rgba(0 0 0)',
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

const angleStyle = {
	verticalAlign: 'sub',
};

const clickOutsideConfig = {
	handleClickOutside: () => MovieDropdown.handleClickOutside,
};

export default onClickOutside(MovieDropdown, clickOutsideConfig);
