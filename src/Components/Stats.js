function Stats({ items }) {
  if (!items.length)
    return (
      <footer className="stats">
        <em>Start by adding new item</em>
      </footer>
    );

  const numItem = items.length;
  const itemsPacked = items.filter((item) => item.packed).length;
  const presentgItems = Math.round((itemsPacked / numItem) * 100);

  return (
    <footer className="stats">
      <em>
        {presentgItems === 100
          ? "You have everything to go ✈️"
          : ` you have ${numItem} items on your list, and you allready packed
          ${itemsPacked} (${presentgItems}%)`}
      </em>
    </footer>
  );
}
export default Stats;
