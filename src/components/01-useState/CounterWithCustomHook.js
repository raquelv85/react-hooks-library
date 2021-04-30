import React from 'react';
import "./counter.css";

import { useCounter } from '../../hooks/useCounter';

export const CounterWithCustomHook = () => {

  const { state, increment, decrement } = useCounter();

  return(
    <>
      <h1>Counter with hook: {0}</h1>
      <hr />

      <button className="btn">+1</button>
      <button className="btn">-1</button>
    </>
  )
}