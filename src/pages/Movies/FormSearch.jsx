/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/movies.css";
import { api_key } from "../../api_key";
import Search from "./svg/Search";
import SearchMovies from "./SearchMovies";
const Movies = () => {
  let [searchParams, setSearchParams] = useSearchParams();

  const { data, error, loading } = useFetch(
    `https://api.themoviedb.org/3/movie/550/similar?api_key=${api_key}&`
  );

  if (loading) return <h1 className="title">Loading...</h1>;
  if (error !== "") return <h1 className="title">{error}</h1>;

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }};

  return (
    <>
      {/* searcher of movies */}
      <form action="" method="post" className="form-movies">
        <input
          type="text"
          placeholder="Search"
          value={searchParams.get("filter") || ""}
          onChange={handleChange}
        />
        <button type="search" className="btn-form">
          <Search />
        </button>
      </form>
     <SearchMovies searchParams={searchParams}
     data={data} />
    </>
  );
};

export default Movies;
