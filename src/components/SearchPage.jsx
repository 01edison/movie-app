import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Movie from "./Movie";

const SearchPage = ({ trigger }) => {
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);
  const { searchValue } = useParams();
  const navigate = useNavigate();
  const { VITE_OMDB_KEY } = import.meta.env;

  const getMovies = async () => {
    setLoading(true);
    try {
      const {
        data: { Search },
      } = await axios.get("https://www.omdbapi.com/", {
        params: {
          apiKey: VITE_OMDB_KEY,
          s: searchValue,
        },
      });
      setResult(Search);
    } catch (e) {
      console.log(e);
    }
    setLoading(false);
  };

  useEffect(() => {
    window.scrollTo(0, 700);
    getMovies();
  }, [trigger]);
  return (
    <>
      <h2>Search results for: {searchValue}</h2>
      {loading ? (
        <p>Loading...</p>
      ) : (
        <div className="search-container">
          {result ? (
            result.map((movie, i) => <Movie key={i} title={movie.Title} />)
          ) : (
            <p>No result found</p>
          )}
        </div>
      )}
    </>
  );
};

export default SearchPage;
