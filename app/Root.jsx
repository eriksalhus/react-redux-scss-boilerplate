import React, { PropTypes } from 'react';
import { Provider } from 'react-redux';
import { Router, Route } from 'react-router';
import AppComponent from './AppComponent.jsx';

const Root = ({ store, history }) => (
	<Provider store={store}>
		<Router history={history}>
			<Route path="/" component={AppComponent} />
		</Router>
	</Provider>
);

Root.PropTypes = {
	store: PropTypes.object.isRequired
};

export default Root;