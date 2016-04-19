import { combineReducers } from 'redux';

function automobile(state = {}, action) {
  switch (action.type) {
    case 'PARK_AUTOMOBILE':
      return Object.assign({}, state, {
        driver: action.username,
        date_parked: action.date_parked,
      });
    case 'GEOLOCATION_RECEIVED':
      return Object.assign({}, state, {
        lat: action.lat,
        lon: action.lon,
      });
  }
  return state;
}

const rootReducer = combineReducers({ automobile });

export default rootReducer;
