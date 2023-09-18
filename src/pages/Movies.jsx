import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import './Movies.css';
import MovieCard from '../components/MovieCard';

function Movies() {
  const [topRatedMovies, setTopRatedMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [page, setPage] = useState(1);

  useEffect(() => {
    const apiKey = '3a0f053f7672852c0960041c106db249'; 

    
    axios
      .get(`https://api.themoviedb.org/3/movie/top_rated?api_key=${apiKey}&page=${page}`)
      .then((response) => {
        const movies = response.data.results.slice(0, 9); 
        setTopRatedMovies((prevMovies) => [...prevMovies, ...movies]);
      })
      .catch((error) => {
        console.error('Erro ao buscar filmes mais bem avaliados:', error);
      });
  }, [page]);

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
   
  };

  const loadMoreMovies = () => {
    setPage((prevPage) => prevPage + 1);
  };

  return (
    <div className="movies-container">
      <div className="header">
        <h1 className="main-title">
          <Link to="/" className="title-link">
            Ver Filmes
          </Link>
        </h1>
        <div>
         
          <form onSubmit={handleSearchSubmit} className="search-form">
            <input
              type="text"
              placeholder="Buscar filmes..."
              value={searchQuery}
              onChange={handleSearchChange}
            />
            <button type="submit" className="search-button">
              Buscar
            </button>
          </form>
        </div>
      </div>
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
      <div className="movie-list">
        {topRatedMovies.map((movie) => (
          <Link key={movie.id} to={`/detalhes/${movie.id}`} className="movie-link">
            <MovieCard movie={movie} />
          </Link>
        ))}
      </div>
      <div className="load-more">
        <Link to="/" className="load-button">
          Ver Mais
        </Link>
      </div>
    </div>
  );
}

export default Movies;
