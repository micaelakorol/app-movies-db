import ImageMovie from "../Elements/ImageMovie";
import RatingMovie from "../Elements/RatingMovie";
import WatchMovieButton from "../Elements/WatchMovieButton";
const SearchMovies = ({ data, searchParams }) => {

  const filter = searchParams.get("filter") || "";
  const filteredMovies = data.filter((movie) => {
    const title = movie.title.toLowerCase();
    return !filter || title.startsWith(filter.toLowerCase());
  });

  return (
    <main>
      {filteredMovies.map((movie) => (
        <article key={movie.id}>
          <section className="section-img-movies">
            <ImageMovie poster={movie.poster_path} />
            <RatingMovie
              vote={movie.vote_average}
              release={movie.release_date}
            />
            <WatchMovieButton title={movie.title} />
          </section>
        </article>
      ))}
    </main>
  );
};
export default SearchMovies;
