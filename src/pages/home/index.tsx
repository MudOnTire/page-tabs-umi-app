import React, { useState } from 'react';
import './index.less';

export default () => {
  let [count, setCount] = useState(0);
  return (
    <div style={{ padding: 20 }}>
      <h1>Home Page</h1>

      <h2>Count: {count}</h2>

      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Click Me
      </button>
    </div>
  );
};
