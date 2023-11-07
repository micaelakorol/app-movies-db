import React from "react";
import { ExternalLink } from "../../../reusable/ExternalLink";

const WatchMovieButton = ({ title }) => {
  return (
    <ExternalLink
      href="https://www.themoviedb.org/movie"
      aria-label="Watch movie now"
    >
      <h1 className="title-movies">{title}</h1>
    </ExternalLink>
  );
};

export default WatchMovieButton;
