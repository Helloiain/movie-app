import React from 'react';
import { Link } from 'react-router-dom';
import { posterUrl } from '../config';

function MovieCard({ id, title, poster_path, vote_average, release_date }) {
	let release = new Date(release_date);
	release = release.getFullYear();

	return (
		<div style={{ flex: '1 0 200px', margin: '1.5rem' }}>
			<Link
				style={{ '&:hover': { color: 'inherit' } }}
				to={`/details/movie/${id}`}
			>
				{poster_path ? (
					<img
						src={`${posterUrl}/${poster_path}`}
						alt={`${title}`}
						style={{
							width: '100%',
						}}
					/>
				) : (
					<img
						src={process.env.PUBLIC_URL + '/images/poster.png'}
						alt={title}
					/>
				)}
				<h3>{title}</h3>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>{vote_average} ★</div>
					<div>{release}</div>
				</div>
			</Link>
		</div>
	);
}

export default MovieCard;
