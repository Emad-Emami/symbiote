import { combineReducers } from 'redux';
import { entitiesReducer, queriesReducer } from 'redux-query';
// Get all reducers initial values together
import userReducerInitialState from '@containers/User/reducer';
import bookingsReducerInitialState from '@containers/Bookings/reducer';

export const initialState = {
  entities: {
    user: userReducerInitialState,
    bookings: bookingsReducerInitialState,
  },
};

const rootReducer = combineReducers({
  entities: entitiesReducer,
  queries: queriesReducer,
});

export default rootReducer;
