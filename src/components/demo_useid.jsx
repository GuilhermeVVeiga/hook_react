import { useId } from "react";

function DemoUseId() {
  const id = useId();

  return (
    <div>
      <label htmlFor={id}>Email</label>
      <br />
      <input id={id} type="email" placeholder="you@exemple.com" />
    </div>
  );
}

export default DemoUseId;
