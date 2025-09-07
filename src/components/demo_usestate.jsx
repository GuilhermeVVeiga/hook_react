import { useState } from "react";

function DemoUseState() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState("");

  return (
    <div>
      <div style={{ display: "flex", gap: 8, alignItems: "center", marginBottom: 8 }}>
        <button onClick={() => setCount((c) => c + 1)}>+1</button>
        <button onClick={() => setCount(0)}>Reset</button>
        <span>Counter: <b>{count}</b></span>
      </div>
      <input placeholder="Type something..." value={text} onChange={(e) => setText(e.target.value)} />
      <div style={{ marginTop: 8 }}>Text: <b>{text || "—"}</b></div>
    </div>
  );
}

export default DemoUseState;
