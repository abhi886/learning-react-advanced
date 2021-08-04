import React, { useState } from "react";

export default function Counter(props) {
  const [abc, setAbc] = useState(0);
  const [name, setName] = useState("");

  return (
    <div>
      <input type='text' onChange={(e) => setName(e.target.value)} />
      <button onClick={() => setAbc(abc + 1)}>Click</button> <br />
      Counter: {name} has Clicked {abc} times
    </div>
  );
}
