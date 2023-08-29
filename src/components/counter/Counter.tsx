import { useState } from 'react';

const Counter = () => {
  const [count, setCount] = useState(0);
  const [amount, setAmount] = useState(0);

  const clickHandler = () => {
    setCount((prevState) => prevState + 1);
  };

  return (
    <div>
      <h1>{count}</h1>
      <button onClick={clickHandler}>Increment</button>

      <input
        type="number"
        name="amount"
        value={amount}
        onChange={(e) => {
          setAmount(parseInt(e.target.value));
        }}
      />
      <button onClick={() => setCount(amount)}>Set</button>
    </div>
  );
};

export default Counter;
