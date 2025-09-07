import { useState, useTransition, useMemo } from "react";

function DemoUseTransition() {
  const [query, setQuery] = useState("");
  const [isPending, startTransition] = useTransition();

  const items = useMemo(() => Array.from({ length: 15000 }, (_, i) => `Item ${i}`), []);

  const filtered = useMemo(
    () => items.filter((i) => i.toLowerCase().includes(query.toLowerCase())).slice(0, 200),
    [items, query]
  );

  return (
    <div>
      <input placeholder="Search..." onChange={(e) => { const q = e.target.value; startTransition(() => setQuery(q)); }} />
      {isPending && <p>Filtering…</p>}
      <ul>{filtered.map((i) => <li key={i}>{i}</li>)}</ul>
    </div>
  );
}

export default DemoUseTransition;
