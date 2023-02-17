import { useEffect, useState } from 'react';
import Counter from './Counter';
import Incrementer from './Incrementer';
import StopWatch from './StopWatch';

export default function App () {
  const [colorTitle, setColorTitle] = useState(true)

  function handleColor() {
    setColorTitle(colorTitle => !colorTitle)
  }
  return (
    <div className='container my-5'>
      <h1 className={colorTitle ? 'text-success' : ''}>React tuto</h1>
        {colorTitle 
        ?  <button className='btn btn-danger'
              onClick={handleColor}>
            Remove Color
          </button>
          : <button className='btn btn-success'
              onClick={handleColor}>
            Set Color
          </button>}
      <Counter />
      <Incrementer />
      <StopWatch />
    </div>
  );
}
