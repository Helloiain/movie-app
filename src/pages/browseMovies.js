import React, { useState, useEffect } from 'react';
import Dropdown from '../components/dropdown';
import Pagination from '../components/pagination';
import Search from '../components/search';
import Loading from '../components/loading';
import { getBrowse } from '../api/apiUtils';

import ItemList from '../components/itemList';
import { Container, Nav } from '../styled-components';

function BrowseMovies(props) {
	const [movies, setMovies] = useState([]);
	const [sortBy, setSortBy] = useState('popularity.desc');
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const type = 'movie';

	useEffect(() => {
		loadData(type, sortBy, page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [sortBy, page]);

	const loadData = (type, sort, page) => {
		getBrowse(type, sort, page).then((res) => {
			setMovies(res);
			setIsLoading(false);
			console.log(res);
		});
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container>
			<Nav>
				<Search />
				<Dropdown sortBy={sortBy} setSortBy={setSortBy} type={type} />
			</Nav>
			<ItemList items={movies} type={type} />
			<Pagination
				page={page}
				totalPages={movies.total_pages}
				setPage={setPage}
			/>
		</Container>
	);

	// const [movies, setMovies] = useState([]);
	// const [loading, setLoading] = useState(true);
	// const [page, setPage] = useState(1);
	// const [sort, setSort] = useState('popularity.desc');

	// useEffect(() => {
	// 	window.scrollTo({ top: 0, behavior: 'smooth' });
	// 	loadData(sort, page);
	// }, [sort, page]);

	// function loadData(sort, page) {
	// 	getMovies(sort, page)
	// 		.then((res) => {
	// 			setMovies(res.data);
	// 			setLoading(false);
	// 		})
	// 		.catch((err) => {
	// 			console.log(err);
	// 		});
	// }

	// if (loading) {
	// 	return <Loading />;
	// }

	// return (
	// 	<div style={{ marginLeft: '200px' }}>
	// 		<div
	// 			style={{
	// 				display: 'flex',
	// 				justifyContent: 'space-between',
	// 				margin: '2rem 22px',
	// 			}}
	// 		>
	// 			<Search />
	// 			<MovieDropdown sort={sort} setSort={setSort} />
	// 		</div>
	// 		<MovieList movies={movies} />
	// 		<Pagination
	// 			page={page}
	// 			totalPages={movies.total_pages}
	// 			setPage={setPage}
	// 		/>
	// 	</div>
	// );
}

export default BrowseMovies;
