import { useEffect } from "react";
import { addTopRatedMovies } from "../store/movieSlice";
import { API_OPTIONS } from "../utils/constants";
import {useDispatch} from 'react-redux';
const useTopRatedMovies=()=>{
    const dispatch=useDispatch();
  useEffect(() => {
    getNowPlayingMovieData();
  }, [])
  
  const getNowPlayingMovieData=async()=>{
    const data=await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1',API_OPTIONS);
    const json=await data.json();
    dispatch(addTopRatedMovies(json.results))
  }
}

export default useTopRatedMovies;