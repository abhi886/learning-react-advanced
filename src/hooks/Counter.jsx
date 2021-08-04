import React, { useState } from "react";

export default function Counter(props) {
  const [abc, setAbc] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      Counter: {abc}
      <button onClick={() => setAbc(abc + 1)}>
        {name} has Clicked {abc} times
      </button>
      <input type='text' onChange={(e) => setName(e.target.value)} />
    </div>
  );
}
