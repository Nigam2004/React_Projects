import React from 'react'

function Navabar() {
  return (
    <div className='main flex justify-between items-center py-2 px-1 bg-[#40407a]'>
     <div className="left flex justify-center items-center space-x-2 ">
        <img src="https://movie-app-88kamal.vercel.app/clipart3105859.png" className='w-10'/>
        <h1 className='font-bold text-center text-white text-3xl'>Movie Msala</h1>
     </div>
     <div className="right">
        <ul className='flex justify-center space-x-2 text-white'>
            <li>About</li>
            <li>Home</li>
            <li>Contact</li>
            <li>Service</li>
        </ul>
     </div>
    </div>
  )
}

export default Navabar
