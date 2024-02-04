import React from 'react'
import { Outlet } from 'react-router-dom'

export default function Category() {
  return (
    <>
      <div className="flex justify-center w-full flex-wrap px-10 py-5">
        <Outlet/>
      </div>
    </>
  )
}
