import React, { useState, useCallback } from "react";
import { ShowIncrement } from "./ShowIncrement";

import "../02-useEffect/effects.css";

export const CallbackHook = () => {
  const [counter, setCounter] = useState(10);

  // const increment = () => {
  //   setCounter( counter + 1 );
  // }

  const increment = useCallback(() => {
    setCounter(c => c + 1);
  }, [setCounter]);

  return (
    <div>
      <h1>UseCallback Hook</h1>
      <hr />

      <h2>Counter: {counter}</h2>

      <ShowIncrement increment={increment} />
    </div>
  );
};
