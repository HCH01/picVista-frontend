import React, { useState } from 'react'

export default function LikeBtn(props) {
  const [liked,setLikes] = useState(props.liked);
  let likes = liked ? props.likes + 1 : props.likes;

  const clickLike = () => {
    if(liked){
      setLikes(0);
    }else{
      setLikes(1);
    }
  }
  return (
    <div onClick={clickLike} className={`${ liked ? 'text-red-600' : 'text-white'} select-none`}> 
        <span className='absolute top-0 h-7 animate-left font-bold text-3xl hover:text-red-600 flex flex-col'>&hearts;
          <span className='text-xs m-auto font-thin relative bottom-2'>{likes}</span></span>
    </div>
  )
}
