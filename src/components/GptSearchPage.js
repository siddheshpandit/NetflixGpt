import React from 'react'
import GptSearchBar from './GptSearchBar'
import GptMovieSuggestions from './GptMovieSuggestions'
import { BACKGROUND_URL } from '../utils/constants'

const GPTSearch = () => {
  return (
    <div>
      <div className="bg-gradient-to-b from-black absolute -z-10">
        <img
          src={BACKGROUND_URL}
          alt=""
        />
      </div>
      <GptSearchBar/>
      <GptMovieSuggestions/>
    </div>
  )
}

export default GPTSearch