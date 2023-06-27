import { useFetch } from "../../hooks/useFetch";
import { ExternalLink } from "../../reusable/ExternalLink";
import "../../styles/index.css";
const Index = () => {
  const apiKey = process.env.REACT_APP_THEMOVIEDB_API_KEY;
  const url = `https://api.themoviedb.org/3/trending/all/day?api_key=${apiKey}`;
  const { data, error, loading } = useFetch(url);
  if (loading) return <h1 className="title">Loading...</h1>;
  if (error !== "") return <h1 className="title">{error}</h1>;
  // git pull origin main --allow-unrelated-histories
  return (
    <>
      <h1 className="title">Recommended for you</h1>
      <main>
        {data.map((movie) => (
          <article className="carrusel-movies-index" key={movie.id}>
            <section className="section-img-movies">
              <img
                src={`https://image.tmdb.org/t/p/original${movie.poster_path}`}
                className="card-img-top"
                alt="poster movie"
              />
              <ExternalLink
                href="https://www.themoviedb.org/"
                aria-label="Watch movie now"
                className="ancla-btn"
              >
                Watch now
              </ExternalLink>
            </section>
          </article>
        ))}
      </main>
    </>
  );
};

export default Index;
