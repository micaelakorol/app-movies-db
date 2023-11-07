import React from 'react'
import { Rating } from "@mui/material";

const RatingMovie = ({vote,release}) => {
  return (
    <section className="description-movies">
    <Rating
      name="size-small"
      defaultValue={2}
      precision={0.5}
      readOnly
      value={vote}
      size="small"
    />
    <b>{release}</b>
  </section>
  )
}

export default RatingMovie