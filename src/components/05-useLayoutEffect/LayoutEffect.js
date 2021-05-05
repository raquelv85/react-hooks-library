import React from "react";
import { useFetch } from "../../hooks/useFetch";
import { useCounter } from "../../hooks/useCounter";

import "../02-useEffect/effects.css";

export const LayoutEffect = () => {
  const { counter, increment } = useCounter(1);

  const { loading, data } = useFetch(
    `https://www.breakingbadapi.com/api/quotes/${counter}`
  );

  const { author, quote } = !!data && data[0];

  return (
    <div>
      <h1>Breaking Bad quotes</h1>
      <hr />

  
        <blockquote className="blockquote text-end">
          <p className="mb-0">{quote}</p>
          <footer className="blockquote-footer mt-1"> {author} </footer>
        </blockquote>


      {!loading && (
        <button className="btn btn-primary" onClick={() => increment()}>
          Siguiente quote
        </button>
      )}
    </div>
  );
};
