function Item({ item, deleteItem, onToggelItem }) {
  return (
    <li>
      <input
        type="checkbox"
        value={item.packed}
        onChange={() => onToggelItem(item.id)}
        checked={item.packed}
      />
      <span style={item.packed ? { textDecoration: "line-through" } : null}>
        {item.description}
      </span>
      <botton onClick={() => deleteItem(item.id)} style={{ cursor: "pointer" }}>
        ❌
      </botton>
    </li>
  );
}
export default Item;
