import React from 'react';

function MovieList({ movies }) {
	if (!movies || movies.results === undefined) {
		return null;
	}

	return (
		<ul>
			{movies.results.map((movie) => {
				return <li key={movie.title}>{movie.title}</li>;
			})}
		</ul>
	);
}

export default MovieList;
