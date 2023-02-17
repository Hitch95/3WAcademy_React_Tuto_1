import { useEffect, useState } from 'react';
import Counter from './Counter';
import Incrementer from './Incrementer';
import StopWatch from './StopWatch';
import IncrementerWithRef from './IncrementerWithRef';
import InputWriter from './InputWriter';

export default function App () {
  return (
    <div className='container my-5'>
      <h1>React tuto</h1>
      <InputWriter />
      <Counter />
      <Incrementer />
      <IncrementerWithRef />
      <StopWatch />
    </div>
  );
}
