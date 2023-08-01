import React from "react";
import { Link} from 'react-router-dom'


import { useContext, useState } from "react";
import { dataContext } from "../../data/DataContextProvider";

function Careers({getIdFromCareers}) {
  const { careerData, setCareerData } = useContext(dataContext);
  //  console.log(careerData);

  // function handle(id){
  //   getIdFromCareers(id)
  // }
  return (

  <div className="careers">
    <h1>Careers</h1>
    {careerData.map(career=>(
      
  <Link  to={`careers/${career.id.toString()}`} key={career.id}>
          <p className="career-title">{career.title}</p>
          <p className="career-location">{career.location}</p>
      

      </Link>
    ))}

 
  </div>    
  )
  
;
}

export default Careers;
