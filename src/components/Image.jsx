import React from 'react'
import LikeBtn from './LikeBtn'

export default function Image(props) {
  return (
    <div className={`container h-64 w-auto rounded-md overflow-hidden m-3 shadow-xl relative img-container hover:scale-110 transition cursor-pointer`}>
          <img className={`h-full object-cover `} src={props.src} />
          <LikeBtn liked={false} likes={12} />
          <span className='absolute bottom-1 left-2 text-sm text-white animate-left font-style-lobster'>Team</span>
          <span className='absolute bottom-1 right-2 text-sm text-white animate-right download-icon hover:text-yellow-400 hover:border-yellow-400' title='download'>&#8595;</span>
    </div>
  )
}
