import React, { useState, useEffect } from 'react';
import MovieDropdown from '../components/movieDropdown';
import MovieList from '../components/movieList';
import Pagination from '../components/pagination';
import Search from '../components/search';
import { getMovies } from '../api/apiUtils';

function BrowseMovies(props) {
	const [movies, setMovies] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState('popularity.desc');

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
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
		<div style={{ marginLeft: '200px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '2rem 22px',
				}}
			>
				<Search />
				<MovieDropdown sort={sort} setSort={setSort} />
			</div>
			<MovieList movies={movies} />
			<Pagination
				page={page}
				totalPages={movies.total_pages}
				setPage={setPage}
			/>
		</div>
	);
}

export default BrowseMovies;
