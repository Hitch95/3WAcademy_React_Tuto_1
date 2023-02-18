import { useState, useRef } from "react";
import FormattedTime from "./FormattedTime";

export default function StopWatch() {
  const initialTime = { sec: 55, min: 59, hour: 0 };
  const [time, setTime] = useState(initialTime);
  const [isActive, setIsActive] = useState(false);
  const [isPaused, setIsPaused] = useState(true);
  const intervalRef = useRef(null);

  const handleStart = () => {
    setIsActive(true);
    setIsPaused(false);
    if (!intervalRef.current) {
      intervalRef.current = setInterval(() => {
        if (!isPaused) {
          setTime((currentTime) => {
            let { sec, min, hour } = currentTime;
            sec += 1;
            if (sec === 60) {
              sec = 0;
              min += 1;
            }
            if (min === 60) {
              min = 0;
              hour += 1;
            }
            return { sec, min, hour };
          });
        }
      }, 1000);
    }
  };

  const handlePauseResume = () => {
    setIsPaused(!isPaused);
    if (isActive) {
      if (intervalRef.current) {
        clearInterval(intervalRef.current);
        intervalRef.current = null;
      }
    }
  };

  const handleReset = () => {
    setIsActive(false);
    setIsPaused(true);
    clearInterval(intervalRef.current);
    setTime(initialTime);
  };

  return (
    <>
      <h2>Stop Watch</h2>
      <FormattedTime time={time} />

      <button onClick={handleStart} className="btn btn-primary me-2">
        Start
      </button>
      <button onClick={handlePauseResume} className="btn btn-warning me-2">
        Paused
      </button>
      <button onClick={handleReset} className="btn btn-dark">
        Reset
      </button>
    </>
  );
}
