import { useState } from "react";
import FormattedTime from "./FormattedTime";

export default function StopWatch() {
    const initialTime = {sec: 55, min: 59, hour: 0}
    const [time, setTime] = useState(initialTime)

    return <>
        <h2>Stop Watch</h2>
        <FormattedTime time={time} />
        
        <button className="btn btn-primary me-2">Start</button>
        <button className="btn btn-warning me-2">Pause</button>
        <button className="btn btn-dark">Reset</button>
    </>
}
