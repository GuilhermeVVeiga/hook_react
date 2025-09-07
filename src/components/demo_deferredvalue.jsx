import { useDeferredValue, useMemo, useState } from "react";

function DemoDeferredValue() {
  const [q, setQ] = useState("");
  const deferred = useDeferredValue(q); // "delayed" value for heavy renders
  const big = useMemo(() => {
    const arr = Array.from({ length: 10000 }, (_, i) => `Line ${i}`);
    return arr.filter((x) => x.includes(deferred)).slice(0, 200);
  }, [deferred]);
  return (
    <div>
      <input value={q} onChange={(e) => setQ(e.target.value)} placeholder="Type to filter" />
      <ul>{big.map((x) => <li key={x}>{x}</li>)}</ul>
    </div>
  );
}

export default DemoDeferredValue;
