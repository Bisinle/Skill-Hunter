import React, { useContext } from 'react'
import { dataContext } from '../data/DataContextProvider'

function Job() {
  const { careerData } = useContext(dataContext)
  
  const displayCareerData = () => {
    return careerData.map((career) => {
      return (
        <div className="border p-6 max-w-2xl rounded-lg space-y-5 m-2">
          <div>
              <h4 className="hover:underline font-bold text-xl">{career.title}</h4>
              <p className="text-lg">{career.company}</p>
              <p className="text-lg">{career.location}</p>
          </div>

          <div>
              <span className="bg-gray-300 mr-3 p-2 rounded-md">$1900</span>
              <span className="bg-gray-300 mr-3 p-2 rounded-md">Full-Time</span>
          </div>

          <div>
              <p className="font-light mt-8">Acts Conscientiously: Demonstrates concern for quality, product integrity, and safety of one’s own and others’ work and impact to the stores.</p>
          </div>
      </div>
      )
    })
  }

  return (
    <div className="flex flex-col items-center">
      {displayCareerData()}
    </div>
  )
}

export default Job
