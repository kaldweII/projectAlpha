import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import customerReducer from './customer';
import contactReducer from './contact';
import contractReducer from './contract';
import employeeReducer from './employee';

import session from './session'

const rootReducer = combineReducers({
  session,
  customers: customerReducer,
  contacts: contactReducer,
  contracts: contractReducer,
  employees: employeeReducer,


});


let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
