import React, { useState, useEffect } from 'react';
import ShowList from '../components/showList';
import Pagination from '../components/pagination';
import { getShows } from '../api/apiUtils';
import ShowDropdown from '../components/showDropdown';

function BrowseShows() {
	const [shows, setShows] = useState([]);
	const [loading, setLoading] = useState(true);
	const [page, setPage] = useState(1);
	const [type, setType] = useState('popular');

	useEffect(() => {
		loadData(type, page);
	}, [type, page]);

	function loadData(type, page) {
		getShows(type, page)
			.then((res) => {
				console.log(res.data);
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
			<ShowDropdown type={type} setType={setType} />
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
