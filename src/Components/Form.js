import { useState } from "react";

function Form({ onAddItem }) {
  const [description, setDescription] = useState("");
  const [quantity, setQuantity] = useState(1);

  const hendelsSubmit = function (e) {
    e.preventDefault();
    if (!description) return;
    const newItem = { description, quantity, package: false, id: Date.now() };

    onAddItem(newItem);

    setDescription("");
    setQuantity(1);
  };
  return (
    <div className="add-form" onSubmit={hendelsSubmit}>
      <h3>what would you like to add</h3>
      <select value={quantity} onChange={(e) => setQuantity(e.target.value)}>
        {Array.from({ length: 20 }, (_, i) => i + 1).map((num) => (
          <option value={num} key={num}>
            {num}
          </option>
        ))}
      </select>
      <input
        type="text"
        placeholder="Item ..."
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <button onClick={hendelsSubmit}>Add</button>
    </div>
  );
}
export default Form;
