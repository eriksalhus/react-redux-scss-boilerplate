import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { browserHistory } from 'react-router';
import { syncHistoryWithStore } from 'react-router-redux';
import injectTapEventPlugin from 'react-tap-event-plugin';
import configureStore from './store';
import Root from './Root.jsx';

// Needed for onTouchTap
// http://stackoverflow.com/a/34015469/988941
injectTapEventPlugin();


const store = configureStore();
const history = syncHistoryWithStore(browserHistory, store);
const props = { store, history };

ReactDOM.render(<Root {...props} />, document.getElementById('app'));
