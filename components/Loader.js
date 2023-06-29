import Image from 'next/image'
import React from 'react'

function Loader() {
  return (
    <div className='w-full p-32 mt-[30%]
    backdrop-blur-sm h-[400px] z-10'>
       <Image src='/Images/loader.png' width={80} height={80} 
       className='w-[80px] animate-spin' />
    </div>
  )
}

export default Loader