import React from 'react'

function Loader() {
  return (
    <div className='w-full p-32 mt-[30%]
    backdrop-blur-sm h-[400px] z-10'>
       <img src='./Images/loader.png' 
       className='w-[80px] animate-spin' />
    </div>
  )
}

export default Loader