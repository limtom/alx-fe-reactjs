import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  function handleDecrese() {
    setCount((count) => count - 1);
  }

  function handleIncrese() {
    setCount((count) => count + 1);
  }

  function handleReset() {
    setCount(0);
  }

  return (
    <div>
      <p style={{ fontSize: "24px", fontWeight: "bold" }}>
        Current count: {count}
      </p>
      <button onClick={handleDecrese}>Decrement</button>
      <button onClick={handleReset}>Reset</button>
      <button onClick={handleIncrese}>Increment</button>
    </div>
  );
}

export default Counter;
