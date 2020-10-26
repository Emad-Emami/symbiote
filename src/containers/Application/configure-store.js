import { createStore, applyMiddleware } from 'redux';
import rootReducer, { initialState } from './root-reducer';
import { composeWithDevTools } from 'remote-redux-devtools';
import { queryMiddleware } from 'redux-query';
import superagentInterface from 'redux-query-interface-superagent';
import authenticationMiddleware from './middlewares/authentication-middleware';

export const getQueries = (state) => state.queries;
export const getEntities = (state) => state.entities;

const composeEnhancers = composeWithDevTools({
  realtime: true,
  name: 'Symbiote',
});

console.log(superagentInterface);

function configureStore() {
  const store = createStore(
    rootReducer,
    initialState,
    composeEnhancers(
      applyMiddleware(
        authenticationMiddleware,
        queryMiddleware(superagentInterface, getQueries, getEntities),
      ),
    ),
  );
  return store;
}

export default configureStore;
