import React, { useState, useEffect } from 'react';
import ShowList from '../components/showList';
import Pagination from '../components/pagination';
import { getShows } from '../api/apiUtils';
import ShowDropdown from '../components/showDropdown';
import Search from '../components/search';

function BrowseShows() {
	const [shows, setShows] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [sort, setSort] = useState('popular');

	useEffect(() => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
		loadData(sort, page);
	}, [sort, page]);

	function loadData(sort, page) {
		getShows(sort, page)
			.then((res) => {
				setShows(res.data);
				setLoading(false);
			})
			.catch((err) => {
				console.log(err);
			});
	}

	if (loading) {
		return <div>loading</div>;
	}

	return (
		<div style={{ marginLeft: '200px' }}>
			<div
				style={{
					display: 'flex',
					justifyContent: 'space-between',
					margin: '2rem 22px',
				}}
			>
				<Search />
				<ShowDropdown sort={sort} setSort={setSort} />
			</div>
			<ShowList shows={shows} />
			<Pagination
				page={page}
				total_pages={shows.total_pages}
				setPage={setPage}
			/>
		</div>
	);
}

export default BrowseShows;
