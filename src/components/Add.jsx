import React, { useState } from "react";
import { useGlobalState } from "../context/GlobalState";

function Add() {
  const [newMovieTitle, setNewMovieTitle] = useState("");
  const { state, dispatch } = useGlobalState();

  const handleAddMovie = () => {
    if (newMovieTitle.trim() === "") {
      alert("Por favor, insira um título de filme válido.");
      return;
    }

    
    const updatedMovies = [...state.movies, { title: newMovieTitle }];
    
    
    dispatch({ type: "ADD_MOVIE", payload: updatedMovies });

    
    setNewMovieTitle("");
  };

  return (
    <div>
      <h2>Adicionar Filme</h2>
      <input
        type="text"
        placeholder="Título do Filme"
        value={newMovieTitle}
        onChange={(e) => setNewMovieTitle(e.target.value)}
      />
      <button onClick={handleAddMovie}>Adicionar</button>
    </div>
  );
}

export default Add;
