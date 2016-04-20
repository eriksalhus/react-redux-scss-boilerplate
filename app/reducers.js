import { combineReducers } from 'redux';

function user(state = {}, action) {
  switch (action.type) {
    case 'SAVE':
      return Object.assign({}, state, {
        userSaved: true,
      });
    case 'CANCEL':
      return Object.assign({}, state, {
        userCancelled: true
      });
  }
  return state;
}

const rootReducer = combineReducers({ user });

export default rootReducer;
