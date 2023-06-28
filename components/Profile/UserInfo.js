import { useSession } from 'next-auth/react'
import Image from 'next/image';
import React from 'react'

function UserInfo() {
    const {data:session}=useSession();
  return (
    <div className='mt-12'>
        {session?    
        <div className='flex flex-col
        items-center  border-b-[2px] pb-5'>
        <Image src={session.user?.image}
        width={75} height={75}
        alt="user_image" 
        className='rounded-full'/>

        <h2 className='text-[30px] font-bold
        text-blue-500'>{session.user.name}</h2>
        <h2 className='text-gray-400'>{session.user.email}</h2>
        
        </div>:null}
    </div>
  )
}

export default UserInfo