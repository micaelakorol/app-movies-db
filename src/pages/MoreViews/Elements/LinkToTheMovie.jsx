import React from 'react'
import { ExternalLink } from '../../../reusable/ExternalLink'
import { Avatar } from '@mui/material'
import ImagePoster from '../../../reusable/ImagePoster'
import { linkImage } from '../../../components/variables'

const LinkToTheMovie = () => {
  return (
    <ExternalLink
    href="https://www.themoviedb.org/tv/top-rated"
    aria-label="Watch movie"
  >
    <Avatar>
      <ImagePoster
        src={linkImage}
        alt="link-to-the-movie"
      />
    </Avatar>
  </ExternalLink>
  )
}

export default LinkToTheMovie