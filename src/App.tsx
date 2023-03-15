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

  const handeClick = () => {};
  setGame({ ...game, player: { name: "Bob" } });

  //esrcizio 2
  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    setPizza({ ...pizza, toppings: [...pizza.toppings, "Cheese"] });
  };

  //esercizio 3
  useState({
    discount: 0.1,
    items: [
      { id: 1, title: "Product 1", quantity: 1 },
      { id: 2, title: "Product 2", quantity: 1 },
    ],
  });

  return <div></div>;
}

export default App;
