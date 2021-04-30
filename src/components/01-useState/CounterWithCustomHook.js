import React from 'react';

export const CounterWithCustomHook = () => {
  return(
    <>
      <h1>Counter with hook: {0}</h1>
      <hr />

      <button className="btn">+1</button>
      <button className="btn">-1</button>
    </>
  )
}