import React from "react";

const Movie = ({ title, poster }) => {
  return (
    <div className="movie">
      <span>{title}</span>
    </div>
  );
};

export default Movie;
