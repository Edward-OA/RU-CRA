import { useEffect, useState } from 'react';

export default function App() {
  const [amount, setAmount] = useState(1);
  const [fromCur, setFromCur] = useState('EUR');
  const [toCur, setToCur] = useState('USD');
  const [curData, setCurData] = useState('');
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function fetchCurrencyData() {
      // setIsLoading(true);
      try {
        const res = await fetch(
          `https://api.frankfurter.app/latest?amount=${amount}&from=${fromCur}&to=${toCur}`
        );
        const data = await res.json();
        console.log(data.rates)
        if (data.rates && data.rates[toCur]) {
          setCurData(data.rates[toCur]);
        } else {
          setCurData('Data not found');
        }
      } catch (error) {
        console.error('Error fetching data:', error);
        setCurData('Error fetching data');
      }
      setIsLoading(false);
    }

    if (fromCur === toCur) {
      setCurData(amount);
    } else {
      fetchCurrencyData();
    }
  }, [amount, fromCur, toCur]);

  return (
    <div>
      <input
        type="number"
        placeholder="Amount..."
        value={amount}
        onChange={(e) => setAmount(Number(e.target.value))}
        disabled={isLoading}
      />
      <select
        value={fromCur}
        onChange={(e) => setFromCur(e.target.value)}
        // disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <select
        value={toCur}
        onChange={(e) => setToCur(e.target.value)}
        // disabled={isLoading}
      >
        <option value="USD">USD</option>
        <option value="EUR">EUR</option>
        <option value="CAD">CAD</option>
        <option value="INR">INR</option>
      </select>
      <p>
        {isLoading ? 'Loading...' : `${curData} ${toCur}`}
      </p>
    </div>
  );
}
