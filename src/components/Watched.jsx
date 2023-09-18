import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function Watched() {
  const { state } = useGlobalState();

  return (
    <div className="watched-container">
      <h2>Your Watched Movies</h2>
      <ul>
        {state.movies.map((movie, index) => (
          <li key={index}>{movie.title}</li>
        ))}
      </ul>
    </div>
  );
}

export default Watched;
