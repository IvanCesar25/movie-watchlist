import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';
import './MovieCard.css';

function MovieCard({ movie }) {
  const [isLiked, setIsLiked] = useState(false);

  const toggleLike = (e) => {
    e.preventDefault();
    setIsLiked(!isLiked);
  };
  

  const heartIconStyles = {
    position: 'absolute',
    top: '10px', 
    right: '10px', 
    color: isLiked ? 'red' : 'black',
    cursor: 'pointer',
    zIndex: 1, 
    fontSize: '24px', 
  };

  return (
    <div className="movie-card" style={{ position: 'relative' }}>
      <FontAwesomeIcon
        icon={faHeart}
        style={heartIconStyles}
        onClick={toggleLike}
      />
      <img
        src={`https://image.tmdb.org/t/p/w400/${movie.poster_path}`}
        alt={movie.title}
      />
      <h2 className='card-text'>{movie.title}</h2>
      <p className='card-text'>Rating: {movie.vote_average}</p>
    </div>
  );
}

export default MovieCard;
