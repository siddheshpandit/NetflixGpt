import {createSlice} from '@reduxjs/toolkit';
const movieSlice=createSlice({
    name:'movie',
    initialState:{
        moviesData:{
            nowPlayingMovies:null,
            popularMovies:null,
            topRatedMovies:null
        },
        trailerVideo:null
    },
    reducers:{
        addNowPlayingMovies:(state,action)=>{
            state.moviesData.nowPlayingMovies=action.payload;
        },
        addPopularMovies:(state,action)=>{
            state.moviesData.popularMovies= action.payload;
        },
        addTopRatedMovies:(state,action)=>{
            state.moviesData.topRatedMovies= action.payload;
        },
        addTrailerVideo:(state,action)=>{
            state.trailerVideo=action.payload;
        }
    }
})

export const {addNowPlayingMovies,addPopularMovies,addTopRatedMovies,addTrailerVideo}=movieSlice.actions
export default movieSlice.reducer;