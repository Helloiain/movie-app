import React from 'react';
import {
	BrowserRouter as Router,
	Route,
	Redirect,
	Switch,
} from 'react-router-dom';

import BrowseMovies from './pages/browseMovies';
import BrowseShows from './pages/browseShows';
import Sidebar from './components/sidebar';
import Search from './pages/searchPage';
import Detail from './pages/detail';

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
						<Redirect from='/' to='/movie' />
					</Route>
					<Route exact={true} path='/movie'>
						<BrowseMovies />
					</Route>
					<Route
						path='/details/:type/:id'
						render={(props) => <Detail {...props} />}
					></Route>
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
