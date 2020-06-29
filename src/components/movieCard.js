import React from 'react';
import { posterUrl } from '../config';

function MovieCard({ title, poster_path, vote_average, release_date }) {
	return (
		<div style={{ flex: '1 0 200px', margin: '1.5rem' }}>
			{poster_path ? (
				<img
					src={`${posterUrl}/${poster_path}`}
					alt='poster'
					style={{
						width: '100%',
						borderRadius: '.5rem',
					}}
				/>
			) : (
				<img src='./images/poster.png' alt='poster' />
			)}
			<h3>{title}</h3>
			<div style={{ display: 'flex', justifyContent: 'space-between' }}>
				<div>{vote_average} ★</div>
				<div>{release_date}</div>
			</div>
		</div>
	);
}

export default MovieCard;
