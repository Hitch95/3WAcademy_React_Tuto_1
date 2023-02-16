import React, { useState } from "react";

export default function Incrementer () {
  const [count, setCount] = useState(0);

  return (
    <>
      <h2>Incrementer: <span>{count}</span></h2>
      <button
        onClick={() => {
          
        }}
        className='btn btn-primary me-2'
      >
        Start counter
      </button>
    </>
  );
}
