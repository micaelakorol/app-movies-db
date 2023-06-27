import React from "react";
import { Avatar } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { ExternalLink } from "../../reusable/ExternalLink";
const MovieImage = ({ movie }) => {
  return (
    <>
      <figure>
        <ExternalLink
          href="https://www.themoviedb.org/tv/top-rated"
          aria-label="Watch movie"
        >
          <Avatar>
            {" "}
            <CallMadeIcon />{" "}
          </Avatar>
        </ExternalLink>
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
