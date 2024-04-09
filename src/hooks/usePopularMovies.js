import { useEffect } from "react";
import { addPopularMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import {useDispatch} from 'react-redux';
const usePopularMovies=()=>{
    const dispatch=useDispatch();
  useEffect(() => {
    getNowPlayingMovieData();
  }, [])
  
  const getNowPlayingMovieData=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/popular?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    dispatch(addPopularMovies(json.results))
  }
}

export default usePopularMovies;