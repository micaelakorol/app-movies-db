import React from 'react'
import { search } from '../../../components/variables'

const SearchButton = () => {
  return (
    <button type="search" role="search" className="btn-form">
    <img src={search} alt="search-movie"  class="bi bi-search"/>
   </button>
  )
}

export default SearchButton