import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';

function ShowDropdown({ type, setType }) {
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
				{type.replace(/\..*/, '').replace(/_/, ' ')}
				{isOpen ? '˅' : '˄'}
			</div>
			{isOpen && (
				<ul
					onClick={(e) => {
						const dataId = e.target.getAttribute('data-sort');
						setType(dataId);
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

const clickOutsideConfig = {
	handleClickOutside: () => ShowDropdown.handleClickOutside,
};

export default onClickOutside(ShowDropdown, clickOutsideConfig);
