import React from 'react'
import MovieCard from './MovieCard'

const MovieList = ({title,movieData}) => {
  return (
    <div className="px-6 bg-black text-white">
    <h1 className="text-lg md:text-3xl py-4">{title}</h1>
    <div className="flex overflow-x-scroll">
      <div className="flex">
        {movieData?.map((movie) => (
          <MovieCard key={movie.id} posterPath={movie.poster_path} />
        ))}
      </div>
    </div>
  </div>
  )
}

export default MovieList