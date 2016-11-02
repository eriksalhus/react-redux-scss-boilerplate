import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';

function todos(state = {todos:[]}, action) {
	switch (action.type) {
		case 'ADD_TODO':
			return Object.assign({}, state, {
				todos: [...state.todos, action.todo]
			});
	}
	return state;
}

const rootReducer = combineReducers({
	todos,
	routing: routerReducer
});

export default rootReducer;
