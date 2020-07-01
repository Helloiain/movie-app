import React, { useState, useEffect } from 'react';
import Search from '../components/search';
import Pagination from '../components/pagination';
import Loading from '../components/loading';
import { useParams } from 'react-router-dom';
import { getSearch } from '../api/apiUtils';
import { posterUrl } from '../config';

function SearchPage() {
	const [results, setResults] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const { search } = useParams();
	const query = search;

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		loadData(query, page);
	}, [query, page]);

	const loadData = (query, page) => {
		getSearch(query, page)
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
		return <Loading />;
	}

	if (results.results === undefined || results.results.length === 0) {
		return (
			<div style={{ marginLeft: '222px' }}>
				<h1>Oh No!</h1>
				<p>It looks like there were no results found for {query}</p>
				<a className='button' href='/'>
					Return Home
				</a>
			</div>
		);
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
						<div
							key={result.title}
							style={{ flex: '1 0 200px', margin: '1.5rem' }}
						>
							{result.poster_path ? (
								<img
									src={`${posterUrl}/${result.poster_path}`}
									alt='poster'
									style={{
										width: '100%',
									}}
								/>
							) : (
								<img src='./images/poster.png' alt={result.title} />
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
			<Pagination
				page={page}
				totalPages={results.total_pages}
				setPage={setPage}
			/>
		</div>
	);
}

export default SearchPage;
