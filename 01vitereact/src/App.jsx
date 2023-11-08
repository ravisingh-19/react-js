import { useState } from "react";

function App() {
  const [counter, setCounter] = useState(0);

  const addValue = () => {
    setCounter(counter + 1);
    setCounter(counter + 2);
    setCounter((prev) => prev + 3);
  };

  return (
    <>
      <h1>Hello React with Vite</h1>
      <p>Counter: {counter}</p>
      <button onClick={addValue}>Add Value</button>
    </>
  );
}

export default App;
