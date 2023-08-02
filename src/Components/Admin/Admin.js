import React, {useState, useEffect} from 'react'
import View from './View'
import NewJob from './NewJob'


function Admin() {

    const[jobs, setJobs] = useState([])

useEffect(()=>{
fetch("https://skill-hunter-server.onrender.com/careers")
.then(r=>r.json())
.then(data=>setJobs(data))


}, [])
  return (
    <div className='grid grid-cols-2 justify-center'> 


    <div > <View jobs={jobs} /></div>        
    <div><NewJob /></div>
 </div>
  )
}

export default Admin
