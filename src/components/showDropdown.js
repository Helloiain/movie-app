import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { FaAngleUp, FaAngleDown } from 'react-icons/fa';

function ShowDropdown({ sort, setSort }) {
	const [isOpen, setisOpen] = useState(false);

	ShowDropdown.handleClickOutside = () => setisOpen(false);

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
				{sort.replace(/_/g, ' ')} {` `}
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
					<li data-sort='popular'>Popularity</li>
					<li data-sort='on_the_air'>On The Air</li>
					<li data-sort='top_rated'>Top Rated</li>
				</ul>
			)}
		</div>
	);
}

const angleStyle = {
	verticalAlign: 'sub',
};

const clickOutsideConfig = {
	handleClickOutside: () => ShowDropdown.handleClickOutside,
};

export default onClickOutside(ShowDropdown, clickOutsideConfig);
