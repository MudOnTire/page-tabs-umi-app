import React, { useState } from 'react';

export default () => {
  let [count, setCount] = useState(0);
  return (
    <>
      <h1>Home Page</h1>

      <h2>{count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </>
  );
};
