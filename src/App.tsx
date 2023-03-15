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
  return <div></div>;
}

export default App;
