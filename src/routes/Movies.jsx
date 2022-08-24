/* eslint-disable react/jsx-no-target-blank */
/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import { useSearchParams } from 'react-router-dom'
import { useFetch } from '../components/hooks/useFetch'
import {Rating} from '@mui/material'
import '../styles/movies.css'
import { api_key } from '../api_key'
const Movies = () => {

   let [searchParams,setSearchParams] = useSearchParams() 

const {data,error,loading} = useFetch(`https://api.themoviedb.org/3/movie/550/similar?api_key=${api_key}&`)
   if(loading){
    return <h1 className='title'>Loading...</h1>
    }
    if(error !== ''){
      return <h1 className='title'>{error}</h1>
    }

const handleChange = e => {
  let filter = e.target.value; 
    if(filter){
      setSearchParams({filter})
    }
    else{
    setSearchParams({})
  }}

  return (
    <>
    {/* searcher of movies */}
    <form action="" className='form-movies'>
        <input type="text" placeholder='Search' value={searchParams.get('filter') || ""}
        onChange={handleChange}/> 
          <button type='search' className='btn-form'>Search</button>
            </form>
    <div className='row'>
    {data.filter((movie) => {
       let filter = searchParams.get('filter')
         if(!filter) return true 
      
            let title = movie.title.toLowerCase();
               return title.startsWith(filter.toLocaleLowerCase())
             
              }).map((movie,index) => (
    <div className='carrusel-movies' key={index}>
      <section className='section-img-movies'>
        <img src={`https://image.tmdb.org/t/p/original${movie.poster_path}`} className='card-img-top'/>
    
    <div className='description-movies'>
      <Rating name='size-small' defaultValue={2}  precision={0.5} readOnly value={movie.vote_average} size='small'/>
      <b>{movie.release_date}</b>
        </div>
        <a href="https://www.themoviedb.org/movie" target="_blank"><h1 className='title-movies'>{movie.title}</h1></a>
         </section>
          </div>
    ))}
          </div>
    </>
  )
}

export default Movies
