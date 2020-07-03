import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Pagination from '../components/pagination';
import { getShows, getBrowse } from '../api/apiUtils';
import Dropdown from '../components/dropdown';
import Loading from '../components/loading';
import Search from '../components/search';
import AppError from '../components/appError';

import ItemList from '../components/itemList';
import { Container, Nav } from '../styled-components';

function BrowseShows(props) {
	const [shows, setShows] = useState([]);
	const [sortBy, setSortBy] = useState('popularity.desc');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const type = 'tv';
	const page = queryString.parse(props.location.search).page || 1;

	useEffect(() => {
		loadData(type, sortBy, page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [sortBy, page]);

	const loadData = (type, sort, page) => {
		getBrowse(type, sort, page)
			.then((res) => {
				setShows(res);
				setIsLoading(false);
				console.log(res);
			})
			.catch((err) => setError(err));
	};

	if (isLoading) {
		return <Loading />;
	}

	if (error) {
		return <AppError />;
	}

	return (
		<Container>
			<Nav>
				<Search />
				<Dropdown sortBy={sortBy} setSortBy={setSortBy} type={type} />
			</Nav>
			<ItemList items={shows} type={type} />
			<Pagination page={shows.page} totalPages={shows.total_pages} />
		</Container>
	);
}

export default BrowseShows;
