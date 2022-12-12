import React, { useState, useEffect } from "react";
import Movie from "./Movie";
import axios from "axios";

const HomeCategory = ({ categoryName, type }) => {
  const { VITE_OMDB_KEY } = import.meta.env;
  const [movies, setMovies] = useState([]);

  const getMovies = async () => {
    try {
      const {
        data: { Search },
      } = await axios.get(`https://www.omdbapi.com/`, {
        params: {
          apiKey: VITE_OMDB_KEY,
          s: "man",
          type,
        },
      });
      console.log(Search);
      setMovies(Search);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    getMovies();
  }, []);
  return (
    <>
      <h3 className="category-name">{categoryName}</h3>
      <div className="home-category">
        {movies.map((movie, i) => (
          <Movie key={i} title={movie.Title} poster={movie.Poster} />
        ))}
      </div>
    </>
  );
};

export default HomeCategory;
