import React from "react";

import "../02-useEffect/effects.css";

export const ShowIncrement = React.memo(({ increment }) => {

  console.log('render')

  return (
    <button className="btn btn-primary" onClick={() => increment(5)}>
      Incrementar
    </button>
  );
});
