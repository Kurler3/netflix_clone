import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, {memo} from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
    title:string
    movies: Movie[]
}

const Row = ({title, movies}: Props) => {
  return (
    movies.length > 0  ? 
        <div className='h-fit space-y-1 md:space-y-5 my-10'>
            {/* TITLE */}
            <h2 
                className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl lg:text-4xl'
            >{title}</h2>
            
            <div className="group relative md:-ml-2">
                {/* LEFT ARROW */}
                <ChevronLeftIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/>

                <div className='flex items-center space-x-0.5 overflow-y-visible w-screen'>
                    {movies.map((movie, index) => {
                        return <Thumbnail key={`thumbnail_${title}_${movie.id}_${index}`} movie={movie}/>
                    })}
                </div>

                {/* RIGHT ARROW */}
                <ChevronRightIcon className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100'/>
            </div>
        </div> 
        : null
  );
}

export default memo(Row);