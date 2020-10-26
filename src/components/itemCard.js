import React from 'react';
import { Link } from 'react-router-dom';
import { posterUrl } from '../config';

import { Card, Title, Img, SubContainer } from '../styled-components';

function ItemCard({
	type,
	id,
	title,
	name,
	poster_path,
	vote_average,
	release_date,
	first_air_date,
}) {
	let release = new Date(release_date || first_air_date);
	release = release.getFullYear();

	return (
		<Card>
			<Link to={`/${type}/${id}`}>
				{poster_path ? (
					<Img src={`${posterUrl}/${poster_path}`} alt={name} />
				) : (
					<Img src={process.env.PUBLIC_URL + '/images/poster.png'} alt={name} />
				)}
				<Title>{title || name}</Title>
				<SubContainer>
					<div>{vote_average} ★</div>
					<div>{release}</div>
				</SubContainer>
			</Link>
		</Card>
	);
}

export default ItemCard;
