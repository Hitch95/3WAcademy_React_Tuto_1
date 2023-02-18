import React, { useRef } from "react";

export default function Incrementer () {
    const countRef = useRef(0)
    const isRunningRef = useRef(false)
    const countContainerRef = useRef(null)
    const interval = useRef(null)

  function start() {
    if (isRunningRef.current) return

    isRunningRef.current = true

    interval.current = setInterval(() => {
        countContainerRef.current.innerText = ++countRef.current
    }, 100)
  }

  function pause() {
    isRunningRef.current = false
    clearInterval(interval.current)
  }

  function reset() {
    pause()
    countRef.current = 0
    countContainerRef.current.innerText = 0
  }

  return (
    <>
      <h2>Incrementer with refs: <span ref={countContainerRef}></span></h2>
      <button onClick={start} className='btn btn-primary me-2'>Start</button>
      <button onClick={pause} className='btn btn-warning me-2'>Pause</button>
      <button onClick={reset} className='btn btn-dark me-2'>Reset</button>
    </>
  );
}
