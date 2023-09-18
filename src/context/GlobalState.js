import React, { createContext, useReducer, useContext } from 'react';
import { reducer, initialState } from '../components/Reducer';


const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  
  const [state, dispatch] = useReducer(reducer, initialState);

  
  const add_movie = (movie) => {
    dispatch({ type: 'ADD_MOVIE', payload: movie });
  };

  
  return (
    <GlobalContext.Provider value={{ state, add_movie }}>
      {children}
    </GlobalContext.Provider>
  );
};


export const useGlobalState = () => {
  const context = useContext(GlobalContext);
  if (!context) {
    throw new Error('useGlobalState deve ser usado dentro de um GlobalProvider');
  }
  return context;
};
