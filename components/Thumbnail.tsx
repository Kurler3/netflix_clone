import Image from 'next/image';
import React, {memo} from 'react'
import { Movie } from '../typings';
import { baseUrl } from '../utils/constants/movie';

interface Props {
    // WHEN USING FIREBASE
    // movie: Movie | DocumentData
    movie: Movie;
}

const Thumbnail = ({movie} : Props) => {
  return (
    <div className='relative h-32 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110 mx-1 md:hover:z-20'>
        <Image 
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`}
            layout="fill"
            className='rounded-sm object-cover md:rounded'
        />
    </div>
  )
}

export default memo(Thumbnail);