import { useReducer, useState } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "add":
      return [...state, { id: Date.now(), text: action.text, done: false }];
    case "toggle":
      return state.map((t) => (t.id === action.id ? { ...t, done: !t.done } : t));
    case "remove":
      return state.filter((t) => t.id !== action.id);
    default:
      return state;
  }
}

function DemoUseReducer() {
  const [todos, dispatch] = useReducer(reducer, []);
  const [text, setText] = useState("");

  return (
    <div>
      <div style={{ display: "flex", gap: 8 }}>
        <input value={text} onChange={(e) => setText(e.target.value)} placeholder="New task..." />
        <button onClick={() => { if (text.trim()) { dispatch({ type: "add", text }); setText(""); } }}>Add</button>
      </div>
      <ul>
        {todos.map((t) => (
          <li key={t.id} style={{ display: "flex", gap: 8, alignItems: "center" }}>
            <label style={{ flex: 1 }}>
              <input type="checkbox" checked={t.done} onChange={() => dispatch({ type: "toggle", id: t.id })} />{" "}
              <span style={{ textDecoration: t.done ? "line-through" : "none" }}>{t.text}</span>
            </label>
            <button onClick={() => dispatch({ type: "remove", id: t.id })}>x</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default DemoUseReducer;
