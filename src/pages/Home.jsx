import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './Home.css';
import MovieCard from '../components/MovieCard';
import FavoriteCarousel from '../components/FavoriteCarousel';

function Home() {
  const [popularMovies, setPopularMovies] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [favoriteMovies, setFavoriteMovies] = useState([]);

  useEffect(() => {
    const apiKey = '3a0f053f7672852c0960041c106db249';

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        const movies = response.data.results.slice(0, 9);
        setPopularMovies(movies);
      })
      .catch((error) => {
        console.error('Erro ao buscar filmes populares:', error);
      });
  }, []);

  const addFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) => [movie, ...prevFavorites]);
  };

  const removeFavoriteMovie = (movie) => {
    setFavoriteMovies((prevFavorites) =>
      prevFavorites.filter((favMovie) => favMovie.id !== movie.id)
    );
  };

  const handleSearchChange = (event) => {
    setSearchQuery(event.target.value);
  };

  const handleSearchSubmit = (event) => {
    event.preventDefault();
  };

  const loadMoreMovies = () => {
    const apiKey = '3a0f053f7672852c0960041c106db249';
    const nextPage = popularMovies.length / 9 + 1;

    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}&page=${nextPage}`)
      .then((response) => {
        const newMovies = response.data.results;
        setPopularMovies((prevMovies) => [...prevMovies, ...newMovies]);
      })
      .catch((error) => {
        console.error('Erro ao buscar filmes populares:', error);
      });
  };

  return (
    <div className="home-container">
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
          <li>
            <Link to="/">Configurações</Link>
          </li>
          <li>
            <Link to="/">Sair</Link>
          </li>
        </ul>
      </nav>

      <div className="favorites">
        <h2>Crie sua lista de filmes</h2>
        <h3>Salve seus filmes favoritos e fique por dentro de todos os detalhes</h3>
        <button className="view-movies-button">Ver filmes</button>
      </div>

      <FavoriteCarousel
        favoriteMovies={favoriteMovies}
        onRemoveFavorite={removeFavoriteMovie}
      />

      <div className="movie-list">
        {popularMovies.map((movie) => (
          <Link key={movie.id} to={`/detalhes/${movie.id}`} className="movie-link">
            <MovieCard
              movie={movie}
              onAddFavorite={addFavoriteMovie}
              isFavorite={favoriteMovies.some((favMovie) => favMovie.id === movie.id)}
            />
          </Link>
        ))}
      </div>
      <div className="load-more">
        <button onClick={loadMoreMovies} className="load-button">
          Ver Mais
        </button>
      </div>
    </div>
  );
}

export default Home;
