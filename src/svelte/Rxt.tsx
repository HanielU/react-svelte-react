import { useState } from "react";

export default function Rxt() {
  const [num, setNum] = useState(0);

  return (
    <h1 onClick={() => setNum(num + 1)} className="btn">
      Hello React, {num}
    </h1>
  );
}
