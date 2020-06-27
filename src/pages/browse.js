import React, { useState, useEffect } from 'react';
import queryString from 'querystring';
import MovieList from '../components/movieList';
import Pagination from '../components/pagination';
import { getMovies } from '../api/apiUtils';

function Browse(props) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(
		queryString.parse(props.location.search).page || 1
	);

	useEffect(() => {
		loadData(page);
	}, [page]);

	function loadData(page) {
		getMovies(page)
			.then((res) => {
				setMovies(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	if (loading) {
		return <div>loading</div>;
	}

	return (
		<div>
			<MovieList movies={movies} />
			<Pagination
				page={page}
				totalPages={movies.total_pages}
				setPage={setPage}
			/>
		</div>
	);
}

export default Browse;
