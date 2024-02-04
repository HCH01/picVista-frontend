import React from 'react'
import categoryPics from '../assets/images'
import { Link } from 'react-router-dom'

export default function CategoryOpts() {
  return (
    <>{
        categoryPics.map((picObj) =>
          <Link to={`/category/${picObj.name}`} id={picObj.name} className=' h-40 w-c-40 relative overflow-hidden rounded-xl font-style-lobster cursor-pointer drop-shadow-xl m-1 box-border'>
            <div className=' category-container h-full w-full hover:scale-110 '>
              <img className='object-cover h-full w-full' src={picObj.src} alt="" />
              <span className='absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 drop-shadow-[0_1.2px_1.2px_rgba(0,0,0,0.8)]'>{picObj.name}</span>
            </div>
          </Link>
        )
      }
 </> )
}
