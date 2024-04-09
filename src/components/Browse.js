import React from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js'
import MoviesContainer from './MoviesContainer.js'
import usePopularMovies from '../hooks/usePopularMovies.js'
import useTopRatedMovies from '../hooks/useTopRatedMovies.js'
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  return (
    <div>
      <Header/>
    {/* Movie Lists */}
    <MainContainer/>
    <MoviesContainer/>
    {/* {currentMoviesData.map((movie)=>(
     <div key={movie.id}>
      <h1>{movie.original_title}</h1>
     </div> 
    ))} */}
    </div>
  )
}

export default Browse