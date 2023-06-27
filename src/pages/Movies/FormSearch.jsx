/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from "react";
import { useSearchParams } from "react-router-dom";
import { useFetch } from "../../hooks/useFetch";
import "../../styles/movies.css";
import Search from "./svg/Search";
import SearchMovies from "./SearchMovies";
import useLoading from "../../hooks/useLoading";
const Movies = () => {
  let [searchParams, setSearchParams] = useSearchParams();
  const apiKey = process.env.REACT_APP_THEMOVIEDB_API_KEY;
  const url = `https://api.themoviedb.org/3/movie/550/similar?api_key=${apiKey}`;
  
  const { data, error, loading } = useFetch(url);
  const {LoadingErrorComponent} = useLoading(loading, error)

  const handleChange = (e) => {
    let filter = e.target.value;
    if (filter) {
      setSearchParams({ filter });
    } else {
      setSearchParams({});
    }
  };

  return (
    <>
      {/* searcher of movies */}
      { LoadingErrorComponent()}
      <form action="" method="post" className="form-movies">
        <input
          type="text"
          placeholder="Search"
          value={searchParams.get("filter") || ""}
          onChange={handleChange}
          aria-label="Search"
        />
        <button type="search" role="search" className="btn-form">
          <Search />
        </button>
      </form>
      <SearchMovies searchParams={searchParams} data={data} />
    </>
  );
};

export default Movies;
