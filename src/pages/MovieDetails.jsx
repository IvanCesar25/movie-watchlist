import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import axios from 'axios';

function MovieDetails() {
  const { id } = useParams();
  const [movieDetails, setMovieDetails] = useState(null);
  const [cast, setCast] = useState([]);
  const [showAllCast, setShowAllCast] = useState(false);

  useEffect(() => {
    const apiKey = '3a0f053f7672852c0960041c106db249';

    
    axios
      .get(`https://api.themoviedb.org/3/movie/${id}?api_key=${apiKey}&language=pt-BR`)
      .then((response) => {
        setMovieDetails(response.data);

        
        axios
          .get(`https://api.themoviedb.org/3/movie/${id}/credits?api_key=${apiKey}`)
          .then((castResponse) => {
            setCast(castResponse.data.cast);
          })
          .catch((castError) => {
            console.error('Erro ao buscar informações de elenco:', castError);
          });
      })
      .catch((error) => {
        console.error('Erro ao buscar detalhes do filme:', error);
      });
  }, [id]);

  if (!movieDetails) {
    return <div>Carregando...</div>;
  }

  
  const textStyle = {
    textAlign: 'center',
    color: '#fff', 
  };

  
  const buttonStyle = {
    backgroundColor: 'transparent',
    border: '2px solid #fff',
    color: '#fff', 
    padding: '10px 20px',
    borderRadius: '5px',
    cursor: 'pointer',
  };

  
  const limitedCast = showAllCast ? cast : cast.slice(0, 4);

  return (
    <div className="movie-details-container">
      
      <div className="top-links">
      <Link to="/">Início</Link>     <Link to="/filmes">Filmes</Link>  
       </div>


      <h1>{movieDetails.title}</h1>
      <img
        src={`https://image.tmdb.org/t/p/w300/${movieDetails.poster_path}`}
        alt={movieDetails.title}
      />
      <p style={textStyle}>Data de Lançamento: {movieDetails.release_date}</p>
      <p style={textStyle}>Duração: {movieDetails.runtime} minutos</p>
      <p style={textStyle}>
        <i className="fas fa-star" style={{ marginRight: '5px' }}></i> Avaliação: {movieDetails.vote_average}
      </p>
      <p style={textStyle}>Sinopse: {movieDetails.overview}</p>

      
      <h2 style={textStyle}>Elenco</h2>
      <ul>
        {limitedCast.map((actor) => (
          <li key={actor.id} style={textStyle}>
            {actor.name} as {actor.character}
          </li>
        ))}
      </ul>
      
      {!showAllCast && cast.length > 4 && (
        <button onClick={() => setShowAllCast(true)} style={buttonStyle}>
          Ver Mais
        </button>
      )}
    </div>
  );
}

export default MovieDetails;
