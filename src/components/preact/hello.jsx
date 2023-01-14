import { useState } from "preact/hooks";

export const Hello = () => {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Hello, world!</h1>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click me {count}
      </button>
    </div>
  );
};
