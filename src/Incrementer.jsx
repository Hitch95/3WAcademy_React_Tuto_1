import React, { useState } from "react";

let id = null
export default function Incrementer () {
    const [count, setCount] = useState(0);
    const [isRunning, setIsRunning] = useState(false);

  function start() {
    if (isRunning) return

    setIsRunning(true)

    id = setInterval(() => {
        setCount(prevCount => prevCount + 1)
    }, 100)
  }

  function pause() {
    setIsRunning(false)
    clearInterval(id)
  }

  function reset() {
    setCount(0)
    pause()
  }

  return (
    <>
      <h2>Incrementer: <span>{count}</span></h2>
      {/* {isRunning
        ? <button onClick={pause} className='btn btn-warning me-2'>Pause</button>
        : <button onClick={start} className='btn btn-primary me-2'>Start</button>
      } */}
      <button onClick={start} className='btn btn-primary me-2'>Start</button>
      <button onClick={pause} className='btn btn-warning me-2'>Pause</button>
      <button onClick={reset} className='btn btn-dark me-2'>Reset</button>
    </>
  );
}
