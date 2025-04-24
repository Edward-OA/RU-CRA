//INITIAL STATE
const initialStateAccount = {
  balance: 0,
  loan: 0,
  loanPurpose: '',
  isLoading: false,
};

//REDUCER
export default function accountReducer(state = initialStateAccount, action) {
  switch (action.type) {
    case 'account/deposit':
      return {
        ...state,
        balance: state.balance + action.payload,
        isLoading: false,
      };
    case 'account/withdraw':
      return { ...state, balance: state.balance - action.payload };
    case 'account/requestLoan':
      if (state.loan > 0) return state;

      return {
        ...state,
        loan: action.payload.amount,
        loanPurpose: action.payload.purpose,
        balance: state.balance + action.payload.amount,
      };
    case 'account/payLoan':
      return {
        ...state,
        loan: 0,
        loanPurpose: '',
        balance: state.balance - state.loan,
      };
    case 'account/convertingCurency':
      return { ...state, isLoading: true };
    default:
      return state;
  }
}

//ACTION CREATORS
export function deposit(amount, currency) {
  if (currency === 'USD') return { type: 'account/deposit', payload: amount };
  //returning a second functions alerts redux that it is
  // asynchronous and needs to be executed before
  // dispatching anything to the store
  return async function (dispatch, getState) {
    dispatch({ type: 'account/convertingCurency' });
    //API call
    const res = await fetch(
      `https://api.frankfurter.app/latest?amount=${amount}&from=${currency}&to=USD`
    );
    const data = await res.json();
    const converted = data.rates.USD;
    //return 'action'
    dispatch({ type: 'account/deposit', payload: converted });
  };
}

export function withdraw(amount) {
  return { type: 'account/withdraw', payload: amount };
}

export function requestLoan(amount, purpose) {
  return {
    type: 'account/requestLoan',
    payload: { amount: amount, purpose: purpose },
  };
}

export function payLoan() {
  return { type: 'account/payLoan' };
}
