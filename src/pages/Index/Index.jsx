import ImagePoster from "../../reusable/ImagePoster";
import { useFetch } from "../../services/hooks/useFetch";
import "../../styles/index.css";
import WatchButton from "./Elements/WatchButton";
import Loading from "../../components/Loading/Loading";
const Index = () => {
  const apiKey = process.env.REACT_APP_API_THEMOVIEDB;
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
  const { data } = useFetch(url);

  // git pull origin main --allow-unrelated-histories
  return (
    <>
      <Loading />
      <h1 className="title">Your free movies platform</h1>
      <main>
        {data.map((movie) => (
          <article className="carrusel-movies-index" key={movie.id}>
            <section className="section-img-movies">
              <ImagePoster
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="card-img-top"
                alt="poster movie"
              />
              <WatchButton />
            </section>
          </article>
        ))}
      </main>
    </>
  );
};

export default Index;
