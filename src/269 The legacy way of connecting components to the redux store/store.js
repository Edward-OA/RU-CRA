import { combineReducers, createStore } from 'redux';
import accountReducer from './features/accounts/accountsSlice';
import customerReducer from './features/customers/customerSlice';

const rootReducer = combineReducers({
  account: accountReducer,
  customer: customerReducer,
});

const store = createStore(rootReducer);


export default store 