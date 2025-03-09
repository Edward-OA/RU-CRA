import { useState } from 'react';
import Logo from './Logo';
import PackingList from './Packling list';
import Form from './Form';
import Stats from './stat';

// const initialItems = [
//   { id: 1, description: 'Passports', quantity: 2, packed: true },
//   { id: 2, description: 'Socks', quantity: 12, packed: false },
// ];

export default function App() {
  const [items, setItems] = useState([]);

  function handleAddItems(item) {
    setItems((items) => [...items, item]);
  }

  function handleDeleteItem(id) {
    setItems((items) => items.filter((item) => item.id !== id));
  }

  function handleToggleItem(id) {
    setItems((items) =>
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handleClearList() {
    setItems([]);
    alert('Start a new list ?');
  }
  return (
    <div className="app">
      <Logo />
      <Form onAddItems={handleAddItems} />
      <PackingList
        items={items}
        onDeleteItem={handleDeleteItem}
        onToggleItem={handleToggleItem}
        onClearList={handleClearList}
      />
      <Stats items={items} />
    </div>
  );
}

// Array.from({ length: 20 }, (_, i) => i + 1): This
// creates an array of numbers from 1 to 20.
// { length: 20 }: Specifies the length of the array.
// (_, i) => i + 1: A mapping function that takes the
// index i and returns i + 1 to create the numbers 1 through 20.
// map((num) => ( ... )): Maps each number in the array to an <option> element.
// <option value={num} key={num}>: Creates an <option> element
// with the value and key set to the number.
// {num}: The display text of the option.
