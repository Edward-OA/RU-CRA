import { connect } from 'react-redux';

function formatCurrency(value) {
  return new Intl.NumberFormat('en', {
    style: 'currency',
    currency: 'USD',
  }).format(value);
}

function BalanceDisplay({ balance }) {
  return <div className="balance">{formatCurrency(balance)}</div>;
}

function mapsStateToProps(state) {
  return {
    balance: state.account.balance,
  };
}
export default connect(mapsStateToProps)(BalanceDisplay);
//connect() takes a new functon which returns a function
// and takes the component as an arguement
// i.e connect(mapsStateToProps) returns a new function
// what the new function connect(mapsStateToProps) returns is
// the new component which now takes balance prop
