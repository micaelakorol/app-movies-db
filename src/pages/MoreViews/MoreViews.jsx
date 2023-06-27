/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { useFetch } from "../../hooks/useFetch";
import "../../styles/moreViews.css";
import MovieOpinions from "./MovieOpinions";
import MovieImage from "./MovieImage";
const First = () => {
  //request: on the air:
  const apiKey = process.env.REACT_APP_THEMOVIEDB_API_KEY;
  const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`;
  const { data, error, loading } = useFetch(url);

  if (loading) return <h1 className="title">Loading...</h1>;
  if (error !== "") return <h1 className="title">{error}</h1>;

  return (
    <>
      <h2 className="title">In the top #1 </h2>
      <main>
        {data.map((movie, index) => (
          <section className="inTheTop" key={index}>
            <MovieImage movie={movie} />
            {/* name movie and opinions */}
            <MovieOpinions movie={movie} />
          </section>
        ))}
      </main>
    </>
  );
};

export default First;
