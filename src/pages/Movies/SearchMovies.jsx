import { Rating } from "@mui/material";
import React from "react";

const SearchMovies = ({ data, searchParams }) => {
  return (
    <main>
      {data
        .filter((movie) => {
          let filter = searchParams.get("filter");
          if (!filter) return true;

          let title = movie.title.toLowerCase();
          return title.startsWith(filter.toLocaleLowerCase());
        })
        .map((movie) => (
          <article key={movie.id}>
            <section className="section-img-movies">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="card-img-top"
                alt="poster of movie"
              />

              <section className="description-movies">
                <Rating
                  name="size-small"
                  defaultValue={2}
                  precision={0.5}
                  readOnly
                  value={movie.vote_average}
                  size="small"
                />
                <b>{movie.release_date}</b>
              </section>
              <a
                href="https://www.themoviedb.org/movie"
                target="_blank"
                rel="noreferrer"
                aria-label="Watch movie now"
              >
                <h1 className="title-movies">{movie.title}</h1>
              </a>
            </section>
          </article>
        ))}
    </main>
  );
};

export default SearchMovies;
