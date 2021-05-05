import React, {useLayoutEffect, useRef} from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { quote } = !!data && data[0];

  const pRef = useRef();

  useLayoutEffect(() => {
    console.log(pRef.current.getBoundingClientRect())
  }, [quote])

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

  
        <blockquote className="blockquote text-end">
          <p ref={pRef} className="mb-0">{quote}</p>
        </blockquote>

      {!loading && (
        <button className="btn btn-primary" onClick={() => increment()}>
          Siguiente quote
        </button>
      )}
    </div>
  );
};
