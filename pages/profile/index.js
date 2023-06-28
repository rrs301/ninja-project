import React, { useEffect, useState } from 'react'
import UserInfo from '../../components/Profile/UserInfo'
import ProjectList from '../../components/Profile/ProjectList'
import { useSession } from 'next-auth/react'
import { collection, getDocs, getFirestore, orderBy, query, where } from 'firebase/firestore';
import app from '../../Shared/firebaseConfig';

function Profile() {
   
    const {data:session}=useSession();
    const db=getFirestore(app);
    const [userProject,setUserProject]=useState([]);
    
    useEffect(()=>{
        if(session)
        {
            setUserProject([]); 
            getUserProject();
        }
    },[session])

    const getUserProject=async()=>{
        
        if(session)
        {
           
            const q=query(collection(db,'Projects'),
            where('email','==',session.user.email),orderBy('id','desc'));
            const querySnapshot =await getDocs(q);
            querySnapshot.forEach((doc) => {
                let data=doc.data()
                setUserProject(userProject=>
                    [...userProject,data]);
                
              });
        }
    }

  return (
    <div className='px-3 md:px-10'>
   
       
     
        <UserInfo/>
        
        <ProjectList userProject={userProject}/> 

       
    </div>
  )
}



export default Profile