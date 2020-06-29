import React from 'react';
import ShowCard from './showCard.js';

function ShowList({ shows }) {
	if (!shows || shows.results === undefined) {
		return null;
	}

	return (
		<main style={{ display: 'flex', flexWrap: 'wrap', marginTop: '60px' }}>
			{shows.results.map((show) => {
				return <ShowCard key={show.original_name} {...show} />;
			})}
		</main>
	);
}

export default ShowList;
