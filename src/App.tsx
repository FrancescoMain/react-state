import { useState } from "react";

function App() {
  const [game, setGame] = useState({
    id: 1,
    player: {
      name: "Jhon",
    },
  });

  const handeClick = () => {};
  setGame({ ...game, player: { name: "Bob" } });

  const [pizza, setPizza] = useState({
    name: "Spicy Pepperoni",
    toppings: ["Mushroom"],
  });

  const handleClick = () => {
    pizza.toppings.push("Cheese");
  };

  return <div></div>;
}

export default App;
