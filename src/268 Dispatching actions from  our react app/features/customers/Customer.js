import { useSelector } from 'react-redux';
// import store from '../../store';

function Customer() {
  const customer = useSelector((store) => store.customer.fullName);
  console.log(customer);
  // console.log(store.getState());//use this to 
  // debug next time to get a look at what the redux 
  // state looks like

  return <h2>👋 Welcome, {customer}</h2>;
}

export default Customer;
