import React, { useState, useEffect } from 'react';
import Dropdown from '../components/dropdown';
import MovieList from '../components/movieList';
import Pagination from '../components/pagination';
import { getMovies } from '../api/apiUtils';

function Browse(props) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState('popularity.desc');

	useEffect(() => {
		loadData(sort, page);
	}, [sort, page]);

	function loadData(sort, page) {
		getMovies(sort, page)
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
			<Dropdown sort={sort} setSort={setSort} />
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
