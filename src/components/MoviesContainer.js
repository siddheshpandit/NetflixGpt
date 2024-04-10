import React from 'react'
import MovieList from './MovieList'
import {useSelector} from 'react-redux';
const MoviesContainer = () => {
  const movieData=useSelector((store)=>store?.movies?.moviesData)
  return (
    movieData && (<div className='bg-black w-screen'>
      {/* Trending Movies*/}
      {/* Recent Movies */}
      <div className=' z-20 relative pl-12'>
      <MovieList title={'Now Playing'} movieData={movieData.nowPlayingMovies}/>
      <MovieList title={'Popular'} movieData={movieData.popularMovies}/>
      <MovieList title={'Top Rated'} movieData={movieData.topRatedMovies}/>
      </div>
    </div>)
  )
}

export default MoviesContainer