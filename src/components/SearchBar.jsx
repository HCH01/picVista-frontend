import React , {useState} from 'react'
import { Navigate } from 'react-router-dom';
import Service from '../services/api/Service';



export default function SearchBar() {
    let [auth ,setAuth] = useState(true);

    let baseUrl = 'http://localhost:8080/api/file';
    let seachValue ;
    let service = new Service();

    async function getImage() {
        
    }
  return (
    <div className='h-10 w-full flex justify-center mt-2'>
        <input className='w-2/4 h-full border-2 p-2' type='text' onChange={(e)=>seachValue=e.target.value} placeholder='Search...'></input>
        <button onClick={getImage} type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800">Search</button>
      </div>
  )
}
