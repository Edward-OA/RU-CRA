//INITIAL STATE
const initialStateCustomer = {
  fullName: '',
  nationalID: '',
  createdAt: '',
};

//REDUCER
export default function customerReducer(state = initialStateCustomer, action) {
  switch (action.type) {
    case 'customer/createCustomer':
      return {
        ...state,
        fullName: action.payload.fullName,
        nationalID: action.payload.nationalID,
        createdAt: action.payload.createdAt,
      };
    case 'customer/updateName':
      return { ...state, fullName: action.payload.fullName };
    default:
      return state;
  }
}

//ACTION CREATORS
export function createCustomer(fullName, nationalID) {
  return {
    type: 'customer/createCustomer',
    payload: { fullName, nationalID, createdAt: new Date().toISOString() },
  };
}

export function updateName(fullName) {
  return { type: 'customer/updateName', payload: { fullName } };
}

//   store.dispatch(createCustomer('Okolo Amobi', '125478'));
//   store.dispatch(updateName('Okolo Ammobii'));
//   console.log(store.getState());
