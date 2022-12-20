/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { api_key } from "../../api_key";
import { useFetch } from "../../hooks/useFetch";
import '../../styles/index.css'
const Index = () => {
  
  const { data, error, loading } = useFetch(
    `https://api.themoviedb.org/3/trending/all/day?api_key=${api_key}`
  );
  if (loading) return <h1 className="title">Loading...</h1>
  if (error !== "") return <h1 className="title">{error}</h1>

  return (
    <>
      <main className="row">
        <h1 className="title">TRENDING</h1>
        {data.map((movie) => (
          <div className="carrusel-movies-index" key={movie.id}>
            <section className="section-img-movies">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="card-img-top"
                alt="poster movie"
              />
              <a
                href="https://www.themoviedb.org/"
                target="_blank"
                className="ancla-btn"
              >
                Watch now
              </a>
            </section>
          </div>
        ))}
      </main>
    </>
  );
};

export default Index;
