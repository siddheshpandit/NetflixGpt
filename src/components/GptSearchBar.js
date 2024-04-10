import React from 'react'
import lang from '../utils/langContants';
import {useSelector} from 'react-redux';
const GptSearchBar = () => {
    const searchMovies=(e)=>{
        e.preventDefault();
    }
    const userLanguage= useSelector((state)=>state?.config?.lang)
    console.log(lang[userLanguage])
  return (
    <div className='pt-[10%] flex justify-center'>
        <form className='bg-black w-1/2 grid grid-cols-12'>
        <input type="text" placeholder={lang[userLanguage].placeholder} className='p-4 m-4 rounded-md col-span-10'/>
        <button onClick={searchMovies} className='py-2 px-4 m-4 bg-red-700 text-white rounded-md col-span-2'>{lang[userLanguage].search}</button>
        </form>
        
    </div>
  )
}

export default GptSearchBar