import React from 'react'

function SearchBar({searchMovie, setSearchMovie,fetchMovieData}) {
  return (
    <div className='flex justify-center py-3'>
     <input type="text" placeholder='Search Here' 
     value={searchMovie}
     onChange={(e)=> setSearchMovie(e.target.value)}
     className='h-13 outline-none border-gray-500 border-2 rounded-l-lg px-5 shadow-sm'
     />
     <button
       onClick={fetchMovieData}
      className='bg-[#40407a] rounded-r-lg p-2 text-white shadow-md'>Search</button>
    </div>
  )
}

export default SearchBar
