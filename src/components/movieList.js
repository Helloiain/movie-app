import React from 'react';
import MovieCard from './movieCard';

function MovieList({ movies }) {
	if (!movies || movies.results === undefined) {
		return null;
	}

	return (
		<main style={{ display: 'flex', flexWrap: 'wrap', marginTop: '60px' }}>
			{movies.results.map((movie) => {
				return <MovieCard key={movie.title} {...movie} />;
			})}
		</main>
	);
}

export default MovieList;
