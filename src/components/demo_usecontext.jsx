import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeProvider({ children }) {
  const [theme, setTheme] = useState("light");
  const toggle = () => setTheme((t) => (t === "light" ? "dark" : "light"));

  return <ThemeContext.Provider value={{ theme, toggle }}>{children}</ThemeContext.Provider>;
}

export function DemoUseContext() {
  const ctx = useContext(ThemeContext);
  if (!ctx) return <div>Outside of provider</div>;

  const { theme, toggle } = ctx;

  return (
    <div style={{ padding: 12, borderRadius: 8, background: theme === "dark" ? "#111" : "#eee", color: theme === "dark" ? "#fff" : "#111" }}>
      Current theme: <b>{theme}</b>
      <button onClick={toggle} style={{ marginLeft: 8 }}>Toggle</button>
    </div>
  );
}

export { ThemeProvider, ThemeContext };
