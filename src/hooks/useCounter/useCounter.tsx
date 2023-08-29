import { useState } from 'react';
import { UseCounterProps } from './useCounter.types';

const useCounter = ({ initialCount = 0 }: UseCounterProps = {}) => {
  const [count, setCount] = useState(initialCount);

  const increment = () => setCount((prevState) => prevState + 1);
  const decrement = () => setCount((prevState) => prevState - 1);

  return { count, increment, decrement };
};

export default useCounter;
