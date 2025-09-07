import { useRef, useState } from "react";

function DemoUseRef() {
  const inputRef = useRef(null);
  const previous = useRef("");
  const [value, setValue] = useState("");

  function onChange(e) {
    previous.current = value;
    setValue(e.target.value);
  }

  return (
    <div>
      <div style={{ display: "flex", gap: 8, marginBottom: 8 }}>
        <button onClick={() => inputRef.current?.focus()}>Focus</button>
        <button onClick={() => { if (inputRef.current) { inputRef.current.value = ""; setValue(""); } }}>Clear</button>
      </div>
      <input ref={inputRef} value={value} onChange={onChange} placeholder="Type..." />
      <div style={{ marginTop: 8 }}>Current: <b>{value}</b> | Previous (ref): <b>{previous.current}</b></div>
    </div>
  );
}

export default DemoUseRef;
