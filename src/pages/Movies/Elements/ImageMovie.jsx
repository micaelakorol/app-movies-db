import React from "react";

const ImageMovie = ({ poster }) => {
  return (
    <img
      src={`https://image.tmdb.org/t/p/original${poster}`}
      className="card-img-top"
      alt="poster_movie"
    />
  );
};

export default ImageMovie;
