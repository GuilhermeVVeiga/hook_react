import { useMemo, useState } from "react";

function slowFib(n) {
  return n <= 1 ? n : slowFib(n - 1) + slowFib(n - 2);
}

function DemoUseMemo() {
  const [n, setN] = useState(25);
  const [dark, setDark] = useState(false);

  const result = useMemo(() => slowFib(n), [n]);

  return (
    <div style={{ background: dark ? "#111" : "#fff", color: dark ? "#fff" : "#111", padding: 12, borderRadius: 8 }}>
      <input type="number" value={n} onChange={(e) => setN(parseInt(e.target.value || "0", 10))} />
      <button onClick={() => setDark((d) => !d)} style={{ marginLeft: 8 }}>Toggle Theme</button>
      <div style={{ marginTop: 8 }}>Fib({n}) = <b>{result}</b></div>
    </div>
  );
}

export default DemoUseMemo;
