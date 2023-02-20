import { useEffect, useRef, useState } from "react";

export default function StopWatch() {
  const initialTime = { sec: 55, min: 59, hour: 1 };
  const isRunning = useRef(false);
  const timeRef = useRef(null);
  const divTimeRef = useRef(null);
  const interval = useRef(null);

  useEffect(() => {
    timeRef.current = { ...initialTime };
    displayTime();

    return function cleanupFunction () {
      isRunning.current = false;
      clearInterval(interval.current);
    }
  }
  , []);

  function start() {
    if (isRunning.current) return;

    isRunning.current = true;

    interval.current = setInterval(() => {
      updateTime();
      displayTime();
    }, 1000);
  }

  function pause() {
    isRunning.current = false;
    clearInterval(interval.current);
  }

  function reset() {
    pause();
    timeRef.current = { ...initialTime };
    displayTime();
  }

  function updateTime() {
    timeRef.current.sec += 1;

    if (timeRef.current.sec > 59) {
      timeRef.current.sec = 0;
      timeRef.current.min += 1;
    }

    if (timeRef.current.min > 59) {
      timeRef.current.min = 0;
      timeRef.current.hour += 1;
    }
  }

  function displayTime() {
    divTimeRef.current.innerText = formatTime(timeRef.current);
  }

  return (
    <>
      <h2>Stop Watch</h2>
      <div ref={divTimeRef} className="alert alert-info my-2"></div>

      <button onClick={start} className="btn btn-primary me-2">
        Start
      </button>
      <button onClick={pause} className="btn btn-warning me-2">
        Pause
      </button>
      <button onClick={reset} className="btn btn-dark">
        Reset
      </button>
    </>
  );
}

function formatTime(time) {
  let output = `${time.hour.toString().padStart(2, "0")}`;
  output += `:${time.min.toString().padStart(2, "0")}`;
  output += `:${time.sec.toString().padStart(2, "0")}`;

  return output;
}
