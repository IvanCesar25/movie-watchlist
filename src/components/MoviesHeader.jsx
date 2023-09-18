import React from "react";
import { Link } from 'react-router-dom';

function MoviesHeader() {
  return (
    <header className="movies-header">
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
}

export default MoviesHeader;



