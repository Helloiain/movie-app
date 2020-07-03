import React, { useState, useEffect } from 'react';
import queryString from 'query-string';
import Dropdown from '../components/dropdown';
import Pagination from '../components/pagination';
import Search from '../components/search';
import Loading from '../components/loading';
import AppError from '../components/appError';
import { getBrowse } from '../api/apiUtils';

import ItemList from '../components/itemList';
import { Container, Nav } from '../styled-components';

function BrowseMovies(props) {
	const [movies, setMovies] = useState([]);
	const [sortBy, setSortBy] = useState('popularity.desc');
	const [isLoading, setIsLoading] = useState(true);
	const [error, setError] = useState(false);

	const type = 'movie';
	const page = queryString.parse(props.location.search).page || 1;

	useEffect(() => {
		loadData(type, sortBy, page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [sortBy, page]);

	const loadData = (type, sort, page) => {
		getBrowse(type, sort, page)
			.then((res) => {
				setMovies(res);
				setIsLoading(false);
				console.log(res);
			})
			.catch((err) => {
				setError(err);
			});
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
			<ItemList items={movies} type={type} />
			<Pagination page={movies.page} totalPages={movies.total_pages} />
		</Container>
	);
}

export default BrowseMovies;
