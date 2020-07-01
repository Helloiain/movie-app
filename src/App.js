import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BrowseMovies from './pages/browseMovies';
import BrowseShows from './pages/browseShows';
import Sidebar from './components/sidebar';
import Search from './pages/searchPage';

function App() {
	return (
		<Router>
			<div
				style={{
					display: 'flex',
				}}
			>
				<Sidebar />
				<Switch>
					<Route exact={true} path='/'>
						<BrowseMovies />
					</Route>
					<Route path='/tv'>
						<BrowseShows />
					</Route>
					<Route path='/search/:search'>
						<Search />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
