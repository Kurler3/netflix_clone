import React, {memo} from 'react';
import {BellIcon, SearchIcon} from '@heroicons/react/solid';
import Link from 'next/link';


const Header = () => {
  return (
    <header> 
        {/* LEFT SIDE */}
        <div className='flex items-center space-x-2 md:space-x-10'>
            <img 
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
            />
            
            {/* LINKS */}
            <ul className='hidden md:flex space-x-4'>
                <li className='headerLink'>Home</li>
                <li className='headerLink'>TV Shows</li>
                <li className='headerLink'>Movies</li>
                <li className='headerLink'>New & Popular</li>
                <li className='headerLink'>My List</li>
            </ul>
        </div>

        {/* RIGHT SIDE */}
        <div className='flex items-center space-x-4 text-sm font-light'>
          {/* SEARCH ICON */}
          <SearchIcon className="hidden sm:inline h-6 w-6 "/>
          {/* KIDS */}
          <p className='hidden lg:inline'>Kids</p>
          {/* NOTIFICATIONS ICON */}
          <BellIcon className='h-6 w-6'/>
          {/* LINK TO ACCOUNT */}
          <Link href='/account'>
            <img 
              src="https://rb.gy/g1pwyx"
              alt=""
              className="cursor-pointer rounded"
            />
          </Link>
        </div>

    </header>
  )
}

export default memo(Header);