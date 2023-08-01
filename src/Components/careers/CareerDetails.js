import React from 'react'
import  { useContext} from 'react'
import{useParams} from 'react-router-dom'
import {useNavigate} from 'react-router-dom'
import { dataContext } from '../../data/DataContextProvider';
function CareerDetails({careerIdState}) {
    const { careerData, setCareerData } = useContext(dataContext)
    const navigate = useNavigate()
 const {id} = useParams()
  console.log(parseInt(id));
    const career = careerData.find(job=> job.id === parseInt(id))
    console.log(careerData);
    if (!career){
     return <h1>Loading...</h1>
    }
  return (
    <div className="career-details">
    <h2>
      Career Details for <span>{career.title}</span> </h2>
    <p>Starting Salary: {career.salary}</p>
    <p>Location: {career.location}</p>
    <div className="details">
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae
        architecto ratione esse, unde blanditiis sapiente aliquam, totam sint
        magni quaerat rerum error amet dolor! Ipsa error quam modi est
        aperiam.
      </p>
      <button onClick={() => navigate(-1)}>Careers</button>
    </div>
  </div>
  )
}

export default CareerDetails