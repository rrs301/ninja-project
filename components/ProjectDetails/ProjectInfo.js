import React, { useContext, useEffect } from 'react'
import { SelectedProjectContext } from '../Profile/ProjectList'
import Image from 'next/image';
import UserInfo from '../Profile/UserInfo';
import UserDetail from './UserDetail';

function ProjectInfo() {
    const {project,setProject}=useContext(SelectedProjectContext)
  
    return (
    <div>
        <h2 className='font-medium text-[18px] mb-3'>{project.title}</h2>
        <Image src={project.image} alt={project.title}
        width={500} height={200} className='rounded-lg cursor-pointer'
        onClick={()=>window.open(project.image)}/>
        <h2 className='font-bold'>Description</h2>
        <p className='text-[14px] font-light text-gray-500 leading-6 line-clamp-5'>
            {project.desc}</p>
        <UserDetail/>
    </div>
  )
}

export default ProjectInfo