import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "./layout.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>LayoutEffect</h1>
      <hr />

  
        <blockquote className="blockquote text-end">
          <p className="mb-0">{quote}</p>
        </blockquote>


      {!loading && (
        <button className="btn btn-primary" onClick={() => increment()}>
          Siguiente quote
        </button>
      )}
    </div>
  );
};
