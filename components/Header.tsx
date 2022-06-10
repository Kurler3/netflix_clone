import React, {memo} from 'react';


const Header = () => {
  return (
    <header> 
        {/* LEFT SIDE */}
        <div>
            <img 
                src="https://rb.gy/ulxxee"
                width={100}
                height={100}
                className="cursor-pointer object-contain"
            />
            
            {/* LINKS */}
            <ul>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
                <li></li>
            </ul>
        </div>

        {/* RIGHT SIDE */}
        <div>

        </div>
    </header>
  )
}

export default memo(Header);