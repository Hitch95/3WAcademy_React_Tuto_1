import { useState } from 'react';

export default function Counter () {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(prevState => prevState + 1);
  };

  return (
    <>
      <h2>Count: <span>{count}</span></h2>
      <button onClick={increment} className='btn btn-primary me-2'>
        Count
      </button>
    </>
  );
}
