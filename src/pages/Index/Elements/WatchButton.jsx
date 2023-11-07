import React from 'react'
import { ExternalLink } from '../../../reusable/ExternalLink'

const WatchButton = () => {
  return (
    <ExternalLink
    href="https://www.themoviedb.org/"
    aria-label="Watch movie now"
    className="ancla-btn"
  >
    Watch now
  </ExternalLink>
  )
}

export default WatchButton