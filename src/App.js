import { useState } from "react";
import Logo from "./Components/Logo";
import Form from "./Components/Form";
import PackingList from "./Components/PackingList";
import Stats from "./Components/Stats";
const initialTtems = [
  {
    id: 1,
    description: "passports",
    quantity: 2,
    packed: false,
  },
  {
    id: 2,
    description: "tomaeto",
    quantity: 2,
    packed: true,
  },
];

function App() {
  const [items, setItems] = useState(initialTtems);
  function hendelAddItem(item) {
    setItems((items) => [item, ...items]);
  }

  function handelDeleteItem(id) {
    setItems(items.filter((item) => item.id !== id));
  }
  function handelToggelItem(id) {
    setItems(
      items.map((item) =>
        item.id === id ? { ...item, packed: !item.packed } : item
      )
    );
  }
  function handelDeleteAllItems() {
    const confermDelete = window.confirm(
      "are you sur you want to delete all items !"
    );
    if (confermDelete) setItems([]);
  }

  return (
    <div>
      <Logo />
      <Form onAddItem={hendelAddItem} />
      <PackingList
        items={items}
        deleteItem={handelDeleteItem}
        onToggelItem={handelToggelItem}
        onDeleteAllItems={handelDeleteAllItems}
      />
      <Stats items={items} />
    </div>
  );
}

export default App;
