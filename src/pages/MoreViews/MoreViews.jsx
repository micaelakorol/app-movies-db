/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import { useFetch } from "../../hooks/useFetch";
import "../../styles/moreViews.css"
import { Avatar, Rating } from "@mui/material";
import CallMadeIcon from "@mui/icons-material/CallMade";
import { api_key } from "../../api_key";
const First = () => {
  //request: on the air:

  const { data, error, loading } = useFetch(
    `https://api.themoviedb.org/3/tv/on_the_air?api_key=${api_key}&language=en-US&page=1`
  );

  if (loading)
    return <h1 className="title">Loading...</h1>
  if (error !== "") return <h1 className="title">{error}</h1>;

  return (
    <>
      <h2 className="title">In the top #1 </h2>
      <main>
        {data.map((movie, index) => (
          <section className="inTheTop" key={index}>
            <figure>
              <a href="https://www.themoviedb.org/tv/top-rated" target="_blank">
                <Avatar>
                  {" "}
                  <CallMadeIcon />{" "}
                </Avatar>
              </a>
            </figure>
            <img
              src={`https://image.tmdb.org/t/p/original${
                movie.poster_path ? movie.poster_path : "image not available"
              }`}
              alt='poster movie'
              className="card-img-top"
            />
            {/* name movie and opinions */}

            <section className="title-movie">
              <p className="punctuation">{movie.original_name}</p>
              <Rating
                name="size-small"
                size="small"
                defaultValue={2}
                precision={0.5}
                readOnly
                value={movie.vote_average}
              />
            </section>
          </section>
        ))}
      </main>
    </>
  );
};

export default First;
