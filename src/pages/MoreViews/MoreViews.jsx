import "../../styles/moreViews.css";
import MovieOpinions from "./Elements/MovieOpinions";
import MovieImage from "./Elements/MovieImage";
import { useFetch } from "../../services/hooks/useFetch";
import Loading from "../../components/Loading/Loading";
const First = () => {
  //request: on the air:
  const apiKey = process.env.REACT_APP_API_THEMOVIEDB;
  const url = `https://api.themoviedb.org/3/tv/on_the_air?api_key=${apiKey}&language=en-US&page=1`;
  const { data } = useFetch(url);

  return (
    <>
      <Loading />
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
