import Image from "next/image";
import React from "react";
import {
  HiOutlinePencilSquare,
  HiOutlineArrowLeftOnRectangle,
} from "react-icons/hi2";
import { useSession, signIn, signOut } from "next-auth/react"
import { useRouter } from "next/router";
function Header() {
  const USER_IMAGE =
    "https://res.cloudinary.com/dknvsbuyy/image/upload/v1686314044/1617826370281_30f9a2a96a.jpg";
    const { data: session } = useSession()
    const router=useRouter();
  return (
    <div
      className="flex justify-between
    border-b-[2px] border-blue-500 p-4"
    >
      <Image src="/Images/logo.png" width={140} height={140}
      alt="logo"
       className="w-[140px] cursor-pointer" onClick={()=>router.push('/')} />
      <div className="flex gap-5">
     {session?   <button
          className="px-3 p-2
         bg-blue-500 text-white 
          rounded-full flex  gap-2 
          items-center "
          onClick={()=>router.push('/create-project')}
        >
          <HiOutlinePencilSquare className="" />
          <span className="hidden sm:block text-[12px]">
            ADD PROJECT</span>
          {" "}
        </button>:null}

        <button
          className="px-3 p-2
         bg-gray-200 text-gray-700
          rounded-full flex items-center gap-2"
          
        >
          <HiOutlineArrowLeftOnRectangle className="" />

         {!session?
         
          <span onClick={() => signIn()} className="hidden sm:block text-[12px]">
            SIGN IN </span>:
              <span onClick={() => signOut()} className="hidden sm:block text-[12px]">
              SIGN OUT </span>}
        </button>

     {session?   <Image
          src={session.user.image}
          width={40}
          height={40}
          alt="user_image"
          className="rounded-full cursor-pointer"
          onClick={()=>router.push('/profile')}
        />:null}
      </div>
    </div>
  );
}

export default Header;
