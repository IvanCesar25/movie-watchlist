import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import './pages/Home.css'; // Reutilize o estilo da Home
import Movies from './Movies'; // Suponhamos que seu componente se chame "Movies"

function Filmes() {
  const [popularMovies, setPopularMovies] = useState([]);

  useEffect(() => {
    // Chave da API TMDB (substitua pela sua chave)
    const apiKey = '3a0f053f7672852c0960041c106db249';

    // Fazer uma solicitação para obter a lista de filmes populares
    axios
      .get(`https://api.themoviedb.org/3/movie/popular?api_key=${apiKey}`)
      .then((response) => {
        const movies = response.data.results.slice(0, 9); // Pegar os 10 primeiros filmes
        setPopularMovies(movies);
      })
      .catch((error) => {
        console.error('Erro ao buscar filmes populares:', error);
      });
  }, []);

  return (
    <div>
      <h1 style={{ marginTop: '1%', marginBottom: '0' }}>
        <Link to="/" style={{ textDecoration: 'none', fontFamily: 'Arial, Helvetica, sans-serif' }}>
          Ver Filmes
        </Link>
      </h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Início</Link>
          </li>
          <li>
            <Link to="/filmes">Filmes</Link>
          </li>
          <li>
            <Link to="/filmes-favoritos">Filmes Favoritos</Link>
          </li>
          <li>
            <Link to="/configuracoes">Configurações</Link>
          </li>
          <li>
            <Link to="/sair">Sair</Link>
          </li>
        </ul>
      </nav>
      <div className="movie-list">
        {/* Usando o componente Movies e passando a prop 'movies' */}
        <Movies movies={popularMovies} />
      </div>
    </div>
  );
}

export default Filmes;
