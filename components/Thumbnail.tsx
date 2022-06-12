import Image from 'next/image';
import React from 'react'
import { Movie } from '../typings';
import { baseUrl } from '../utils/constants/movie';

interface Props {
    movie: Movie
}

const Thumbnail = ({movie} : Props) => {
  return (
    <div className='relative h-32 min-w-[180px] cursor-pointer transition duration-200 ease-out md:h-36 md:min-w-[260px] md:hover:scale-110 mx-3 md:hover:z-20'>
        <Image 
            src={`https://image.tmdb.org/t/p/w500${movie?.backdrop_path || movie?.poster_path}`}
            layout="fill"
            className='rounded-sm object-cover md:rounded'
        />
    </div>
  )
}

export default Thumbnail;