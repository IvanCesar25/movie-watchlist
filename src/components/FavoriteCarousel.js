import React from 'react';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

function FavoriteCarousel({ favoriteMovies }) {
  const settings = {
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    centerMode: true,
    centerPadding: '0',
    focusOnSelect: true,
  };

  return (
    <div className="favorite-carousel">
      <h2 style={{ color: '#fff' }}>Meus Favoritos</h2> {/* Altere a cor para branco (#fff) */}
      <Slider {...settings}>
        {favoriteMovies.map((movie) => (
          <div key={movie.id} className="favorite-movie">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt={movie.title} />
            <h3>{movie.title}</h3>
          </div>
        ))}
      </Slider>
    </div>
  );
}

export default FavoriteCarousel;
