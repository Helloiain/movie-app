import React from 'react';
import ItemCard from '../components/itemCard';

import { Main } from '../styled-components';

function ItemList({ items, type }) {
	if (!items || items.results === undefined) {
		return null;
	}

	return (
		<Main>
			{items.results.map((item) => {
				return <ItemCard key={item.title || item.name} type={type} {...item} />;
			})}
		</Main>
	);
}

export default ItemList;
