import "../../../styles/movies.css";
import SearchMovies from "./SearchMovies";
import SearchButton from "../Elements/SearchButton";
import HandleParams from "../Functions/HandleParams";
import { useFetch } from "../../../services/hooks/useFetch";
const Movies = () => {
  
  const apiKey = '7dab491b5d6e1c3441e02781d5188f18'
  const url = `https://api.themoviedb.org/3/movie/550/similar?api_key=${apiKey}`;
  const { data} = useFetch(url);
  const{ handleChangeParams, searchParams} = HandleParams()

  return (
    <>
      <form action="" method="post" className="form-movies">
        <input
          type="text"
          placeholder="Today I want to see..."
          value={searchParams.get("filter") || ""}
          onChange={handleChangeParams}
          required
        />
        <SearchButton />
      </form>
      <SearchMovies searchParams={searchParams} data={data} />
    </>
  );
};

export default Movies;
