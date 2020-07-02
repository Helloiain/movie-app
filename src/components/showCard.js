import React from 'react';
import { Link } from 'react-router-dom';
import { posterUrl } from '../config';

function ShowCard({ id, name, poster_path, vote_average, first_air_date }) {
	let release = new Date(first_air_date);
	release = release.getFullYear();

	return (
		<div style={{ flex: '1 0 200px', margin: '1.5rem' }}>
			<Link to={`/details/tv/${id}`}>
				{poster_path ? (
					<img
						src={`${posterUrl}/${poster_path}`}
						alt={name}
						style={{
							width: '100%',
						}}
					/>
				) : (
					<img src={process.env.PUBLIC_URL + '/images/poster.png'} alt={name} />
				)}
				<h3>{name}</h3>
				<div style={{ display: 'flex', justifyContent: 'space-between' }}>
					<div>{vote_average} ★</div>
					<div>{release}</div>
				</div>
			</Link>
		</div>
	);
}

export default ShowCard;
