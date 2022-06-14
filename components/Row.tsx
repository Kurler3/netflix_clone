import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/outline'
import React, {memo, useCallback, useRef, useState} from 'react'
import { Movie } from '../typings'
import Thumbnail from './Thumbnail'

interface Props {
    title:string
    movies: Movie[]

    // WHEN USING FIREBASE
    // movies: Movie[] | DocumentData[]
}

const Row = ({title, movies}: Props) => {

    const rowRef = useRef<HTMLDivElement>(null);

    const [isMoved, setIsMoved] = useState(false);

    const handleScrollClick = useCallback((isMoveRight:boolean) => {

        if(rowRef.current) {
            let {scrollLeft, clientWidth} = rowRef.current;

            let scrollTo = !isMoveRight ? scrollLeft - clientWidth : scrollLeft + clientWidth;
            
            rowRef.current.scrollTo({left: scrollTo, behavior: "smooth"});

            setIsMoved(() => {
                return scrollTo !== 0 ? true : false;
            });
        }

    }, []);

    return (
        movies.length > 0  ? 
            <div className='h-fit space-y-1 md:space-y-5 my-10'>
                {/* TITLE */}
                <h2 
                    className='w-56 cursor-pointer text-sm font-semibold text-[#e5e5e5] transition duration-200 hover:text-white md:text-2xl lg:text-4xl'
                >{title}</h2>
                
                <div className="group relative">
                    {/* LEFT ARROW */}
                    {
                        isMoved && 
                        <ChevronLeftIcon className='absolute top-0 bottom-0 left-2 z-40 m-auto h-28 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100 hover:bg-opacity-70 hover:bg-black '  onClick={() => handleScrollClick(false)}/>
                    }
                    

                    <div ref={rowRef} className='overflow-x-auto overflow-y-hidden flex items-center space-x-0.5 w-screen scrollbar-hide h-38'>
                        {movies.map((movie, index) => {
                            return <Thumbnail key={`thumbnail_${title}_${movie.id}_${index}`} movie={movie}/>
                        })}
                    </div>

                    {/* RIGHT ARROW */}
                    <ChevronRightIcon className='absolute top-0 bottom-0 right-2 z-40 m-auto h-9 w-9 cursor-pointer opacity-0 transition hover:scale-125 group-hover:opacity-100' onClick={() => handleScrollClick(true)}/>
                </div>
            </div> 
            : null
    );
}

export default memo(Row);