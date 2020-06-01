import React, { useState, useEffect } from 'react';
import { getMovies } from './api/apiUtils';

function App() {
	const [data, setData] = useState();

	useEffect(() => {
		loadData();
	}, []);

	function loadData() {
		getMovies().then((res) => {
			setData(res.data);
		});
	}

	console.log(data);

	return <div>Hello world</div>;
}

export default App;
