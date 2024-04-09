import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux';
const MoviesContainer = () => {
  const movieData=useSelector((store)=>store?.movies?.moviesData)
  return (
    movieData && (<div className=' bg-black'>
      {/* Trending Movies*/}
      {/* Recent Movies */}
      <div className='-mt-72 relative z-10 pl-12'>
      <MovieList title={'Now Playing'} movieData={movieData.nowPlayingMovies}/>
      <MovieList title={'Popular'} movieData={movieData.popularMovies}/>
      <MovieList title={'Top Rated'} movieData={movieData.topRatedMovies}/>
      </div>
      
    </div>)
  )
}

export default MoviesContainer