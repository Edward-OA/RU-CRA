import { applyMiddleware, combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountsSlice';
import customerReducer from './features/customers/customerSlice';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);

export default store;
//in order to use the middleware we need to first
// install middleware package
//apply middleware to our store
//use middleware
