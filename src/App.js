import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import Header from "./components/Header";
import Watched from "./components/Watched";
import Add from "./components/Add";
import MovieDetails from "./pages/MovieDetails";
import "./App.css";
import '@fortawesome/fontawesome-free/css/all.min.css';
import { GlobalProvider } from './context/GlobalState';
import Movies from './pages/Movies';

function App() {
  return (
    <GlobalProvider>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/filmes" element={<Movies />} />
          <Route path="/add" element={<Add />} />
          <Route path="/watched" element={<Watched />} />
          <Route path="/detalhes/:id" element={<MovieDetails />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
        </Routes>
      </Router>
    </GlobalProvider>
  );
}

export default App;
