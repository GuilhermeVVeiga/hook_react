import { useEffect, useState } from "react";

function DemoUseEffect() {
  const [name, setName] = useState("");

  // save the original title and restore it on unmount
  useEffect(() => {
    const old = document.title;
    return () => { document.title = old; };
  }, []);

  // update the title whenever 'name' changes
  useEffect(() => {
    document.title = name ? `Hello, ${name}` : "Type your name";
  }, [name]);

  return <input placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />;
}

export default DemoUseEffect;
