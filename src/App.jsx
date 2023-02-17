import { useEffect, useState } from 'react';
import Counter from './Counter';
import Incrementer from './Incrementer';
import StopWatch from './StopWatch';
import IncrementerWithRef from './IncrementerWithRef';
import InputWriter from './InputWriter';

const componentNames = [
  "counter", 
  "input-writer", 
  "incrementer",
  "incrementer-ref",
  "stopwatch"
]

export default function App () {
  const [component, setComponent] = useState("counter")

  let body = null
  switch(component) {
    case "counter":
      body = <Counter />
      break;
    case "input-writer":
      body = <InputWriter />
      break;
      case "incrementer":
        body = <Incrementer />
        break;

      case "incrementer-ref":
        body = <IncrementerWithRef />
        break;

      case "stopwatch":
        body = <StopWatch />
        break;
      default:
        throw new Error(`Invalid component: ${component}`)
  }

  return (
    <div className='container my-5'>
      <h1>React tuto</h1>
      <select 
        value={component} 
        onChange={e => setComponent(e.currentTarget.value)}>
        {componentNames.map((name, i) => <option key={i} value={name}>{name.toUpperCase()}</option>)}
      </select>
      {body}
    </div>
  );
}
