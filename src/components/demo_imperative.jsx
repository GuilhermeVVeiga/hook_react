import { forwardRef, useImperativeHandle, useRef, useState } from "react";

const FancyInput = forwardRef(function FancyInput(_, ref) {
  const inner = useRef(null);
  const [v, setV] = useState("");
  useImperativeHandle(ref, () => ({
    focus: () => inner.current?.focus(),
    clear: () => setV(""),
  }), []);
  return <input ref={inner} value={v} onChange={(e) => setV(e.target.value)} placeholder="Imperative API..." />;
});

function DemoImperative() {
  const api = useRef(null);
  return (
    <div style={{ display: "flex", gap: 8, alignItems: "center" }}>
      <FancyInput ref={api} />
      <button onClick={() => api.current?.focus()}>Focus</button>
      <button onClick={() => api.current?.clear()}>Clear</button>
    </div>
  );
}

export default DemoImperative;
