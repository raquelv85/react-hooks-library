import React from "react";
import { useFetch } from "../../hooks/useFetch";

import "../02-useEffect/effects.css";

export const MultipleCustomHooks = () => {
  const { loading, data } = useFetch(`https://www.breakingbadapi.com/api/quotes/1`);

  const { author, quote } = !!data && data[0]

  return (
    <div>
      <h1>Breaking Bad quotes</h1>
      <hr />

      {loading ? (
        <div className="alert alert-info text-center">...Loading</div>
      ) : (
        <blockquote className="blockquote text-end">
          <p className="mb-0">{ quote }</p>
          <footer className="blockquote-footer mt-1"> {author} </footer>
        </blockquote>
      )}
    </div>
  );
};
