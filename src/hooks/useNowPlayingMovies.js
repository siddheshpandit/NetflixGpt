import { useEffect } from "react";
import { addNowPlayingMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import {useDispatch} from 'react-redux';
const useNowPlayingMovies=()=>{
  const dispatch=useDispatch();
  useEffect(() => {
    getNowPlayingMovieData();
  }, [])
  
  const getNowPlayingMovieData=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    dispatch(addNowPlayingMovies(json.results))
  }
}

export default useNowPlayingMovies;