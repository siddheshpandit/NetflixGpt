import { API_OPTIONS } from '../utils/constants'
import {useDispatch} from 'react-redux';
import { addTrailerVideo } from '../store/movieSlice';
import { useEffect } from 'react';

const useMovieTrailer=(movieId)=>{
    const dispatch=useDispatch();
    useEffect(() => {
      getMovieTrailer()
    }, [])
    const getMovieTrailer=async()=>{
        const result=await fetch(`https://api.themoviedb.org/3/movie/${movieId}/videos`,API_OPTIONS)
        const json= await result.json();
        const filteredTrailer=json.results.filter((video)=>video.type==="Trailer" && video.name==="Official Trailer")
        const trailer = filteredTrailer.length? filteredTrailer[0]: json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
}

export default useMovieTrailer;