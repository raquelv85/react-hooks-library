import React, { memo } from "react";

import "../02-useEffect/effects.css";

export const Small = React.memo(({ value }) => {
  console.log("render")
  return <small>{value}</small>;
});
