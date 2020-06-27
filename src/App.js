import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Browse from './pages/browse';
import Sidebar from './components/sidebar';

function App() {
	return (
		<BrowserRouter>
			<Sidebar />
			<Switch>
				<Route path='/' exact={true}>
					<Redirect from='/' to='/browse/popular' />
				</Route>
				<Route path='/browse' exact={true}>
					<Redirect from='/browse' to='/browse/popular' />
				</Route>
				<Route
					exact={true}
					path='/browse/:type'
					render={(props) => <Browse {...props} />}
				></Route>
			</Switch>
		</BrowserRouter>
	);
}

export default App;
