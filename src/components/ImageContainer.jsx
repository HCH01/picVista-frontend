import React from 'react'
import Image from './Image';
import { useState } from 'react';
import Service from '../services/api/Service';
import { Navigate, useParams } from 'react-router-dom';
import SearchBar from './SearchBar';

export default function ImageContainer() {
  let {category} = useParams();

    let imageList = [<Image src='https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' type='p'/>,<Image src='https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' type='l'/>,
    <Image src='https://images.unsplash.com/photo-1682686579688-c2ba945eda0e?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' type='l'/>,
    <Image src='https://images.unsplash.com/photo-1703750960118-1c49d4a9fa78?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwzfHx8ZW58MHx8fHx8' type='l'/>,
    <Image src='https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' type='p'/>,<Image src='https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' type='p'/>,<Image src='https://images.unsplash.com/photo-1682686580433-2af05ee670ad?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D' type='p'/>]
    const [images, setimages] = useState(imageList);
   

    

  return (
    <>
    {category ? category : <SearchBar/>}
    <div className="flex justify-center w-full flex-wrap px-10 py-5">
        {images.map((img) => img)}
      </div>
    </>
  )
}
