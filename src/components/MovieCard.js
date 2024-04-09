import React from 'react';
import { IMAGE_URL } from '../utils/constants';

const MovieCard = ({ posterPath }) => {
    if (!posterPath) return null;
    return (
        <div className='w-36 md:w-48 pr-4'>
            <img className="w-48" src={IMAGE_URL + posterPath} alt=''/>
        </div>
    );
}

export default MovieCard;
