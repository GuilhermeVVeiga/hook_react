import { memo, useCallback, useState } from "react";

const Child = memo(function Child({ onAdd }) {
  return <button onClick={() => onAdd(1)}>Add 1</button>;
});

function DemoUseCallback() {
  const [count, setCount] = useState(0);
  const add = useCallback((x) => setCount((c) => c + x), []);
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <Child onAdd={add} />
      <span>Count: <b>{count}</b></span>
    </div>
  );
}

export default DemoUseCallback;
