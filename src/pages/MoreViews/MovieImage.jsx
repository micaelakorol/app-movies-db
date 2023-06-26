import React from "react";
import { Avatar } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
const MovieImage = ({ movie }) => {
  return (
    <>
      <figure>
        <a href="https://www.themoviedb.org/tv/top-rated" target="_blank" rel="noreferrer"> 
          <Avatar>
            {" "}
            <CallMadeIcon />{" "}
          </Avatar>
        </a>
      </figure>
      <img
        src={`https://image.tmdb.org/t/p/original${
          movie.poster_path ? movie.poster_path : "image not available"
        }`}
        alt="poster movie"
        className="card-img-top"
      />
    </>
  );
};

export default MovieImage;
