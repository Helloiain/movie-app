import React, { useState, useEffect } from 'react';
import Search from '../components/search';
import Pagination from '../components/pagination';
import { useParams } from 'react-router-dom';
import { getSearch } from '../api/apiUtils';
import { posterUrl } from '../config';

function SearchPage() {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const { search } = useParams();
	const query = search;

	useEffect(() => {
		loadData(query);
	}, [query]);

	const loadData = (query) => {
		getSearch(query)
			.then((res) => {
				setResults(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	};

	console.log(results.results);

	if (loading) {
		return <div>loading</div>;
	}

	return (
		<div style={{ marginLeft: '200px' }}>
			<div style={{ margin: '2rem 22px' }}>
				<Search />
				<h1>{query}</h1>
			</div>
			<div style={{ display: 'flex', flexWrap: 'wrap' }}>
				{results.results.map((result) => {
					return (
						<div style={{ flex: '1 0 200px', margin: '1.5rem' }}>
							{result.poster_path ? (
								<img
									src={`${posterUrl}/${result.poster_path}`}
									alt='poster'
									style={{
										width: '100%',
									}}
								/>
							) : (
								<img src='./images/poster.png' alt='poster' />
							)}
							<h3>{result.title}</h3>
							<div style={{ display: 'flex', justifyContent: 'space-between' }}>
								<div>{result.vote_average} ★</div>
								<div>{result.release}</div>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
}

export default SearchPage;
