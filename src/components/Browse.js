import React, { useState } from 'react'
import Header from './Header'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies.js'
import MainContainer from './MainContainer.js'
import MoviesContainer from './MoviesContainer.js'
import usePopularMovies from '../hooks/usePopularMovies.js'
import useTopRatedMovies from '../hooks/useTopRatedMovies.js'
import GPTSearch from './GptSearchPage.js'
import {useSelector} from 'react-redux'
const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTopRatedMovies();
  const [toggleSearch,setToggleSearch]=useState(false); // using state
  const gptSearch= useSelector((state)=>state?.gpt.showGptSearch) // From redux store
console.log(gptSearch);
  const toggleGPTSearch=()=>{
    setToggleSearch(!toggleSearch);
  }
  return (
    <div>
      <Header toggleGPTSearch={toggleGPTSearch}/>
      {toggleSearch ? <GPTSearch/>:(
        <>
        <MainContainer/>
    <MoviesContainer/>
    </>
      )}
    
    </div>
  )
}

export default Browse