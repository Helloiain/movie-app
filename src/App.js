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
					<Route
						exact={true}
						path='/movie'
						render={(props) => <BrowseMovies {...props} />}
					></Route>
					<Route
						exact={true}
						path='/tv'
						render={(props) => <BrowseShows {...props} />}
					></Route>
					<Route
						path='/:type/:id?'
						render={(props) => <Detail {...props} />}
					></Route>
					<Route path='/search/:search'>
						<Search />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
