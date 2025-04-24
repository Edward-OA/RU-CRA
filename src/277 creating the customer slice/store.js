import accountReducer from './features/accounts/accountsSlice';
import customerReducer from './features/customers/customerSlice';

import { configureStore } from '@reduxjs/toolkit';

const store = configureStore({
  reducer: {
    account: accountReducer,
    customer: customerReducer,
  },
});

export default store;
//in order to use the middleware we need to first
// install middleware package
//apply middleware to our store
//use middleware
