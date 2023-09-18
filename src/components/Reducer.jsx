export const actionTypes = {
  ADD_MOVIE: 'ADD_MOVIE',
  REMOVE_MOVIE: 'REMOVE_MOVIE',
};


export const initialState = {
  movies: [], 
};


export const reducer = (state, action) => {
  switch (action.type) {
    case actionTypes.ADD_MOVIE:
      return {
        ...state,
        movies: [...state.movies, action.payload],
      };
    case actionTypes.REMOVE_MOVIE:
      return {
        ...state,
        movies: state.movies.filter((movie) => movie.id !== action.payload), 
      };
    default:
      return state; 
  }
};
