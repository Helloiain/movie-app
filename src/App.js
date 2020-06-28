import React from 'react';
import { BrowserRouter, Route, Switch, Redirect } from 'react-router-dom';

import Browse from './pages/browse';
import Sidebar from './components/sidebar';

function App() {
	return (
		<BrowserRouter>
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
						render={(props) => <Browse {...props} />}
					></Route>
				</Switch>
			</div>
		</BrowserRouter>
	);
}

export default App;
