import React from 'react'
import { Rating } from "@mui/material";
const MovieOpinions = ({movie}) => {
  return (
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
  )
}

export default MovieOpinions