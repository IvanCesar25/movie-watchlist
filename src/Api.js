// services/api.js
import axios from 'axios';

const API_KEY = '3a0f053f7672852c0960041c106db249'; // Substitua pelo sua chave TMDb

const api = axios.create({
  baseURL: 'https://api.themoviedb.org/3/',
});

export const fetchPopularMovies = async () => {
  try {
    const response = await api.get(`movie/popular?api_key=${API_KEY}&language=pt-BR&page=1`);
    return response.data.results;
  } catch (error) {
    throw error;
  }
};

export const fetchMovieDetails = async (movieId) => {
  try {
    const response = await api.get(`movie/${movieId}?api_key=${API_KEY}&language=pt-BR`);
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Exporte outras funções conforme necessário
