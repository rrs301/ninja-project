import React, { useContext } from 'react'
import { SelectedProjectContext } from '../Profile/ProjectList'
import Image from 'next/image'

function TechList() {
  const {project,setProject}=
  useContext(SelectedProjectContext)
  return (
    <div className='mt-10 p-5'>
      <h2 className='font-bold'>Technology</h2>
    <div className='grid grid-cols-3 text-center gap-2 mt-2'>
        {project?.techList.map((tech,index)=>(
          <h2 key={index} className='border-[1px] border-sky-300
           px- rounded-full text-[14px]'>{tech}</h2>
        ))}
      </div>
      <div className='w-[500px]'>
      <h2 className='font-bold mt-6'>Source/Links</h2>
         {project['app-demo-url']? 
         <h2 className='font-light mt-4 cursor-pointer flex items-center gap-2'>
           <Image src='/Images/play.png' 
           width={20} height={20} alt='icon'
            
            onClick={()=>window.open(project['app-demo-url'])} 
            className='w-[20px]'/> 
            {project['app-demo-url']}</h2>:null}
            {project['yt-url']? 
            <h2 className='font-light mt-4 cursor-pointer 
            flex items-center gap-2' onClick={()=>window.open(project['yt-url'])}>
           <Image src='/Images/youtube.png' 
           width={20} height={20} alt='icon'
            className='w-[20px]'/>  {project['yt-url']}</h2>:null}
            {project['ui-ux-design-url']?  <h2 className='font-light max-w-[75ch]
            flex items-center gap-2 mt-4 cursor-pointer' onClick={()=>window.open(project['ui-ux-design-url'])}>
            <Image src='/Images/figma.png'width={20} height={20} alt='icon'
             className='w-[20px]'/> {project['ui-ux-design-url']}</h2>:null}
            {project['github-url']?<h2 className='font-light
            flex items-center gap-2 mt-4 cursor-pointer' onClick={()=>window.open(project['github-url'])}>
           <Image src='/Images/github.png' width={20} height={20} alt='icon'
            className='w-[20px]'/> 
            {project['github-url']}</h2>:null}
            {project['instagram']?<h2 className='font-light
            flex items-center gap-2 mt-4 cursor-pointer' onClick={()=>window.open(project['instagram'])}>
           <Image src='/Images/instagram.png' 
           width={20} height={20} alt='icon'
            className='w-[20px]'/> 
            {project['instagram']}</h2>:null}

            </div>
    </div>
  )
}

export default TechList