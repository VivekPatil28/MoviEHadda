import React, { useState } from "react";
import "./MovieList.css";

const MovieList = (props) => {
  const getMovieDetails = async (id) => {
    const url = `http://www.omdbapi.com/?i=${id}&apikey=263d22d8`;
    const response = await fetch(url);
    const responseJson = await response.json();
    console.log(id);
    if (responseJson.Search) {
      alert(responseJson.Search);
    }
  };

  return (
    <div className="movies_container">
      {props.movies.map((movie, index) => (
        <div
          onClick={() => getMovieDetails(movie.imdbID)}
          className="movie_box"
        >
          <img className="image" src={movie.Poster} alt="movie"></img>
          <div className="title_container">
            <h1 className="title">{movie.Title}</h1>
          </div>
        </div>
      ))}
    </div>
  );
};

export default MovieList;
