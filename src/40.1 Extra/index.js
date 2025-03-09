import React from 'react';
import ReactDOM from 'react-dom/client';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

function App() {
  return (
    <div>
      <Header />
      <Menu />
      <Footer />
    </div>
  );
}
function Header() {
  return <h1>Fast React Pizza Co.</h1>;
}
function Menu() {
  return (
    <div>
      <menu>Our Menu</menu>
      <PizzaSpinaci />
      <Pizzafocaccia />
      <PizzaSpinaci />
      <Pizzafocaccia />
      <PizzaSpinaci />
      <Pizzafocaccia />
    </div>
  );
}
function Footer() {
  const Hour = new Date().getHours();
  const openHour = 8;
  const closeHour = 12;
  const isOpen = Hour >= openHour && Hour <= closeHour;
  console.log(isOpen);

  return (
    <footer>{new Date().toLocaleTimeString()} We're currently Open</footer>
  );
}

function PizzaSpinaci() {
  return (
    <div>
      <img src="\pizzas\spinaci.jpg" alt="Pizza Spinaci" />
      <h1>Pizza Spinaci</h1>
      <p>Tomato, mozarella, spinach, and ricotta cheese</p>
    </div>
  );
}

function Pizzafocaccia() {
  return (
    <div>
      <img src="\pizzas\focaccia.jpg" alt="Pizza Focaccia" />
      <h1>Pizza Focaccia</h1>
      <p>tomato, mozarella,spinach</p>
    </div>
  );
}
