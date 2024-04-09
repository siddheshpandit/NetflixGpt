import React from 'react'
import { IoPlaySharp } from "react-icons/io5";
import { BsInfoCircle } from "react-icons/bs";
const VideoTitle = ({title,overview}) => {
  return (
    <div className='pl-20 pt-[20%] absolute text-white w-screen aspect-video bg-gradient-to-r from-black'>
        <h2 className='text-2xl font-bold'>{title}</h2>
        <p className='w-1/4 my-3'>{overview}</p>
        <div className='flex'>
            <button className='bg-white text-black py-1 px-6 rounded-md text-md flex items-center hover:bg-opacity-80'><IoPlaySharp className='mr-1'/> Play</button>
            <button className='bg-gray-400 py-2 px-4 mx-2 rounded-md text-lg flex items-center'>More Info <BsInfoCircle className='ml-1 pt-1'/></button>
        </div>
    </div>
  )
}

export default VideoTitle