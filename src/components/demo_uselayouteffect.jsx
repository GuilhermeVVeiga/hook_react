import { useLayoutEffect, useRef, useState } from "react";

function DemoUseLayoutEffect() {
  const boxRef = useRef(null);
  const [w, setW] = useState(0);

  useLayoutEffect(() => {
    setW(boxRef.current?.getBoundingClientRect().width ?? 0);
  }, []);

  return (
    <div>
      <div
        ref={boxRef}
        style={{
          width: "min(50vw, 100%)", 
          maxWidth: "100%",
          border: "1px solid #3a4048",
          borderRadius: 8,
          padding: 8,
          marginBottom: 8,
          background: "#1f242b",
        }}
      >
        Box
      </div>
      Measured width: <b>{Math.round(w)}px</b>
    </div>
  );
}

export default DemoUseLayoutEffect;
