export default function Stats({ items }) {
    if (!items.length)
      return (
        <p className="stats">
          <em>Start adding items to your list 🚀</em>
        </p>
      );
    const numItems = items.length;
    const numPacked = items.filter((item) => item.packed).length;
    const numPercentage = Math.round((numPacked / numItems) * 100);
    return (
      <footer className="stats">
        <em>
          {numPercentage === 100
            ? 'all packed and ready to go ✈️'
            : `💼 You have ${numItems} items on your list and you already packed
          ${numPacked} ${numPercentage}%`}
        </em>
      </footer>
    );
  }
  