import React from 'react'
import { Link, Outlet } from 'react-router-dom'

export default function NavBar() {
  return (
    <>
      <nav className='block '>
        <ul className='flex h-10 justify-center w-full font-medium '>
          <li className='mx-5 content-center flex justify-center '>
            <Link className='my-auto hover:text-blue-800 hover:drop-shadow-[0px_0px_10px_var(--tw-shadow-color)] shadow-blue-400 hover:scale-110 transition' to='/'>Home</Link>
          </li>
          <li className='mx-5 content-center flex justify-center '>
            <Link className='my-auto hover:text-blue-800 hover:drop-shadow-[0px_0px_10px_var(--tw-shadow-color)] shadow-blue-400 hover:scale-110 transition' to='category'>Categorize</Link>
          </li>
          <li className='mx-5 content-center flex justify-center '>
            <Link className='my-auto hover:text-blue-800 hover:drop-shadow-[0px_0px_10px_var(--tw-shadow-color)] shadow-blue-400 hover:scale-110 transition' to='/'>Posts</Link>
          </li>
        </ul>
      </nav>
      <Outlet />
    </>
  )
}
