import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import BrowseMovies from './pages/browseMovies';
import BrowseShows from './pages/browseShows';
import Sidebar from './components/sidebar';

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
					<Route
						exact={true}
						path='/'
						render={(props) => <BrowseMovies {...props} />}
					></Route>
					<Route>
						<BrowseShows />
					</Route>
				</Switch>
			</div>
		</Router>
	);
}

export default App;
