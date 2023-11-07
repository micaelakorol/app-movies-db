import React from "react";
import ImagePoster from "../../../reusable/ImagePoster";
import LinkToTheMovie from "./LinkToTheMovie";
const MovieImage = ({ movie }) => {
  return (
    <>
      <figure>
      <LinkToTheMovie />
      </figure>
      <ImagePoster
        src={`https://image.tmdb.org/t/p/original${
          movie.poster_path ? movie.poster_path : "image not available"
        }`}
        alt="poster_movie"
        className="card-img-top"
      />
    </>
  );
};

export default MovieImage;
