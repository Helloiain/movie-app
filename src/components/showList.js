import React from 'react';

function ShowList({ shows }) {
	if (!shows || shows.results === undefined) {
		return null;
	}

	return (
		<ul>
			{shows.results.map((show) => {
				return <li key={show.original_name}>{show.original_name}</li>;
			})}
		</ul>
	);
}

export default ShowList;
