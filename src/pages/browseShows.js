import React, { useState, useEffect } from 'react';
import Pagination from '../components/pagination';
import { getShows, getBrowse } from '../api/apiUtils';
import Dropdown from '../components/dropdown';
import Loading from '../components/loading';
import Search from '../components/search';

import ItemList from '../components/itemList';
import { Container, Nav } from '../styled-components';

function BrowseShows() {
	const [shows, setShows] = useState([]);
	const [sortBy, setSortBy] = useState('popularity.desc');
	const [page, setPage] = useState(1);
	const [isLoading, setIsLoading] = useState(true);

	const type = 'tv';

	useEffect(() => {
		loadData(type, sortBy, page);
		window.scrollTo({ top: 0, behavior: 'smooth' });
	}, [sortBy, page]);

	const loadData = (type, sort, page) => {
		getBrowse(type, sort, page).then((res) => {
			setShows(res);
			setIsLoading(false);
			console.log(res);
		});
	};

	if (isLoading) {
		return <Loading />;
	}

	return (
		<Container>
			<Nav>
				<Search />
				<Dropdown sortBy={sortBy} setSortBy={setSortBy} type={type} />
			</Nav>
			<ItemList items={shows} type={type} />
			<Pagination
				page={page}
				totalPages={shows.total_pages}
				setPage={setPage}
			/>
		</Container>
	);
}

export default BrowseShows;
