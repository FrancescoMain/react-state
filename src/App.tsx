import { useState } from "react";

// import produce from "immer";

function App() {
  //esercizio 1
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jhon",
    },
  });

  const handleClick = () => {};
  setGame({ ...game, player: { name: "Bob" } });

  //esrcizio 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick2 = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  //esercizio 3
  const [discount, setDiscount] = useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  const handleClick3 = () => {
    setDiscount({
      ...discount,
      items: discount.items.map((item) =>
        item.id === 1 ? { ...item, quantity: 2 } : item
      ),
    });
  };

  return <div></div>;
}

export default App;
