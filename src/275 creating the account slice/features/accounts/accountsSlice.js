import { createSlice } from '@reduxjs/toolkit';

//INITIAL STATE
const initialState = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

const accountsSlice = createSlice({
  name: 'account',
  initialState,
  reducers: {
    deposit(state, action) {
      state.balance += action.payload;
    },
    withdraw(state, action) {
      state.balance -= action.payload;
    },
    requestLoan: {
      prepare(amount, purpose) {
        return {
          payload: { amount, purpose },
        };
      },

      //the prepare method is used here because the
      // payload cannot recieve 2 values following
      // the regular method so with react toolkit the
      // prepare method which is used to prepare the
      // data is used

      reducer(state, action) {
        if (state.loan > 0) return state;
        state.loan = action.payload.amount;
        state.loanPurpose = action.payload.purpose;
        state.balance = state.balance + action.payload.amount;
      },
    },
    payLoan(state, action) {
      state.balance -= state.loan;
      state.loan = 0;
      state.loanPurpose = '';
    },
  },
});

export const { deposit, withdraw, requestLoan, payLoan } =
  accountsSlice.actions;
export default accountsSlice.reducer;

// console.log(accountsSlice)

// //REDUCER
// export default function accountReducer(state = initialStateAccount, action) {
//   switch (action.type) {
//     case 'account/deposit':
//       return {
//         ...state,
//         balance: state.balance + action.payload,
//         isLoading: false,
//       };
//     case 'account/withdraw':
//       return { ...state, balance: state.balance - action.payload };
//     case 'account/requestLoan':
//       return {
//         ...state,
//         loan: action.payload.amount,
//         loanPurpose: action.payload.purpose,
//         balance: state.balance + action.payload.amount,
//       };
//     case 'account/payLoan':
//       return {
//         ...state,
//         loan: 0,
//         loanPurpose: '',
//         balance: state.balance - state.loan,
//       };
//     case 'account/convertingCurency':
//       return { ...state, isLoading: true };
//     default:
//       return state;
//   }
// }

// //ACTION CREATORS
// export function deposit(amount, currency) {
//   if (currency === 'USD') return { type: 'account/deposit', payload: amount };
//   //returning a second functions alerts redux that it is
//   // asynchronous and needs to be executed before
//   // dispatching anything to the store
//   return async function (dispatch, getState) {
//     dispatch({ type: 'account/convertingCurency' });
//     //API call
//     const res = await fetch(
//       `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
//     );
//     const data = await res.json();
//     const converted = data.rates.USD;
//     //return 'action'
//     dispatch({ type: 'account/deposit', payload: converted });
//   };
// }

// export function withdraw(amount) {
//   return { type: 'account/withdraw', payload: amount };
// }

// export function requestLoan(amount, purpose) {
//   return {
//     type: 'account/requestLoan',
//     payload: { amount: amount, purpose: purpose },
//   };
// }

// export function payLoan() {
//   return { type: 'account/payLoan' };
// }
