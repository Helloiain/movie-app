import React, { useState } from 'react';
import onClickOutside from 'react-onclickoutside';
import { Menu } from '../styled-components';
import { FiChevronUp, FiChevronDown } from 'react-icons/fi';

function Dropdown({ sortBy, setSortBy, type }) {
	const [isOpen, setIsOpen] = useState(false);

	Dropdown.handleClickOutside = () => setIsOpen(false);

	const toggleOpen = () => {
		setIsOpen(!isOpen);
	};

	const getSortBy = (e) => {
		const dataId = e.target.getAttribute('data-sortby');
		if (!dataId || dataId === undefined) return;
		setSortBy(dataId);
	};

	return (
		<div>
			<div onClick={toggleOpen}>
				{sortBy
					.replace(/\..*/, '')
					.replace(/_/g, ' ')
					.replace(/\w\S*/g, function (txt) {
						return txt.charAt(0).toUpperCase() + txt.substr(1).toLowerCase();
					})}
				{` `}{' '}
				{isOpen ? (
					<FiChevronDown style={{ verticalAlign: 'sub' }} />
				) : (
					<FiChevronUp style={{ verticalAlign: 'sub' }} />
				)}
			</div>
			{isOpen &&
				(type === 'movie' ? (
					<MovieDropdown getSortBy={getSortBy} />
				) : (
					<TvDropdown getSortBy={getSortBy} />
				))}
		</div>
	);
}

function MovieDropdown({ getSortBy }) {
	return (
		<Menu onClick={getSortBy}>
			<li data-sortby='popularity.desc'>Popularity</li>
			<li data-sortby='release_date.desc'>Release Date</li>
			<li data-sortby='revenue.desc'>Revenue</li>
			<li data-sortby='vote_count.desc'>Vote Count</li>
		</Menu>
	);
}

function TvDropdown({ getSortBy }) {
	return (
		<Menu onClick={getSortBy}>
			<li data-sortby='popularity.desc'>Popularity</li>
			<li data-sortby='first_air_date.desc'>First Air Date</li>
			<li data-sortby='vote_average.desc'>Vote Average</li>
		</Menu>
	);
}

const clickOutsideConfig = {
	handleClickOutside: () => Dropdown.handleClickOutside,
};

export default onClickOutside(Dropdown, clickOutsideConfig);
